<script>
    /** @type { 'row' | 'column' | 'row-reverse' | 'column-reverse' } */
    export let direction = 'row';

    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' } */
    export let gap = 'm';

    /** @type { boolean } */
    export let wrap = false;

    /** @type { 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' } */
    export let justify = "start";

    /** @type { 'strech' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end' | 'self-start' | 'self-end'} */
    export let align = "start";

    /** @type { string } */
    export let style = "";
</script>

<div class="v-flex has-direction-{direction} is-align-{align} has-gap-{gap} {wrap ? "has-flex-wrap" : "has-flex-nowrap"} has-justify-{justify}">
    <slot />
</div>