<script>
    /** @type { 'start' | 'center' | 'end' } */
    export let align = "start";
</script>

<th class="m-table-head is-align-{align}">
    <slot />
</th>