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
    export let help = "";
</script>

<div class="v-toggle-container {error ? "is-danger" : undefined} {disabled ? "is-disabled" : undefined} {help ? "has-help-text" : undefined}">
    <input class="v-toggle" type="checkbox" {checked} {name} {disabled}>
    <div class="v-flex has-direction-column has-gap-xs">
        <label class="v-toggle-label" for={name}>{label}</label>
        {#if error}
            <span class="v-help-text is-danger">{error}</span>
        {/if}
        {#if help}
            <span class="v-help-text">{help}</span>
        {/if}
    </div>
</div>