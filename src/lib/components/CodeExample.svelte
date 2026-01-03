<script>
    import { onMount } from 'svelte';
    import hljs from 'highlight.js';
    import CopyButton from './CopyButton.svelte';

    /** @type { string } */
    export let code;

    /** @type { HTMLElement } */
    let codeElement;

    /** @type { boolean } */
    let expanded = false;

    onMount(() => {
        codeElement.textContent = code;
        hljs.highlightElement(codeElement);
    });
</script>

<div class="v-code-example-wrapper">
    <div class="v-code-example">
        <slot />
    </div>
    <pre class="v-code-block {expanded ? "is-expanded" : ""}">
        <CopyButton copyText={code} style="position: absolute; top: var(--v-space-m); right: var(--v-space-m);" />
        <code bind:this={codeElement} class="language-xml"></code>
        {#if code.split(/\r\n|\r|\n/).length > 20 && !expanded}
            <button on:click={() => expanded = !expanded} class="v-code-block-expand-button">{expanded ? "Show Less" : "Show More"}</button>
        {/if}
    </pre>
</div>