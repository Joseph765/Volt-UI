<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<tbody class="m-table-body">
    {@render children?.()}
</tbody>
