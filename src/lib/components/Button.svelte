<script>
    /**
     * Any other attribute (e.g. onclick, type, aria-label) goes on the <button> (or <a> when `href` is set).
     * @type {{
     *   variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'danger',
     *   expanded?: boolean,
     *   size?: 'm' | 'l',
     *   disabled?: boolean,
     *   href?: string,
     *   start?: import('svelte').Snippet,
     *   end?: import('svelte').Snippet,
     *   children?: import('svelte').Snippet
     * } & Record<string, any>}
     */
    let {
        variant = "default",
        expanded = false,
        size = "m",
        disabled = false,
        href = "",
        start,
        end,
        children,
        ...rest
    } = $props();
</script>

<div class="m-button-wrapper" class:is-expanded={expanded}>
    {#if href}
        <a {href} class="m-button is-link is-{variant} is-size-{size}" class:is-expanded={expanded} {...rest}>
            {@render start?.()}
            {@render children?.()}
            {@render end?.()}
        </a>
    {:else}
        <button class="m-button is-{variant} is-size-{size}" class:is-expanded={expanded} {disabled} {...rest}>
            {@render start?.()}
            {@render children?.()}
            {@render end?.()}
        </button>
    {/if}
</div>
