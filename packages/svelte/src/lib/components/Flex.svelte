<script>
    /**
     * @type {{
     *   direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
     *   gap?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl',
     *   wrap?: boolean,
     *   justify?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'between' | 'around' | 'evenly',
     *   align?: 'initial' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end' | 'self-start' | 'self-end',
     *   style?: string,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { direction = "row", gap = "m", wrap = false, justify = "start", align = "initial", style = "", children } = $props();
</script>

<div class="m-flex has-direction-{direction} is-align-{align} has-gap-{gap} {wrap ? "has-flex-wrap" : "has-flex-nowrap"} has-justify-{justify}" {style}>
    {@render children?.()}
</div>
