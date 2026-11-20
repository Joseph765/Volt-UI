<script>
    import { tick, untrack } from 'svelte';
    import hljs from 'highlight.js';
    import Button from '$lib/components/Button.svelte';
    import CopyButton from '$lib/components/CopyButton.svelte';
    import { forFramework } from '../framework.svelte.js';

    /**
     * `code` is either one string (the same in every framework, e.g. CSS) or a `{ svelte, react }` pair, which
     * follows the framework switcher next to the logo. Pairs are highlighted as Svelte ("xml", which covers the
     * markup and its <script>) or React ("jsx"). `language` sets the highlight.js language for a plain string:
     * "xml" (default) or "css".
     * @type {{
     *   code: string | import('../framework.svelte.js').PerFramework,
     *   codeOnly?: boolean,
     *   language?: string,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { code, codeOnly = false, language = "xml", children } = $props();

    let source = $derived(typeof code === "string" ? code : forFramework(code));
    let sourceLanguage = $derived(typeof code === "string" ? language : forFramework({ svelte: "xml", react: "jsx" }));

    /** @type { HTMLElement } */
    let codeElement;

    /** @type { boolean } */
    let expanded = $state(false);

    /** @type { HTMLElement } */
    let codeBlock;

    /**
     * Whether the code is taller than the collapsed block (its max-height in highlight.css), so it needs "Show more".
     * Measured rather than counted in lines, so it stays right whatever the language, font or line height.
     */
    let collapsible = $state(false);

    function measure() {
        // Only while collapsed: then the block is capped, and code taller than it is cut off
        if (!expanded && codeElement) collapsible = codeElement.scrollHeight > codeElement.clientHeight + 1;
    }

    function collapse() {
        expanded = false;
        // The block shrinks a lot; bring it back into view so the reader doesn't lose their place
        codeBlock.scrollIntoView({ block: "nearest" });
    }

    // Highlight in the browser, again whenever the framework (and so the code) changes
    $effect(() => {
        let html = hljs.highlight(source, { language: sourceLanguage }).value;
        if (sourceLanguage === "css") {
            // highlight.js leaves custom properties (e.g. --m-font-size-xl) as plain text; mark them so the token
            // names, the part people copy, get their own color. Text nodes only, never inside a tag.
            html = html.replace(
                /(^|>)([^<]*)/g,
                (_, start, text) => start + text.replace(/--[a-z0-9-]+/gi, '<span class="hljs-variable">$&</span>')
            );
        }
        codeElement.innerHTML = html;

        // New code (e.g. the other framework) starts collapsed; measure once the block has re-rendered, and again
        // once the code font has loaded, since it changes the line height
        untrack(() => (expanded = false));
        tick().then(measure);
        document.fonts?.ready.then(measure);
    });
</script>

<div class="m-code-example-wrapper {codeOnly ? "is-code-only" : undefined}">
    {#if !codeOnly}
        <div class="m-code-example">
            {@render children?.()}
        </div>
    {/if}
    <pre class="m-code-block {expanded ? "is-expanded" : undefined}" bind:this={codeBlock}>
        <CopyButton copyText={source} style="position: absolute; top: var(--m-space-s); right: var(--m-space-s);" />
        <code bind:this={codeElement} class="hljs language-{sourceLanguage}"></code>
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