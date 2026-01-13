<script>
    /** @type { string } */
    export let label = '';

    /** @type { string } */
    export let name;

    /** @type { boolean } */
    export let expanded = false;

    /** @type { boolean } */
    export let required = false;

    /**
     * The currently selected value (string by default)
     * @type { string }
     */
    export let value = '';

    /**
     * Array of options for the select
     * @type {{ value: string; label: string }[]}
     */
    export let options = [];

    /**
     * Placeholder text shown when no option is selected
     * @type { string }
     */
    export let placeholder = 'Select an option...';

    /** @type { string } */
    export let error = '';

    /** @type { string } */
    export let help = '';

    /**
     * Whether the select is disabled
     * @type { boolean }
     */
    export let disabled = false;

    /** @type { 'on' | 'off' } */
    export let autocomplete = 'off';

    /** @type { string | undefined } */
    export let style = undefined;

    /** @type { number } */
    let prefixWidth = 0;
</script>

<div class="v-label-wrapper">
    {#if label}
        <label class="v-label" for={name}>
          {label}
          {#if required}
            <span class="v-required">*</span>
          {/if}
        </label>
    {/if}

    <div class="v-select-wrapper {expanded ? "is-expanded" : undefined} {error ? "is-danger" : undefined}" {style}>
        {#if $$slots.prefix}
            <span class="v-select-prefix" bind:clientWidth={prefixWidth}>
                <slot name="prefix" />
            </span>
        {/if}

        <select
            bind:value
            {name}
            {disabled}
            {required}
            {autocomplete}
            {...$$restProps}
            class="v-select"
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

        {#if $$slots.suffix}
            <span class="v-select-suffix">
                <slot name="suffix" />
            </span>
        {/if}

        <!-- Dropdown arrow -->
        <span class="v-select-arrow">
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
        <span class="v-help-text is-danger">{error}</span>
    {/if}

    {#if help}
        <span class="v-help-text">{help}</span>
    {/if}
</div>