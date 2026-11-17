<script>
    /** @type {{ children?: import('svelte').Snippet }} */
    let { children } = $props();
</script>

<!-- A live region: screen readers announce each toast as it's added, without interrupting the user -->
<div class="m-toast-group" role="status" aria-live="polite">
    {@render children?.()}
</div>
