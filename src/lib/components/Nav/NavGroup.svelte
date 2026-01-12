<script>
    /** @type {{ title: string; open?: boolean, children?: import('svelte').Snippet }} */
    let { title, open = true, children } = $props();

    /** @type { boolean } */
    let isExpanded = $derived(open);
</script>

<div class="v-nav-group {isExpanded ? "is-expanded" : undefined}">
    <button class="v-nav-group-expander" onclick={() => isExpanded = !isExpanded}>
        <h4 class="v-nav-group-heading">
            {title}
        </h4>
        {#if isExpanded}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        {/if}
    </button>
    <div class="v-nav-group-items">
        {@render children?.()}
    </div>
</div>