<script>
    /**
     * @type {{
     *   align?: 'start' | 'center' | 'end',
     *   truncate?: boolean,
     *   style?: string,
     *   colspan?: number,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { align = "start", truncate = false, style = "", colspan = undefined, children } = $props();
</script>

<td class="m-table-cell is-align-{align} {truncate ? "is-truncated" : undefined}" {style} {colspan}>
    {@render children?.()}
</td>
