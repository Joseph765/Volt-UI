<script>
    /** @type { string } */
    export let label;

    /** @type { boolean } */
    export let required = false;
</script>

<fieldset class="v-fieldset" aria-required={required}>
    <legend class="v-fieldset-legend">
        <div class="v-fieldset-label">{label}</div>
        {#if required}
            <div class="v-fieldset-required">*</div>
        {/if}
    </legend>
    <slot />
</fieldset>