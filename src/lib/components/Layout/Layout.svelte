<script>
    /** Height of the logo area, so the sticky sidebar nav can sit directly below it (desktop only) */
    let logoHeight = 0;
</script>

<div class="m-layout" style:--m-layout-logo-height={logoHeight ? `${logoHeight}px` : undefined}>
    <div class="m-layout-logo" bind:clientHeight={logoHeight}>
        <slot name="logo" />
    </div>
    <slot />
</div>
