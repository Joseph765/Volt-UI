<script>
    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' } */
    export let size = "m";

    /** @type { 'default' | 'weak' | 'weaker' | 'weakest' | 'warning' | 'danger' | 'success' } */
    export let variant = "default";

    /** @type { 'regular' | 'bold' | 'black' } */
    export let weight = "regular";

    /** @type { 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' } – the HTML tag to render as */
    export let as = "p";

    /** @type { 'none' | 's' | 'm' | 'l' } */
    export let measure = "m";

    /** @type { boolean } */
    export let mono = false;

    /** @type { 'start' | 'center' | 'end' | undefined } When omitted, the text follows its container's alignment (e.g. a TableCell's align) */
    export let align = undefined;

    /** @type { string } */
    export let id = "";

    /** @type { string } */
    export let style = "";

    /** @type { string } Extra classes, added after Text's own */
    let className = "";
    export { className as class };
</script>

<svelte:element this={as} {id} class="m-text is-size-{size} is-{variant} has-weight-{weight} has-measure-{measure} {align ? `is-align-${align}` : undefined} {mono ? "is-mono" : undefined} {className}" {style}>
    <slot />
</svelte:element>