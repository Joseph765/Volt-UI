<script>
    import { onMount } from 'svelte';
    import hljs from 'highlight.js';
    import CopyButton from '$lib/components/CopyButton.svelte';

    /** @type { string } */
    export let code;

    /** @type { boolean } */
    export let codeOnly = false;
    
    /** @type { HTMLElement } */
    let codeElement;

    /** @type { boolean } */
    let expanded = false;

    /** @type { HTMLElement } */
    let codeBlock;

    $: collapsible = code.split(/\r\n|\r|\n/).length > 20;

    function collapse() {
        expanded = false;
        // The block shrinks a lot; bring it back into view so the reader doesn't lose their place
        codeBlock.scrollIntoView({ block: "nearest" });
    }

    onMount(() => {
        codeElement.textContent = code;
        hljs.highlightElement(codeElement);
    });
</script>

<div class="v-code-example-wrapper {codeOnly ? "is-code-only" : undefined}">
    {#if !codeOnly}
        <div class="v-code-example">
            <slot />
        </div>
    {/if}
    <pre class="v-code-block {expanded ? "is-expanded" : undefined}" bind:this={codeBlock}>
        <CopyButton copyText={code} style="position: absolute; top: var(--v-space-s); right: var(--v-space-s);" />
        <code bind:this={codeElement} class="language-xml"></code>
        {#if collapsible && !expanded}
            <div class="v-code-block-fade">
                <button on:click={() => expanded = true} class="v-code-block-expand-button" aria-expanded="false">
                    Show more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </button>
            </div>
        {/if}
    </pre>
    {#if collapsible && expanded}
        <div class="v-code-block-collapse">
            <button on:click={collapse} class="v-code-block-expand-button" aria-expanded="true">
                Show less
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
            </button>
        </div>
    {/if}
</div>