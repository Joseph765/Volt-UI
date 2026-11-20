<script>
    import { onMount, tick } from 'svelte';

    /**
     * @typedef { object } Tab
     * @property { string } id - Id of Tab
     * @property { string } label - Label displayed on Tab
     */

    /** @type {{ tabs: Tab[], onClick: (id: string) => void, selected: string, children?: import('svelte').Snippet }} */
    let { tabs, onClick, selected, children } = $props();

    let activeTabIndex = $derived(tabs.findIndex(tab => tab.id === selected));

    /** @type {HTMLButtonElement[]} */
    let tabButtons = $state([]);
    /** @type { HTMLDivElement | undefined } */
    let tablist = $state();

    /** Position and width of the sliding indicator under the selected tab */
    let indicator = $state({ x: 0, width: 0 });
    /** True once the indicator has been placed; until then the selected tab shows a plain underline */
    let measured = $state(false);
    /** Turned on after the first placement so the indicator doesn't slide in from the left on load */
    let animate = $state(false);

    /** @type { ResizeObserver | undefined } */
    let resizeObserver = $state();

    function measure() {
        const button = tabButtons[activeTabIndex];
        if (!button) return;
        indicator = { x: button.offsetLeft, width: button.offsetWidth };
        measured = true;
    }

    // Follow the selection, and re-observe the buttons when the list of tabs changes
    $effect(() => {
        if (!resizeObserver) return;
        activeTabIndex;
        tabs;
        tick().then(() => {
            resizeObserver?.disconnect();
            [tablist, ...tabButtons].forEach(el => el && resizeObserver?.observe(el));
            measure();
        });
    });

    onMount(() => {
        // Labels change width when fonts load or the layout reflows
        resizeObserver = new ResizeObserver(measure);
        measure();
        requestAnimationFrame(() => requestAnimationFrame(() => animate = true));
        return () => resizeObserver?.disconnect();
    });

    /**
     * Handles the keydown event.
     * @param {KeyboardEvent} event - The keyboard event object.
     */
    function handleKeyDown(event) {
        let newIndex = activeTabIndex;

        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                newIndex = (activeTabIndex + 1) % tabs.length;
                break;
            case 'ArrowLeft':
                event.preventDefault();
                newIndex = (activeTabIndex - 1 + tabs.length) % tabs.length;
                break;
            case 'Home':
                event.preventDefault();
                newIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                newIndex = tabs.length - 1;
                break;
            default:
                return;
        }

        const newTab = tabs[newIndex];
        onClick(newTab.id);
        tabButtons[newIndex]?.focus();
    }
</script>

<div
    class="m-tabs"
    class:has-indicator={measured}
    role="tablist"
    tabindex="0"
    onkeydown={handleKeyDown}
    bind:this={tablist}
>
    {#each tabs as tab, i}
        <button 
            bind:this={tabButtons[i]}
            class="m-tab" 
            role="tab" 
            id="tab-{tab.id}"
            aria-selected={selected === tab.id ? true : false} 
            aria-controls="panel-{tab.id}"
            tabindex={selected === tab.id ? 0 : -1} 
            onclick={() => onClick(tab.id)}
        >
            {tab.label}
        </button>
    {/each}
    {#if measured}
        <span
            class="m-tabs-indicator"
            class:is-animated={animate}
            style:--m-tabs-indicator-x="{indicator.x}px"
            style:--m-tabs-indicator-width="{indicator.width}px"
            aria-hidden="true"
        ></span>
    {/if}
</div>

{@render children?.()}