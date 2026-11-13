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
            const menuButton = nav.closest(".v-layout")?.querySelector(".v-layout-menu-button");
            menuButton?.focus();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<nav class="v-layout-nav" class:is-open={open} aria-label={label} bind:this={nav}>
    <slot />
</nav>
