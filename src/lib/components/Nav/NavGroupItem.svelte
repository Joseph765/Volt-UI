<script>    
    /** @type { string } */
    export let href;

    /** @type { boolean } */
    export let active = false;

    /** @type { boolean } Passed to the icon slot so animated icons play while the item is hovered or keyboard-focused */
    let animate = false;

    /** @param { FocusEvent & { currentTarget: HTMLElement } } event */
    function handleFocus(event) {
        animate = event.currentTarget.matches(":focus-visible");
    }
</script>

<a
    {href}
    class="v-nav-group-item"
    aria-current={active}
    on:click
    on:mouseenter={() => animate = true}
    on:mouseleave={() => animate = false}
    on:focus={handleFocus}
    on:blur={() => animate = false}
>
    <slot name="icon" {animate} />
    <slot />
</a>
