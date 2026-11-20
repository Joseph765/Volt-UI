# Changesets

Each Markdown file here describes a change waiting to be released. Add one with `npx changeset` in the same pull
request as the change: pick the bump (patch, minor or major) and write a sentence for the changelog.

`moth-ui-svelte` and `moth-ui-react` are a fixed group: they always release together with the same version number.
Private workspaces (the docs, the CSS and the React playground) are never released.

Releasing:

1. Every push to `main` opens or updates a "Version packages" pull request that bumps the versions and writes the
   changelogs from these files.
2. Merge it when you want to release.
3. Run the **Release** workflow by hand (GitHub → Actions → Release → Run workflow) to publish to npm.
