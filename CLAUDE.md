# Moth UI

A polished, dark-first design system for **Svelte 5**, plus its documentation site. The project was previously
called "Volt UI" and is relaunching as **Moth**, a brand-new design system. Don't add Volt references, migration notes
or changelog entries for the rename. The repo folder is still `Volt-UI`, and the GitHub repo is still
`Joseph765/Volt-UI`.

- Package: `moth-ui-svelte` (`package.json`). Docs site: `https://moth-ui.com`.
- Library: `src/lib` (published as `dist/` via `svelte-package`). Docs site: `src/routes` (SvelteKit).
- Consumers import `moth-ui-svelte` for components and `moth-ui-svelte/css/index.css` for styles. There is no
  `$moth` alias any more. Docs code snippets must use these imports; docs pages themselves import from `$lib`.

## Code conventions
- **Naming:** every class and token is prefixed `m-`, e.g. `--m-color-text` and `.m-button`. Never use `v-`.
- **Svelte syntax:** library components mostly use legacy syntax (`export let`, slots, `on:click`); some use
  runes. Newer docs-site files use runes (`$props`, `$state`, snippets).
- **Where styles live:**
  - Component CSS: `src/lib/css/components.css`.
  - Tokens: `src/lib/css/tokens.css`.
  - Global and page styles: `src/lib/css/index.css`.
  - Code highlighting: `src/lib/css/highlight.css`.
- **Docs component pages** (`src/routes/components/<name>/+page.svelte`):
  - Layout: an `h1` title (`<Text size="3xl" weight="black" as="h1">`), an example `Select`, `CodeExample`, then a
    props table (Property / Description / Type).
  - Table rows: props first, then slots (Type `slot`), then events (Type `event`). Pages covering several
    components prefix the name, e.g. `TableCell align`.
  - Document only events a component actually forwards. Check the source.
- **`src/routes/components/components.json`** drives the nav, the All Components cards, the landing showcase,
  the sitemap and each component page's SEO. Card previews are static HTML. Use `<span>`/`<div>`, never
  `<button>`/`<a>`, because they sit inside a link.
- **Page-level `Container`s** on the docs site use `align="center"`.
- **SEO:**
  - Every page renders `src/routes/Seo.svelte`; component pages get it from `components/+layout.svelte`.
  - `static/robots.txt` and `src/routes/sitemap.xml/+server.js` list the routes. Add new pages there.
  - `/form-preview` is a private design test bench with `noindex`.

## Design decisions (keep consistent)
- **Accent purple is rare:** primary actions and selected state only (checked, active tab or nav item, text
  selection). No decorative purple, and gray everywhere else. See the Guidelines page (`src/routes/guidelines`).
- **Buttons:**
  - Variants: `default`/`primary` (purple), `secondary` (gray outline), `tertiary` (gray text), `danger`.
    There is no `ghost`.
  - Hover "switches the button on like a lamp":
    - Primary and danger fill with radial white-to-lavender (or red) light, the label turns dark and a halo appears.
    - Secondary gets a white outline and a glow.
    - Tertiary gets a gray pill.
  - Variables: `--m-button-lit-background`, `--m-button-lit-color`, `--m-button-halo`.
  - Buttons grow `scale(1.03)` on hover; full-width ones `1.01`. They use `will-change: transform` to avoid text
    snapping. Hover doesn't follow the cursor.
- **Focus:** one neutral gray everywhere: `--m-color-focus-border` (outline) and `--m-color-focus-ring` (halo on
  fields).
- **Form fields:**
  - Subdued: `--m-color-surface` fill with a gray border, so actions stand out. Disabled is flat with dimmed text.
  - Hints and errors sit 4px under the field.
  - Fields and medium buttons share `--m-control-height` (36px). The copy button is a 36px circle.
- **Cards:** borderless `--m-color-surface` with `--m-radius`. There are no card variants (`ghost` was removed).
- **Table:**
  - It looks like a card: a surface block with rounded corners and a raised header.
  - Striped and hover rows are translucent tints (cells are transparent).
  - The "Inside Card" example was removed.
- **Tabs:** solid accent indicator bar that slides 0.2s; panels fade in.
- **Layout:**
  - The page scrolls the **window**. Header and sidebar use sticky/fixed positioning, so SvelteKit scroll
    restoration works.
  - `Layout` measures its logo height into `--m-layout-logo-height` for the sticky sidebar.
  - The mobile nav blurs the content behind it, and Esc closes it via `LayoutNav on:close`.
- **Docs component cards** (All Components and the landing showcase):
  - Previews stay grayscale.
  - Hover is a "moth to the light" glow with a fixed position (no cursor tracking): light behind the preview, a
    rim lit brightest along the top, a halo and `scale(1.03)`. It lives in `src/routes/glow.css` (classes
    `glow-card` and `glow-stage`).
- **Nav items:** the selected item is a flat tint, `color-mix(accent-9 35%, transparent)`, with no gradient.
  Card previews use a flat gray tint. Hovering the selected item lights it like the component cards, with a fixed
  light (centered glow and a rim brightest along the top), no cursor tracking and no scale. Unselected items get a
  gray-4 hover. Neither the cards nor the nav track the cursor: that code was removed on purpose.
- **Logo:** both the desktop and mobile logos use `MothLogo`. On hover the wings flap twice (CSS `scaleX` on
  `.wing`, mouse only, off with reduced motion).
- **Toasts:** `ToastGroup` is `position: fixed` (bottom-right of the viewport, `z-index: 10`).
- **Text selection:** `--m-color-highlight` (`--m-accent-7`) everywhere.
- **Dark only:** there is no light theme. The stylesheet loads Outfit and Geist Mono from Google Fonts and styles
  `html`/`body` globally (documented on Getting Started).

## Verifying changes
- Type check: `npx svelte-check --tsconfig ./jsconfig.json`. Keep it at 0 errors and 0 warnings.
- Package check: `npm run prepack` (svelte-package + publint).
- **Browser checks:**
  - Start a dev server with `npx vite dev --port 5199`.
  - Check with the Playwright MCP tools; screenshots must go in `.playwright-mcp/` inside the repo.
  - Afterwards, delete `.playwright-mcp` and stop the server with `pkill -f "vite dev --port 5199"`.
- The user commits and pushes themselves. Don't commit unless asked.

## Open items / ideas not yet done
- The All Components page logs a hydration warning because the Button card preview HTML contains `<button>`
  inside the card link. Convert it to `<span>` like the Navigation and Tabs previews.
- Clicking blurred content behind the open mobile nav doesn't close the menu.
- On a phone, the Layout docs page's embedded example opens its drawer over the whole screen, because the drawer
  is `position: fixed`.
- `MothLogo.svelte` lives in `src/lib/components` (so it ships in `dist`) but is docs-only and not exported.
- If button text still "drops" after hovering, fake the grow with the light layer instead of `transform`.
