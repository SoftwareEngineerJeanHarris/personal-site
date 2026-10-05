# Portfolio rebuild — 10 phases

## Approved direction

- **Diagonal Momentum**, the first white/red concept in the second set: white/off-white surfaces, black text, red accents, condensed headlines, diagonal bands, project imagery, and restrained floating cards.
- The homepage promotes Jean-Michael Harris and his portfolio.
- Navigation: **Home / Projects / About / Contact**. Contact replaces Writing.
- Categories: **Kotlin Android**, **C# .NET**, **JS React**, **Offensive Security Cyber**.
- About uses the professional suit-and-tie portrait created from the supplied photo.
- Keep React, TypeScript, Vite, this repository, and GitHub Pages at `/personal-site/`.
- Sentinel API and Boundary Studies in the earlier mockups were sample content. Do not present them as real projects. Publish verified work, owned screenshots, and genuine links.

## Working rhythm

Complete one phase at a time. Each phase leaves a runnable site, passes lint and the production build, and ends with a short handoff of changes, checks, and the next phase. Review visual milestones locally. Production release is Phase 10.

## 1. Preserve and reset the foundation

**Status: complete locally — 2026-10-02.**

- Archive the old source, public assets, configuration, and deployment workflow; record the baseline Git commit.
- Replace the old monolithic interface and styles with separate page, layout, and data modules.
- Establish Home, Projects, About, Contact, and a not-found view using static-host-friendly hash routes.
- Centralize the four categories and verified profile links.
- Add the generated portrait to the starter About page.
- Preserve the `/personal-site/` base and deployment configuration.

Acceptance: lint/build pass; routes load and refresh; the portrait resolves under the deployment base; no active old hero references or fictional mockup projects.

Verified: `npm run lint` and `npm run build` passed. The production preview was checked under `/personal-site/`: all four pages, active navigation, route focus, About/Contact refresh, browser back navigation, and the not-found view. The portrait loaded at its deployment-relative URL. All four pages fit a 320px browser viewport without horizontal overflow. No browser errors or warnings were reported. The published site was inspected and still serves the prior design.

## 2. Build the visual system and shared shell

**Status: complete locally — 2026-10-02.**

- Refine palette, typography, spacing, button treatments, and content width against the approved concept.
- Finish responsive navigation, wordmark, active states, footer, and keyboard focus treatment.
- Establish reusable section headings and layout primitives; consider self-hosting fonts.

Acceptance: consistent shell at 320, 375, 768, 1024, and 1440 pixels; clear keyboard navigation; no overflow or clipped text.

Implemented: centralized design tokens, shared `SectionHeading` and `ActionLink` components, a responsive wordmark/header, outlined Contact navigation, an accessible mobile menu, and a shared footer. Mobile navigation closes on selection or Escape and resets at desktop widths. Escape restores focus to the menu button; page navigation and the skip link focus the content. Google-hosted fonts retain `display=swap` and now use preconnect hints; self-hosting remains a release optimization.

Verification: lint and production build pass. All four pages fit 320, 375, 768, 1024, and 1440 pixel browser widths without horizontal overflow or clipped elements. Keyboard menu activation, Escape, route selection, skip navigation, active states, and footer links were exercised. Browser logs contained no errors or warnings.

## 3. Recreate the Diagonal Momentum homepage

**Status: complete locally — 2026-10-05.**

- Build the two-column hero, condensed headline, and red emphasis.
- Add diagonal red and pale bands, project imagery, and floating project details.
- Connect the primary action to Projects and the secondary action to About.
- Reflow visuals for small screens and respect reduced motion.

Acceptance: recognizable match to the approved concept, clear portfolio call to action, no misleading metrics. Use a labeled temporary visual only until a real project asset is available.

Implemented: two-column hero with a condensed black/red headline, diagonal bands, a labeled interface illustration, and floating detail cards. The hero actions open Projects and About; discipline links open their matching categories. Mobile layouts stack the composition. The illustration remains temporary until Phase 6 supplies real featured-project imagery.

Verification: lint/build pass; desktop and small-screen visual review completed. Homepage widths 320–1440px were checked for overflow. Existing reduced-motion rules apply to the new links.

## 4. Build the four-category project browser

**Status: complete locally — 2026-10-05.**

- Add all-projects and category views for Kotlin Android, C# .NET, JS React, and Offensive Security Cyber.
- Create reusable cards and accessible category controls with deep-linkable selection.
- Connect homepage categories to the correct project view.
- Handle empty categories honestly and preserve browser history behavior.

Acceptance: filters work with keyboard and pointer; selections survive refresh; no fabricated work fills empty categories.

Implemented: category links with counts and current-selection state, URL-based filters, reusable project cards, homepage category entry points, and honest empty states. Unknown categories fall back to all projects with an explanation. Filtering preserves control focus and browser history.

Verification: pointer and Enter activation, selected-category refresh, browser back, all/empty category recovery, and responsive project layouts at 320, 375, 768, 1024, and 1440px. Lint/build pass.

## 5. Create project case-study pages

**Status: complete locally — 2026-10-05.**

- Define typed project records: title, category, summary, role, stack, screenshots, repository/demo links, problem, approach, and outcome.
- Build a reusable detail page with optional sections and accessible images.
- Handle private work, missing demos, and invalid project URLs gracefully.

Acceptance: one representative detail page works end to end; missing optional fields produce no broken links or empty sections.

