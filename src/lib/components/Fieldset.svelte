<script>
    /** @type {{ label: string, required?: boolean, children?: import('svelte').Snippet }} */
    let { label, required = false, children } = $props();
</script>

<fieldset class="m-fieldset">
    <legend class="m-fieldset-legend">
        <div class="m-fieldset-label">{label}</div>
        {#if required}
            <span class="m-required">*</span>
        {/if}
    </legend>
    {@render children?.()}
</fieldset>
