# Moth UI: monorepo + React support (handoff)

Goal: turn the single SvelteKit repo (docs site + `moth-ui-svelte` npm package) into an npm-workspaces monorepo,
then add a `moth-ui-react` package. The docs site already has the Svelte/React switcher, React code examples and the
`moth-ui-react` name (see CLAUDE.md "React conventions"); the React package itself doesn't exist yet.

## Target layout

```
moth-ui/
├── package.json          root, private, "workspaces": ["packages/*", "apps/*"]
├── apps/docs/            SvelteKit docs site (moth-ui-docs, private), Vercel root directory
└── packages/
    ├── css/              @moth-ui/css (private): tokens.css, components.css, highlight.css, index.css in src/
    ├── svelte/           moth-ui-svelte (published), library in src/lib
    └── react/            moth-ui-react (to do)
```

Key fact: all styling is global CSS classes (`m-button is-primary`, etc.), so the React components only need to
render the same markup and class names. The CSS is shared, not rewritten.

## Done

1. **Restructure** with `git mv`: docs → `apps/docs`, library → `packages/svelte`, `package.json` / CHANGELOG /
   THIRD_PARTY_NOTICES → `packages/svelte`. Moves were committed on their own before any edits.
2. **CSS extracted** to `packages/css/src`. CopyButton's scoped `<style>` moved into `components.css`.
   `packages/svelte/scripts/copy-css.js` copies the CSS into `dist/css` after `svelte-package`, so
   `moth-ui-svelte/css/index.css` still works. The docs import `@moth-ui/css/index.css` directly.
3. **Wiring finished and verified** (2026-11-20):
   - `apps/docs/package.json`: deps `moth-ui-svelte: "*"`, `@moth-ui/css: "*"`, plus the SvelteKit/Vite/icons/
     highlight.js devDeps. `build` = `npm --prefix ../../packages/svelte run build && vite build` (dist must exist).
   - Root `package.json`: private, workspaces, prettier/eslint devDeps. `build` runs the docs build (which builds
     the library first); `dev` and `check` run the docs ones.
   - `packages/svelte/package.json`: `build` (`svelte-package && node scripts/copy-css.js`), `dev`
     (`svelte-package --watch`), `prepack` (`npm run build && publint`). devDeps only `@sveltejs/package`,
     `publint`, `svelte`, `typescript`. The copy script was saved as `scripts.js`; renamed to `copy-css.js`.
   - `packages/svelte/jsconfig.json` (standalone, no `.svelte-kit` extends). Without it svelte-package fails with
     "Failed to locate tsconfig or jsconfig".
   - Docs: `+layout.svelte` version import → `../../../../packages/svelte/package.json`; `vite.config.js`
     `server.fs.allow: [searchForWorkspaceRoot(process.cwd())]`; all 40 `from "$lib"` imports →
     `from "moth-ui-svelte"`. CopyButton (not exported) is imported from the package source by relative path in
     `CodeExample.svelte`.
   - Root `eslint.config.js` imports `./apps/docs/svelte.config.js`.
   - `.gitignore`: `.svelte-kit`, `dist`, `build` unanchored, so they're ignored in every workspace.
   - Results: clean `npm install` + `npm run build` pass; svelte-check 0/0 in `apps/docs` and `packages/svelte`;
     publint clean (one suggestion: add `.git` to `repository.url`); `npm pack --dry-run` lists `dist/css/*.css`;
     docs dev server loads with no console errors, styles and highlighting working.
   - Gotchas: npm 12's first clean install left out `@sveltejs/vite-plugin-svelte` ("Cannot find package");
     a second `npm install` fixed it. ESLint reports ~144 errors, all predating the move (104 are
     `no-useless-escape` on the required `<\/script>` escapes); consider turning that rule off for `.svelte` files.
     The root `dist/` is stale pre-move output and can be deleted.
4. **`packages/react` set up** (2026-11-20): `moth-ui-react` 0.2.0, plain `tsc` build (ESM + `.d.ts` per file,
   `NodeNext`, no bundler: like `svelte-package`, and nothing to configure), peerDeps `react`/`react-dom`
   `^18 || ^19`, same `copy-css.js`, exports `.` and `./css/*`. `cx()` helper in `src/utils.ts`. Divider is ported
   as the smoke test and the pattern (forwardRef, `className` merged, rest props spread). Build, `tsc --noEmit`,
   publint ("All good") and `npm pack --dry-run` pass; `renderToStaticMarkup(<Divider />)` matches Svelte's HTML.
   Root `npm run build` also builds it. Still to add: README, CHANGELOG, and `THIRD_PARTY_NOTICES.md` (plus
   `files` entry) once a component inlines Lucide icons; ESLint for `.ts`/`.tsx`.

## Next steps

5. **Port the components**: the simple ones are done (Text, Badge, Divider, Flex, Container, Card, Link, Button;
   2026-11-20: their server-rendered HTML matches Svelte's for default and all-props cases, except Svelte Text
   renders an empty `id=""` and React doesn't). Next the form
   controls, then the stateful ones (Tabs, Toast, Layout/Nav, ThemeSwitcher, CopyCode). Follow CLAUDE.md's React
   conventions: snippets → node props, `bind:value` → `value`/`onChange` or `defaultValue`, `className`,
   camelCase events, forwardRef, pass the remaining props through. Check by comparing the HTML each version renders.
   Shared non-UI logic (Tabs keys, toast queue) can be copied in at build time like the CSS. A private package can't
   be a runtime import.
6. **`apps/react-playground`**: done (2026-11-20), `npm run dev:react`, port 5200; uses the React sources directly
   (Vite alias), so no build needed. Add a section for each newly ported component. Still to do: rebuild a couple of
   the docs' `/examples/*` pages there once the form controls and Layout are ported.
7. **Tests**: Vitest + Testing Library in both packages, with the same behavior checks for both.
8. **Publishing**: Changesets with `moth-ui-svelte` and `moth-ui-react` in a `fixed` group (same version number) and
   a GitHub Action to publish.
9. **Launch** `moth-ui-react`. Confirm the React version requirement (Getting Started says 18+, still unconfirmed).
