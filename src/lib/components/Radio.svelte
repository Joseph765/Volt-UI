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

    /**
     * The selected value of the whole group. Use `bind:group` on every Radio in the group with the same variable;
     * it holds the `value` of the checked one. When set, it decides which Radio is checked (instead of `checked`).
     * @type { string | undefined }
     */
    export let group = undefined;
</script>

<div class="m-radio-wrapper {disabled ? "is-disabled" : undefined} {error ? "is-danger" : undefined} {hint ? "has-hint" : undefined}">
    {#if group !== undefined}
        <input class="m-radio" type="radio" {id} {name} {value} {disabled} bind:group tabindex="0" on:change>
    {:else}
        <input class="m-radio" type="radio" {id} {name} {value} {checked} {disabled} tabindex="0" on:change>
    {/if}
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