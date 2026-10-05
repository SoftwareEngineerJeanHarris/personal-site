# Portfolio release — October 5, 2026

- Live site: https://softwareengineerjeanharris.github.io/personal-site/
- Deployed code commit: `2ef7fd0f406d08d0de97001b8b1b69f90b27f412`.
- Successful workflow: https://github.com/SoftwareEngineerJeanHarris/personal-site/actions/runs/37306407224
- Profile README commit: `53de7e09586095df3ff0dae65b4be567150c8fd9` on the profile repository's `master` branch.
- Prior portfolio baseline: `f90317d7bd60ccbef1b9dcea6364e78ea858fef2`.

## Verified

Lint and production build pass locally and in the release workflow. Production-only npm audit reports zero vulnerabilities at release time. Fifty-five route/viewport combinations passed basic layout/DOM checks; mobile menu Enter/Escape, focus restoration, skip link, category selection/history, and invalid routes were exercised. Normal-text contrast ratios are 16.82:1 (primary), 6.23:1 (muted), 5.51:1 (accent/white), and 6.34:1 (dark accent/pale surface).

The public homepage serves the reviewed bundle `index-CIlaP50t.js`. Live verification covered all four category views, all four case studies, About, Contact, refresh, mobile Contact layout, images, fonts, and certificate links. Both public PDF downloads match the local source copies by SHA-256. The public GitHub profile displays Cybersecurity immediately after Languages, its new What I build entry, both credential links, and the five-item lab roadmap.

Contact uses LinkedIn and GitHub. No email address or form service was supplied. HTB write-ups and lab software are in progress/planned; there are no fabricated demos, write-ups, or completed-security project claims. Source-based case studies retain their runtime-review limitations. Hash routes share root canonical/social metadata. No automated claim of full WCAG conformance is made; accessibility checks were targeted and include visual/keyboard review.

## Deployment and rollback

Code pushes to `main` run lint/build and publish through GitHub Pages Actions. Changes restricted to `docs/**` and `README.md` skip deployment, so this verification record can follow the code release without triggering another build.

To restore the prior site, review and revert release commit `2ef7fd0f406d08d0de97001b8b1b69f90b27f412`, then push the revert to `main` and verify the resulting Pages deployment. Do not reset or force-push shared history. The original implementation also exists in Git history and the ignored local archive `work/rebuild-baseline-2026-10-02/pre-rebuild.zip`. Profile README changes can be independently reverted using their profile commit.
