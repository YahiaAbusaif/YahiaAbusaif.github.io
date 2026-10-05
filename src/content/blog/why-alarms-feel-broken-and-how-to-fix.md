---
title: Why Alarms Feel Broken and How to Fix Them
date: '2025-06-01'
description: 'I love talking about common myths in software engineering, and here’s
  the first one: alarms. The purpose of alarms is simple, visibility without manual
  checks. Instead of fetching data, the system pushes alerts when…'
tags:
- English
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2025/06/why-alarms-feel-broken-and-how-to-fix.html
---

I love talking about common myths in software engineering, and here’s the first one: **alarms**.

The purpose of alarms is simple, **visibility without manual checks**. Instead of fetching data, the system pushes alerts when something's wrong. It sounds great, right? So why do alarms often feel like a nightmare?

Let’s break it down.

### The Manager's View vs The On-Call Engineer's Reality

From a **management perspective**, more alarms = more safety. They want visibility over every metric to avoid any incident slipping through the cracks. If two metrics signal the same issue, they often prefer two separate alarms just to be extra safe.

But from the **on-call engineer’s perspective**, this turns into chaos. Alarms with no clear action, duplicated alerts for the same issue, and false positives just create noise. Nobody wants to be woken up at 3 AM for something that doesn’t need immediate attention.

The core problem? **Neither side feels the pain of the other.**

- Higher-level managers may not have been on-call in 10–20 years or ever. A dozen P0 alerts a day? Not their problem.
- Junior engineers on-call may not grasp the full system overview. If it doesn't trigger an alarm, they assume it's fine which isn’t always true.

### So, How Do We Fix It?

**Balancing** these two viewpoints is the responsibility of **senior engineers and mid-level managers**. They’re the bridge between hands-on pain and high-level priorities.

Let’s be real: execs won’t care about reducing alarm noise unless it affects a KPI. So change has to start lower down.

### Tips to Improve Your Alarm System

1. **Define Clear Priority Levels**

   If everything is a P0, your system isn't production-ready. Aim for at least three levels:

   - **Level 0 (P0):** Needs *immediate* action (e.g., business-critical outage).
   - **Level 1 (P1):** Important but can wait a few hours.
   - **Level 2 (P2):** Can wait days without impact.

   Within each level, use **FIFO**. If someone asks you to drop a P1 to work on a "more important" P1, your priorities are misaligned; either the more important one should be a P0 or the other be P2.
2. **Align Alarms with Business Impact**

   A true P0 should reflect **measurable business loss**, like a bug letting users use services for free.

   A crash affecting 10 users out of 30 million? That’s a P2. It’s annoying, sure, but it’s not urgent.
3. **Set Realistic Expectations for Each Priority Level**

   Use volume thresholds per environment:

   - **Prod:** Max 1 P0/week, 1 P1/day. The rest should be P2+.
   - This helps you track the system’s health over time.

     If your system doesn't match the production schema, it's a broken system that needs to have full capacity to fix it, not to bring more features (and bugs) to it.
4. **Treat Long Fixes as Tasks, Not Alerts**

   If a "bug fix" takes the entire on-call week, it's not a bug, it's a feature request or tech debt task. Don’t let it sit in your incident queue.

The goal is to build a system where **alarms are actionable, meaningful, and matched to business priorities**, not just noise that trains people to ignore real problems.

Having a better alarm system will boost the on-call experience, bring tech debt under control, and make fixing incidents way faster.
