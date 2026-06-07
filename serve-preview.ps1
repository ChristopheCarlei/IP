$port = 4321
$file = "$PSScriptRoot\preview.html"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving on http://localhost:$port/"
while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $ctx.Response.ContentType = "text/html; charset=utf-8"
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $ctx.Response.Close()
}
