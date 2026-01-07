<script>
    /** @type { string } */
    export let copyText;

    /** @type { string } */
    export let style = "";

    $: showCheckmark = false;

    function copyTextFunc() {
        navigator.clipboard.writeText(copyText);
        showCheckmark = true;
        setTimeout(() => {
            showCheckmark = false;
        }, 1000);
    }
</script>

<button class="v-copy-button" on:click={copyTextFunc} aria-label="copy" {style}>
    {#if showCheckmark}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    {/if}
</button>

<style>
    .v-copy-button {
        background: var(--v-color-background);
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--v-color-text);
        padding: var(--v-space-s);
        border-radius: var(--v-radius-sharp);
        height: 32px;
        cursor: pointer;
    }

    .v-copy-button:hover {
        background-color: var(--v-gray-5);
    }
</style>
