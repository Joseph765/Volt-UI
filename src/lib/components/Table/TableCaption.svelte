<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<caption class="m-table-caption">
    {@render children?.()}
</caption>
