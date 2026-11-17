<script>
    /**
     * `group` is the selected value of the whole group. Use `bind:group` on every Radio in the group with the same
     * variable; it holds the `value` of the checked one. When set, it decides which Radio is checked (instead of
     * `checked`).
     * @type {{
     *   id: string,
     *   label: string,
     *   name: string,
     *   checked?: boolean,
     *   value: string,
     *   disabled?: boolean,
     *   hint?: string,
     *   error?: string,
     *   group?: string,
     *   onchange?: import('svelte/elements').ChangeEventHandler<HTMLInputElement>
     * }}
     */
    let {
        id,
        label,
        name,
        checked = false,
        value,
        disabled = false,
        hint = "",
        error = "",
        group = $bindable(),
        onchange
    } = $props();
</script>

<div class="m-radio-wrapper {disabled ? "is-disabled" : undefined} {error ? "is-danger" : undefined} {hint ? "has-hint" : undefined}">
    {#if group !== undefined}
        <input class="m-radio" type="radio" {id} {name} {value} {disabled} bind:group tabindex="0" {onchange}>
    {:else}
        <input class="m-radio" type="radio" {id} {name} {value} {checked} {disabled} tabindex="0" {onchange}>
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
