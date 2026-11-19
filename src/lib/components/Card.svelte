<script>
    /**
     * @type {{
     *   space?: 'none' | 'm' | 'l',
     *   style?: string,
     *   header?: import('svelte').Snippet,
     *   headerEnd?: import('svelte').Snippet,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { space = "m", style = "", header, headerEnd, children } = $props();
</script>

<div class="m-card has-space-{space}" {style}>
    {#if header}
        <div class="m-card-header">
            {@render header()}
            {@render headerEnd?.()}
        </div>
    {/if}
    <div class="m-card-content">
        {@render children?.()}
    </div>
</div>
