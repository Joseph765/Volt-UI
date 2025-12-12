<script>
    /** @type { 'row' | 'column' } */
    export let direction = 'row';
</script>

<div class="v-flex has-direction-{direction}">
    <slot />
</div>