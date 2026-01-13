<script>
    /** @type { string } */
    export let label;

    /** @type { boolean } */
    export let required = false;
</script>

<fieldset class="v-fieldset">
    <legend class="v-fieldset-legend">
        <div class="v-fieldset-label">{label}</div>
        {#if required}
            <span class="v-required">*</span>
        {/if}
    </legend>
    <slot />
</fieldset>