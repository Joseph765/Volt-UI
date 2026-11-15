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
    export let hint = "";

    /** @type { string } */
    export let error = "";
</script>

<div class="m-radio-wrapper {disabled ? "is-disabled" : undefined} {error ? "is-danger" : undefined} {hint ? "has-hint" : undefined}">
    <input class="m-radio" type="radio" {id} {name} {value} {checked} {disabled} tabindex="0">
    <label class="m-radio-label" for={id}>
        {label}
        {#if error}
            <div class="m-text is-danger is-size-s">{error}</div>
        {/if}
        {#if hint}
            <div class="m-text is-weak is-size-s">{hint}</div>
        {/if}
    </label>
</div>