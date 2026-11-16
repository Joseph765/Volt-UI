<script>
    import { createEventDispatcher } from 'svelte';

    /** @type { boolean } */
    export let open = false;

    /** @type { string } */
    export let label = "Main";

    /** @type { import('svelte').EventDispatcher<{ close: void }> } */
    const dispatch = createEventDispatcher();

    /** @type { HTMLElement } */
    let nav;

    /** @param { KeyboardEvent } event */
    function handleKeydown(event) {
        if (!open || event.key !== "Escape" || event.defaultPrevented) return;

        // The nav is about to be hidden; if focus was inside it, hand focus back to the menu button
        const hadFocus = nav.contains(document.activeElement);
        dispatch("close");
        if (hadFocus) {
            /** @type { HTMLElement | null | undefined } */
            const menuButton = nav.closest(".m-layout")?.querySelector(".m-layout-menu-button");
            menuButton?.focus();
        }
    }

    /**
     * Clicking outside the open nav (on the blurred page, not the nav or header) closes it.
     * The blurred content ignores pointer events, so the click lands on the layout itself rather than on a link.
     * @param { MouseEvent } event
     */
    function handleClick(event) {
        if (!open || !(event.target instanceof Node)) return;

        const layout = nav.closest(".m-layout");
        if (!layout?.contains(event.target)) return;
        if (nav.contains(event.target)) return;
        if (layout.querySelector(".m-layout-header")?.contains(event.target)) return;

        dispatch("close");
    }
</script>

<svelte:window on:keydown={handleKeydown} on:click={handleClick} />

<nav class="m-layout-nav" class:is-open={open} aria-label={label} bind:this={nav}>
    <slot />
</nav>
