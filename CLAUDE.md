# Moth UI

A polished, dark-first design system for **Svelte 5**, plus its documentation site. The project was previously
called "Volt UI" and is relaunching as **Moth**, a brand-new design system. Don't add Volt references, migration notes
or changelog entries for the rename. The local repo folder is still `Volt-UI`; the GitHub repo is
`Joseph765/moth-ui` (https://github.com/Joseph765/moth-ui).

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
  - Bindable props are listed by their plain name with "Use `bind:value`/`bind:checked`" in the description.
    Exception: a prop that only makes sense bound is listed as written, e.g. Radio's `bind:group`.
  - Code-example strings show consumer imports (`moth-ui-svelte`, `@lucide/svelte`). Icon-only buttons in examples
    get an `aria-label`.
- **API changes:** breaking changes are fine before launch (no changelog, no migration notes). Recently removed on
  purpose: the `Icon` component, `Container`'s `id` prop, and the Card `ghost` and Button `ghost` variants.
- **`src/routes/components/components.json`** drives the nav, the All Components cards, the landing showcase,
  the sitemap and each component page's SEO. Card previews are static HTML. Use `<span>`/`<div>`, never
  `<button>`/`<a>`, because they sit inside a link. Close every tag (an unclosed `<svg>` broke hydration once).
- **Page-level `Container`s** on the docs site use `align="center"`.
- **SEO:**
  - Every page renders `src/routes/Seo.svelte`; component pages get it from `components/+layout.svelte`.
  - `static/robots.txt` and `src/routes/sitemap.xml/+server.js` list the routes. Add new pages there.
  - `/form-preview` and `/examples/*` (dashboard, settings, tasks, forms, focus) are private design test benches with
    `noindex`, disallowed in robots.txt and not in the nav or sitemap. They're realistic app screens for checking
    how the system holds up. Use them (and add to them) when testing component changes.

## Design decisions (keep consistent)
- **Accent purple is rare:** primary actions and selected state only (checked, active tab or nav item, text
  selection). No decorative purple, and gray everywhere else (focus included). See the Guidelines section (`src/routes/guidelines`).
- **Guidelines section:** a nav group like Components. `/guidelines` is the Overview page (button hierarchy,
  accent, focus, forms, icons, dark only); `/guidelines/color` explains when to use each semantic color token.
  New guideline pages go in the nav group and the sitemap.
- **Callout diagrams** (`src/routes/guidelines/color/CalloutDiagram.svelte`, docs-only), Nord style: token pills
  (swatch + name) on the left, each level with a ring on the left edge of its part, joined by a short straight line.
  The demo runs off the right edge (cropped), so it fits phones; narrow figures drop the `--m-color-` prefix from
  the pills. Space marked parts a pill's height apart. Marks can share an element via `target`; the diagram
  re-lays out when its marks change. Used for every section (Status has one Banner with a Status select + Weak/Strong
  radios; the demo adds a border so it can be labelled). One token per row: a button's fill and label share a
  height, so Accent labels the checkbox's fill and the button's label.
- **Do/don't examples** (Carbon style): a surface card with a 4px status bar on top (success / danger) and a round
  badge (check / cross, in the on-color) in the corner; the example sits inside on a raised canvas, the caption sits
  under the card. Code examples there hide the copy button.
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
- **Borders:** form controls (input, select, textarea, checkbox, radio) use `--m-color-border-control`; everything
  else (dividers, card headers, nav, tables) uses `--m-color-border`.
- **Focus ("Lamplight", chosen on `/examples/focus`, which keeps the alternatives):** one indicator on every
  focusable element: `--m-shadow-focus`, a tight 3px ring plus a wide soft glow, both mixed from
  `--m-color-focus-ring` (`--m-gray-12`). Focused fields also turn their border `--m-color-border-control-focus`
  (`--m-gray-12`) and lift their fill to `--m-color-surface-raised`; hovered fields use
  `--m-color-border-control-hover` (`--m-gray-9`), so rest → hover → focus reads clearly. Each focus rule also sets
  `outline: 2px solid transparent` so forced-colors mode (which drops shadows) still shows focus. Elements with
  their own shadow list both (button halo, tab list's bottom line, docs glow cards); tertiary's halo is a no-op
  shadow, not `none`, so the list stays valid. The radio glow hugs the circle. Moonlit (purple focus) was tried
  and dropped because it spent the accent on focus. Removed on purpose: the old gray-10 focus, the 2px focus outlines, `--m-color-focus-border` and `--m-shadow-control-focus`.
- **Form fields:**
  - Subdued: `--m-color-surface` fill with a gray border, so actions stand out. Disabled is flat with dimmed text.
  - Hints and errors sit 4px under the field.
  - Fields and medium buttons share `--m-control-height` (36px). The copy button is a 36px circle.
- **Cards:** borderless `--m-color-surface` with `--m-radius`. There are no card variants (`ghost` was removed).
- **Table:**
  - Names follow HTML: `TableHead` renders `<thead>` (class `m-table-head`), `TableHeader` renders a `<th>` header
    cell (class `m-table-header`, has `align`). They were swapped once on purpose. Don't swap them back.
  - It looks like a card: a surface block with rounded corners and a raised header.
  - Striped and hover rows are translucent tints (cells are transparent).
  - Cells wrap like normal HTML tables; use `TableCell truncate` for single-line cells.
  - The "Inside Card" example was removed.
- **Tabs:** solid accent indicator bar that slides 0.2s; panels fade in.
- **Layout:**
  - The sidebar starts at 66rem (`--m-breakpoint-l`, 1056px), not 82rem, so 1280px laptop windows (1920px at
    150% scaling) get the sidebar instead of the mobile menu. Below that: header, menu button and drawer.
  - The page scrolls the **window**. Header and sidebar use sticky/fixed positioning, so SvelteKit scroll
    restoration works.
  - `Layout` measures its logo height into `--m-layout-logo-height` for the sticky sidebar.
  - The docs Layout demo sits in `.layout-demo`: a fixed-height scroll box with `contain: layout paint`, so the
    drawer stays inside it. It's also a size container, so its sidebar is capped with `100cqh` (the box), not
    `100dvh`.
  - The mobile nav blurs its own Layout's content. The selectors use direct children (`>`), so a nested Layout
    doesn't blur the outer page.
  - Esc or a click on the blurred content closes the nav via `LayoutNav on:close`. The blurred content has
    `pointer-events: none`, so that click doesn't also follow a link.
  - The desktop logo area has the page background and sits above the nav, so a scrolling nav passes under it.
- **Docs component cards** (All Components and the landing showcase):
  - Previews stay grayscale.
  - Hover is a "moth to the light" glow with a fixed position (no cursor tracking): light behind the preview, a
    rim lit brightest along the top, a halo and `scale(1.03)`. It lives in `src/routes/glow.css` (classes
    `glow-card` and `glow-stage`).
- **Nav items:** the selected item is a flat tint, `color-mix(accent-9 35%, transparent)`, with no gradient.
  Card previews use a flat gray tint. Hovering the selected item lights it like the component cards, with a fixed
  light (centered glow and a rim brightest along the top), no cursor tracking and no scale. Unselected items get a
  gray-4 hover. Neither the cards nor the nav track the cursor: that code was removed on purpose.
- **Logo:** both the desktop and mobile logos use `MothLogo` (`src/routes/MothLogo.svelte`, docs-only, not in
  the package). On hover the wings flap twice (CSS `scaleX` on `.wing`, mouse only, off with reduced motion).
- **Toasts:** `ToastGroup` is `position: fixed` (bottom-right of the viewport, `z-index: 10`).
- **Flex:** full width by default, but a `Flex` directly inside a row `Flex` sizes to its content, so title and
  actions groups can sit side by side.
- **Text:** `align` is optional. When omitted, Text inherits its container's `text-align` (e.g. `TableCell align`).
  Explicit `center`/`end` also move the width-capped (`measure`) block with auto margins.
- **Component API notes:**
  - `Text` takes `class` (style it from a page with `:global(...)`) and `id`.
  - `TableCell` takes `colspan` (e.g. a full-width "No results" row).
  - `Radio` supports `bind:group` (one variable on every radio in a set) and forwards `on:change`. Without
    `bind:group`, `checked` works as before.
  - `Card` doesn't space its children: wrap multiple children in `<Flex direction="column" gap="l">`.
  - There are no progress-bar or avatar components; the example pages build their own with page CSS.
- **Icons:**
  - There is no `Icon` component; it was removed on purpose. Apps use Lucide (`@lucide/svelte`), documented in
    Guidelines → Icons and Getting Started.
  - Sizes: 16px inline and in medium controls, 20px in banners and large buttons, 24px standalone.
  - Components that inline Lucide SVGs carry a comment pointing to `THIRD_PARTY_NOTICES.md` (ships in the package
    via `files`).
  - `@lucide/svelte` and `@jis3r/icons` are docs-only devDependencies. The docs nav uses `@jis3r/icons`
    (movingicons.dev, animated Lucide). NavItem/NavGroupItem pass `animate` to the icon slot (true on hover or
    focus). Guidelines → Icons says to keep animated icons to navigation.
- **Text selection:** `--m-color-highlight` (`--m-accent-7`) everywhere.
- **Solid fills:** step 9 of a scale is the solid color. Components use the semantic tokens (`--m-color-accent`,
  `-danger`, `-info`, `-success`, `-warning`, `-neutral`), not raw `-9` steps. Text and icons on them use the
  matching `--m-color-text-on-<status>`. `--m-color-text-inverse` is for light fills (e.g. a lit button).
  Soft status components (e.g. a non-strong badge) use the `-weak` set: `--m-color-<status>-weak` fill,
  `--m-color-text-on-<status>-weak` text and `--m-color-border-<status>-weak` border.
- **More contrast:** `@media (prefers-contrast: more)` in `tokens.css` only overrides tokens. Text, borders and
  status borders move up so text reaches 4.5:1 and control edges 3:1 on `--m-color-surface`, and focus becomes a
  crisp gapped ring instead of the glow. Keep new color tokens inside those bars there too. Cards and tables (normally
  borderless) get a `--m-color-border` edge in this mode, set in `components.css` (so does `CopyCode`). Every docs
  surface block gets the same edge: code examples (`highlight.css`), component cards (`.glow-card` in `src/routes/glow.css`) and each
  page's own surface boxes (a `prefers-contrast` block at the end of that page's styles). Add one for new ones.
- **Dark only:** there is no light theme. The stylesheet loads Outfit and Geist Mono from Google Fonts and styles
  `html`/`body` globally (documented on Getting Started).

## Docs scope decisions
- No customization/theming docs: Moth is meant to be used as-is, not customized.
- No keyboard-support or form-submission explanations on the docs site for now.
- Browser support is stated on Getting Started → Requirements: Chrome/Edge 111+, Safari 16.2+, Firefox 121+.

## Working with the user
- The user often asks "should we…?" or "why…?" questions. Answer with a clear recommendation and the reasons, then
  make only the changes they agree to. Keep scope tight; they'll trim suggestions they don't want.
- Don't stage or commit. If a tool stages something (e.g. `git mv`), unstage it with `git reset -- <paths>`.
- Keep this file updated as decisions change: remove finished open items, record "removed on purpose" decisions.

## Verifying changes
- Type check: `npx svelte-check --tsconfig ./jsconfig.json`. Keep it at 0 errors and 0 warnings.
- Package check: `npm run prepack` (svelte-package + publint).
- **Browser checks:**
  - Start a dev server with `npx vite dev --port 5199`.
  - Check with the Playwright MCP tools; screenshots must go in `.playwright-mcp/` inside the repo.
  - Afterwards, delete `.playwright-mcp` and stop the server with `pkill -f "vite dev --port 5199"`.
  - Hidden tab panels are in the DOM: target `:visible` elements in Playwright.
  - The first page load after starting the server can log a spurious hydration warning. Reload before
    concluding there's a real mismatch.
- The user commits and pushes themselves. Don't commit unless asked.

## Open items / ideas not yet done
- Status text in components should use `--m-color-text-<status>` (as the Color guidelines say), but `.m-text.is-danger`
  and friends in `components.css` still use the fill tokens (`--m-color-danger` etc.). Switch them over.
- If button text still "drops" after hovering, fake the grow with the light layer instead of `transform`.
