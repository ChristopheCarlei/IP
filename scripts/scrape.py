#!/usr/bin/env python3
"""
Scraper pour le site innovations-pedagogiques.unige.ch
Produit des fichiers Markdown avec frontmatter YAML pour chaque projet.
"""

import requests
from bs4 import BeautifulSoup
import yaml
import re
import time
import os
from pathlib import Path
from urllib.parse import urljoin

BASE_URL = "https://www.unige.ch"
CATALOGUE_URL = f"{BASE_URL}/innovations-pedagogiques/catalogue"
OUTPUT_DIR = Path(__file__).parent.parent / "src" / "content" / "projects"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; UNIGE-Migration/1.0; contact: sea@unige.ch)"
}

# Slugs connus — on complétera avec ceux du catalogue
KNOWN_SLUGS = []


def get_all_project_slugs():
    """Récupère tous les slugs depuis la page catalogue (cherche tous les liens /project-list/)."""
    print("Récupération des slugs depuis le catalogue...")
    resp = requests.get(CATALOGUE_URL, headers=HEADERS, timeout=30)
    soup = BeautifulSoup(resp.text, "html.parser")

    slugs = set()
    for a in soup.find_all("a", href=True):
        href = a["href"]
        m = re.search(r"/innovations-pedagogiques/project-list/([^/?#]+)", href)
        if m:
            slugs.add(m.group(1))

    print(f"  {len(slugs)} slugs trouvés dans le catalogue")
    return sorted(slugs)


def parse_project_page(slug):
    """Scrape une page projet et retourne un dict avec tous les champs."""
    url = f"{BASE_URL}/innovations-pedagogiques/project-list/{slug}"
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        if resp.status_code == 404:
            print(f"  [404] {slug}")
            return None
        soup = BeautifulSoup(resp.text, "html.parser")
    except Exception as e:
        print(f"  [ERREUR] {slug}: {e}")
        return None

    data = {"slug": slug, "url": url}

    # Titre
    h1 = soup.find("h1")
    data["title"] = h1.get_text(strip=True) if h1 else slug

    # Cherche les sections par leurs titres ou attributs data-*
    # Les pages Concrete5 ont des structures variables — on extrait tout le texte structuré

    def find_section_text(label_patterns):
        """Cherche un bloc de texte après un label donné."""
        for pattern in label_patterns:
            for tag in soup.find_all(["h2", "h3", "h4", "strong", "th", "dt", "label"]):
                if re.search(pattern, tag.get_text(), re.IGNORECASE):
                    # Cherche le contenu suivant
                    nxt = tag.find_next_sibling()
                    if nxt:
                        return nxt.get_text(strip=True)
                    parent = tag.parent
                    if parent:
                        siblings = list(parent.children)
                        idx = siblings.index(tag) if tag in siblings else -1
                        if idx >= 0 and idx + 1 < len(siblings):
                            return str(siblings[idx + 1]).strip()
        return ""

    def get_meta_value(label):
        """Cherche dans les tables ou listes de métadonnées."""
        for td in soup.find_all("td"):
            if re.search(label, td.get_text(), re.IGNORECASE):
                nxt = td.find_next_sibling("td")
                if nxt:
                    return nxt.get_text(strip=True)
        for dt in soup.find_all("dt"):
            if re.search(label, dt.get_text(), re.IGNORECASE):
                dd = dt.find_next_sibling("dd")
                if dd:
                    return dd.get_text(strip=True)
        return ""

    # Extraction du contenu principal
    main = soup.find("main") or soup.find("div", class_=re.compile(r"content|main|article", re.I))

    # Tous les paragraphes du contenu principal
    if main:
        paragraphs = [p.get_text(strip=True) for p in main.find_all("p") if p.get_text(strip=True)]
        data["content_paragraphs"] = paragraphs

    # Métadonnées structurées — cherche dans toute la page
    # Auteurs
    for pattern in [r"responsable", r"auteur", r"enseignant", r"créateur"]:
        val = get_meta_value(pattern)
        if val:
            data["author"] = val
            break

    # Faculté
    for pattern in [r"facult", r"institution"]:
        val = get_meta_value(pattern)
        if val:
            data["faculty"] = val
            break

    # Cours
    val = get_meta_value(r"cours")
    if val:
        data["course"] = val

    # Niveau
    val = get_meta_value(r"niveau")
    if val:
        data["level"] = val

    # Nombre d'étudiants
    for pattern in [r"étudiant", r"student"]:
        val = get_meta_value(pattern)
        if val:
            data["students"] = val
            break

    # Année
    val = get_meta_value(r"ann[ée]e|year|mise en place")
    if val:
        data["year"] = val

    # Catégorie pédagogique / situation problématique
    for pattern in [r"catégorie|situation|axe"]:
        val = get_meta_value(pattern)
        if val:
            data["category"] = val
            break

    # Statut (actif/archivé)
    status_el = soup.find(string=re.compile(r"archivé|archived|actif|active", re.I))
    if status_el:
        data["status"] = status_el.strip()

    # Vidéo YouTube
    for iframe in soup.find_all("iframe", src=True):
        src = iframe["src"]
        if "youtube" in src or "youtu.be" in src:
            data["youtube"] = src
            break

    # Images
    images = []
    for img in soup.find_all("img", src=True):
        src = img["src"]
        if any(skip in src for skip in ["logo", "icon", "favicon", "unige_"]):
            continue
        full_src = urljoin(BASE_URL, src)
        images.append(full_src)
    if images:
        data["images"] = images

    # Observation acceptée
    obs = soup.find(string=re.compile(r"observation.*accept|ouvr.*porte", re.I))
    if obs:
        data["observation_accepted"] = True

    # Prix
    prix = soup.find(string=re.compile(r"prix.*pédago|award|laureate", re.I))
    if prix:
        data["award"] = prix.strip()

    # Texte complet pour fallback
    if main:
        data["raw_text"] = main.get_text(separator="\n", strip=True)

    return data


