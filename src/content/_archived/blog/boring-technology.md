---
title: The case for boring technology in ambitious products
description: Every shiny new framework promises to solve the problem that doesn't exist yet. Here's why I keep reaching for the tool I already understand.
category: Engineering
pubDate: 2024-03-12
featured: true
---

Ambitious products rarely fail because the team picked PostgreSQL instead of the database that launched last month on Hacker News. They fail because nobody understood the domain deeply enough, or because the system grew faster than the team's ability to reason about it.

## What boring actually means

Boring technology is not outdated technology. It means:

- **Predictable failure modes** — you know how it breaks before it breaks in production.
- **Hiring and onboarding** — someone can read the docs and contribute in a week, not a quarter.
- **Operational maturity** — logging, backups, migrations, and community answers already exist.

Python, PostgreSQL, and a well-structured monolith are boring. They are also how most reliable software gets shipped.

## When to reach for something new

I reach for new tools when the problem is genuinely constrained by the old one: latency at a specific layer, a protocol the stack does not support, or a compliance requirement that closes off the default path.

Everything else is a hypothesis. Hypotheses belong in spikes and prototypes—not in the foundation of a product you expect strangers to depend on.

## A practical rule

Before adding a layer to the stack, ask:

1. What breaks if we do not add it?
2. Can we solve that with code we already know how to operate?
3. Who owns this in production six months from now?

If the answers are vague, the technology is probably excitement, not engineering.

The best portfolios—and the best products—are built on decisions you can explain without slides. Boring stacks make those explanations shorter. That is a feature.
