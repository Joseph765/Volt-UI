# Moth UI

A design system with a look all its own: soft ambient light, polished components, and a fast path from empty
project to finished UI. The same components, the same look, for Svelte and React.

**Documentation:** [moth-ui.com](https://moth-ui.com)

| Package | Install |
|---|---|
| [`moth-ui-svelte`](./packages/svelte) | `npm install moth-ui-svelte` |
| [`moth-ui-react`](./packages/react) | `npm install moth-ui-react` |

## This repository

An npm workspaces monorepo:

- `packages/svelte`: the Svelte package.
- `packages/react`: the React package.
- `packages/css`: the stylesheet both packages ship (tokens and component styles).
- `apps/docs`: the documentation site (SvelteKit).
- `apps/react-playground`: a page for trying the React components.

```sh
npm install
npm run dev         # docs site
npm run dev:react   # React playground
npm run build       # both packages and the docs
```

Releases use [Changesets](https://github.com/changesets/changesets): add one with `npx changeset` alongside a change.
See [.changeset/README.md](./.changeset/README.md).

## License

[MIT](./LICENSE)
