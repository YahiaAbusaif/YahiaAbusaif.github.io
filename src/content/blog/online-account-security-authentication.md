---
title: Authentication Tokens
date: '2022-09-08'
description: In the last Article, I discussed the password method to identify the
  user, before diving deep into the other methods I want to discuss the authentication
  token. After the user login and the system recognize him, it will…
tags:
- English
- Programming
- Security
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/09/online-account-security-authentication.html
---

![Token-based Authentication ✋ - Definition, Types, Pros and cons](https://assets.website-files.com/5ff66329429d880392f6cba2/62738d33a705db88f644a5d8_Token-based%20Authentication%20Preview.jpg)

In the last Article, I discussed the password method to identify the user, before diving deep into the other methods I want to discuss the authentication token.

**A**fter the user login and the system recognize him, it will be bad practice to send the login credentials (password) at each request as storing and sending sensitive data frequently is something the server should avoid also that makes each API do the login process at the back-end to confirm that's is real user, and it will be impossible if the sign-in method changed periodically (like OTP or 2FA).2 methods that handle this story here: Session and token.

### **Session**:

**T**his method focuses on solving the problem that the browser needs to store the password and send it each time to the server, in this method the server creates a new session and adds the user data(ID, IP, browser, action time ... etc.) to it and return the session id to the user and will be stored in the cookies, there are some problems with that method one of them is the session data stored in the database that means each request will make an extra call to the database also that will be a way to attack database bottleneck.

**H**owever, the session method is still used worldwide, the advantages of this method are it's simple to understand and implement, can track the user action easily in one place, and also the server can disable the session just by deleting its row from the database.

**A**nother method I want to discuss today is the token, the server will return the token to the user, and the user sends it each time with the request and as long as this token is valid the server will not ask the user to log in again.

## What is the authentication token?

**T**oken generally is an authentication string that contains some info and is encrypted in a way that makes it impossible for the third party to modify it and still valid, that means anyone can't just simply change the user id and use the token as someone else.

**A**n authentication token is formed of three key components: the header, payload, and signature:

- **The header**: defines the token type being used, as well as the signing algorithm involved.
- **The payload:** is responsible for defining the token issuer and the token’s expiration details. It also provides information about the user plus other metadata.
- **The signature:** verifies the authenticity of a message and that a message has not changed while in transit.

**T**he big advantage here is that the server doesn't need to store any data related to the token in the database, it just validates the token to make sure no one changes the message. another advantage is it enables giving different scopes to the different users, which means it supports something like a third-party sign where the user wants to share only parts of their information with some apps without giving the app the ability to change their data, post something, or see their payment methods.

**T**he additional data can be so useful as the server can add data that can be needed in some cases like user type that determine if the user is authorized to do any action or not these data should be static and don't change frequently the token life span in normal cases, if it's not it shouldn't be included in the token and that was one of the main weak points of the token that if the server wants to change anything about the token the server can't do anything except send a new token to the user and hope there is no one use the old token until it expires or adding database that handles this point.

**T**he most weakling point the server should be aware of is there is still a possibility that someone steals the token from the device and pretend he is the user, but the providers are aware of that, some give the user an option to disable the token if needed, and some just provide the users with short-life token so if anyone steals it the damage will be limited (this can explain why to change password require to re-enter the password while forgot password not).

**T**he problem of "How to disable the token" is a bit interesting, when the server makes the token include all things it needs (User ID, User Type, Access Type-scope-...etc) and anything changes for example like the user is blocked or the user wants to destroy this token because the user doesn't need it anymore, the server will have 2 option to handle these things:

1. Move any data that may change like user type out of the token responsibility to the database responsibility that will represent the need to check the database problem but this can be limited if the server handles it by checking these parameters at only critical APIs like payment and changing user data, that means that the server limited the token instead of disabling it as the someone can view data using it so if view the data is important to the server can't use this method, mainly it's a trade-off that dependence on the application.
2. Make the token expire too early so if someone has a way to get the token, it becomes expired quickly, however making the token life too short is something that will add overload on the token generator and the user will be unhappy when logging frequently, that can be solved by having constraints inside the application itself for payment and security changes and instead of replay with short life token to the login credentials replay with a refresh token.

**T**here are different types of tokens depending on the expiration data and the data provided with the token let's mention some here:

1. **Access Tokens**: these are credentials used to access protected resources, and are used as bearer tokens. the access token allows the user to access and do actions based on its scope, mainly it was supposed to be a short-life token that expires after some minutes or a few hours but you can see some application that uses access tokens those last months that mainly depends on how they handle the token entirely.
2. **ID Tokens**: these are proof that the user has been authenticated. This token mainly carries the user info and is used to verify the identity and never give any access to any protected resources. This is also a short-life token that mainly lasts for a few hours.
3. **Refresh Tokens**: these are long-life tokens that are mainly used to generate new tokens of the other types, it solves the problem that the user should re-login when the token is expired, but of course, these tokens are tracked and the server can check if they are disabled or not as these will be used away fewer than the rest tokens, these tokens work as a hashed password except it will expire after months and will grant its user tokens that may have limited scope.

#### Notes:

**I** talked mainly about online tokens but there are other types of tokens like hardware tokens where the token is stored on a specified device, the 2FA is a type of token called Disconnected Tokens but we will discuss it in a separate article.

**I**f you are interested in how a signature is made and why it's impossible to edit the message without affecting the signature you can read more about Public-key cryptography as a start.

Image reference: https://www.wallarm.com/what/token-based-authentication
