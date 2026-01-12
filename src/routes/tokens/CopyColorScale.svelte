<script>
    /** @type {{ color: string; }} */
    let { color } = $props();

    let showCheckmark = $state();

    /** @param { number } colorNumber - number of color in scale */
    function copyTextFunc(colorNumber) {
        navigator.clipboard.writeText("var(--v-" + color + "-" + colorNumber + ")");
        showCheckmark = true;
        setTimeout(() => {
            showCheckmark = false;
        }, 1000);
    }
</script>

<div class="color-scale">
    <button onclick={() => copyTextFunc(1)} aria-label="Copy {color} 1 color" class="copy-color" style="background-color: var(--v-{color}-1);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(2)} aria-label="Copy {color} 2 color" class="copy-color" style="background-color: var(--v-{color}-2);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(3)} aria-label="Copy {color} 3 color" class="copy-color" style="background-color: var(--v-{color}-3);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(4)} aria-label="Copy {color} 4 color" class="copy-color" style="background-color: var(--v-{color}-4);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(5)} aria-label="Copy {color} 5 color" class="copy-color" style="background-color: var(--v-{color}-5);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(6)} aria-label="Copy {color} 6 color" class="copy-color" style="background-color: var(--v-{color}-6);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(7)} aria-label="Copy {color} 7 color" class="copy-color" style="background-color: var(--v-{color}-7);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(8)} aria-label="Copy {color} 8 color" class="copy-color" style="background-color: var(--v-{color}-8);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(9)} aria-label="Copy {color} 9 color" class="copy-color" style="background-color: var(--v-{color}-9); color: var(--v-color-text-contrast);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(10)} aria-label="Copy {color} 10 color" class="copy-color" style="background-color: var(--v-{color}-10); color: var(--v-color-text-contrast);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(11)} aria-label="Copy {color} 11 color" class="copy-color" style="background-color: var(--v-{color}-11); color: var(--v-color-text-contrast);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
    <button onclick={() => copyTextFunc(12)} aria-label="Copy {color} 12 color" class="copy-color" style="background-color: var(--v-{color}-12); color: var(--v-color-text-contrast);">
        {#if showCheckmark}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {:else}
            <svg class="copy-color-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
    </button>
</div>

<style>
    .color-scale {
        display: flex;
        gap: var(--v-space-s);
    }

    .copy-color {
        min-width: 4rem;
        height: 4rem;
        border-radius: var(--v-radius-sharp);
        border: 1px solid var(--v-color-border);
        cursor: pointer;
    }

    .copy-color-icon {
        display: none;
    }

    @media (pointer: fine) {
        .copy-color:hover .copy-color-icon {
            display: inline-block;
        }
    }
</style>