# Project content and routes

Records live in `src/data/projects.ts`. The initial selection includes AndroidPrint, LookandBook API, Fresh Start Bank, and this portfolio rebuild. The user approved that selection on 2026-10-05. Offensive Security Cyber remains empty until verified lab work is available. See `docs/portfolio-curation.md` for sources and scope.

## Adding a case study

Provide a unique URL-safe `slug`, `title`, `category` (one of the IDs in `categories.ts`), `summary`, `role`, `status`, and `stack`. Optional fields are `repositoryUrl`, `demoUrl`, `problem`, `approach`, `outcome`, `screenshots`, `cover`, `sources`, and `limitations`. A cover includes source, alternative text, width, and height. Use source links and scope notes to distinguish verified source behavior from runtime results.

Each screenshot needs `src` and meaningful `alt`; `caption` is optional. Use owned, publishable images. For assets in `public/`, form the source with `import.meta.env.BASE_URL` so it works under `/personal-site/`. Screenshots lazy-load and retain their natural aspect ratio.

Omit unavailable demos, private repository links, and sections without content. The page renders only populated optional fields. A private project can describe permitted work without exposing a repository. Use verified HTTPS destinations and accurate role/outcome language; don't insert invented metrics or fictional projects.

## Routes

- All work: `#/projects`
- Category: `#/projects?category=js-react` (or another valid category ID)
- Case study: `#/projects/personal-portfolio`

Category links retain keyboard focus; changing pages focuses the main content. Hash changes enter browser history and selections survive refresh. Unknown categories show all projects with a notice; unknown case-study slugs show a recovery link. Case studies keep Projects active in the site navigation and use the project title in the document title.

The portfolio rebuild has no `demoUrl` while its new design is local. Add the reviewed public destination and replace its in-progress status after Phase 10. Other prototypes link to their verified repositories rather than unverified deployments.
