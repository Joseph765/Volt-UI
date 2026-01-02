<script>
    import { page } from "$app/state";
    
    /** @type {{ title: string; children?: import('svelte').Snippet }} */
    let { title, children } = $props();

    /** @type { string } */
    let currentPath = $derived(page.url.pathname);

    /** @type { boolean } */
    let isExpanded = $derived(currentPath.includes("/components"));
</script>

<div class="v-menu-group {isExpanded ? "is-expanded" : undefined}">
    <button class="v-menu-group-expander" onclick={() => isExpanded = !isExpanded}>
        <h4 class="v-menu-group-heading">
            {title}
        </h4>
        {#if isExpanded}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        {/if}
    </button>
    <div class="v-menu-group-items">
        {@render children?.()}
    </div>
</div>