# Initial portfolio curation — 2026-10-05

The user approved AndroidPrint, LookandBookAPIv1, Fresh Start Bank, and this portfolio rebuild as the initial selection. All 31 public repositories were inventoried through GitHub's two repository-list pages. Forks were not presented as original work. No offensive-security lab repository was identified in this inventory; that category remains empty.

## Evidence and scope

| Project | Evidence reviewed | Presentation |
| --- | --- | --- |
| AndroidPrint | [Public repository](https://github.com/SoftwareEngineerJeanHarris/AndroidPrint), stated barcode/ticket printing goal, Kotlin listing, Android `app` and Gradle structure | Proof of concept; printer operation and compatibility not tested |
| LookandBook API | [Repository purpose](https://github.com/SoftwareEngineerJeanHarris/LookandBookAPIv1), controller/data/model directories, [project file](https://github.com/SoftwareEngineerJeanHarris/LookandBookAPIv1/blob/master/LookandBookAPI/LookandBookAPI.csproj) | ASP.NET Core/.NET 8 project with EF Core, in-memory provider, and Swashbuckle; no deployment or client-integration claim |
| Fresh Start Bank | [Public React project](https://github.com/SoftwareEngineerJeanHarris/fresh-start-bank), React migration commit, TypeScript screen files, [Auth component](https://github.com/SoftwareEngineerJeanHarris/fresh-start-bank/blob/main/src/screens/Auth.tsx) | Interface prototype; validation, mode changes, timed status feedback; no real account creation or backend-authentication claim |
| Personal portfolio | Local source, production build, and browser preview in this repository | In-progress local rebuild; public release planned for Phase 10 |

Repository ownership is used as the role for AndroidPrint. Public author/contributor evidence supports the owner/contributor role for the API and React project. No business-impact numbers, production-adoption claims, or confidential employer details were added. Existing About biography was retained and reorganized rather than expanded with unverified career facts.

## Imagery

`public/images/projects/portfolio-case-study.webp` is an actual capture of this portfolio's local case-study page. It was captured through the in-app browser at a 1200px viewport, cropped to the first 900px of page content (1184px excluding the scrollbar), and encoded as WebP. The capture is used in the homepage featured-work panel, portfolio card, and case study. Original captures remain in ignored `work/`.

The other projects use decorative category icons, not invented application screenshots. Their case studies are source-based; actual Android printer output, API runtime behavior, and React application screenshots can be added when those applications are reviewed in operation. The About portrait uses optimized derivatives of the previously generated suit-and-tie image; see `docs/headshot.md`.
