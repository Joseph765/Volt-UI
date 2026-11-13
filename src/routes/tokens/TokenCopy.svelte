<script>
    /** @type {{ token: string }} e.g. "--v-space-m" */
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

<button class="token-copy" class:is-copied={copied} onclick={copy} aria-label="Copy var({token})" title="Copy var({token})">
    <span class="name">{token}</span>
    {#if copied}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
    {:else}
        <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    {/if}
</button>

<style>
    .token-copy {
        display: inline-flex;
        align-items: center;
        gap: var(--v-space-s);
        max-width: 100%;
        padding: var(--v-space-xs) var(--v-space-s);
        border: 1px solid var(--v-color-border);
        border-radius: var(--v-radius-sharp);
        background-color: var(--v-color-background);
        color: var(--v-color-text);
        font-family: var(--v-font-mono);
        font-size: var(--v-font-size-s);
        line-height: var(--v-line-height-s);
        cursor: pointer;
        transition: border-color 0.15s ease, color 0.15s ease;
    }

    .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .copy-icon {
        flex-shrink: 0;
        color: var(--v-color-text-weaker);
        transition: color 0.15s ease;
    }

    .token-copy.is-copied {
        border-color: var(--v-color-border-success);
        color: var(--v-success-11);
    }

    .token-copy:focus-visible {
        outline: 2px solid var(--v-color-info);
        outline-offset: 2px;
    }

    @media (pointer: fine) {
        .token-copy:hover {
            border-color: var(--v-accent-7);
        }

        .token-copy:hover .copy-icon {
            color: var(--v-color-text-accent);
        }
    }
</style>
