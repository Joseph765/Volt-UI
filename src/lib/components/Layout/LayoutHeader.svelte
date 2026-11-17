<script>
    /** @type {{ mobileLogo?: import('svelte').Snippet, children?: import('svelte').Snippet }} */
    let { mobileLogo, children } = $props();
</script>

<header class="m-layout-header">
    {@render children?.()}
    <div class="m-layout-mobile-logo">
        {@render mobileLogo?.()}
    </div>
</header>
