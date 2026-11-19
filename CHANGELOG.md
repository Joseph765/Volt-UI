# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - Unreleased

### Breaking changes

#### Svelte 5 API
- Events are callback props: `onclick`, `onchange`, `onkeydown` and `LayoutNav onclose` replace `on:click`,
  `on:change`, `on:keydown` and `on:close`. `Tabs onClick` and `Toast onDismiss` keep their names.
- Snippets replace slots. Two were renamed: Card's `header-end` is now `headerEnd`, and LayoutHeader's
  `mobile-logo` is now `mobileLogo`. Nav `icon` snippets receive an `animate` argument
  (`{#snippet icon(animate)}`), true while the item is hovered or keyboard-focused.
- `value`, `checked`, `indeterminate` and `group` are bindable: use `bind:value`, `bind:checked`,
  `bind:indeterminate` and `bind:group`.

#### Renamed design tokens

| Old name | New name |
|---|---|
| `--m-color-text-contrast` | `--m-color-text-inverse` |
| `--m-color-border-info` | `--m-color-border-info-weak` |
| `--m-color-border-success` | `--m-color-border-success-weak` |
| `--m-color-border-warning` | `--m-color-border-warning-weak` |
| `--m-color-border-danger` | `--m-color-border-danger-weak` |
| `--m-color-focus-border` | `--m-color-border-control-focus` |

#### Changed token values
- `--m-info-9`, `--m-success-9` and `--m-danger-9` are darker, so white text on them has enough contrast:
  `#0090ff` → `#0073e0`, `#30a46c` → `#008650`, `#e5484d` → `#d63941`.
- `--m-color-focus-ring` is now solid `--m-gray-12` (was 16% `--m-gray-12`). The glow's softness now comes from
  `--m-shadow-focus`, which mixes it.

#### Layout
- The sidebar now starts at 66rem (`--m-breakpoint-l`) instead of 82rem, so 1280px laptop windows get the sidebar
  instead of the mobile menu.

### Added

#### New design tokens
- **Weak status fills:** `--m-color-neutral-weak`, `--m-color-info-weak`, `--m-color-success-weak`,
  `--m-color-warning-weak`, `--m-color-danger-weak`.
- **Weak status borders:** `--m-color-border-neutral-weak` (the info, success, warning and danger ones are the
  renamed tokens above).
- **Text on solid fills:** `--m-color-text-on-accent`, `--m-color-text-on-neutral`, `--m-color-text-on-info`,
  `--m-color-text-on-success`, `--m-color-text-on-warning`, `--m-color-text-on-danger`.
- **Text on weak fills:** `--m-color-text-on-neutral-weak`, `--m-color-text-on-info-weak`,
  `--m-color-text-on-success-weak`, `--m-color-text-on-warning-weak`, `--m-color-text-on-danger-weak`.
- **Status text on surfaces:** `--m-color-text-info`, `--m-color-text-success`, `--m-color-text-warning`,
  `--m-color-text-danger`.
- **Form control borders:** `--m-color-border-control-hover` and `--m-color-border-control-focus` (at rest,
  form controls use `--m-color-border` like every other border).
- **Focus:** `--m-shadow-focus`, the focus ring used by every focusable element.

#### Light theme
- Set `data-theme="light"` on `<html>`, or on any element to theme just that part of the page. Dark stays the
  default (`data-theme="dark"` works too).
- Every color token switches. The raw scales (`--m-gray-*`, `--m-accent-*` and the status scales) take the light
  versions of the same Radix scales, with the same darker step 9 for danger, info and success. Semantic tokens are
  remapped where light needs it: white cards (`--m-color-surface`) on a light gray page, raised surfaces a step
  darker than the page, borders a step or two stronger, and the faint text steps nudged darker so they still pass
  contrast on white. `prefers-contrast: more` has its own light values.
- The stylesheet sets `color-scheme` per theme (it was always `dark`), and every `[data-theme]` element sets its
  own text color, so a nested theme doesn't inherit the page's.

#### New components
- **Progress:** a slim gray bar with its label and percentage above it. Takes `label`, `value` and `max`
  (default 100); out-of-range values are clamped. Screen readers get a `progressbar` with the label and percentage.
- **Avatar:** a 32px circle for a person. Shows `src` (their photo, cropped to a circle) or the first letter of
  `name` on a soft gray fill, and falls back to the letter if the photo fails to load. `name` is the accessible
  name.
- **ThemeSwitcher:** a small pill of System, Light and Dark buttons. System follows the OS setting (and switches
  when it does); Light and Dark override it. It sets `data-theme` on `<html>`, saves the choice in `localStorage`
  (`storageKey`, default `moth-theme`) and fires `onchange`. Every switcher on a page stays in sync. The docs show a
  short `app.html` script that applies the saved theme before the first paint.

#### Layout nav footer
- `LayoutNav` takes a `footer` snippet: global actions (the signed-in user, settings, a theme switcher) pinned to
  the bottom of the sidebar and of the slide-in nav, below a divider. The nav items scroll on their own above it.
  On wide screens the sidebar now fills the window below the logo (it was capped at that height).

#### Other additions
- `prefers-contrast: more` support: stronger text and borders, a crisp gapped focus ring instead of the glow, and
  an edge on cards, tables and CopyCode.
- CopyCode highlights its command (command, arguments and flags) in the code block colors. The copied text is
  unchanged.

### Changed
- Focus redesign: every focusable element gets the same soft glow (`--m-shadow-focus`). Focused fields also
  brighten their border and lift their fill, hovered fields brighten their border, and the radio's glow hugs the
  circle.
- Badges, buttons, banners, toasts, checkboxes and toggles use the semantic status tokens and their on-colors
  instead of raw scale steps.
- Code blocks use Geist Mono and a new, mostly grayscale highlighting theme.

## [0.1.1] - 2026-01-13

### Fixed
- Removed highlight.js as a dependency
