<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<thead class="m-table-head">
    {@render children?.()}
</thead>
