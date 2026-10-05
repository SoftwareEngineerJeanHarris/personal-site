# Diagonal Momentum — shared visual system

The shared shell carries the approved white/red identity across every page. The homepage adds diagonal bands and a real local portfolio capture; project cards and the portrait-led About page carry the same palette into the rest of the site.

## Tokens and typography

`src/styles/tokens.css` owns the palette, font stacks, spacing scale, content width, radii, and interaction duration.

- Page: `#fafafb`; surface: `#ffffff`; primary text: `#19191c`.
- Secondary text: `#5e5d65`; accent: `#ca2338`; accent hover: `#a8192c`.
- Pale accent: `#f9eaed`; neutral border: `#dedde2`.
- Display type: Barlow Condensed 600/700 for large headlines, category headings, and the wordmark.
- Body: DM Sans 400–700 with system fallbacks.
- Layout: 1180px maximum width; fluid 20–60px outer gutters; shared 4px-based spacing scale.
- Controls: pill-shaped action links, compact rectangular mobile controls, at least 44px interaction height.

Phase 9 self-hosts the fonts as WOFF2 under `public/fonts/`, with `display=swap`, system fallbacks, and preloads for the regular body and bold display faces. Official Google Fonts files were converted to WOFF2; both SIL Open Font Licenses are included. CSS asset URLs are rewritten by Vite for `/personal-site/`. Google font requests are no longer required.

## Reusable components

- `SectionHeading`: `eyebrow`, `title`, optional `description`, `level` (1 or 2), and optional heading `id`.
- `ActionLink`: `href`, content, `variant` (`primary`, `outline`, or `text`), and `external` for new-tab external destinations.
- `SiteHeader`: wordmark, current-page state, responsive navigation, and mobile disclosure.
- `SiteLayout`: skip link, shared header, page content, and footer navigation/social links.
- `HeroShowcase`: linked real portfolio screenshot with diagonal bands and floating detail cards.
- `ProjectCard`: category visual, status, linked title, summary, and stack from a typed project record.

Use links for navigation and buttons for actions. Decorative arrows are hidden from assistive technology. Navigation definitions and profile destinations live in `src/data/site.ts`.

## Responsive and keyboard behavior

- Desktop navigation is visible above 680px. Below that, a button exposes the navigation in the normal page flow.
- `aria-expanded` and `aria-controls` identify the mobile disclosure. Hidden links leave the tab order.
- Enter/Space activate the menu; Escape closes it and returns focus to the trigger.
- Route selection closes the menu. Resizing to desktop clears its expanded state.
- The current page has both an accent and a line/fill treatment; footer navigation underlines it.
- The skip link focuses the main content without changing the hash route. Page and case-study changes also focus content. Category-only changes preserve control focus and scroll position.
- Focus rings are red and offset from interactive targets. Reduced-motion preferences remove transitions and arrow movement.
- Footer columns, category grids, portraits, and contact blocks stack on smaller screens.

## Phase 2 checks

All four routes were checked at 320, 375, 768, 1024, and 1440 pixels. No horizontal overflow or clipped elements were found. The mobile menu, Escape focus return, keyboard navigation, current-page state, skip link, and footer navigation were checked against the production build. Lint/build passed and browser logs were clear.
