---
title: From Monolithic Chaos to Microservice Over-Engineering
date: '2025-11-10'
description: There’s a lot of talk about software architecture, especially around
  which is better, Monolithic vs Microservice First, let's have it as a simple definition
  (while it will not be accurate for now) Monolithic system…
tags:
- Design-Principles
- English
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2025/11/from-monolithic-chaos-to-microservice.html
---

There’s a lot of talk about software architecture, especially around which is better, Monolithic vs Microservice

First, let's have it as a simple definition (while it will not be
accurate for now) Monolithic system mainly refers to a system with a single
component for everything, while micro-services refer to
many systems working together. let's deep dive more

### What is a Monolithic System?

As a very rough starting point, a monolithic system refers to an application where all business logic lives in one component. Everything, authentication, payments, notifications, they are tightly packed together in a single deployable unit.

This is how most developers start, especially in college or during early projects. It’s simple to build, quick to launch, and adding new features is easy (at the beginning).

But as systems grow, monoliths tend to become painful to maintain, extend, or deploy.
A small change can lead to huge side effects. For example, updating a package for the login module might break something in twenty unrelated places because everything is connected.

So let's mention the common problems that appear on monolithic systems:

1. Security

- All codes have full access to all databases, infrastructure and so on...
- Why can order logic access the auth DB?
- Why can notification access KYC data?
- Why does Auth have permission to send notifications to users?

2. Testing

- When there is a single project for everything, the test coverage, the types of tests, and other things will be misleading; you need (must) very high coverage for a part of the code, and you are ok with fewer tests for the other part.
- Different parts of the system require different testing strategies, like UI visual tests for front-end components or profanity filters for communication channels, but in a monolith, all tests mix together.

3. Code change/ Deployment frequency - change control

- There are many cases where there are parts of the code that live for years with no changes and other parts that have daily or weekly changes. For example, I faced a case where the payment service has around 0 changes for months, while on the same system, there are around 2-3 changes per day for the ordering service
- For cases like this, nothing has changed for most code, but commit history has a lot to say; the team will need to run all kinds of tests on things that never changed, and will need to deploy everything for a change that doesn't represent 0.001% of the code base.
- Also, it makes no sense to test many lines of code out of the scope just because you upgrade a common package or change something in the common layer (like middleware).

4. The separation and abstraction between different Models, services, and Domains

- When everything is on the same project, it's easy to abuse the abstractions between components. For example, a DB layer for Auth data should only be connected with the Auth service layer. It's so easy to just use it in another service and spread the DB logic into all components.
- In most cases, there are different teams/squads/engineers assigned to each area, having everything close to each other make controlling the change and the changes scopes is hard and needs communication even for the most simple things, things like migration from a tool/sdk to another is hard because the one who wants this needs to convince other people to migrate to it while they don't think they actually needs it, it will result in many talks and in some cases you will find many convention to the same thing in the same project because some people need a change and the other doesn't agree on it
- Some Tickets became very hard to handle, there is an issue in the system but you don't know which team should handle it, you need to set many rules to direct to the right person and there are cases when you never know (like DB timeout), the investigator will need to know the recent change history for the whole system and any business changes (like onboard new customer with high traffic ), it will be common here to see fights between people about deployment plans and who should handle what

5. Scaling issues

- As the monolith grows, keeping consistent coding standards gets harder.
- New developers struggle to onboard, and scaling the infrastructure becomes increasingly inefficient.

### Now, Let’s Talk Microservices

Microservices break the big system into multiple smaller ones, each handling a specific responsibility and communicating with others.
This architecture solves many monolithic issues but brings its own challenges.

1. Communication Issues

- Unlike local in-process calls, microservices rely on network communication

- Higher latency
- Data transfer limits
- The need to scale individual services during traffic spikes
- Handling failures and retries - Imagine the request fails for any reason, mainly if there is a cross-system ACID transaction, you need to have a full overview of what happened. There are many patterns invented to just handle these cases, like inbox/outbox patterns, callbacks vs exceptional query patterns, SAGA pattern
- Availability across the system - if a service is down, what will happen to the system?

- Synchronous and Asynchronous design decisions will be more critical. If someone designed a sync process in the system that can be async, it would cost a lot of money, some services will have to upscale and downscale all the time when it actually don't need it, services wait for other services' responses while it doesn't need

2. Cross-development features and local debugging

- In a monolith, one pull request can change everything. In a microservices world, you might need multiple PRs across different repositories.
- Debugging means running several services on different ports — or connecting your local setup to staging environments just to test one feature.

3. Over flexibility

- You can use different things for each system. This gives the developer the power to pick the most suitable tools/framework/language for each service, while some think this is a great advantage, it can be a critical issue.
- The system will need more and more knowledge to navigate through it; you can't onboard someone from one part to another easily.
- The limitations of the whole system will be unknown, as each subsystem has its own limitations and issues
- Reusing code in forms of SDKs/packages became much harder as each subsystem has its own stack, which will need an adapter layer (and in many cases,  re-implementation is much easier for the short-term run)

4. Larger initial cost (developing and hosting) compared to monolithic
5. Centralize the public interface

- Users shouldn't be aware of the subsystems.
- A bad example that I faced while integrating with a company is that there is no response standards (some services will return a field called "{error :{code: , Msg: }}" while others return "{err\_code: , err\_msg}", The same error code means different things based on which service it returns, and so on

6. Testing Full flow (e2e tests) will be harder.
7. Defining the subsystems' scopes is very tricky

- There are some known standards for some parts, like auth, payment, and communication, but the other parts will be based on business vision and context.
- There are many ways to describe how to define a service, like SOLID and DDD, but there is much flexibility based on the business.
- The 2 things to balance are

- having loosely coupled systems where there are no strong relations between 2 or more components (else it will be called nano-service, which has many issues)
- Single responsibility where the system only handles a single Domain concept (else it will be a hybrid between monolithic and micro services, which some people call  SOA -Service-Oriented Architecture-).

#### Monolithic Isn’t Evil and Microservices Aren’t Magic

A common misconception is that one is good and the other is bad. I’ve seen terrible monoliths and terrible microservice systems alike. Re-architecting won’t fix deeper process or design problems.

If your team ignores good engineering principles, SOLID, DRY, KISS, YAGNI, proper layering, no architecture will save you.
Even if you rebuild the system a hundred times in a new architecture, the same issues will come back.

Monolithic architectures are great for quick launches or early-stage startups. They let you move fast, validate your product, and keep things simple.
If you apply modular monolithic principles, clear boundaries, isolated domains, and limited shared dependencies, you can avoid most monolithic pain points. It also makes migration to microservices much easier when your system actually needs it.

While I agree Monolithic gives the developer the power to abuse boundaries between Domains, applying Modular Monolithic fixes most of the separation issues, so back again to the process issues

Finally, and the thing I really want people to understand, it's not always going to be "Monolithic *vs* Microservices", you don't have to pick a single option, you can build a part of the system using monolithic and the other using Microservice to take the advantages of both. if you applied the modular monolithic, it will become easy to migrate later to Microservice when the system actually needs to.
