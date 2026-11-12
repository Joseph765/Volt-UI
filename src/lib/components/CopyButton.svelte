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

<button class="v-copy-button" on:click={copyTextFunc} aria-label="copy" {style} tabindex="0">
    {@render icon()}
    <!-- Decorative copy of the icon for the hover wipe, matching Button's secondary variant -->
    <span class="v-copy-button-overlay" aria-hidden="true">
        {@render icon()}
    </span>
</button>

<style>
    .v-copy-button {
        /* Containing block for the overlay; consumers may override with position: absolute */
        position: relative;
        background: var(--v-color-background);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--v-color-accent);
        color: var(--v-accent-11);
        padding: var(--v-space-s);
        border-radius: var(--v-radius);
        height: 32px;
        cursor: pointer;
    }

    .v-copy-button:focus-visible {
        outline: 2px solid var(--v-color-info);
        outline-offset: 2px;
    }

    /* Same wipe-in-from-the-left treatment as .v-button-overlay (secondary variant) */
    .v-copy-button-overlay {
        position: absolute;
        inset: -1px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--v-color-text);
        border-radius: inherit;
        background-color: var(--v-color-background);
        color: var(--v-color-text);
        clip-path: inset(0 100% 0 0);
        transition: clip-path 0.2s ease;
        pointer-events: none;
    }

    /* Keyboard focus shows the same state as hover */
    .v-copy-button:focus-visible .v-copy-button-overlay {
        clip-path: inset(-1px);
    }

    @media (pointer: fine) {
        .v-copy-button:hover .v-copy-button-overlay {
            /* -1px so subpixel-positioned buttons don't clip the border's antialiased edge */
            clip-path: inset(-1px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .v-copy-button-overlay {
            transition: none;
        }
    }
</style>
