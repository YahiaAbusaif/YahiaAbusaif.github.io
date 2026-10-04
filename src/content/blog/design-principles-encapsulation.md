---
title: 'Design Principles: Encapsulation'
date: '2022-10-14'
description: I love to talk about one important concept that is easy to apply but
  greatly improves code readability and makes the code easy to manipulate in future
  Encapsulation. The Encapsulation design Principal idea is simple:…
tags:
- Design-Principles
- English
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/10/design-principles-encapsulation.html
---

I love to talk about one important concept that is easy to apply but greatly improves code readability and makes the code easy to manipulate in future Encapsulation.

The Encapsulation design Principal idea is simple: don't mix dynamic code with static code.

Let's say an example to understand that: imagine you write a code for an online store that sells 3 types of t-shirts, in this example, something like system order flow will be something that will not change frequently while the number of products, their names, and other things that related to the products is highly likely to change by time, so when you tightly coupled them with other logic like the order flow that shouldn't change easily will make the code so hard to manipulation in future or even to understand.

Many fall into a common misunderstanding here (the fake scaling view): in our example, a developer will think "Oh it's just used in one place and it's only 2 or 3 lines" or "It's only duplicated once", take a look at the business model for a minute and you will realize that 3 can grow to hundreds or thousands in few years then imagine a function that handled all these cases and does other business logic and all these cases are repeated multi times in different places in a single class, it will be a nightmare to any developer to try to manipulate or debug these thousands of lines.

Some may hear about over-killing and think it's alright for now to ignore that and push this concept after the product growth, but unlike something like microservices, the Encapsulation design Principle doesn't add complexity to the code it just told the developer to export dynamic code outside the logic, and a long side with single-responsibility design Principle they told the developer to break the logic into small code blocks as much as possible.

Ignoring this concept will result in a code with a high chance of bugs in the future for two reasons:

- The next developer who wants to manipulate the code will not understand the difference between static code (that shouldn't be changed without deep thought and proper design discussion) and dynamic code that changes frequently (the solution is to move to DB if possible).
- Dynamic code usually exists in multi-places, in most cases that will result in changing in some places and forgetting the rest, and no one will notice that (except the person who wrote the original code), which results in many times inconstant behaviors.

This Principle is also related to other concepts like the (DRY) Principle "Don't repeat yourself" which mainly told the developer to avoid duplicate code.

One of the old great pieces of advice I heard when I was a student is: "When a developer writes a function that exceeds ~15 lines (this value is related to the language) he/she probably can divide it into 2 or more function" while this can be related more to the single-responsibility design Principal concept however understanding how to put the breakpoints in your code like "these 2 blocks of code can/should be separated" is something that also related to Encapsulation Design Principle.
