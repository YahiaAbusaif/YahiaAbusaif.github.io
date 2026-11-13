---
name: book-design
description: >-
  Designs and revises Yahia Abusaif's personal site as a book of engineering
  essays. Use when changing the home page, writing index, essay page, layout,
  CSS, typography, color, or any visual design of this site.
---

# Book design

This site is a monograph of engineering notes, and also the public CV. Reading is the job of the page. The experience stays on the home page, below the writing.

## Locked direction

Do not restyle toward a SaaS landing page, a newspaper, or a new palette unless he asks for a new direction. If he asks for a new direction, write the plan (4–6 hex colors, two type roles, one layout sentence, one signature) and wait. Do not code that plan until he picks it.

The book feeling is the point. Keep paper and a serif. The previous page added radial glows and a dot grid on top of cream and Source Serif. That decoration is gone.

### Tokens

- Paper `#eef0ea`, elevated `#f7f8f4`, ink `#1c211c`, muted `#4e574e`, line `#d5dbd2`
- Accent `#1f4d3a`, used for links, the contents number, and the essay folio. No glow.
- Accent soft `#e3ebe4`, only behind inline code
- Dark paper `#141714`, elevated `#1c211c`, ink `#e7ebe4`, muted `#a3ada3`, line `#2a312c`, accent `#8fbfa3`
- Reading face: Newsreader. UI face: Source Sans 3. Do not add a third family.
- The shell is a spread: a left rail plus a 40rem reading measure. Essay body about 1.2rem, line-height about 1.75.
- A page that is only a centered column of text is too plain. He said that reads as if he cannot design. Keep the book, and keep the structure visible.

### Signature

The spread is the design on the masthead and on an essay. Rail on the left (portrait on the home page, date and tags on an essay). Reading measure on the right for the name and the essay prose. The home name is one line, “Yahia Abusaif”, surname in italic, with one short accent rule. Below the masthead, the essays list and the CV sections span the header width, left edge aligned with the portrait. An essay opens with a drop cap. Section headings use Newsreader with one geometric frieze (an eight-pointed star and rules) and a faint line tile behind the words. The portrait is a large circle, centered in a light, transparent line medallion. Do not add another decoration on top of this.

### Forbidden

- Radial glows, dot grids, gradient washes, pill tags, purple gradients, Inter, Roboto, Arial
- Terracotta or clay accent on warm cream
- ALL-CAPS eyebrows above every heading
- An arrow stuck on every link
- Rewriting CV bullets, job dates, or metrics
- Tailwind, React, or a new component library. This is Astro and `src/styles/global.css`.

## Pages

- Home opens with the name Yahia Abusaif, role, two short sentences, and a row of sentence buttons that spans the full header width, left edge aligned with the portrait. No two-column contact list. No relocation line. Place is “Give me a visit” and opens a dialog: Egypt, with a pyramids drawing, and New Cairo. Email is “Send me an email” (mailto, To filled). The phone number is not on the page. Phone is “Give me a call”, a mail with To, subject, and a short note already filled. The number is still not on the page. The other buttons are “Connect on LinkedIn”, “Checkout my GitHub”, and “Learn more”. The lede is end-to-end product work: design through the build, then what shipped. From-nothing and already-at-scale are two cases, not one product. Do not say the essays are the design written before the code. The theme control is a sun and moon icon. Then latest essays as the numbered contents, full header width, left edge aligned with the portrait. Experience, education, and recommendations stay below, same width, with the same words.
- The nav word for the essays is Essays, not Writing.
- The portrait is a large circle, centered in the light line medallion. The home lede is italic Newsreader. Job titles are Newsreader. Experience, Education, and Extracurricular use a timeline on the right: end date at the title, start date at the last line of that entry, italic Newsreader dates, diamond marks, and a dashed classic line between them. Do not put the date under the title. Job headers stack the role, then the company in italic muted Newsreader, with a short accent rule under them. List bullets are small accent diamonds, same mark as the timeline, not default dots.
- Essays index is the full contents, with the description under each title.
- Essay: a text link back to Essays, the date as the folio, the title, tags as plain comma-separated words, then the prose. Do not edit the markdown.

## Before finishing

Open the home page and one essay. Check desktop and a 390px width. Confirm the essay line length, the contents numbers, focus visibility, and that dark mode still has readable ink. Fix what the screenshot shows before calling it done.
