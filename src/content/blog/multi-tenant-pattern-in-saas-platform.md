---
title: Multi-tenant pattern in SaaS platform
date: '2026-07-20'
description: In the last year, I had the chance to work on an interesting problem
  for a SaaS platform that serves as a B2B2C platform business-to-business-to-customers.
  mainly, where you sell the platform to large entities that have…
tags:
- Design-Principles
- English
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2026/07/multi-tenant-pattern-in-saas-platform.html
---

In the last year, I had the chance to work on an interesting problem for a SaaS platform that serves as a B2B2C platform (business-to-business-to-customers). mainly, where you sell the platform to large entities that have many users under them. There were another two cases where I maintained or consulted on systems with this pattern by coincidence, so I have some experience with multi-tenant architecture that I’d love to share.

### What

There are different ways to think about multi-tenancy, but I believe the definition itself impacts how you approach the problem.

A simple way to define it: **it's a way to divide and isolate a database into pieces, where each piece is aware of itself only.**

Before diving deep, we must separate two concepts that are frequently conflated: **Multi-Tenancy** and **Database Sharding**.

- **Database Sharding** is a performance and scalability pattern. You split a large database across multiple physical servers (shards) to achieve horizontal scaling and distribute load.
- **Multi-Tenancy** is an architectural isolation pattern. Its primary goal is to ensure that different clients (tenants) using the same application cannot access, see, or modify each other's data, often driven by strict legal, compliance, or business security requirements.

### The "Why": The Isolation Mandate in Multi-Tenant Architecture

Multi-tenancy is not about reinventing the wheel; it is a foundational requirement for SaaS platforms that need strict data boundaries between organizations.

While standard applications might only need to separate permissions at the column or feature level, a multi-tenant platform requires a clear, unyielding boundary between the entire operations of different client entities.

Consider the difference between an interconnected payment application (where users have single entity, can interact with other users and transfer money to them) and a platform like Shopify, where each client has its own distinct website and data environment.

In the latter case, it is not only permissible but highly recommended for data to be duplicated across tenants. Sharing sensitive customer history data between competing businesses would compromise their privacy and success. Thus, the core architectural principle is to **prioritize tenant constraints over global ones**.

### The Three Core Approaches to Multi-Tenancy

When designing data isolation for multiple tenants, there are three primary architectural patterns to choose from:

#### Approach 1: Separate Database per Tenant

In this model, each tenant has their own dedicated database instance (and potentially their own dedicated front-end, backend, domains, etc.).

**The Pros:**

- Provides the highest possible level of isolation and security. A data leak between tenants is virtually impossible at the database layer.
- Very easy cost management and billing model, you know each tenant's exact resource usage.

**The Cons:**

- Introduces massive infrastructure and operational overhead. Running database migrations, schema upgrades, or routine maintenance across hundreds or thousands of separate databases becomes a significant operational hurdle.
- Adding or deleting tenants requires changes across the entire stack (front-end, backend, infrastructure).
- Cross-tenant management is very hard to implement; you cannot easily enforce global constraints (like a unique payment ID or unique email across all tenants).
- Sharing data across tenants mainly happens by copying the data N times.
- High cost for small or low-traffic tenants: each tenant's database runs and scales separately, meaning tenants with low or seasonal traffic still incur baseline infrastructure costs 24/7.

#### Approach 2: Single Database with Multiple Schemas

Here, all tenants share a single physical database, but each tenant is assigned a dedicated database schema.

**The Pros:**

Drastically reduces infrastructure costs compared to separate databases while still maintaining a strong, clean boundary between tenant data.

**The Cons:**

- Requires careful developer discipline. The application layer must explicitly specify the correct schema for every single database query; a missed schema context can lead to application errors or data leaks.
- Cross-tenant management is still hard, though more manageable than separate databases.
- Cost management per tenant is tricky to calculate accurately.
- Provisioning new tenants still requires schema-level changes on parts of the stack.

