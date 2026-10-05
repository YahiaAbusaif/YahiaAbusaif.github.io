---
title: Biometric Authentication
date: '2022-10-08'
description: Let's talk about one of the recent sign-in methods that became popular
  recently, the Biometric login which includes fingerprint, face id, voice recognition,
  and other methods, but mainly let's talk about the most secure…
tags:
- English
- Programming
- Security
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/09/biometric-authentication.html
---

![What is biometric authentication and how does it store my data?](https://stonelock.com/wp-content/uploads/2020/12/StoneLock-Blog-What-is-biometric-authentication-and-which-method-is-most-secure_-1.png)

Let's talk about one of the recent sign-in methods that became popular recently, the Biometric login which includes fingerprint, face id, voice recognition, and other methods, but mainly let's talk about the most secure one of them, the fingerprint method.

#### Why are we talking about fingerprints, not face IDs or other methods?

Mainly the other methods have weakling that to recognize the real user vs a digital copy, you can have any person's voice from online videos or records, you also can get almost any person's face from internet, the sign-in system can ask the user for specific things like making a random specific reaction or say the displayed sentence, however, someone still can break this using train ML model that talks like any person or display any face reaction using public data.

The fingerprint is the only thing that proves it's the real user, but if we use fingerprint doesn't that mean fingerprint will be soon shared data if leaked?

Actually, how fingerprint works are really interesting as it's too similar to the hashed password concept but device-based instead of server-based, what happens these days is there are no public devices that store fingerprint as raw data, all devices hash the fingerprint using a unique key before storing it so if a device got hacked there is no fingerprint to steal, and the hashed value is useless as it is different based on device and the device itself doesn't know what was the real value.

For the password when the company feels it's leaked, they will ask the user to change it, the fingerprint will not have this option, so fingerprint leaking will be something that can never be recovered for the user.

So how does the online business use a fingerprint without knowing the fingerprint of each user?

What happened is the device contains most of the time a token generator and when the device verifies the fingerprint it will just return a new token to use instead of the hashed value, Biometric auth is just a way to verify the user who is using the device right now, there are also applications for auth devices that only activate using Biometric auth.

This explains why the user needs to log in first on the device to enable Biometric to auth on each new device even if the user already enabled it on other devices, Biometric auth support only one user on the device for now because the applications do not have access to hashed values it just asks device and the device return true or false (or auth token if it's auth device).

image references: [[link1](https://stonelock.com/what-is-biometric-authentication-and-how-does-it-store-my-data/)]
