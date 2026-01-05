<script>
    /** @type { boolean } */
    export let open = false;
</script>

<div class="v-layout-nav {open ? "is-open" : undefined}">
    <slot />
</div>