<script>
    /**
     * `icon` receives `animate`: true while the item is hovered or keyboard-focused, for animated icons.
     * @type {{
     *   href: string,
     *   active?: boolean,
     *   onclick?: import('svelte/elements').MouseEventHandler<HTMLAnchorElement>,
     *   icon?: import('svelte').Snippet<[boolean]>,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { href, active = false, onclick, icon, children } = $props();

    let animate = $state(false);

    /** @param { FocusEvent & { currentTarget: HTMLElement } } event */
    function handleFocus(event) {
        animate = event.currentTarget.matches(":focus-visible");
    }
</script>

<a
    {href}
    class="m-nav-item"
    aria-current={active}
    {onclick}
    onmouseenter={() => animate = true}
    onmouseleave={() => animate = false}
    onfocus={handleFocus}
    onblur={() => animate = false}
>
    {@render icon?.(animate)}
    {@render children?.()}
</a>
