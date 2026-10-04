---
title: Starting Your Career
date: '2024-07-05'
description: What Fresh Software Developers Should Know Early in Their Careers In
  this article, I share my perspective on what fresh software developers should understand
  in their early career. This viewpoint comes from my…
tags:
- English
- General
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2024/07/fresh-start-as-software-developer.html
---

What Fresh Software Developers Should Know Early in Their Careers

In this article, I share my perspective on what fresh software developers should understand in their early career. This viewpoint comes from my experience across several companies, and I acknowledge that not all companies have the same expectations.

Most companies outline the needed skill set in their job descriptions. So, if you receive an offer, there's no need to worry about being unqualified. Many aspects of being a good software developer, like teamwork, are difficult to evaluate in an interview. Companies also understand that you'll learn and grow over time.

Before diving into the key topics, it's important to emphasize that I mean these as practices, not just theoretical concepts. No one will ask you to define "teamwork" or a "design pattern" in your job, but they'll expect you to act based on that knowledge. The challenging part is applying these ideas when it counts, for instance, remembering to use the Factory pattern where it fits, rather than just knowing about it.

### Object-Oriented Programming (OOP)

Many systems today are built using Object-Oriented Programming, and there will be even more in the future. Being familiar with OOP concepts and applying them effectively is crucial for your growth.

A helpful exercise for understanding OOP better is to draft a low-level design for a system, add a simple high-level implementation, and then evaluate: Which features make this design flawed or require refactoring? Is there duplicate code? Is the code easy for others to understand and use? Would the current design allow for 100% test coverage?

### Design Patterns

For fresh developers, design patterns are perhaps the most important topic. Common patterns like Singleton or Factory are used in nearly every project, while others are less frequent. Instead of memorizing them or writing practice code just to apply them, revisit your existing projects and see how a pattern could improve things.

The way to approach design patterns is:

1. Identify what's wrong with the current state or could go wrong in the future.
2. Understand which design pattern can help.
3. Figure out how to apply it.
4. Assess if the problem is solved.

As you gain experience, you'll start to identify these patterns naturally. You shouldn't memorize them, nor should you try to reinvent them. The widely-used names and conventions are important so others can quickly understand your code.

### SOLID Principles

SOLID principles are commonly used in most large projects. Not adhering to them can lead to cumbersome code, which makes adding features, fixing bugs, or conducting tests much more challenging.

Learning to identify code changes that violate these principles is crucial early on. Otherwise, your code reviews (CR) may frequently get rejected, or, worse, pass unnoticed and cause problems down the line.

### Dealing with Legacy Code

Most of the time, you'll work on extending and maintaining existing code rather than building new systems from scratch. Fresh developers often can’t start a project alone because they lack experience in system architecture and design.

You’ll encounter legacy code with multiple issues while adding new features. One of the biggest mistakes is to think that fixing old code is straightforward. It's a complex process, so it’s crucial to pick your battles wisely—remember, rewriting is often the simplest answer.

### Teamwork

One common pitfall is focusing solely on solo skills, often a habit developed during college by working alone or letting others do the work.

As a software developer, you'll work in a team. Teamwork means:

- Writing code that anyone on the team can understand without asking for explanations.
- Avoiding unnecessary changes to others' code.
- Treating code reviews as collaborative discussions rather than simple approvals. Always ask if something isn't clear and propose alternatives where you think they're better. Reviewing other people's code helps you learn more than just reading your own work.

### System Patterns

System design patterns are not expected knowledge for fresh developers, but you will be exposed to them immediately. No one will ask you to choose the right architecture as a beginner. Instead, you're expected to follow the existing patterns, and with time, contribute new projects following those patterns.

A good way to learn is to read about the patterns in your project to understand their limitations, then explore alternatives. Common system patterns include MVC, MVP, MVVM, DDD, clean architecture, and layered architecture.

### Testing

Testing is a broad area, and no one expects fresh developers to master it (except in testing-focused roles). Basic knowledge of mocks, unit tests, and test coverage is enough.

Learning about testing also provides insight into other concepts like SOLID and design patterns. Sometimes, you'll understand the value of a particular approach only after trying to test different versions of the same code.

### Documentation

Imagine if every SDK or API you used had no documentation—most of us would opt to write our own instead. Documentation comes in many forms beyond just a README or a PDF, but these must exist to guide users and collaborators.

### Working Frameworks and Concepts (Agile, Scrum, Waterfall)

You'll encounter different delivery methods from day one—Agile, Scrum, Waterfall, etc. Although these sound complicated when you first read about them, they're simple to apply in practice. Understand the general concepts and focus on learning how your team applies them, as there are often different variations.

### Conclusion

These concepts are not universally applicable in every case, but I believe they are essential for developers working in companies that value high code quality. Mastering these practices will set you on the path to becoming an effective and adaptable software developer.
