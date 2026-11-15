<script>
    /** @type {{ title: string; open?: boolean, icon?: import('svelte').Snippet<[boolean]>, children?: import('svelte').Snippet }} */
    let { title, open = true, icon, children } = $props();

    /** @type { boolean } */
    let isExpanded = $derived(open);

    /** @type { boolean } Passed to the icon snippet so animated icons play while the heading is hovered or keyboard-focused */
    let animate = $state(false);
</script>

<div class="m-nav-group {isExpanded ? "is-expanded" : undefined}">
    <button
        class="m-nav-group-expander"
        aria-expanded={isExpanded}
        onclick={() => isExpanded = !isExpanded}
        onmouseenter={() => animate = true}
        onmouseleave={() => animate = false}
        onfocus={(event) => animate = event.currentTarget.matches(":focus-visible")}
        onblur={() => animate = false}
    >
        {@render icon?.(animate)}
        <span class="m-nav-group-heading">
            {title}
        </span>
        {#if isExpanded}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        {/if}
    </button>
    <div class="m-nav-group-items">
        {@render children?.()}
    </div>
</div>
