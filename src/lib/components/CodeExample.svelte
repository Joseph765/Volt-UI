<script>
    import { HighlightSvelte } from 'svelte-highlight';

    /** @type { string } */
    export let code;

    $: showCheckmark = false;

    function copyText() {
        navigator.clipboard.writeText(code);
        showCheckmark = true;
        setTimeout(() => {
            showCheckmark = false;
        }, 1000);
    }
</script>

<div class="v-code-example-wrapper">
    <div class="v-code-example">
        <slot />
    </div>
    <pre class="v-code-block">
        <button class="v-copy-button" on:click={copyText} aria-label="copy">
            {#if showCheckmark}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            {/if}
        </button>
        <code>
            <HighlightSvelte {code} />
        </code>
    </pre>
</div>


<style>
    .v-copy-button {
        position: absolute;
        top: var(--v-space-s);
        right: var(--v-space-s);
        background: transparent;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--v-color-text);
        padding: var(--v-space-s);
        border-radius: var(--v-radius-m);
        height: 32px;
        cursor: pointer;
    }

    .v-copy-button:hover {
        background-color: var(--v-gray-5);
    }
</style>

