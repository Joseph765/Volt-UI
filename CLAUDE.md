# Moth UI

A polished, dark-first design system for **Svelte 5**, plus its documentation site. The project was previously
called "Volt UI" and is relaunching as **Moth**, a brand-new design system. Don't add Volt references, migration notes
or changelog entries for the rename. The local repo folder is still `Volt-UI`; the GitHub repo is
`Joseph765/moth-ui` (https://github.com/Joseph765/moth-ui).

- Package: `moth-ui-svelte` (`package.json`). Docs site: `https://moth-ui.com`.
- Library: `src/lib` (published as `dist/` via `svelte-package`). Docs site: `src/routes` (SvelteKit).
- Consumers import `moth-ui-svelte` for components and `moth-ui-svelte/css/index.css` for styles. There is no
  `$moth` alias any more. Docs code snippets must use these imports; docs pages themselves import from `$lib`.

## How the docs site is laid out
**Keep the docs simple.** The gold standard for simple design system docs is the **Geist Design System**
(Vercel, https://vercel.com/geist). When in doubt, do what Geist does: short pages, a heading, a sentence or two,
an example, and nothing extra.

- **Getting Started:** install and setup.
- **Foundations:** the tokens and how to use them (Colors, Typography, Spacing & Layout, Surfaces). Each page
  explains when to use which token and lets people copy token names.
- **Components:** one page per component (Geist style), in this order:
  1. `h1` title and one-line description.
  2. One section per example, all shown at once (no example-switching `Select`): an `h2` (e.g. "Variants",
     "Sizes", "With icon", "Disabled", "Full width", "Link") with an `id`, one or two sentences on when and how to
     use it, then its `CodeExample`. The first section is the basic one (for Button, the four variants).
     Component-specific usage guidance goes in these sentences, not in Guidelines or a separate Usage section.
  3. **API reference** (`h2`, `id="api-reference"`): the props table.
  - Every component page follows this (Button was the model). Pages without props (Code, Divider) have no API
    reference. All examples render at once, so radios in different sections need different `name`s (e.g.
    `testRadio-hint`) and ids must be unique across the page; the code strings can keep simple names.
- **Guidelines:** hidden from the nav for now (commented out in `src/routes/+layout.svelte`; `/guidelines` still
  exists and is in the sitemap). The whole section (page, nav group, sitemap entry) will be deleted later, once
  its content has moved; keep it as is until the user asks. Being emptied. Each part of the Overview page moves to the component page or Foundations page it
  belongs to (e.g. button hierarchy → Button's Variants section). Done so far: button hierarchy.

## Current goal: simplify the docs site
We're simplifying the documentation site. Goals so far:
- **Foundations** nav group (after Getting Started, open by default) holds the core pages. It replaced the old
  Design Tokens page (`/tokens`) and Guidelines → Color (`/guidelines/color`), both removed on purpose. Shared
  docs helpers live in `src/routes/foundations/`: `TokenCopy.svelte` (copy button for a token) and
  `ColorScales.svelte` (the palette grid).
- **Foundations → Colors** (`/foundations/colors`). Layout: title + one-line description, the full palette (`ColorScales`), then one section per
  role (Surfaces, Text, Borders, Accent, Status). Each section is a callout diagram, short copy on when to use
  which token, then a list of its tokens (swatch, what it's for, copy button).
- **Foundations → Typography** (`/foundations/typography`). Layout: the two fonts (Geist Mono is stated as code-only),
  the type scale (one row per size with its sample and its three paired tokens: font size, line height, letter
  spacing, plus a CSS snippet using a set together), then font weights with when to use each.
- **Foundations → Spacing & Layout** (`/foundations/spacing-and-layout`). Layout: the scale (true-size block, name and px, when to use, copy button), then "In practice": a static profile card
  with its spacing drawn as gray stripes and each step tagged in a gutter (label → field `s`, field → hint `xs`,
  between fields `m`, before actions and card padding `l`, between buttons `s`).
  Then "Control height" (`--m-control-height`): a static row (field, select, secondary and primary button) between
  dashed guides with the height marked, copy on when to use it (large buttons are the exception), and the token.
  There's no separate Size page; it was merged in here on purpose.
  Then "Breakpoints": rows with name and px, what each is for with a bar to scale, and the token; copy says they're
  min-widths (phones first), cap `Container` sizes, and that media queries need the rem value (CSS variables don't
  work there), with a CSS snippet. The sidebar starts at `l`.
- **Foundations → Surfaces** (`/foundations/surfaces`, named "Surfaces", not "Materials") covers how surfaces are
  drawn. Sections: "Surfaces don't have borders"
  (do/don't with a mini card; the do/don't canvas is the page background here so the card reads as on a page; the
  `prefers-contrast` exception), "When to use a border" (form controls, dividers, soft status components; field
  rest/hover/focus demo; border tokens with copy), and "Border radius" (sharp, default, full with what uses each).
- **Code example previews** (`.m-code-example` in `components.css`) are a dot-grid canvas on
  `--m-color-background` (same dots as the callout diagrams) with `--m-space-xl` padding, not a raised surface,
  so components show on the color they normally sit on (cards, tables and fields are surface-colored). The area
  is marked by a soft inset glow (gray-4, 64px blur) around its inside edge. Dots alone made it too hard to tell
  from the page; a light from the top only was tried and lost the bottom and side edges.

## Code conventions
- **Naming:** every class and token is prefixed `m-`, e.g. `--m-color-text` and `.m-button`. Never use `v-`.
- **Svelte syntax: Svelte 5 everywhere**, library and docs (including code-example strings). Use `$props()`,
  `$state`, `$derived`, `$effect`, `$bindable()` (value, checked, indeterminate, group), snippets with
  `{@render}` instead of slots, and callback props / `onclick`-style attributes instead of `on:click`. No
  `export let`, `$:`, `<slot>`, `slot="…"`, `let:`, `<svelte:fragment>` or `createEventDispatcher`.
  - Snippet names: `children` (default), `icon`, `start`, `end`, `prefix`, `suffix`, `header`, `headerEnd`, `logo`,
    `mobileLogo`. Nav `icon` snippets receive `animate`: `{#snippet icon(animate)}<Rocket {animate} />{/snippet}`.
  - Callback props: `onclick`, `onchange`, `onkeydown` (forwarded to the element), `LayoutNav onclose`.
    `Tabs onClick` and `Toast onDismiss` keep their names.
  - In code-example template strings, escape a literal `$` before `{` as `\${` (e.g. a `$` prefix snippet).
- **Where styles live:**
  - Component CSS: `src/lib/css/components.css`.
  - Tokens: `src/lib/css/tokens.css`.
  - Global and page styles: `src/lib/css/index.css`.
  - Code highlighting: `src/lib/css/highlight.css`.
- **Docs component pages** (`src/routes/components/<name>/+page.svelte`):
  - Layout: an `h1` title (`<Text size="3xl" weight="black" as="h1">`), one `h2` section per example (short copy +
    `CodeExample`), then "API reference" with the props table (Property / Description / Type). See "How the docs
    site is laid out"; Button is the model.
  - Table rows: props first, then snippets (Type `Snippet`), then callback props (Type `function`, e.g.
    `onclick`). Pages covering several components prefix the name, e.g. `TableCell align`.
  - Document only callbacks a component actually accepts. Check the source.
  - Bindable props are listed by their plain name with "Use `bind:value`/`bind:checked`" in the description.
    Exception: a prop that only makes sense bound is listed as written, e.g. Radio's `bind:group`.
  - Code-example strings show consumer imports (`moth-ui-svelte`, `@lucide/svelte`). Icon-only buttons in examples
    get an `aria-label`.
- **API changes:** breaking changes are fine before launch (no migration notes). Record notable changes in
  `CHANGELOG.md` under the current `package.json` version. `[0.2.0]` (marked Unreleased) covers everything since the 0.1.0 release;
  add to it until it ships. Recently removed on purpose: the `Icon` component,
  `Container`'s `id` prop, and the Card `ghost` and Button `ghost` variants.
- **`src/routes/components/components.json`** drives the nav, the All Components cards, the landing showcase,
  the sitemap and each component page's SEO. Card previews are static HTML. Use `<span>`/`<div>`, never
  `<button>`/`<a>`, because they sit inside a link. Close every tag (an unclosed `<svg>` broke hydration once).
- **Page-level `Container`s** on the docs site use `align="center"`.
- **Version label:** the docs sidebar shows `v{version}` next to the logo, imported from `package.json` in
  `src/routes/+layout.svelte`. `vite.config.js` allows `package.json` in `server.fs.allow`; without it the dev
  server 403s the import and hydration breaks (SSR still looks fine).
- **SEO:**
  - Every page renders `src/routes/Seo.svelte`; component pages get it from `components/+layout.svelte`.
  - `static/robots.txt` and `src/routes/sitemap.xml/+server.js` list the routes. Add new pages there.
  - `/form-preview` and `/examples/*` (dashboard, settings, tasks, forms, focus) are private design test benches with
    `noindex`, disallowed in robots.txt and not in the nav or sitemap. They're realistic app screens for checking
    how the system holds up. Use them (and add to them) when testing component changes.

## Design decisions (keep consistent)
- **Accent purple is rare:** primary actions and selected state only (checked, active tab or nav item, text
  selection). No decorative purple, and gray everywhere else (focus included). See the Guidelines section
  (`src/routes/guidelines`).
- **Guidelines section:** a nav group like Components. `/guidelines` is the Overview page (button hierarchy,
  accent, focus, forms, icons, dark only). Which color token to use where lives on Foundations → Colors. New
  guideline pages go in the nav group and the sitemap.
- **Callout diagrams** (`src/routes/foundations/colors/CalloutDiagram.svelte`, docs-only), Nord style: token pills
  (swatch + name) on the left, each level with a ring on the left edge of its part, joined by a short straight line.
  The demo runs off the right edge (cropped), so it fits phones; narrow figures drop the `--m-color-` prefix from
  the pills. Space marked parts a pill's height apart. Marks can share an element via `target`; the diagram
  re-lays out when its marks change. The figure has no border: it's a dot grid on the page background
  (`::before`, faded out towards the edges), and the whole figure fades out on the right where the demo is cropped.
  Only `prefers-contrast: more` gives it an edge. Used for every section (Status has one Banner with a Status select + Weak/Strong
  radios; the demo adds a border so it can be labelled). One token per row: a button's fill and label share a
  height, so Accent labels the checkbox's fill and the button's label.
- **Do/don't examples** (Carbon style): a surface card with a 4px status bar on top (success / danger) and a round
  badge (check / cross, in the on-color) in the corner; the example sits inside on a canvas in the page background
  color (so components look as they do on a page), the caption sits under the card. Use
  `src/routes/components/DoDont.svelte` (`kind`, `caption`, children). Code examples there hide the copy button.
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
- **Borders:** every border at rest uses `--m-color-border`, form controls (input, select, textarea, checkbox,
  radio) included. There's no `--m-color-border-control`: it was removed on purpose, because in
  `prefers-contrast: more` `--m-color-border` (gray-8, 3:1) is already enough for field edges. Field states keep
  their own tokens: `--m-color-border-control-hover` and `--m-color-border-control-focus`.
- **Focus ("Lamplight", chosen on `/examples/focus`, which keeps the alternatives):** one indicator on every
  focusable element: `--m-shadow-focus`, a tight 3px ring plus a wide soft glow, both mixed from
  `--m-color-focus-ring` (`--m-gray-12`). Focused fields also turn their border `--m-color-border-control-focus`
  (`--m-gray-12`) and lift their fill to `--m-color-surface-raised`; hovered fields use
  `--m-color-border-control-hover` (`--m-gray-9`), so rest → hover → focus reads clearly. Each focus rule also sets
  `outline: 2px solid transparent` so forced-colors mode (which drops shadows) still shows focus. Elements with
  their own shadow list both (button halo, tab list's bottom line, docs glow cards); tertiary's halo is a no-op
  shadow, not `none`, so the list stays valid. The radio glow hugs the circle. Moonlit (purple focus) was tried
  and dropped because it spent the accent on focus. Removed on purpose: the old gray-10 focus, the 2px focus
  outlines, `--m-color-focus-border` and `--m-shadow-control-focus`.
- **Form fields:**
  - Subdued: `--m-color-surface` fill with a gray border, so actions stand out. Disabled is flat with dimmed text.
  - Hints and errors sit 4px under the field.
  - Fields and medium buttons share `--m-control-height` (36px). The copy button is a 36px circle.
- **Cards:** borderless `--m-color-surface` with `--m-radius`. There are no card variants (`ghost` was removed).
- **No borders on cards or card-like areas, anywhere (library and docs).** Surfaces separate content by their
  fill, not an outline. This includes docs-only boxes like diagrams, demo areas and token lists. Borders are only
  for edges with a job (form controls, dividers, soft status components). The one exception is
  `prefers-contrast: more`, which adds a `--m-color-border` edge to surfaces.
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
  - Esc, a click on the blurred content, or a click on a link in the header (e.g. the mobile logo) closes the nav
    via `LayoutNav onclose`. Other header clicks don't (the menu button toggles it). The blurred content has
    `pointer-events: none`, so that click doesn't also follow a link.
  - The desktop logo area has the page background and sits above the nav, so a scrolling nav passes under it.
  - `LayoutNav footer` (snippet): global actions (user, settings, theme switcher) pinned to the bottom of the
    sidebar and the drawer, below a `--m-color-border` divider (a divider, so it's allowed). The nav renders
    `.m-layout-nav-items` (scrolls on its own) and `.m-layout-nav-footer`; on desktop the nav has a fixed
    `height` (window below the logo) so the footer sits at the bottom of the window. The footer lines up with the
    items (divider starts where they do, content where their icons do).
  - The mobile drawer's `::after` carries its fill (and right border) 100vh below its bottom edge. iOS Safari's
    floating toolbar shows the page under it, and a fixed `bottom: 0` drawer stops above it, which left a black bar
    under the drawer. Don't put `overflow` on `.m-layout-nav` (it would clip this); the items div scrolls instead.
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
- **Links:** hover only removes the underline. A brighten-to-gray-12 hover (incl. banner links) was tried and
  reverted on purpose.
- **Component API notes:**
  - `Text` takes `class` (style it from a page with `:global(...)`) and `id`.
  - `TableCell` takes `colspan` (e.g. a full-width "No results" row).
  - `Radio` supports `bind:group` (one variable on every radio in a set) and takes `onchange`. Without
    `bind:group`, `checked` works as before.
  - `Card` doesn't space its children: wrap multiple children in `<Flex direction="column" gap="l">`.
  - `Progress` (`label`, `value`, `max` = 100): label and percentage (mono, weak) above a 6px bar; track
    `--m-color-neutral-weak`, fill `--m-gray-11` (gray, not accent). The header is `aria-hidden`; the track is the
    `role="progressbar"` with `aria-label` and `aria-valuetext`. Built from the dashboard example's Goals bars (the
    dashboard now uses it). Doesn't use `$props.id()`, which needs Svelte 5.20 (peer dep is `^5.0.0`).
  - `Avatar` (`name`, `src`): one size for now (32px circle, `.m-avatar`). Letter version: first letter of `name`
    on `--m-color-neutral-weak` (gray, not accent); image version: `src` cropped with `object-fit: cover`, falls
    back to the letter on error. Kept deliberately simple; sizes etc. can come later. The docs image example uses
    `static/avatar-example.svg`. The docs nav footer shows `<Avatar name="Guest" />` next to the ThemeSwitcher.
- **Icons:**
  - There is no `Icon` component; it was removed on purpose. Apps use Lucide (`@lucide/svelte`), documented in
    Guidelines → Icons and Getting Started.
  - Sizes: 16px inline and in medium controls, 20px in banners and large buttons, 24px standalone.
  - Components that inline Lucide SVGs carry a comment pointing to `THIRD_PARTY_NOTICES.md` (ships in the package
    via `files`).
  - `@lucide/svelte` and `@jis3r/icons` are docs-only devDependencies. The docs nav uses `@jis3r/icons`
    (movingicons.dev, animated Lucide). NavItem/NavGroupItem pass `animate` to the `icon` snippet (true on hover or
    focus). Guidelines → Icons says to keep animated icons to navigation.
- **Code highlighting** (`src/lib/css/highlight.css`, highlight.js with `language-xml`, which highlights `<script>`
  as JS): Geist Mono at `--m-font-size-s`, line-height 1.7, ligatures off. Mostly grayscale with three soft hues
  from the raw step-11 scales (syntax colors are an illustration, not UI): component/tag names and imported
  components `--m-info-11`, strings and attribute `{expressions}` `--m-success-11`, keywords `--m-danger-11`,
  numbers `--m-warning-11`; brackets `--m-color-text-weaker`, attributes `--m-color-text-weak`, comments weaker and
  italic. No accent purple in code (it means primary/selected). Only the classes the snippets produce are styled.
  CSS snippets pass `language="css"` to `CodeExample` (default `xml`): selectors `--m-info-11`, properties
  `--m-info-12` (a pale tint; all-gray declarations looked bad), `var()`, at-rules and `!important` coral, numbers
  yellow, and custom properties (`--m-…` token names) `--m-success-11`. highlight.js leaves custom properties as
  plain text, so `CodeExample` wraps them in `.hljs-variable` after highlighting (CSS only).
  `CopyCode` (one-line commands) can't use highlight.js (it's a docs-only devDependency, and its bash grammar
  doesn't color `npm install …`), so it tokenizes the command itself in the same colors: command `--m-info-11`,
  subcommand plain, arguments `--m-success-11`, flags weaker (`.m-copy-code-*` in `components.css`).
- **Text selection:** `--m-color-highlight` (`--m-accent-7`) everywhere.
- **Solid fills:** step 9 of a scale is the solid color. Components use the semantic tokens (`--m-color-accent`,
  `-danger`, `-info`, `-success`, `-warning`, `-neutral`), not raw `-9` steps. Text and icons on them use the
  matching `--m-color-text-on-<status>`. `--m-color-text-inverse` is for light fills (e.g. a lit button).
  Soft status components (e.g. a non-strong badge) use the `-weak` set: `--m-color-<status>-weak` fill,
  `--m-color-text-on-<status>-weak` text and `--m-color-border-<status>-weak` border.
- **More contrast:** `@media (prefers-contrast: more)` in `tokens.css` only overrides tokens. Text, borders and
  status borders move up so text reaches 4.5:1 and control edges 3:1 on `--m-color-surface`, and focus becomes a
  crisp gapped ring instead of the glow. Keep new color tokens inside those bars there too. Cards and tables
  (normally borderless) get a `--m-color-border` edge in this mode, set in `components.css` (so does `CopyCode`).
  Every docs surface block gets the same edge: code examples (`highlight.css`), component cards (`.glow-card` in
  `src/routes/glow.css`) and each page's own surface boxes (a `prefers-contrast` block at the end of that page's
  styles). Add one for new ones.
- **Themes: dark by default, light on request.** `data-theme="light"` on `<html>` (or any element, to theme a
  part of the page) switches every color token. How `tokens.css` is built:
  - Raw scales: dark on `:root, [data-theme="dark"]`, light on `[data-theme="light"]`. All are Radix Colors:
    Mauve (gray), Violet (accent), Blue (info), Green (success), Yellow (warning), Red (danger). Dark gray is
    customized (darker step 1 for the page; step 3 is Radix 2). Danger, info and success use a darker step 9 in
    both themes so white text on them passes 4.5:1. Violet and Yellow are unchanged.
  - Semantic tokens are declared on `:root, [data-theme]`, not just `:root`, so a nested theme resolves them
    against its own scales. A `[data-theme="light"]` block then overrides what doesn't mirror: page
    `--m-gray-3` with white cards (`--m-color-surface: #ffffff`), raised `--m-gray-4` (gray-3 matched the page,
    so table headers looked like holes), borders a step or two up
    (`--m-color-border` gray-6), `--m-color-text-weaker` a gray-10/11 mix (4.6:1 on white), placeholders gray-9,
    text on warning gray-12, neutral solid gray-11, highlight accent-5.
  - `prefers-contrast: more` has a light block too (measured on white: borders gray-9, weak status borders step 11).
  - Theme-dependent component colors that can't come from a semantic token are variables in the same blocks
    (`--m-toggle-track`, `--m-toggle-knob`), so nested themes work. Don't use `[data-theme="light"] .m-x` selectors.
  - Everything else follows because components use scale steps by their Radix role (e.g. the button "lamp"
    gradient becomes deep ink in light mode, with light text via `--m-color-text-inverse`, which means "text on an
    inverted fill").
  - `index.css` sets `color` on every `[data-theme]` element so a nested theme's text doesn't inherit the page's.
  - **`ThemeSwitcher`** (library component, `src/lib/components/ThemeSwitcher.svelte`, styles `.m-theme-switcher*`
    in `components.css`), modeled on the Geist docs: a pill of three icon buttons (System, Light, Dark; inlined
    Lucide icons) with the choice on a gray circle (gray, not the accent: a preference, not a primary selection). A
    radio group (arrow keys move the choice). Sets `data-theme` on `<html>`; System follows `prefers-color-scheme`
    live. Saves Light/Dark under `storageKey` (default `moth-theme`, `""` = don't save; System removes it). Props:
    `storageKey`, `label`, `onchange`. All instances share module-level `$state`, so they agree.
  - The library defaults to dark (no `data-theme` = dark). The docs site defaults to System: an inline script in
    `src/app.html` resolves the saved choice or the OS setting before first paint (the same snippet is on the
    ThemeSwitcher page, "Avoid a flash"). The docs put the switcher in the `LayoutNav` footer (sidebar on
    desktop, drawer below 66rem). It used to sit top right of the page and in the mobile header; moved on purpose.
    `MothLogo` follows the page theme (`theme="auto"` default).
  - Write copy that's true in both themes ("its own fill", "the text color"), not "lighter" or "near-white".
- The stylesheet loads Outfit and Geist Mono from Google Fonts and styles `html`/`body` globally (documented on
  Getting Started, along with themes).

## Docs scope decisions
- No customization docs: Moth is meant to be used as-is, not customized. Switching between the built-in dark and
  light themes is documented (Getting Started → Themes).
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
  - The first page load after starting the server can log a spurious hydration warning (or a failed dynamic
    import while Vite optimizes deps). Reload before concluding there's a real problem.
  - Playwright's browser reports no fine pointer, so `@media (pointer: fine)` hover rules never apply there. Test
    them by applying the rule's declarations directly (or via a class) instead of hovering.
  - `browser_click` sometimes times out even though the click happened; check the resulting state.
  - In zsh, quote globs passed to grep (`--include='*.svelte'`).
- The user commits and pushes themselves. Don't commit unless asked.

## Open items / ideas not yet done
- Status text in components should use `--m-color-text-<status>` (as Foundations → Colors says), but `.m-text.is-danger`
  and friends in `components.css` still use the fill tokens (`--m-color-danger` etc.). Switch them over.
- If button text still "drops" after hovering, fake the grow with the light layer instead of `transform`.
