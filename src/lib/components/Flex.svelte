<script>
    /** @type { 'row' | 'column' } */
    export let direction = 'row';

    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' } */
    export let gap = 'm';
</script>

<div class="v-flex has-direction-{direction} has-gap-{gap}">
    <slot />
</div>