def to_markdown(project):
    """Convertit un dict projet en fichier Markdown avec frontmatter YAML."""
    slug = project.pop("slug")
    raw_text = project.pop("raw_text", "")
    paragraphs = project.pop("content_paragraphs", [])

    # Frontmatter
    fm = {}
    for key in ["title", "author", "faculty", "course", "level", "students",
                 "year", "category", "status", "youtube", "images",
                 "observation_accepted", "award", "url"]:
        if key in project:
            fm[key] = project[key]

    body = "\n\n".join(paragraphs) if paragraphs else raw_text

    frontmatter_str = yaml.dump(fm, allow_unicode=True, default_flow_style=False, sort_keys=False)
    return f"---\n{frontmatter_str}---\n\n{body}\n"


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    slugs = get_all_project_slugs()

    # Slugs supplémentaires connus
    extra = [
        "VLL", "apprentissage_par_corps", "mise-en-scene-etudiant-es",
        "InteractLab", "traducthon",
    ]
    for s in extra:
        if s not in slugs:
            slugs.append(s)

    print(f"\nScraping de {len(slugs)} projets...\n")
    success = 0
    errors = []

    for i, slug in enumerate(slugs, 1):
        print(f"[{i}/{len(slugs)}] {slug}", end=" ... ")
        project = parse_project_page(slug)
        if project:
            md = to_markdown(project)
            out_file = OUTPUT_DIR / f"{slug}.md"
            out_file.write_text(md, encoding="utf-8")
            print("OK")
            success += 1
        else:
            errors.append(slug)
            print("ERREUR")
        time.sleep(0.5)  # politesse

    print(f"\n✓ {success} projets scrapés")
    if errors:
        print(f"✗ Erreurs ({len(errors)}) : {', '.join(errors)}")


if __name__ == "__main__":
    main()
