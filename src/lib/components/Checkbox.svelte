<script>
    /** @type { string | undefined } */
    export let name = undefined;

    /** @type { boolean } */
    export let checked = false;

    /** @type { boolean } */
    export let disabled = false;

    /** @type { boolean } */
    export let indeterminate = false;

    /** @type { string } */
    export let label = '';

    /** @type { string } */
    export let error = '';

    /** @type { string | undefined } */
    export let style = undefined;
</script>

<label
    class="v-checkbox-wrapper {error ? "is-danger" : ""}"
    {style}
>
    <input
        type="checkbox"
        {name}
        {disabled}
        bind:checked
        bind:indeterminate
        {...$$restProps}
        tabindex="0"
        class="v-checkbox-input"
    />

    <span class="v-checkbox-box {error ? "is-danger" : undefined}">
        {#if checked}
            <!-- Check mark -->
            <svg class="v-checkbox-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {/if}

        {#if indeterminate}
            <!-- Indeterminate dash -->
            <svg class="v-checkbox-indeterminate" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
        {/if}
    </span>

    {#if label}
        <span class="v-checkbox-label">
            {#if label}
                {label}
            {/if}
            {#if error}
                <span class="v-help-text is-danger">{error}</span>
            {/if}
        </span>
    {/if}
</label>

<style>
    .v-checkbox-wrapper {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        user-select: none;
        font-size: var(--v-font-size-m);
    }

    .v-checkbox-wrapper.is-danger {
        align-items: flex-start;
    }

    .v-checkbox-wrapper:has(input:disabled) {
        opacity: 0.6;
        cursor: not-allowed;
        color: var(--color-text-weaker);
    }

    .v-checkbox-input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .v-checkbox-box {
        position: relative;
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        border: 1px solid var(--v-gray-7);
        border-radius: var(--v-radius-default);
        background-color: var(--v-color-surface);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .v-checkbox-box.is-danger {
        border: 1px solid var(--v-danger-9);
    }

    /* Hover */
    .v-checkbox-wrapper:hover .v-checkbox-box {
        border-color: var(--v-gray-9);
    }

    /* Checked */
    .v-checkbox-input:checked ~ .v-checkbox-box {
        background-color: var(--v-gray-12);
        border-color: var(--v-gray-12);
    }

    .v-checkbox-input:checked:hover ~ .v-checkbox-box {
        background-color: var(--v-gray-11);
        border-color: var(--v-gray-11);
    }

    .v-checkbox-input:disabled ~ .v-checkbox-box {
        background-color: var(--v-gray-10);
        border-color: var(--v-gray-10);
    }

    .v-checkbox-input:disabled:hover ~ .v-checkbox-box {
        background-color: var(--v-gray-10);
        border-color: var(--v-gray-10);
    }

    /* Focus */
    .v-checkbox-input:focus-visible ~ .v-checkbox-box {
        box-shadow: 0 0 0 3px var(--v-color-highlight);
        border-color: var(--v-color-highlight);
    }

    /* Indeterminate & Checked: show check or dash */
    .v-checkbox-check {
        opacity: 0;
        color: var(--v-gray-1);
        min-width: 24px;
    }

    .v-checkbox-indeterminate {
        color: var(--v-gray-1);
    }

    .v-checkbox-input:indeterminate ~ .v-checkbox-box {
        background-color: var(--v-gray-12);
        border-color: var(--v-gray-12);
    }

    .v-checkbox-input:indeterminate:hover ~ .v-checkbox-box {
        background-color: var(--v-gray-11);
        border-color: var(--v-gray-11);
    }

    .v-checkbox-input:checked ~ .v-checkbox-box .v-checkbox-check,
    .v-checkbox-wrapper .v-checkbox-box .v-checkbox-indeterminate {
        opacity: 1;
    }

    .v-checkbox-label {
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: end;
        gap: var(--v-space-s);
    }
</style>