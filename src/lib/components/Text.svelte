<script>
    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' } */
    export let size = "m";

    /** @type { 'default' | 'weak' | 'weaker' | 'weakest' } */
    export let variant = "default";

    /** @type { 'regular' | 'bold' } */
    export let weight = "regular";

    /** @type { 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' } – the HTML tag to render as */
    export let as = "p";

    /** @type { 'none' | 's' | 'm' | 'l' } */
    export let measure = "m";

    /** @type { boolean } */
    export let mono = false;

    /** @type { 'start' | 'center' | 'end' }*/
    export let align = "start";

    /** @type { string } */
    export let style = "";

</script>

<svelte:element this={as} class="v-text is-size-{size} is-{variant} has-weight-{weight} has-measure-{measure} is-align-{align} {mono ? "is-mono" : undefined}" {style}>
    <slot />
</svelte:element>