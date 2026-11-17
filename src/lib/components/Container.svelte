<script>
    /**
     * @type {{
     *   space?: 'default' | 'none',
     *   size?: 's' | 'm' | 'l' | 'xl' | '2xl',
     *   align?: 'start' | 'center' | 'end',
     *   debug?: boolean,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { space = "default", size = "2xl", align = "start", debug = false, children } = $props();
</script>

<div class="m-container {debug ? "is-debug" : undefined} is-size-{size} is-align-{align} has-space-{space}">
    {@render children?.()}
</div>