Implemented: typed project records and deep-linked case studies with role, status, stack, optional repository/demo links, problem, approach, screenshots, and outcome. The first record documents this portfolio rebuild using verified local implementation details. It has no live-demo or screenshot field yet, so those sections are omitted. Unknown project links show a recovery page; Projects stays active in the navigation.

Verification: card-to-detail navigation, detail refresh, category return link, invalid project URL, document titles, content focus, optional-field omission, and responsive layouts at 320, 375, 768, 1024, and 1440px. Lint/build pass; browser logs are clear.

## 6. Curate real portfolio content

**Status: complete locally for the approved initial selection — 2026-10-05.**

- Review public repositories and select representative projects with the user.
- Gather screenshots, contributions, design decisions, and outcomes that can be shared.
- Populate the four categories where genuine work is available.
- Present offensive-security projects as owned or authorized lab work, including methodology and remediation context.
- Replace draft material and temporary visuals with verified content.

Acceptance: claims and links are verified; no confidential workplace code, data, screenshots, or invented results are included.

Implemented: the user approved AndroidPrint, LookandBook API, Fresh Start Bank, and this portfolio rebuild. Public descriptions and relevant source files were reviewed and linked from the case studies. Prototype scope and untested runtime behavior are stated explicitly. Actual local portfolio imagery replaces the homepage illustration and appears in its card/detail page. Decorative category art is used for projects without verified screenshots. No offensive-security lab was identified in the public inventory; that category remains empty. Evidence and optional future runtime screenshots are recorded in `docs/portfolio-curation.md`.

Verification: curated details, repository/source destinations, category counts, image loading, and all four case-study routes checked. Homepage, Projects, About, and case studies fit 320, 375, 768, and 1440px widths. Lint/build pass; final browser logs are clear.

## 7. Finish the About page

**Status: complete locally — 2026-10-05.**

- Build the final portrait-led composition in the approved visual style.
- Refine career story, engineering strengths, and security interests.
- Add a résumé link when an actual résumé is supplied.
- Optimize portrait delivery while preserving the generated original.

Acceptance: likeness and presentation reviewed; biography accurate; portrait responsive and accessible.

Implemented: portrait-led composition with a diagonal red frame, condensed headline, retained career biography, four strengths, and Projects/Contact actions. The existing generated face and suit image is preserved; delivery uses responsive 480px/960px WebP derivatives with meaningful alt text and explicit dimensions. No résumé link was added because no résumé was supplied.

Verification: desktop/mobile composition, portrait loading and aspect ratio, heading structure, and navigation checked. The portrait derivatives are approximately 26KB and 94KB; the original remains preserved. Lint/build pass.

## 8. Finish Contact

**Status: complete — 2026-10-05.**

- Design for professional opportunities and collaboration.
- Keep verified profile destinations; add a public email only when supplied for publication.
- If a form is desired, select a delivery service and implement validation, success/error feedback, and spam protection. GitHub Pages alone cannot process a contact form.

Acceptance: every contact method works; no placeholder addresses or simulated submissions.

Implemented: polished LinkedIn/GitHub contact cards with clear destinations, opportunity/collaboration copy, and discussion topics. No public email or form was supplied, so the page uses the existing verified profile methods. External destinations and keyboard behavior were reviewed.

## 9. Accessibility, performance, and release preparation

**Status: complete — 2026-10-05.**

- Check keyboard use, headings, focus, contrast, alternative text, reduced motion, and touch layouts.
- Optimize fonts, portrait, project imagery, and bundles.
- Finalize metadata, favicon, social preview, and SEO expectations for hash routes.
- Test navigation, deep links, refresh, history, and unknown paths; add targeted automated checks for important flows.

Acceptance: lint/build and relevant tests pass; no unresolved console errors, broken assets, layout problems, or inaccurate content.

Verified: lint/build pass; production dependency audit reports zero vulnerabilities. Fifty-five route/viewport combinations (11 routes at 320, 375, 768, 1024, and 1440px) pass overflow, single-H1, missing-alt, broken-image, and duplicate-ID checks. Mobile menu Enter/Escape and skip-link focus were exercised. Category history/refresh and invalid routes were checked. Primary text/accent contrast meets WCAG AA for normal text; reduced-motion styles suppress transitions and animations.

Optimized: self-hosted WOFF2 fonts with licenses, critical font preloads, responsive WebP portrait, lightweight certificate previews, retained original PDFs, and removed unused React Icons dependency. Added canonical/Open Graph/Twitter metadata and a 1200×630 social image. Hash routes share the root canonical/social metadata; per-route SEO prerendering is outside this release. CI now lints before building.

## 10. Release and verify GitHub Pages

**Status: release prepared — 2026-10-05; deployment verification pending.**

- Review the final diff and release checklist; create a release commit/PR as appropriate.
- Confirm Pages uses the repository's Actions deployment workflow.
- Publish the reviewed build, then verify the live home, categories, case studies, About, Contact, and assets under `/personal-site/`.
- Record the deployed commit and rollback procedure.

Acceptance: the live URL serves the reviewed design and the prior revision can be restored.

## Recovery and current state

- Local backup: `work/rebuild-baseline-2026-10-02/pre-rebuild.zip`.
- Baseline commit: `work/rebuild-baseline-2026-10-02/git-head.txt`.
- Retired raster assets: `work/rebuild-baseline-2026-10-02/retired-assets/`.
- The backup directory is ignored by Git; prior source also remains in Git history.
- Phases 1–9 are complete. Phase 10 publishes and verifies the reviewed build.
- Starter pages do not count as completion of later design/content phases.
