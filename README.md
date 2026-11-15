# Moth UI

The design system Svelte was missing: a complete set of polished, dark-first components for Svelte 5 that look
finished the moment you install them. No theming, no config.

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
