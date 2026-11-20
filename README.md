# Moth UI

A design system with a look all its own: soft ambient light, polished components, and a fast path from empty
project to finished UI. Moth comes for Svelte and React; this is the Svelte package.

**Documentation:** [moth-ui.com](https://moth-ui.com)

## Install

```sh
npm install moth-ui-svelte
```

Requires Svelte 5. Works in SvelteKit and any Vite + Svelte project.

## Use

Import the stylesheet once, in your root layout or main Svelte file:

```svelte
<script>
    import "moth-ui-svelte/css/index.css";
</script>
```

Then import components anywhere:

```svelte
<script>
    import { Button } from "moth-ui-svelte";
</script>

<Button>Save changes</Button>
```

The stylesheet loads the Outfit and Geist Mono fonts from Google Fonts and sets global page styles. See
[Getting started](https://moth-ui.com/getting-started) for details.

## License

[MIT](./LICENSE)
