<script>
    /** @type { 'start' | 'center' | 'end' } */
    export let align = "start";
</script>

<th class="v-table-head is-align-{align}">
    <slot />
</th>