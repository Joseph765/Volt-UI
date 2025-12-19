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

    /** @type { any } */
    export let autocomplete = 'off';

    /** @type { string | undefined } */
    export let style = undefined;

    /** @type { number } */
    let prefixWidth = 0;
</script>

<div class="v-label-wrapper">
    {#if label}
        <label class="v-label {required ? "is-required" : ""}" for={name}>{label}</label>
    {/if}

    <div class="v-select-wrapper {expanded ? "is-expanded" : "expanded"} {error ? "is-danger" : undefined}" {style}>
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
            class:has-placeholder={value === ''}
            style:padding-left={prefixWidth ? `${prefixWidth}px` : undefined}
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

<style>
    .v-select-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        background-color: var(--v-color-surface);
        border: 1px solid var(--v-color-border);
        border-radius: var(--v-radius-default);
        width: 12rem;
    }

    .v-select-wrapper.is-expanded {
        width: 100%;
    }

    .v-select {
        font-family: var(--v-font-body);
        font-size: var(--v-font-size-m);
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        padding: 0.5rem 2.5rem 0.5rem 0.75rem;
        border: none;
        background: transparent;
        color: var(--v-color-text);
        cursor: pointer;
    }

    .v-select:focus-within {
        box-shadow: none;
        outline: none;
        border: none;
    }

    .v-select-wrapper:hover {
        border-color: var(--v-gray-7);
    }

    .v-select-wrapper:focus-within {
        outline: none;
        border-color: var(--v-color-highlight);
        box-shadow: 0 0 0 1px var(--v-color-highlight);
    }

     .v-select-wrapper:has(.v-select:disabled) {
        background-color: var(--v-gray-1);
        border-color: var(--v-gray-3);
        cursor: not-allowed;
    }

    .v-select-wrapper:has(.v-select:disabled):hover {
        border-color: var(--v-gray-3);
    }

    .v-select:disabled {
        cursor: not-allowed;
    }

    .v-select-wrapper.is-danger {
        border-color: var(--v-danger-9);
    }

    .v-select-wrapper.is-danger:hover {
        border-color: var(--v-danger-10);
    }

    .v-select.has-placeholder {
        color: var(--v-color-text-weakest);
    }

    .v-select-prefix,
    .v-select-suffix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 var(--v-space-s);
        color: var(--v-color-text-weaker);
        font-size: var(--font-size-m);
        user-select: none;
        pointer-events: none;
    }

    .v-select-prefix {
        left: 0;
        padding-left: var(--v-space-s);
    }

    .v-select-suffix {
        right: 0;
        padding-right: var(--v-space-s);
    }

    .v-select-arrow {
        position: absolute;
        right: 0;
        pointer-events: none;
        padding: 0 var(--v-space-s);
        color: var(--color-text-weak);
        display: flex;
        align-items: center;
        height: 100%;
    }

    .v-select-arrow svg {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>