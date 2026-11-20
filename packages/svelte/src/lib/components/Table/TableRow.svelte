<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<tr class="m-table-row">
    {@render children?.()}
</tr>
