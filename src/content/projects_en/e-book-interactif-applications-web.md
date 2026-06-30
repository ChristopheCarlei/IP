---
id: 140
title: "Interactive e-book & web applications"
description_short: This course focuses on the practical application of statistical methods in a medical context, using an interactive approach with an interactive website and a Shiny application integrating GPT-3 for R-code generation.
---

## Initial situation

Interactive e-books & web applications Modeling, data analysis and artificial intelligence are becoming more and more important in the future professional life of students. It is essential that they be trained in these methods. As a result of this awareness, supported by a specific request from student representatives (while responding to the strategy of the Unige), the course of modeling and data analysis has been introduced in the master of pharmaceutical sciences in 2022. It includes a part dedicated to the modeling of molecules and a part dedicated to data analysis.

The challenge for the teachers of this new course was to propose an attractive format for students lacking programming and data analysis skills and often unmotivated by the subject. Moreover, since the teachers did not have the time to teach students how to program data analysis software such as R, they had to find a suitable format for the course. The chosen approach is to analyze different data sets from a medical context in order to illustrate the use of various statistical methods. Students can use an application developed specifically for this course based on a deep learning model that generates R code from natural language instructions. The aim is to promote the understanding of statistical methods and their applications rather than the syntax of the programming language used.

## Project implementation

The course begins with a theoretical presentation that allows students to approach statistics by tackling the problems most frequently encountered in data analysis. The teaching team insists on the practical interest of statistical analysis in order to advance or validate scientific arguments. She also presents an open source data analysis software (R), the goal being not to train students in its use but to familiarize them with this tool.

The teaching team has created an interactive website that contains the material used during the course (dynamic online slides) as well as multiple-choice exercises and interactive pieces of code to complete in order to perform statistical analyses. Students can complete these exercises whenever they wish. Each answer, right or wrong, gives them access to a personalized explanation.

Since the goal of the course is to allow students to learn as much as possible by "doing" data analysis, the teachers have created an application based on the Shiny framework (hosted on shinyapp.io) that allows students to model real-world data independently. This application integrates GPT-3, which students use to produce R code. They can test as many analyses as they wish, see the code produced by GPT-3 and integrate it progressively. The students still install R on their machines to learn how to use it, but the focus is not on programming. The application also allows students to request the generation of graphs. When students have completed their analysis, they can download a report showing the code used.

The format of the exam, discussed in advance with the student representatives, is particularly appreciated by the students. Indeed, the evaluation takes place in class during the year and not during a final exam during the exam session. It is offered in an "open web/open book" format. Students have access to all the resources they deem necessary to complete the exercise. The teaching team provides them with a database and presents the context of the study. Students are asked to analyze the data alone or in groups and then individually answer comprehension questions. These questions, far from technical considerations, aim to verify that the students have understood the analyses they have made and that they would be able to formulate sound advice following these analyses, to validate or invalidate scientific arguments.

## Thoughts and advice

The course format is very popular with students. The teaching team notes several hundred requests on GPT 3 per course. More than half of the course takes place in the computer rooms. During these sessions, the students work and think together and only call the assistant when they are really stuck. The problematic situations that the teaching staff confronts them with are similar to the situations they will encounter in their professional lives. This represents an essential exercise in reflection and empowerment.

The teaching team underlines that the most time-consuming part of the course was to design and implement the MCQ exercises as well as to develop the different resources on which the course is based (interactive website, Shiny application integrating GPT-3, R package implementing various functions and including the different documented data sets). Finally, the fact that the answers are personalized in order to explain why they are correct or incorrect required a considerable amount of writing time during their creation. The advantage of such material is that beyond making students more autonomous, it is also reusable over time. It is also highly transferable and therefore easily used in other courses.

## Student feedback

> "[...] The slides are well constructed, and the information presented is well explained. The workouts are appropriate and the time provided to solve the exercises is adequate. The use of Piazza is very useful, it is a good tool to be able to ask questions that relate to the R Studio part of the course. The format of the exams (MCQs on a dataset given in advance for the first part and report due for the second part) is very good, and I thank you for that!"
> "Doing 1st an hour of theory and then going to Teachlab allows us to better understand what we are going to do in Teachlab the report to be done as an exam for the 2nd part is good because it allows us to explain well what we understood the exam on the 1st part is also well structured, the fact of giving the data in advance allows us to be able to prepare well, and the fact of doing "written" questions obliges us to understand what we were doing during the exercises (which is very good)"
> "Very well run. The piazza forum is available to ask questions and it is accessed from home so it allows you to ask questions of the assistants live and then by reflecting between sessions, new questions can be asked online."
> "The teachers are available, the piazza presence was cool. It added a nice interactive feel to the class. The profs are super nice and responsive, which was lovely."
> "For the first part on R, the platform for the exercises is very well done and helps with learning. The assistants are great too, they help us well and listen to us. For the second part on modeling, the exercises in the teach lab were interesting. The documents available to do the modeling exercises are very well explained."
> "It allows us to be more critical of the statistical studies done. It allows us to really apply the methods seen in class, which I think is very positive.”
> "The course is interesting, I find it relevant to show us how protein modeling is done, as it is a major aspect of pharmaceutical sciences and drug research. The fact that the slides are translated into French is always very appreciated. Prof. Gervasio is very pleasant with the students."

