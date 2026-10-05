---
title: Third Party Authentication
date: '2022-09-23'
description: 'In the last article, we talked about what is Authentication Tokens,
  in this article, we talk about one of the most popular applications that use tokens:
  third-party sign-up/login. Third-Party Authentication What is…'
tags:
- English
- Programming
- Security
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/09/online-account-security-third-party.html
---

In the last article, we talked about what is Authentication Tokens, in this article, we talk about one of the most popular applications that use tokens: third-party sign-up/login.

## Third-Party Authentication

What is Third-party authentication? Well, a simple example is when the user signs in to an account at application x using Google, which means instead of application x authenticating the user, it will just ask Google to authenticate the user and then tell the application who the user is. There are three main players involved in the social login process:

- The User that wants to access an application.
- The Application that wants to identify a user and get related information.
- The Authorization provider confirms the user identity and provides the needed data.

One of the motivations are smaller business most of the time can't afford strong authentication service, also the user wants a faster and more secure Login experience, and the third party can get valuable data about the user from these requests, so it will be like win-all situation, so the advantages recap is:

- The authentication responsibility moved to a stronger authentication system.
- The user doesn't need to enter information that already exists somewhere else, also if the user wants to change his info it will auto-update all linked websites (if they fetch the data each time).
- There will be no need to verify some data (like the email when the user uses Google)
- The password will not be reused in a multi-application so the user will worry less about leaking the password as the user enters it less often.
- The user has control of which info is to be shared and has access to display and disable third-party sign process from the original account.

The disadvantage is that third-party accounts will have wide access to a collection of accounts so hacking the third-party authentication be more valuable as time passes, it mainly acts like a password manager but with the ability to deactivate any account.

The other disadvantage is the application will have limits based on the third-party restriction, privacy policy ... etc., which may affect the sign-up process and add more steps that make the third-party option not very practical.

### How is third-party authentication work?

Third-party authentication is only possible using tokens, no one will feel secure if random applications asked him/her about important account login credentials.

The sign-up and sign-in flow are very similar: the application will redirect the user to the third-party website with some info sent (like the identity of the application and the access permission (scope) the application needs, and the third-party verifies the user identity and gave the user in the call back a code, this code will let the application to request a token with the mentioned scope, the code will work only for this application and will give it a token to fetch only the scope displayed to that user, finally using this token the application will fetch these data and insert it into their database (if needed).

There may be a mini adjustment on the flow based on the application, some application wants to add a more secure flow, and other application will need more data that can't be fetched from the third party (missing or hidden).

The type of token will be mainly an id token or access token with limited scope based on the application.

One of the problems here happened when the application tries to integrate with different third-party services, the application will need to implement each one of them based on the provider and this sometimes results in many duplicate efforts across the small applications, one of the suggested solutions is instead of integrate directly with each one (google, Facebook ...etc.) let's integrate instead with a provider that already integrated with them (like Auth0, Firebase, ...etc.).

Here is an example of OAuth2 authorization, you can check different third-party providers and notice there is a slight difference between each one.

![c# - How to create custom login provider like third party login provider? -  Stack Overflow](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/external-authentication-services/_static/image4.png)