#### Approach 3: Single Database with Row-Level Security (RLS)

All tenants share the exact same database and tables. A `tenant_id` column is added to every tenant-scoped table, and the database engine enforces isolation automatically via Row-Level Security policies.

**The Pros:**

- Extremely low infrastructure cost and seamless maintenance. Schema migrations run once on a single set of tables, updating the system for all tenants instantly.
- Cross-tenant management and reporting are easy.
- Adding a new tenant can be done with zero infrastructure changes.
- Supports a single entry point, cross-tenant constraints, and shared data across tenants without copying it N times; you can simply set `tenant_id` as `NULL` for shared rows.

**The Cons:**

- Heavy reliance on database-level security policies. If developers accidentally bypass RLS during local development, testing, or custom reporting, data isolation can be compromised.

- While this point seems natural, it puts the application safety directly on developer code changes. It requires a disciplined programming pipeline with strict code reviews, robust test suites, and E2E tests to prevent data leaks.

- Can introduce minor database performance overhead on complex queries if policy checks aren't carefully indexed.
- Cost management per tenant is tricky; you need custom logic to track usage per `tenant_id`.

### The Shared Data Dilemma

One of the most overlooked challenges in multi-tenant architectures is handling shared data, resources that need to be accessible by all tenants, such as system configurations, global templates, or general reference information. Here is how shared data is handled across the three approaches:

| **Approach** | **How Shared Data is Handled** | **Trade-offs & Architecture Challenges** |
| --- | --- | --- |
| **Row-Level Security (RLS)** | **Null Tenant Targeting:** Set the `tenant_id` to `NULL` (or a designated global ID) to mark a row as universally accessible. | **No data duplication required.** You simply configure the RLS policy to allow read access when `tenant_id` is null.    Ideal if you have many tenants and cross-tenant operations, provided you maintain a strict CI/CD pipeline and code reviews. |
| **Separate Databases** | **Data Duplication:** Shared data must be duplicated across every single tenant database to prevent cross-database latency. | **High maintenance.** Requires synchronization logic to keep shared data updated across all databases.    **Data Lake Warning:** When ingesting data into a central data lake for analytics, you must actively deduplicate these shared rows before processing.    Suitable if you have a limited number of tenants and need absolute isolation. |
| **Multiple Schemas** | **Shared Schema / Duplication:** You can create a dedicated "shared" schema that all tenants query, or fall back to duplicating data in each schema. | **Middle-ground approach** with a mix of pros and cons from the other two methods.    Doing cross-schema joins to a shared schema can introduce performance bottlenecks, often forcing teams back into duplicating the data anyway. |

### When NOT to Use Multi-Tenancy (The Access Pattern Pitfall)

Multi-tenancy isn't always the right answer. In fact, applying a multi-tenant architecture to the wrong system can be the worst design decision you make.

#### How to Spot the Anti-Pattern

Stop and reconsider your architecture if you find yourself facing requirements like:

- "We have users who belong to multiple tenants simultaneously."
- "We need normal users from one tenant to cross-access schemas or resources in another tenant."
- "Some tenants need to share specific resources with Tenant B, but hide them from Tenant C."
- "We are not okay with data duplication"

#### Why This Breaks Multi-Tenancy

Multi-tenancy is fundamentally built on the principle of strict isolation, favoring tenant constraints over global constraints. If your business domain does not require strong isolation or if your users inherently need to cross tenant boundaries, you do not need a multi-tenant architecture.

When users share resources irregularly across organizational boundaries, you are no longer dealing with a multi-tenant design problem; you are dealing with an **Access Control and Authorization problem**. Attempting to shoehorn complex, cross-boundary access patterns into a multi-tenant isolation model will only create unnecessary friction, complex hacks, and unmaintainable code.

Define your access patterns and permissions (like RBAC or ABAC) first before assuming multi-tenancy is the solution.
