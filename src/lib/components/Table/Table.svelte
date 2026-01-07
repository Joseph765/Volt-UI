<script>
    /** @type { boolean } */
    export let striped = false;
    
    /** @type { boolean } */
    export let interactive = false;
</script>

<div class="v-table-wrapper">
    <table class="v-table {striped ? "is-striped" : undefined} {interactive ? "is-interactive" : undefined}">
        <slot />
    </table>
</div>