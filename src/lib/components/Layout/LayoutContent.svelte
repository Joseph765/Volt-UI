<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<main class="m-layout-content">
    <div class="m-layout-content-inner">
        {@render children?.()}
    </div>
</main>
