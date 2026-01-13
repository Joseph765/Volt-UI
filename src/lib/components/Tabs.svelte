<script>
    /**
     * @typedef { object } Tab
     * @property { string } id - Id of Tab
     * @property { string } label - Label displayed on Tab
    */

    /** @type { Tab[] } */
    export let tabs;

    /** @type { (id: string) => string } */
    export let onClick;

    /** @type { string } */
    export let selected;

    $: activeTabIndex = tabs.findIndex(tab => tab.id === selected);

    /** @type {HTMLButtonElement[]} */
    let tabButtons = [];

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

<div class="v-tabs" role="tablist" tabindex="0" on:keydown={handleKeyDown}>
    {#each tabs as tab, i}
        <button 
            bind:this={tabButtons[i]}
            class="v-tab" 
            role="tab" 
            id="tab-{tab.id}"
            aria-selected={selected === tab.id ? true : false} 
            aria-controls="panel-{tab.id}"
            tabindex={selected === tab.id ? 0 : -1} 
            on:click={() => onClick(tab.id)}
        >
            {tab.label}
        </button>
    {/each}
</div>

<slot />