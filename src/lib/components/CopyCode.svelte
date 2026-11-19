<script>
    import CopyButton from "./CopyButton.svelte";

    /** @type {{ code: string, style?: string }} */
    let { code, style = "" } = $props();

    /**
     * Light highlighting for a one-line command, in the same colors as Moth's code blocks:
     * the command (e.g. npm), then its subcommand (install), arguments (package names) and flags (--save-dev).
     * The copied text is always `code` itself.
     */
    let tokens = $derived.by(() => {
        let seenSubcommand = false;
        return code.trim().split(/\s+/).map((text, index) => {
            if (index === 0) return { text, kind: "command" };
            if (text.startsWith("-")) return { text, kind: "flag" };
            if (!seenSubcommand) {
                seenSubcommand = true;
                return { text, kind: "subcommand" };
            }
            return { text, kind: "argument" };
        });
    });
</script>

<div class="m-copy-code" {style}>
    <code class="m-copy-code-text">{#each tokens as token, i}{#if i > 0}{" "}{/if}<span class="m-copy-code-{token.kind}">{token.text}</span>{/each}</code>
    <CopyButton copyText={code} />
</div>
