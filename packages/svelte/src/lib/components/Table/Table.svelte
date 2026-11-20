<script>
    /** @type {{ striped?: boolean, interactive?: boolean, children?: import('svelte').Snippet }} */
    let { striped = false, interactive = false, children } = $props();
</script>

<div class="m-table-wrapper">
    <table class="m-table {striped ? "is-striped" : undefined} {interactive ? "is-interactive" : undefined}">
        {@render children?.()}
    </table>
</div>
