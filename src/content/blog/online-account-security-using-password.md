---
title: Account Security using Password
date: '2022-09-02'
description: '!Password Security Guidelines: Everything You Need to Know | SpyCloudhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzQ2AsKKCCpBU2NYgmPK87k3mug3Z9ww&usqp=CAU
  In this article, I will talk about the first and the…'
tags:
- English
- Programming
- Security
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/09/online-account-security-using-password.html
---

![Password Security Guidelines: Everything You Need to Know | SpyCloud](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzQ_2AsKKCC_pBU2NYgmPK87k3mug3Z_9ww&usqp=CAU)

In this article, I will talk about the first and the oldest security method, the password as this article will be part of a series of articles about account security methods and why we hear the word "*Password-less*" more often lately.

Talking about account security will take us to the “*Password-less*” topic, a lot of big tech companies put many efforts into this topic these days, in the old times account security targeted mainly the admins and employees, as there was no real value from stealing random emails with nothing attached to it, however, account security importance increases each day as there are many websites that support the online purchase and there are accounts that contain payment cards and other things.

Let’s first know how the signup/sign-in process is done. there are three models in that process: user, network, and server, mainly the network will be out of scope in our discussion but there are security methods supported by the network system to protect the user from a man standing in the middle of the connection between users and servers and steals users’ info.

In the past, there is few methods to sign in and the most popular among them is the password, the applications stored passwords in the database, and for each login request, they compare the given password with the stored password, which was bad practice because if someone gets into the database, he can see all passwords and can reuse them at this website or other websites.

Currently, most companies rely on the fact that the user has only one password, and they only need to know if it matches the input text or not, so they start to use hashing on the passwords before storing them in the database when login requests received hash the given text and compare it with the hashed string in the database, maybe someone sees there are no different however this step will make the database doesn’t hold the password value as the hashed strings don’t hold any value and can't undo it to the original password so you eliminate one of the big sources the password can the leak from it.

**So,** the problem is solved why password-less? let’s talk first about why the password isn’t a strong method as the user imagined, here are the most reasons passwords can’t scale as an account security method:

- **Constant:** most applications let the password be constant (for years) each day passes with the same password making the account easier to be hacked.
- **Personal based:** that means it mainly depends on the user's mind and personal info, a user with no security background (which is the majority) will choose an easy-to-remember password which will be easy to guess as well, the problem here is people don’t notice they construct a password with their public information that anyone can get online (name and birth date).
- **Constraints:** when websites don’t force constraints on passwords some users set very weak passwords, however adding constraints didn’t improve the overall result, it made the password more predictable by adding constraints like must have capital letter result for the majority of passwords to have the first letter capital, also one important point here is password constraints are visible for all so hacker also knows that password constraints that all password has.
- **One for all:** the majority of users use the same password for everything on the internet, they use the same password for email, social accounts, bank accounts, online shopping website, and some random websites with 0 security (websites that sends username-password pair as a parameter in the URL at login), most of the hackers know that as well so getting email-password pairs from random website worth an effort as these pairs can be used on other websites.
- **Not random:** most people think that brute force password is hard because it’s a random string, most cases didn’t apply, the user will type a password in English, mostly the first letter will be capitalized, and the letters construct a name or a word … etc, thinking carefully about these facts will make the person realize that brute force on password isn’t that hard.
- **Common:** there are common passwords that many users use like “Monkey”, “welcome”, “password” …etc,  and there are also famous patterns like Name +’@’ + birth year.
- **Attacks became stronger:** after each attack, the hackers know more about the passwords patterns and develop more powerful tools that become more accurate to guess the passwords and each new generation of devices gives the hacker more computing power to guess the passwords and run stronger tools.
- Hard to fix from the server side without side effects: trying to handle any of the above points from the server side will have a high chance to decrease the signup convert rate which hit the online business growth, also by forcing Users to use strong password will increase “forgot password” traffic rapidly.

**S**ome people use a method that each group of accounts has one common password (group accounts based on security levels or the importance of these accounts), but this still holds the **One for all** problem, breaking into one account gives the hackers access to other accounts, add to that the fact that most of the time these different passwords have common patterns, another solution is a password generator which provides the user with a new randomly generated password for each account, but the password generator has many problems:

- The access method is still non-random generated passwords means you only group the above problems into one big problem.
- It saves all passwords in one place with no hashing, which means any hack into it will be valuable.
- It will not be reliable to ask users to change passwords for 100 or more accounts when someone successfully hacks their password manger.
- Password generators will not solve user behaviors, such as sharing a password and logging on to random devices, and Most users will not use them to their full potential.
- Missing advanced features that help users be more flexible, which means you need to use it only on personal devices and don't have the option to login into a temporary device and then mark it as a strange device (will talk about it more when talking about the break detection).

**S**till, the password generator will be a better solution for websites with less value to the user (doesn't contain payment or personal contact info that may lead to a hack chain) and you will not be worried about low-security accounts if the password leak from the server side.

**I** will stop here for this article so it is still short and easy to read, will discuss in the next article what are the other Authentication methods.

You can read more about anti-pattern passwords from this paper: [[password-guidance](https://www.blogger.com/#)]

You can read more about how easy to hack using password patterns: [[Choosing Secure Passwords](https://www.blogger.com/#)]

Image reference: https://spycloud.com/solutions/password-security/
