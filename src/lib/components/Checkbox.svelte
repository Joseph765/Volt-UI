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