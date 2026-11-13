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

{#snippet icon()}
    {#if showCheckmark}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    {/if}
{/snippet}

<button class="m-copy-button" on:click={copyTextFunc} aria-label="copy" {style} tabindex="0">
    {@render icon()}
    <!-- Decorative copy of the icon for the hover wipe, matching Button's secondary variant -->
    <span class="m-copy-button-overlay" aria-hidden="true">
        {@render icon()}
    </span>
</button>

<style>
    .m-copy-button {
        /* Containing block for the overlay; consumers may override with position: absolute */
        position: relative;
        background: var(--m-color-background);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--m-color-accent);
        color: var(--m-accent-11);
        padding: var(--m-space-s);
        border-radius: var(--m-radius);
        height: 32px;
        cursor: pointer;
    }

    .m-copy-button:focus-visible {
        outline: 2px solid var(--m-color-info);
        outline-offset: 2px;
    }

    /* Same wipe-in-from-the-left treatment as .m-button-overlay (secondary variant) */
    .m-copy-button-overlay {
        position: absolute;
        inset: -1px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--m-color-text);
        border-radius: inherit;
        background-color: var(--m-color-background);
        color: var(--m-color-text);
        clip-path: inset(0 100% 0 0);
        transition: clip-path 0.2s ease;
        pointer-events: none;
    }

    /* Keyboard focus shows the same state as hover */
    .m-copy-button:focus-visible .m-copy-button-overlay {
        clip-path: inset(-1px);
    }

    @media (pointer: fine) {
        .m-copy-button:hover .m-copy-button-overlay {
            /* -1px so subpixel-positioned buttons don't clip the border's antialiased edge */
            clip-path: inset(-1px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .m-copy-button-overlay {
            transition: none;
        }
    }
</style>
