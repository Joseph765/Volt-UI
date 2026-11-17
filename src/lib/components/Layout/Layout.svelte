<script>
    /** @type {{ logo?: import('svelte').Snippet, children?: import('svelte').Snippet }} */
    let { logo, children } = $props();

    /** Height of the logo area, so the sticky sidebar nav can sit directly below it (desktop only) */
    let logoHeight = $state(0);
</script>

<div class="m-layout" style:--m-layout-logo-height={logoHeight ? `${logoHeight}px` : undefined}>
    <div class="m-layout-logo" bind:clientHeight={logoHeight}>
        {@render logo?.()}
    </div>
    {@render children?.()}
</div>
