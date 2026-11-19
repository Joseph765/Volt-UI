<script>
    /** @type {{ align?: 'start' | 'center' | 'end', children?: import('svelte').Snippet }} */
    let { align = "start", children } = $props();
</script>

<th class="m-table-header is-align-{align}">
    {@render children?.()}
</th>
