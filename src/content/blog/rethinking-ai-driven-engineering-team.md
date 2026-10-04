---
title: Rethinking the AI-Driven Development
date: '2026-08-15'
description: When software executives discuss Artificial Intelligence, specifically
  frontier Large Language Models LLMs and coding assistants, the conversation almost
  always focuses on speed and tool adoption. Companies rush to buy…
tags:
- AI
- English
- General
- Problem-Solving
- Programming
sourceUrl: https://yaaabuthoughts.blogspot.com/2026/08/rethinking-ai-driven-engineering-team.html
---

When software executives discuss Artificial Intelligence, specifically frontier Large Language Models (LLMs) and coding assistants, the conversation almost always focuses on speed and tool adoption. Companies rush to buy enterprise licenses for tools like Cursor, Anthropic, or DeepSeek, expecting immediate productivity gains.
However, introducing AI into a development team without updating the underlying engineering culture and processes creates friction, degrades code quality, and leads to skyrocketing API bills. Managing AI is not merely a tooling decision; it requires a complete overhaul of corporate policy, team incentives, and the Software Development Lifecycle (SDLC).

## The Fallacy of Current Corporate AI Policies

Most software organizations approach AI policy through one of three stances:

- **AI Prohibitors:** Companies that ban AI usage completely to protect data security, compliance, and budgets.

- **AI Indifferent:** Companies that don't care whether employees finish work manually or using AI, as long as the job gets done.

- **AI-Driven:** Companies that aggressively mandate and incentivize AI adoption, attempting to build deep internal AI expertise.

While these categories seem distinct on paper, closer inspection reveals critical flaws in how each is managed.

### AI Prohibitors: The Punishment of Honesty

Companies that ban AI usually do so over security, compliance, or budget concerns. However, unless an organization deploys expensive, air-gapped infrastructure (such as restricted remote virtual desktops), enforcing a ban is virtually impossible.
Without strict technical enforcement, banning AI creates a toxic environment where honesty is punished and dishonesty is rewarded:

- **Perverse Incentives:** Employees who secretly break the rules use AI to finish a week's worth of tasks in two days. They either enjoy extra time off or receive promotions for fast delivery. Meanwhile, honest engineers who follow the ban lag behind in metrics and are effectively penalized for their integrity.

- **Degraded Code Review:** Unregulated AI usage leads to low-quality Pull Requests (PRs). Inexperienced developers accept AI code blindly, pushing hidden architectural trade-offs into the codebase. Senior reviewers, unaware that the code was AI-generated, are forced to catch subtle bugs, leading to reviewer burnout and team friction.

If a company lacks the budget for proper AI tooling, it certainly lacks the budget for the expensive security and compliance infrastructure required to enforce a ban.

### AI-Driven Companies: Misaligned Metrics and the Token Paradox

On the opposite end, AI-driven companies enthusiastically encourage AI usage. Yet, many manage AI adoption through misaligned metrics, such as tracking token usage on executive dashboards and tying high consumption to performance reviews or promotions.
This creates fundamental operational flaws:

- **Rewarding Inefficiency:** Two developers can solve the exact same ticket. An engineer might consume 5m tokens through inefficient prompting and trial-and-error, while another engineer solves it cleanly with 5k tokens. Rewarding raw token usage actively rewards bad engineering and inflates company bills.

- **The Token Estimation Gap:** Traditional engineering estimates tasks by time or story points (for example, 2 days versus 5 days). Yet, teams currently lack a framework to estimate expected token consumption. Without a baseline, managers cannot distinguish between productive AI usage and wasteful token burn.

Judging developers by token usage falls into the exact same trap. Low token usage might mean an engineer worked manually, worked efficiently, or simply didn't work at all.

## Documentation as System Prompt Context

A major blind spot in software engineering, amplified when using AI, is the reliance on ephemeral spoken communication.
The Cost of Lost Context
Engineering teams routinely spend hours in syncs or online meetings deciding on business logic, trade-offs, and edge cases. When these decisions remain unwritten:

- **AI Fills the Void with Assumptions:** When business logic isn't documented, AI tools rely on plausible defaults. For example, if a ticket fails to state whether a feature requires role-based access control, the AI will default to making it available to everyone.

- **The "One-Off Prompting" Fallacy:** Developers attempt to fix missing context by writing detailed local prompts for their specific task. While this solves the problem once, it creates no persistent value. Future developers and future AI context windows remain completely unaware of those decisions.

### The Meeting-to-Rule Pipeline

To prevent AI from inventing business logic, teams must establish a formal process to convert spoken agreements into persistent, machine-readable instructions.

