# Jean-Michael Harris — Portfolio

A phased rebuild of a React, TypeScript, and Vite portfolio, based on the approved **Diagonal Momentum** direction: white surfaces, red accents, condensed headlines, and diagonal project visuals.

**Current milestone: Phase 10 — release.** The portfolio includes four curated projects, source-linked case studies, a professional portrait, Contact, TryHackMe SEC0/SEC1 certificates, and a cybersecurity lab roadmap. Release checks pass; publication and live verification are the final step. See [the 10-phase roadmap](docs/rebuild-plan.md), [curation evidence](docs/portfolio-curation.md), and [credential notes](docs/certifications.md).

## Run locally

Use Node 22.13 or newer, as required by `package.json`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite with the `/personal-site/` base path.

## Verify

```sh
npm run lint
npm run build
npm run preview
```

## Structure

- `src/components/`: shared site navigation and layout.
- `src/pages/`: Home, Projects, About, Contact, and a not-found view.
- `src/data/`: profile links and the four project categories.
- `src/styles/tokens.css`: palette, typography, spacing, and shared dimensions.
- `src/styles/shell.css`: responsive header, navigation, footer, and page shell.
- `src/styles/home.css`: diagonal hero and illustrative portfolio visual.
- `src/styles/projects.css`: category controls, project cards, and case studies.
- `src/styles.css`: base elements, shared components, and page layouts.
- `public/images/`: site-owned assets, including the edited professional headshot.
- `docs/`: the rebuild roadmap and portrait provenance.

Routes use hashes (`#/about`) so direct links and refreshes work on GitHub Pages. Vite's base stays `/personal-site/`; use `import.meta.env.BASE_URL` for public asset URLs.

## Deployment and recovery

The GitHub Actions workflow lints, builds, and publishes `dist/` on code pushes to `main` or a manual workflow run. Documentation-only changes skip deployment. Local edits do not deploy the site. Phase 10 covers release and verification.

The old interface was archived locally at `work/rebuild-baseline-2026-10-02/pre-rebuild.zip` before replacement. `work/` is ignored by Git; the prior implementation also remains in Git history. Restore the archive into a separate directory for comparison rather than overwriting ongoing rebuild work.
