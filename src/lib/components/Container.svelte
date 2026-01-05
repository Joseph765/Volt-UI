<script>
    /** @type { 's' | 'm' | 'l' | 'xl' | '2xl' } */
    export let size = "2xl";

    /** @type { 'start' | 'center' | 'end' } */
    export let align = "start";

    /** @type { boolean } */
    export let debug = false;
</script>

<div class="v-container {debug ? "is-debug" : undefined} is-size-{size} is-align-{align}">
    <slot />
</div>