1. Online Meeting & Audio: Decisions, architectural choices, and trade-offs are discussed verbally during syncs.
2. Voice-to-Text Transcription: Meeting audio is immediately transcribed into raw text following the call.
3. Structured Decision Document: Key trade-offs, constraints, and specific choices are extracted into a centralized documentation hub (defining what, why, and when).
4. Master LLM Rules & Project Context: Decision records are fed directly into project-level system instructions (such as `.cursorrules` or custom repository instructions) so the AI never has to guess missing business logic.
System instructions (`.cursorrules`, system prompts, or repository documentation) must cover both frontend and backend architectures. If a business constraint or permission model isn't documented, as far as the AI is concerned, it does not exist.

## The AI-Native Software Development Lifecycle

The classic agile development pipeline
**(Backlog -> To Do -> In Progress -> Code Review -> QA/Deploy -> Done)**was built for human-only engineering teams. Applying this legacy model directly to AI-assisted workflows breaks down because AI drastically reduces code writing time while shifting the bottleneck to review and context preparation.
To fix this, the engineering pipeline must be redefined into a 7-stage AI-native lifecycle:

- **Stage 1: Context & Scope Verification (Backlog)**

- Audit the ticket to eliminate implicit assumptions, verifying explicit permissions, boundary conditions, edge cases, and expected test coverage.
- For me, I believe this will be one of the critical stages people should invest more in before most developers work with the initial definition and get back to the PM/manager only when blocked; the AI normally will assume rather than ask.

- **Stage 2: Development Definition & Micro-Tasking**

- Map out system changes and split complex features into 5–10 isolated micro-tasks for higher AI accuracy and easier reviews.
- A normally good engineer will do this even before AI.
- In case you plan to use AI, you need to have a standard AI prompt for this.

- **Stage 3: Prompt & Architecture Planning (To Do)**

- Invest some time in writing a better initial prompt.
- Mention Test Cases that you care about and think about edge cases.

- **Stage 4: Execution & Verification (In Progress)**

- Execute planned prompts, verify functional behavior, run local builds, lint, DB migrations,  and ensure automated tests pass.

- **Stage 5: Mandatory Two-Step Self-Review:**

- *AI Self-Review:* Feed the diff back into the LLM to catch syntax errors, edge cases, and vulnerabilities **[you need to have a standard AI prompt for this per repo/domain]**.

- *Human Owner Review:* The developer manually inspects every line of code to verify architectural sanity before passing it to a peer.

- **Stage 6: Deep Peer Review**

- Shift peer review focus away from minor syntax toward inspecting architectural fit, security implications, and hidden trade-offs.
- For me, I think this stage should focus more on high-level architecture, and reviewers shouldn't focus line by line; if the AI generates anti-pattern code, that is an issue in the rules/prompts.

- **Stage 7**

- **Deploy & Done:** Execute standard deployment, CI/CD checks, and post-release monitoring.

### The Workload Shift: Re-balancing Implementation and Code Review

Introducing AI fundamentally flips the distribution of engineering effort across a task's lifecycle.

The Legacy Workload Split
In traditional human-only workflows, implementing code consumed roughly **80% to 90%** of a developer's time (designing, writing, and debugging implementation details). Reviewers spent only **5% to 10%** of the total effort doing a quick pass over a pull request.
**Traditional Effort Distribution:**

- **Implementation:** 85%–95% of task effort (Writing, debugging, and edge-case handling)

- **Code Review:** 5%–15% of task effort (Quick sanity checks by peers)

AI-Native Effort Distribution:

- **Task definition (stage 2):** 10-20%  of task effort

- **Prompting & Verification (stage 3/4):** 40% of task effort (Context assembly, execution, and local testing)

- **Deep Code Review (stage 5):** 30-40% of task effort (Self-review and rigorous peer inspection of AI trade-offs)

### **The AI Workload Reality**

When AI generates the initial implementation in minutes, writing code is no longer the bottleneck, **reviewing and validating the code is**. Code review now expands to consume up to **40% of an engineer's total working capacity**.
Without adjusting team processes to reflect this shift, engineering teams encounter severe operational failures:

- **PR Bottlenecks and Review Stagnation:** Because code generation is fast, pull requests flood the pipeline. Reviewers who are accustomed to prioritizing their own implementation tasks treat code reviews as ad-hoc, low-priority favors. As a result, PRs sit pending for days, stalling delivery.

