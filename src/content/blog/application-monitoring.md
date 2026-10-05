---
title: Software monitoring
date: '2022-10-21'
description: Server-side monitoring Mainly it is the most essential monitoring you
  will need to handle because it contains all critical things like databases, security
  methods, business logic ... etc. there are different types of…
tags:
- English
- General
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2022/10/application-monitoring.html
---

### Server-side monitoring

Mainly it is the most essential monitoring you will need to handle because it contains all critical things like databases, security methods, business logic ... etc. there are different types of monitoring:

#### Infrastructure monitoring: Target database health, hardware usage, service/micro-service health ... etc., if something happened to these things it will affect the whole business.

Also, it targets some business concepts like response time and the number of requests/secs to certain APIs, which helps in understanding if the application needs to scale up, or if there is a problem that prevents the users from calling APIs.

These incidents are usually triggered by time (application scale, old hardware that needs to change ...etc.), but in rare cases, the problem root could be code or business changes (code reviews and tests should prevent any change that triggers these events).

#### High Priority incident:  Most applications have invalid states that should be unreachable (like request pay without sign-in, signing without signup, trying to insert a null value at a non-nullable column ... etc.) if any of these states became reachable for any reason it needs to fix immediately. The root of these incidents is recent code changes or bad design that didn't handle this state.

#### Event Logging

Event Logging is mainly used for debugging purposes to understand what happened, Logging info is stored differently than the normal data as it is much larger, it will be written once (no update operations), and contains more technical information that later (in many cases) will never be used in business, later on, these data will be moved to storage with high latency (an archive) and some applications models will delete these data.

Auto logging: most projects define a framework for auto logging, it provides the developer with standards info like API x called with parameter y, or API a returns result b, while the developer sometimes needs more specific logs, the auto login has a big advantage as it all has the same format style and it doesn't rely on the developer memory (remember to add logs).

The only thing developer needs to be aware of for logging (logging in general) is to never log sensitive data, for example, imagine an application that logs logging info (password) or payment info, while the logging info can be accessed by anyone in the company or the technical team.

### Client-side monitoring

Application Monitoring is mainly used to detect a problem ASAP, keep track of what is happening in real usage and understand how the users interact with the app.

While most data collected on the server side is for technical purpose and target only the developers, the client-side data target many teams (developer, product, data analytics, design ...etc) which means this info needs to be written as clearly as possible, assuming someone who never wrote a single line of code will look to these data is the normal case here.

One thing to keep in mind is that any data that come from the client side isn't fully trusted as anyone can edit the APK and send fake data, so, for example, something like if the user paid for the service or not is something you will always look into server-side monitoring data.

#### Application instrumentation is the process of adding code to your application so you can understand its inner state. It measures what code is doing when it responds to requests by collecting data such as metrics, events, logs ...etc. An instrumented application tracks as much information as possible about the service’s operations and behavior. It provides more detail about what is happening, so you can see relationships between requests.

Instrumentation is key to ensuring the application is performing up to its best. It focuses more on the whole picture rather than single info, it targets to produce something like flow, relations, charts ... etc. rather than user x sending request y with parameter {a,b,c}.
