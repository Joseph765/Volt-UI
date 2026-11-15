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

<button class="m-copy-button" on:click={copyTextFunc} aria-label="copy" {style} tabindex="0">
    {#if showCheckmark}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    {/if}
</button>

<style>
    .m-copy-button {
        background: var(--m-color-background);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--m-gray-7);
        color: var(--m-color-text);
        padding: 0;
        /* Square at the shared control height, fully rounded: a circle at any size */
        width: var(--m-control-height);
        height: var(--m-control-height);
        border-radius: var(--m-radius-full);
        cursor: pointer;
    }

    .m-copy-button:focus-visible {
        outline: 2px solid var(--m-color-focus-border);
        outline-offset: 2px;
    }

    /* Same as Button's secondary variant: on hover the outline turns white and glows */
    .m-copy-button {
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .m-copy-button:focus-visible {
        border-color: var(--m-color-text);
        box-shadow: 0 0 20px -4px color-mix(in srgb, var(--m-accent-9) 60%, transparent);
    }

    @media (pointer: fine) {
        .m-copy-button:hover {
            border-color: var(--m-color-text);
            box-shadow: 0 0 20px -4px color-mix(in srgb, var(--m-accent-9) 60%, transparent);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .m-copy-button {
            transition: none;
        }
    }
</style>
