<script>
    /** @type {{ id: string, selected: string, children?: import('svelte').Snippet }} */
    let { id, selected, children } = $props();
</script>

<div class="m-tab-panel" {id} role="tabpanel" tabindex={selected === id ? 0 : -1} aria-labelledby="tab-{id}" hidden={selected === id ? false : true}>
    {@render children?.()}
</div>
