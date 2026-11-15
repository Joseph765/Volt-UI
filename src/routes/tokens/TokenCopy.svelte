<script>
    import Button from "$lib/components/Button.svelte";

    /** @type {{ token: string }} e.g. "--m-space-m" */
    let { token } = $props();

    let copied = $state(false);
    /** @type { ReturnType<typeof setTimeout> | undefined } */
    let timer;

    function copy() {
        navigator.clipboard.writeText(`var(${token})`);
        copied = true;
        clearTimeout(timer);
        timer = setTimeout(() => (copied = false), 1000);
    }
</script>

<!-- Secondary button; the token name stays monospace so it reads as code -->
<div class="token-copy">
    <Button variant="secondary" onclick={copy} aria-label="Copy var({token})" title="Copy var({token})">
        <span class="name">{token}</span>
        <svelte:fragment slot="end">
            {#if copied}
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            {:else}
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            {/if}
        </svelte:fragment>
    </Button>
</div>

<style>
    /* Let long token names shrink with their card instead of overflowing it */
    .token-copy,
    .token-copy :global(.m-button-wrapper),
    .token-copy :global(.m-button) {
        max-width: 100%;
    }

    /* Tighter than a regular button so full token names fit in the narrow color tiles */
    .token-copy :global(.m-button) {
        gap: var(--m-space-xs);
        padding-inline: var(--m-space-s);
    }

    .name {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-xs);
    }

    .icon {
        flex-shrink: 0;
    }
</style>
