<script>
    /** @type { 'start' | 'center' | 'end' } */
    export let align = "start";

    /** @type { boolean } */
    export let truncate = false;

    /** @type { string } */
    export let style = "";

    /** @type { number | undefined } Number of columns the cell spans */
    export let colspan = undefined;
</script>

<td class="m-table-cell is-align-{align} {truncate ? "is-truncated" : undefined}" {style} {colspan}>
    <slot />
</td>