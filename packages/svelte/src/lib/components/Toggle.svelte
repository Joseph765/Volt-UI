<script>
    /**
     * @type {{
     *   checked?: boolean,
     *   label?: string,
     *   name: string,
     *   disabled?: boolean,
     *   error?: string,
     *   hint?: string,
     *   onchange?: import('svelte/elements').ChangeEventHandler<HTMLInputElement>
     * }}
     */
    let { checked = $bindable(false), label = "", name, disabled = false, error = "", hint = "", onchange } = $props();
</script>

<div class="m-toggle-wrapper {error ? "is-danger" : undefined} {disabled ? "is-disabled" : undefined} {hint ? "has-hint" : undefined}">
    <!-- bind so `bind:checked` works for consumers; id matches the label's `for` so clicking the label toggles -->
    <input class="m-toggle" type="checkbox" id={name} bind:checked {name} {disabled} tabindex="0" {onchange}>
    <div class="m-flex has-direction-column has-gap-xs">
        <label class="m-toggle-label" for={name}>{label}</label>
        {#if error}
            <span class="m-text is-size-s is-danger">{error}</span>
        {/if}
        {#if hint}
            <span class="m-text is-size-s is-weak">{hint}</span>
        {/if}
    </div>
</div>
