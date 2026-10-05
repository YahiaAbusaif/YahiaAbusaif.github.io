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

[GoatCounter](https://yahiaabusaif.goatcounter.com) is on every page. It records views and outbound clicks. Localhost is allowed so `npm run dev` can send a test hit. If the dashboard stays empty, turn off the adblocker for `localhost` and `gc.zgo.at`.
