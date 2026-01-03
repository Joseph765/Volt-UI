<script>
    import { onMount } from 'svelte';
    import hljs from 'highlight.js';
    import CopyButton from './CopyButton.svelte';

    /** @type { string } */
    export let code;

    /** @type { HTMLElement } */
    let codeElement;

    onMount(() => {
        codeElement.textContent = code;
        hljs.highlightElement(codeElement);
    });
</script>

<div class="v-code-example-wrapper">
    <div class="v-code-example">
        <slot />
    </div>
    <pre class="v-code-block">
        <CopyButton copyText={code} style="position: absolute; top: var(--v-space-s); right: var(--v-space-s);" />
        <code bind:this={codeElement} class="language-xml"></code>
    </pre>
</div>
