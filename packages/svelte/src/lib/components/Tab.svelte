<script>
    /**
     * `id` is the tab's id from the `tabs` list. The panel itself gets `panel-{id}`, which its tab points at with
     * `aria-controls`.
     * @type {{ id: string, selected: string, children?: import('svelte').Snippet }}
     */
    let { id, selected, children } = $props();
</script>

<div class="m-tab-panel" id="panel-{id}" role="tabpanel" tabindex={selected === id ? 0 : -1} aria-labelledby="tab-{id}" hidden={selected === id ? false : true}>
    {@render children?.()}
</div>
