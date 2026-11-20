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
   renders an empty `id=""` and React doesn't). Also done: Avatar, Banner, Code, Progress and the form controls
   (Input, Textarea, Select, Checkbox, Radio, Toggle, Fieldset); HTML matches Svelte in 25 cases (only
   serialization differences), and the playground checks controlled/uncontrolled use, prefix padding,
   indeterminate and the Avatar fallback in a browser. Helpers in `src/utils.ts`: `useControllable` (Select and
   Checkbox track their value because the placeholder style and check mark depend on it), `useClientWidth`
   (Svelte's `bind:clientWidth`), `useMergedRefs`. Input/Textarea/Select now take `id` (defaults to `name`), so
   their labels are linked, in both frameworks. **All 40 components are ported** (2026-11-20): the
   stateful ones too (Tabs/Tab, Toast/ToastGroup, Layout*, Nav*, ThemeSwitcher, CopyCode, Table*), grouped one file
   per family in `src/components/`. Both packages export the same 40 names; HTML matches Svelte in 32 more cases;
   the playground is now built with Layout/Nav/ThemeSwitcher and checks the drawer (Esc returns focus, outside
   click, link click), Tabs keys and indicator, toasts, theme saving and CopyCode in a browser.
   React notes: ThemeSwitcher's shared choice is a module-level store read with `useSyncExternalStore`; LayoutNav's
   window listeners read the latest props through a ref; Nav `icon` is a node or `(animate) => node`; Toast flies
   in and out with the Web Animations API (skipped with reduced motion): `ToastGroup` tracks its children by
   `key` and keeps a removed toast mounted, with a `leaving` context, for the 250ms fly-out. Resolved with the user:
   - NavItem/NavGroupItem take a React-only `as` prop (the router's Link; Next.js `as={Link}`, React Router needs
     a wrapper that passes `href` as `to`), documented in React-only rows on the Navigation page.
   - A `Tab` panel's id is now `panel-{id}` (both frameworks), so the tab's `aria-controls` resolves.
6. **`apps/react-playground`**: done (2026-11-20), `npm run dev:react`, port 5200; uses the React sources directly
   (Vite alias), so no build needed. Add a section for each newly ported component. Still to do: rebuild a couple of
   the docs' `/examples/*` pages there once the form controls and Layout are ported.
7. **Publishing**: done (2026-11-20). `@changesets/cli` v3 at the root (`.changeset/config.json`: fixed group,
   public access; private workspaces aren't tracked). `.github/workflows/release.yml`: on push to `main` the
   `version` job opens the "Version packages" PR; the `publish` job only runs on a manual run from `main`
   (`workflow_dispatch`), uses npm trusted publishing (npm upgraded to latest for OIDC), refuses if unversioned
   changesets remain, prints `changeset publish-plan`, runs `changeset publish` (each package's prepack builds and
   runs publint) and pushes the tags. Rehearsed a patch release in a scratch copy: both packages bumped together and
   both CHANGELOGs got the entry. Changelog headings switched to `## 0.2.0 (unreleased)` style so Changesets inserts
   above them. Each package now has its own README and LICENSE (npm reads them from the package folder; both were
   missing); the root README is a repo overview. The Svelte CHANGELOG lists a 0.1.1 (2026-01-13), but npm's latest
   is 0.1.0.
8. **Launched** (2026-11-20): `moth-ui-react` 0.2.0 published by hand, `moth-ui-svelte` 0.2.0 by the Release
   workflow (tag `moth-ui-svelte@0.2.0`). First workflow runs failed with `403 OIDC permission denied` until "Allow
   npm publish" was ticked on the trusted publishers (by default they only allow `npm stage publish`). A stray
   `0.0.0-stage` version of `moth-ui-svelte` is on the registry (not tagged latest). Original plan, for reference:
   Launch both packages at 0.2.0. React 18+ is confirmed (2026-11-20: the packed package renders on the server,
   hydrates, handles interaction and type-checks with strict settings on React 18.3.1 and @types/react 18). Both
   CHANGELOGs are marked `## 0.2.0`. Checklist:
   1. Merge `react-support` into `main` (Vercel's root directory is already `apps/docs`).
   2. (Done) Both CHANGELOGs say `## 0.2.0`.
   3. npmjs.com → `moth-ui-svelte` → Settings → Trusted publisher: GitHub Actions, `Joseph765/moth-ui`, workflow
      `release.yml`.
   4. Publish `moth-ui-react` 0.2.0 once by hand (trusted publishing can only be set up for a package that exists):
      `npm login`, then `npm publish` in `packages/react` (prepack builds it). Then add the same trusted publisher
      to `moth-ui-react`.
   5. GitHub → Actions → Release → Run workflow (on `main`): publishes `moth-ui-svelte` 0.2.0 (`moth-ui-react`
      0.2.0 already exists, so it's skipped) and pushes the tags.
   6. Optional: on both packages, require 2FA and disallow tokens, since CI no longer needs one.
