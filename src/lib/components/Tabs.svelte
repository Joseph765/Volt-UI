<!-- 


let tabs = [
    { id: "1", label: "hello 1" }
    { id: "2", label: "hello 2" }
    { id: "3", label: "hello 3" }
];
let selected = tabs[0];

<Tabs
    {tabs}
    onSelect={(tab) => selected = tab}
>

{#if selected.id === "1"}
// Tab content
{/if}

-->

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

    /** @type { string | number } */
    export let selected;
</script>

<div class="v-tabs">
    {#each tabs as tab}
        <button class="v-tab {selected === tab.id ? "is-active" : undefined}" on:click={() => onClick(tab.id)}>{tab.label}</button>
    {/each}
</div>