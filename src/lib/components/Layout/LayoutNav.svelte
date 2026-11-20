<script>
    /**
     * `onclose` is called when the user presses Esc, clicks the blurred page outside the open nav, or clicks a link
     * in the header (e.g. the logo).
     * Set `open` to false in response.
     * `footer` stays pinned to the bottom of the nav while the items above it scroll: global actions like the
     * signed-in user, settings or a theme switcher.
     * @type {{
     *   open?: boolean,
     *   label?: string,
     *   onclose?: () => void,
     *   children?: import('svelte').Snippet,
     *   footer?: import('svelte').Snippet
     * }}
     */
    let { open = false, label = "Main", onclose, children, footer } = $props();

    /** @type { HTMLElement } */
    let nav;

    /** @param { KeyboardEvent } event */
    function handleKeydown(event) {
        if (!open || event.key !== "Escape" || event.defaultPrevented) return;
        // The nav is about to be hidden; if focus was inside it, hand focus back to the menu button
        const hadFocus = nav.contains(document.activeElement);
        onclose?.();
        if (hadFocus) {
            /** @type { HTMLElement | null | undefined } */
            const menuButton = nav.closest(".m-layout")?.querySelector(".m-layout-menu-button");
            menuButton?.focus();
        }
    }

    /**
     * Clicking outside the open nav (on the blurred page) closes it, and so does a link in the header (e.g. the
     * logo), since it leaves the page. Other header clicks don't: the menu button toggles the nav itself.
     * The blurred content ignores pointer events, so the click lands on the layout itself rather than on a link.
     * @param { MouseEvent } event
     */
    function handleClick(event) {
        if (!open || !(event.target instanceof Element)) return;
        const layout = nav.closest(".m-layout");
        if (!layout?.contains(event.target)) return;
        if (nav.contains(event.target)) return;
        const header = layout.querySelector(".m-layout-header");
        if (header?.contains(event.target)) {
            const link = event.target.closest("a[href]");
            if (!link || !header.contains(link)) return;
        }
        onclose?.();
    }
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleClick} />

<nav class="m-layout-nav" class:is-open={open} aria-label={label} bind:this={nav}>
    <div class="m-layout-nav-items">
        {@render children?.()}
    </div>
    {#if footer}
        <div class="m-layout-nav-footer">
            {@render footer()}
        </div>
    {/if}
</nav>
