<script>
    /**
     * @type {{
     *   size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl',
     *   href?: string,
     *   target?: string,
     *   style?: string,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { size = "m", href = "#", target = "", style = "", children } = $props();
</script>

<a
    {href}
    {target}
    {style}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    class="m-link is-size-{size}"
>
    {@render children?.()}
</a>
