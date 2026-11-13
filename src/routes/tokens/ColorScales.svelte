<script>
    /** @type {{ scales: string[] }} */
    let { scales } = $props();

    const steps = Array.from({ length: 12 }, (_, i) => i + 1);

    /** Key of the swatch that was just copied, e.g. "gray-4" */
    let copied = $state("");
    /** @type { ReturnType<typeof setTimeout> | undefined } */
    let timer;

    /**
     * @param { string } scale - Name of the color scale
     * @param { number } step - Step in the scale (1-12)
     */
    function copy(scale, step) {
        navigator.clipboard.writeText(`var(--v-${scale}-${step})`);
        copied = `${scale}-${step}`;
        clearTimeout(timer);
        timer = setTimeout(() => (copied = ""), 1000);
    }
</script>

<div class="palette">
    <div class="row is-header" aria-hidden="true">
        <span class="corner"></span>
        {#each steps as step}
            <span class="step">{step}</span>
        {/each}
    </div>
    {#each scales as scale}
        <div class="row">
            <span class="scale-name">{scale}</span>
            {#each steps as step}
                <button
                    class="swatch"
                    class:is-dark-icon={step >= 9}
                    style="background-color: var(--v-{scale}-{step});"
                    title="--v-{scale}-{step}"
                    aria-label="Copy var(--v-{scale}-{step})"
                    onclick={() => copy(scale, step)}
                >
                    {#if copied === `${scale}-${step}`}
                        <svg class="icon is-visible" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    {:else}
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    {/if}
                </button>
            {/each}
        </div>
    {/each}
</div>

<style>
    /* Same look as the palette on the landing page, plus a step-number header and click-to-copy */
    .palette {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-s);
        padding: var(--v-space-l);
        border-radius: var(--v-radius);
        background-color: var(--v-color-surface);
    }

    .row {
        display: grid;
        grid-template-columns: 5rem repeat(12, minmax(0, 1fr));
        align-items: center;
        gap: 4px;
    }

    .scale-name,
    .corner {
        margin-inline-end: var(--v-space-m);
    }

    .scale-name {
        font-family: var(--v-font-mono);
        font-size: var(--v-font-size-s);
        color: var(--v-color-text-weak);
        text-transform: capitalize;
    }

    .step {
        font-family: var(--v-font-mono);
        font-size: var(--v-font-size-s);
        color: var(--v-color-text-weaker);
        text-align: center;
    }

    .swatch {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.25rem;
        padding: 0;
        border: none;
        border-radius: 6px;
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.04);
        color: var(--v-color-text);
        cursor: pointer;
    }

    .swatch.is-dark-icon {
        color: var(--v-color-text-contrast);
    }

    .swatch:focus-visible {
        outline: 2px solid var(--v-color-info);
        outline-offset: 2px;
    }

    .icon {
        visibility: hidden;
    }

    .icon.is-visible,
    .swatch:focus-visible .icon {
        visibility: visible;
    }

    @media (pointer: fine) {
        .swatch:hover .icon {
            visibility: visible;
        }
    }

    /* Narrow screens: scale name above its row; numbers still line up with the swatches */
    @media (max-width: 36rem) {
        .palette {
            padding: var(--v-space-m);
        }

        .row {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            row-gap: var(--v-space-xs);
        }

        .scale-name {
            grid-column: 1 / -1;
            margin: 0;
        }

        .corner {
            display: none;
        }

        .swatch {
            height: 1.75rem;
            border-radius: 4px;
        }

        .icon {
            width: 12px;
            height: 12px;
        }
    }
</style>
