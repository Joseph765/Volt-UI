<script>
    /**
     * Any other attribute (e.g. placeholder, rows, oninput) goes on the <textarea>.
     * @type {{
     *   label?: string,
     *   value?: string,
     *   name: string,
     *   id?: string,
     *   expanded?: boolean,
     *   required?: boolean,
     *   error?: string,
     *   hint?: string,
     *   align?: 'start' | 'end',
     *   autocomplete?: import('svelte/elements').HTMLTextareaAttributes['autocomplete'],
     *   style?: string
     * } & import('svelte/elements').HTMLTextareaAttributes}
     */
    let {
        label = "",
        value = $bindable(""),
        name,
        id = undefined,
        expanded = false,
        required = false,
        error = "",
        hint = "",
        align = "start",
        autocomplete = "off",
        style = undefined,
        ...rest
    } = $props();

    // The label points at the field: its id, or its name when no id is given
    const fieldId = $derived(id || name);
</script>

<div class="m-label-wrapper">
    {#if label}
        <label class="m-label" for={fieldId}>
          {label}
          {#if required}
            <span class="m-required">*</span>
          {/if}
        </label>
    {/if}

    <div class="m-textarea-wrapper {expanded ? "is-expanded" : undefined}">
        <textarea
            id={fieldId}
            {name}
            {required}
            {autocomplete}
            {style}
            bind:value
            {...rest}
            class="m-textarea {expanded ? "is-expanded" : undefined} {error ? "is-danger" : undefined} is-align-{align}"
        ></textarea>
    </div>

    {#if error}
        <span class="m-text is-size-s is-danger">{error}</span>
    {/if}
    {#if hint}
      <span class="m-text is-size-s is-weak">{hint}</span>
    {/if}
</div>
