<script>
    import { onMount } from 'svelte';
    import hljs from 'highlight.js';
    import Button from '$lib/components/Button.svelte';
    import CopyButton from '$lib/components/CopyButton.svelte';

    /** @type {{ code: string, codeOnly?: boolean, children?: import('svelte').Snippet }} */
    let { code, codeOnly = false, children } = $props();

    /** @type { HTMLElement } */
    let codeElement;

    /** @type { boolean } */
    let expanded = $state(false);

    /** @type { HTMLElement } */
    let codeBlock;

    let collapsible = $derived(code.split(/\r\n|\r|\n/).length > 20);

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

<div class="m-code-example-wrapper {codeOnly ? "is-code-only" : undefined}">
    {#if !codeOnly}
        <div class="m-code-example">
            {@render children?.()}
        </div>
    {/if}
    <pre class="m-code-block {expanded ? "is-expanded" : undefined}" bind:this={codeBlock}>
        <CopyButton copyText={code} style="position: absolute; top: var(--m-space-s); right: var(--m-space-s);" />
        <code bind:this={codeElement} class="language-xml"></code>
        {#if collapsible && !expanded}
            <div class="m-code-block-fade">
                <Button variant="secondary" onclick={() => expanded = true} aria-expanded="false">
                    Show more
                    {#snippet end()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>{/snippet}
                </Button>
            </div>
        {/if}
    </pre>
    {#if collapsible && expanded}
        <div class="m-code-block-collapse">
            <Button variant="secondary" onclick={collapse} aria-expanded="true">
                Show less
                {#snippet end()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>{/snippet}
            </Button>
        </div>
    {/if}
</div>