- **The "Unassigned Reviewer" Fallacy:** Most teams assign PRs randomly or informally ask "anyone expert in the area" to take a look. When review workload is light, this informal approach works. When review workload reaches 40% of an engineer's daily capacity, unassigned reviews lead to diffusion of responsibility—everyone assumes someone else will check the code.

- **Lack of Review Credit:** In traditional performance reviews, engineers are evaluated on features shipped, tickets closed, and lines of code merged. If reviewing peers' AI-generated code takes nearly half an engineer's workweek, but corporate metrics only measure *authoring*, engineers are actively disincentivized from performing thorough code reviews.

#### The Required Process Fix

To solve the PR backlog in an AI-native engineering team:

- Formal Review Allocations: Code review must be scheduled as a primary responsibility, not an ad-hoc afterthought. Teams need designated, rotated reviewers whose explicit capacity is budgeted for PR inspection.
- First-Class Credit for Reviewers: Engineering leadership must track, acknowledge, and reward high-quality code reviews. Catching subtle AI trade-offs, architecture flaws, and security gaps should hold equal weight in performance evaluations as authoring new features.
- Visibility Over Review Load: Managers must maintain clear visibility over who is reviewing what, ensuring that review workloads are balanced fairly across the team rather than piling up on a few senior engineers.

## Centralized Prompt Governance and Public Visibility

While prompt engineering is often treated as a developer's private, personal workflow, keeping prompts hidden creates inconsistency and lowers code quality. To build a reliable AI-driven engineering culture, prompts must be treated as **first-class, shared project artifacts**.

#### 1. Standardized, Shared Prompt Libraries

Prompts should never exist solely in a developer's local editor or private scratchpad. Instead, they must be scoped, version-controlled, and shared across the organization:

- **Global & Project Scope:** System prompts, architectural rules, and code-review guidelines must be managed centrally at the repository, project, or company level.

- **No "Lone Ranger" Prompts:** Standardizing prompts ensures that every developer applies the same security constraints, coding standards, and review checks across the codebase.

#### 2. Task-Level Prompt Visibility

For every ticket or pull request, the exact prompts used during execution should be logged and attached directly to the task or pull request.
Even if peer reviewers only inspect the prompt **10% of the time**, making prompts public changes team behavior significantly:

- **The Transparency Effect:** When developers know their prompts are visible to the rest of the team, they stop relying on lazy, low-effort inputs (like *"fix this bug"*) and put real thought into framing clear, structured context.

- **Senior Coaching & Feedback:** Visible prompts give senior engineers and tech leads a direct mechanism to mentor team members on prompt framing, context selection, and token efficiency.

- **Auditing Unexpected Behavior:** If an AI model introduces a subtle architectural flaw or hallucinated dependency, reviewers can inspect the original prompt to determine whether the issue stemmed from vague instructions or missing context.

 **The Governance Rule:** If code generation is an engineering output, the prompt is the source code that produced it. Making prompts visible ensures accountability, repeatability, and continuous team learning.

## Sprint Planning and Token Economics

In an AI-native engineering team, sprint planning must incorporate a Token Estimation Framework alongside traditional time estimates (such as hours or story points).

Token allocation for a ticket is estimated across three distinct categories:

Total Ticket Token Cost = Prompt Generation Tokens + Code Generation Tokens + Review Tokens

- **Prompt Generation Tokens:** Gathering context, reasoning through architecture, and refining prompts.
- **Code Generation Tokens:** Multi-file code generation, refactoring, and test creation.
- **Code Review Tokens:** Automated AI self-reviews and automated pull-request analysis.

Estimating tokens per ticket prevents surprise API expenses, surfaces inefficient prompting early, and gives engineering leadership true cost-per-feature visibility.

I know For the current LLM architecture, it will be very hard to give an accurate estimation about tokens consumption (the same prompt takes different tokens ), but having a general idea about normal consumption per ticket size will be a great start; after that, people can optimize this. Communities will communicate more about normal consumption in factor of code size, code language/framework, and changes done. At this point, people will start improving their AI logic

## Conclusion

Transitioning to an AI-native workflow is rarely a technical challenge; it is a cultural one.
Human beings naturally resist process changes, even when the current process is visibly failing. Many software organizations choose to tolerate bloated PRs, noisy reviews, high token bills, and buggy code rather than re-evaluate their familiar Agile routines.
However, treating AI as a simple add-on to a legacy workflow is a strategy with a short shelf life. Organizations that succeed in the next era of software engineering will be those that adjust their SDLC to match the realities of AI: enforcing strict documentation, breaking tasks into precise context windows, holding developers accountable for self-review, and managing token economics with the same discipline as server infrastructure.
