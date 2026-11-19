<script>
    /**
     * `align`: when omitted, the text follows its container's alignment (e.g. a TableCell's align).
     * `class`: extra classes, added after Text's own.
     * @type {{
     *   size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl',
     *   variant?: 'default' | 'weak' | 'weaker' | 'weakest' | 'warning' | 'danger' | 'success',
     *   weight?: 'regular' | 'bold' | 'black',
     *   as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
     *   measure?: 'none' | 's' | 'm' | 'l',
     *   mono?: boolean,
     *   align?: 'start' | 'center' | 'end',
     *   id?: string,
     *   style?: string,
     *   class?: string,
     *   children?: import('svelte').Snippet
     * }}
     */
    let {
        size = "m",
        variant = "default",
        weight = "regular",
        as = "p",
        measure = "m",
        mono = false,
        align = undefined,
        id = "",
        style = "",
        class: className = "",
        children
    } = $props();
</script>

<svelte:element this={as} {id} class="m-text is-size-{size} is-{variant} has-weight-{weight} has-measure-{measure} {align ? `is-align-${align}` : undefined} {mono ? "is-mono" : undefined} {className}" {style}>
    {@render children?.()}
</svelte:element>
