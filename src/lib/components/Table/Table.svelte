<script>
    /** @type { boolean } */
    export let striped = false;
    
    /** @type { boolean } */
    export let interactive = false;
</script>

<div class="m-table-wrapper">
    <table class="m-table {striped ? "is-striped" : undefined} {interactive ? "is-interactive" : undefined}">
        <slot />
    </table>
</div>