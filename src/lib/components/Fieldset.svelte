<script>
    /** @type { string } */
    export let label;

    /** @type { boolean } */
    export let required = false;
</script>

<fieldset class="m-fieldset">
    <legend class="m-fieldset-legend">
        <div class="m-fieldset-label">{label}</div>
        {#if required}
            <span class="m-required">*</span>
        {/if}
    </legend>
    <slot />
</fieldset>