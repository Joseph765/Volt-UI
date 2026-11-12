<script>
    /** @type { boolean } */
    export let open = false;

    /** @type { string } */
    export let label = "Main";
</script>

<nav class="v-layout-nav" class:is-open={open} aria-label={label}>
    <slot />
</nav>
