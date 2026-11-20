<!-- Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md -->
<script>
    /**
     * `value` is the selected option's value; use `bind:value`. `options` is the list to choose from.
     * Any other attribute (e.g. onchange, aria-describedby) goes on the <select>.
     * @type {{
     *   label?: string,
     *   name: string,
     *   id?: string,
     *   expanded?: boolean,
     *   required?: boolean,
     *   value?: string,
     *   options?: { value: string; label: string }[],
     *   placeholder?: string,
     *   error?: string,
     *   hint?: string,
     *   disabled?: boolean,
     *   autocomplete?: import('svelte/elements').HTMLSelectAttributes['autocomplete'],
     *   style?: string,
     *   prefix?: import('svelte').Snippet,
     *   suffix?: import('svelte').Snippet
     * } & Omit<import('svelte/elements').HTMLSelectAttributes, 'prefix'>}
     */
    let {
        label = "",
        name,
        id = undefined,
        expanded = false,
        required = false,
        value = $bindable(""),
        options = [],
        placeholder = "Select an option...",
        error = "",
        hint = "",
        disabled = false,
        autocomplete = "off",
        style = undefined,
        prefix,
        suffix,
        ...rest
    } = $props();

    // The label points at the field: its id, or its name when no id is given
    const fieldId = $derived(id || name);

    let prefixWidth = $state(0);
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

    <div class="m-select-wrapper {expanded ? "is-expanded" : undefined} {error ? "is-danger" : undefined}" {style}>
        {#if prefix}
            <span class="m-select-prefix" bind:clientWidth={prefixWidth}>
                {@render prefix()}
            </span>
        {/if}

        <select
            bind:value
            id={fieldId}
            {name}
            {disabled}
            {required}
            {autocomplete}
            {...rest}
            class="m-select"
            class:has-placeholder={value === ""}
            style:padding-inline-start={prefixWidth ? `${prefixWidth}px` : undefined}
        >
            {#if placeholder}
                <option value="" disabled selected hidden>
                    {placeholder}
                </option>
            {/if}

            {#each options as option}
                <option value={option.value}>
                    {option.label}
                </option>
            {/each}
        </select>

        {#if suffix}
            <span class="m-select-suffix">
                {@render suffix()}
            </span>
        {/if}

        <!-- Dropdown arrow -->
        <span class="m-select-arrow">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </span>
    </div>

    {#if error}
        <span class="m-text is-size-s is-danger">{error}</span>
    {/if}

    {#if hint}
        <span class="m-text is-size-s is-weak">{hint}</span>
    {/if}
</div>