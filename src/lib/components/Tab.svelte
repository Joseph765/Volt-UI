<script>
    /** @type { string } */
    export let id;

    /** @type { string } */
    export let selected;
</script>

<div class="v-tab-panel" {id} role="tabpanel" tabindex={selected === id ? 0 : -1} aria-labelledby="tab-{id}" hidden={selected === id ? false : true}>
    <slot />
</div>