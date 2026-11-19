<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<code class="m-code">
    {@render children?.()}
</code>
