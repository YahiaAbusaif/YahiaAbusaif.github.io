---
title: Let the Docs Do the Talking
date: '2024-01-12'
description: Years Ago when I was a student, I really hated anything related to the
  Documentation process, at that time I have a bad idea about it. In the collage days
  most time teams who working on the same project be like 4…
tags:
- English
- General
- Programming
- Self-Improvement
sourceUrl: https://yaaabuthoughts.blogspot.com/2024/01/technichal-documentation-does-it-really.html
---

Years Ago when I was a student, I really hated anything related to the Documentation process, at that time I have a bad idea about it. In the collage days most time teams who working on the same project be like 4 people, and they are friends who having meeting and talks all the time, the projects itself was not very complex compared to real-world projects. So, documentation at that time was just paper that nobody will read. Even if someone want to know something, they will just ask the friend in front of them instead of open a poor written document and search for an answer. Maybe we were too lazy at that time to write well written document, most of the documents the students ware delivering were something like template document who you need to just fill it after coding.

Anyway, While I should admit there are things needs to be improved in the collage documentation process, but what I really dislike is the people take that attitude into the professional work.

There are many things I consider as documentation like Design document, meeting Agenda and Action items, COE, Deployment Notes, … etc. Actually, anything needed to be well-written for historical or communication purpose can be considered as document. That means even emails can be considered as document.

### Why Documentation is way more important in the real-world problems?

#### Time Efficient

Talking about communication, it's way easier to use technical document instead of book meeting with everyone and talk to them, maybe you can do it when you have a team with ~5 members. But when the size of the team increase it will consume a lot of time, some will be on vacation, some don't really have clear context and some be busy at that time with other stuffs. So instead of forcing people to communicate with everyone you can easily send a well written document to them, it will include all context they may need. People with context will skip it when reading, while others can take their time to understand the context.

Compared to the normal chat, Document in most cases are more organized and has clearer language, also Document will avoid having many calls/pings related to any issue.

#### Feedback handling and Timeline Visibility

One that I like the most is it's so easy to give feedback on a single point, highlight it for discussion, then publish the action item regarding this point, that done very smoothly during document rather than having calls. When someone added comments, you can easily see if it's fixed or not on the next version of the document.

#### Reference applicable

Anyone can reference to it or search it in the future, this help a lot in the timeline estimation, Requirement clarification and tracking, onboard new people, …etc.

I don't remember how many times I need to check a document to remember what exactly was the requirements. But believe me you will need it a lot when you handle many threads at the same time or even when you will check a new task.

### When I should write a document?

Document is something people will need in future -even for archive purpose-, I haven't any case when people shouldn't write document, the correct question for me is: how long time people should spend writing document ?

There is one rule I follow, and I believe it's making much sense, the more important a document is the more time you should spend on it. For example, an architecture/business document that will affect many people for months or even years can take days or even weeks. An investigation document for minor incident with no really lost should take few hours, a recap for a call with external party should take few minutes and so on.

### What should a good document looks like?

Here is my thought about a good document, Some apply on all document and another apply only on long document:

- **A good Title isn't enough:** it's nice to have a good descriptive title, but no matter how the title is good, it Must have an introduction section defining what is the purpose of this document. One of the most annoying things for any reader is going through all the document to discover what is the goal of this document.
- **Assume People with no context:** Never assume readers will have any unmentioned context, something like the current case and the motivation for this document isn't something readers will know. **Remember** people with context can skip this section, but people with no context can't imagine it, for example a writer can mention a number assuming the reader will have context about if this number is good or bad.
- **Define Who will read this document:** defining who is the audience for this document is very important, different rules will need different way of abstraction.
- **Separate between What is critical, and what is less significant:** normally any document has core critical sections and another that less essential or optional, can the reader easily catch the critical sections? Separation can be done using text formatting, orders and even separate the extra content in separate files.
- **Support the Claims/POV with facts:** remember this is a technical document, something like saying X is better than Y requires an approval or justification, the document should include facts or state facts supporting the writer's POV, anything else should be avoided.
- **No-meeting mindset:** one of the most common root cause for bad document is the writer always rely on the discussion meeting or someone will contact him/her if he/she does not get it. There are things not mentioned in the document but regularly have been discussed in the meeting, for me if not mentioned in the document then it should not bring to the table in the meeting. When you write a document, you should have a mindset that no one should contact you regarding this document, else your document is missing important info that should be included.
- **A Second eye is always better:** there are difference between the document that is reviewed by someone and the document that does not. If the document is long enough, it's a good idea to ask someone else to review it for you before publishing it to the team/company.
- **Use domain/business standards:** it's always better to use wide-usage knowledge that anyone in the field or business know instead of re-create the cycle again, something like Vocabulary, template, charts, …etc.
- **Learn from people mistakes:** when you have a document that everyone mentioned it's a great document, it's highly recommended following the document style. On the other hand, when people mentioned some documents is bad, hard to understand, or misleading try to understand why people think that about it and try to avoid these mistakes.
