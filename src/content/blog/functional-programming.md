---
title: Functional Programming
date: '2022-12-03'
description: While OOP has dominated the programming scene for years, the term "Functional
  Programming" is back to life lately to solve some of OOP's problems, so let's talk
  about it. What is Functional Programming? The main concept…
tags:
- Design-Principles
- English
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/11/functional-programming.html
---

While OOP has dominated the programming scene for years, the term "Functional Programming" is back to life lately to solve some of OOP's problems, so let's talk about it.

## What is Functional Programming?

The main concept here is to isolate the state (data) and the logic (methods), in OOP the programmer defines the object (data) first and then defines its method, in Functional Programming the programmer defines the function and the data separately.

All functions inside the system will be stateless and deterministic (predictable or pure), which means its output will be constant for the same input, it will not depend on the state of the system and will not change it, it will just return a new one.

Let's have an example, in a normal system function like getCurrentUserAccessToken() will act differently based on the system state, if the user has already login it will just return a value, if not but the user login on that device before it will try to read a stored refresh token and change system state to get the new AT, if not it will change the state of the system to ask the user to login.

Maybe these things help understand and modify the code, but at the same time, it will make the system harder to test, prove it is correct (acts correctly at all states), and determine how the input affects the output. that will result in extra effort in both testing and modifying any function.

Functional Programming is so clear at this point. for function f with the output y1...ym must be the same as long as input x1....xn didn't change, no matter how many times someone run it or what was the system state at each run, something like that means that function can't fetch any global variable, can't assume there are variable with init state, can't change the system state, and can't use external non-deterministic function (like a random function) inside the function body as long as these functions affect output.

Functional Programming will not change the current state so for example if the programmer passes an object to it the function will not change anything in that object it will return a new object as output, also global state will never change.

Functional Programming makes it a lot easier to approve the correctness of a function, and the correctness of a function makes it easier to debug code and isolate the buggy parts from another.

After the Programmer proves function correctness, he can use it at any place without worrying about if it will do the same or not as it didn't depend on the system state, he will not worry about this function changing the system state to an unhand-led state. All it sees is its input. Considering this fact Functional Programming makes it a lot easier to use a teammate's code, the programmer will not worry about unexpected behavior due to things he wasn't aware of it.

Other things, if you are worried about performance, you will be sure this function's complexity will always be determined by only its input, not hidden factors you didn't see.
