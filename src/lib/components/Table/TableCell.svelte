<script>
    /** @type { 'start' | 'center' | 'end' } */
    export let align = "start";

    /** @type { boolean } */
    export let truncate = false;
</script>

<td class="v-table-cell is-align-{align} {truncate ? "is-truncated" : undefined}">
    <slot />
</td>