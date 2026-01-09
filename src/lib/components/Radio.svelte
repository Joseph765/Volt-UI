<script>
    /** @type { string } */
    export let id;

    /** @type { string } */
    export let label;

    /** @type { string } */
    export let name;

    /** @type { boolean } */
    export let checked = false;

    /** @type { string } */
    export let value;

    /** @type { boolean } */
    export let disabled = false;

    /** @type { string } */
    export let help = "";

    /** @type { string } */
    export let error = "";
</script>

<div class="v-radio-wrapper {disabled ? "is-disabled" : ""} {error ? "is-danger" : undefined} {help ? "has-help-text" : undefined}">
    <input class="v-radio" type="radio" {id} {name} {value} {checked} {disabled} tabindex="0">
    <label class="v-radio-label" for={id}>
        {label}
        {#if error}
            <div class="v-help-text is-danger">{error}</div>
        {/if}
        {#if help}
            <div class="v-help-text">{help}</div>
        {/if}
    </label>
</div>