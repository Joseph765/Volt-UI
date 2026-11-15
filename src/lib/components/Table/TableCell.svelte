<script>
    /** @type { 'start' | 'center' | 'end' } */
    export let align = "start";

    /** @type { boolean } */
    export let truncate = false;

    /** @type { string } */
    export let style = "";
</script>

<td class="m-table-cell is-align-{align} {truncate ? "is-truncated" : undefined}" {style}>
    <slot />
</td>