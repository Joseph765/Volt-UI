<script>
    /** @type { boolean } */
    export let checked = false;

    /** @type { string } */
    export let label = "";

    /** @type { string } */
    export let name;

    /** @type { boolean } */
    export let disabled = false;

    /** @type { string } */
    export let error = "";

    /** @type { string } */
    export let hint = "";
</script>

<div class="v-toggle-wrapper {error ? "is-danger" : undefined} {disabled ? "is-disabled" : undefined} {hint ? "has-hint" : undefined}">
    <input class="v-toggle" type="checkbox" {checked} {name} {disabled} tabindex="0">
    <div class="v-flex has-direction-column has-gap-xs">
        <label class="v-toggle-label" for={name}>{label}</label>
        {#if error}
            <span class="v-text is-size-s is-danger">{error}</span>
        {/if}
        {#if hint}
            <span class="v-text is-size-s is-weak">{hint}</span>
        {/if}
    </div>
</div>