<script>
    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' } */
    export let size = "m";
</script>

<p class="v-text is-size-{size}">
    <slot />
</p>