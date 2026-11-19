<script>
    /**
     * @type {{
     *   variant?: "neutral" | "danger" | "warning" | "success" | "info",
     *   strong?: boolean,
     *   icon?: import('svelte').Snippet,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { variant = "neutral", strong = false, icon, children } = $props();
</script>

<div class="m-badge is-{variant} {strong ? "is-strong" : undefined}">
    {@render icon?.()}
    {@render children?.()}
</div>
