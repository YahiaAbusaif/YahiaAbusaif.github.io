# yahiaabusaif.github.io

Personal site and writing. Built with [Astro](https://astro.build) and published to GitHub Pages.

## Write a post

1. Add `src/content/blog/your-slug.md`
2. Use this frontmatter:

   ```yaml
   ---
   title: Title
   date: 2026-10-04
   description: One or two sentences.
   tags:
     - Programming
   ---
   ```

3. Commit and push to `main`. GitHub Actions builds and deploys the site.

Local preview:

```bash
npm install
npm run dev
```

## After the first merge

In the GitHub repo: **Settings → Pages → Source → GitHub Actions**. Until that is set, the old static `index.html` workflow will not pick up this build.

## Views and clicks

The site uses [GoatCounter](https://www.goatcounter.com) when you give it a site code. It records page views and outbound clicks (LinkedIn, GitHub, mailto, and so on). No cookie banner.

1. Create a free GoatCounter site.
2. Locally, copy `.env.example` to `.env` and set `PUBLIC_GOATCOUNTER` to the site code (`yahiaabusaif` if the dashboard is `yahiaabusaif.goatcounter.com`).
3. On GitHub: **Settings → Secrets and variables → Actions → Variables** → add `PUBLIC_GOATCOUNTER` with the same value.

Until that variable exists, the live site sends nothing.
