<script>
    import { framework } from "./framework.svelte.js";

    /**
     * Docs-only: renders the `svelte` or `react` snippet, following the framework switcher. For prose or table rows
     * with markup that differ per framework; plain text uses `forFramework()` instead. Leave one out to show
     * something in one framework only (e.g. a prop React doesn't have).
     * @type {{ svelte?: import('svelte').Snippet, react?: import('svelte').Snippet }}
     */
    let { svelte, react } = $props();
</script>

{@render (framework.current === "react" ? react : svelte)?.()}
