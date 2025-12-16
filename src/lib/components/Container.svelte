<script>
    /** @type { boolean } */
    export let debug = false;
</script>

<div class="v-container {debug ? "is-debug" : undefined}">
    <slot />
</div>