<script>
    /**
     * Any other attribute (e.g. placeholder, onchange, onkeydown, oninput) goes on the <input>.
     * @type {{
     *   label?: string,
     *   value?: string,
     *   type?: string,
     *   name: string,
     *   expanded?: boolean,
     *   required?: boolean,
     *   error?: string,
     *   hint?: string,
     *   align?: 'start' | 'end',
     *   autocomplete?: import('svelte/elements').HTMLInputAttributes['autocomplete'],
     *   style?: string,
     *   prefix?: import('svelte').Snippet,
     *   suffix?: import('svelte').Snippet
     * } & Omit<import('svelte/elements').HTMLInputAttributes, 'prefix'>}
     */
    let {
        label = "",
        value = $bindable(""),
        type = "text",
        name,
        expanded = false,
        required = false,
        error = "",
        hint = "",
        align = "start",
        autocomplete = "off",
        style = undefined,
        prefix,
        suffix,
        ...rest
    } = $props();

    let prefixWidth = $state(0);
    let suffixWidth = $state(0);
</script>

<div class="m-label-wrapper">
    {#if label}
        <label class="m-label" for={name}>
          {label}
          {#if required}
            <span class="m-required">*</span>
          {/if}
        </label>
    {/if}

    <div class="m-input-wrapper {expanded ? "is-expanded" : undefined}">
        {#if prefix}
          <span class="m-input-prefix" bind:clientWidth={prefixWidth}>
            {@render prefix()}
          </span>
        {/if}

        <input
            {type}
            {name}
            {required}
            {autocomplete}
            {style}
            bind:value
            {...rest}
            class="m-input {expanded ? "is-expanded" : undefined} {error ? "is-danger" : undefined} is-align-{align}"
            style:padding-inline-start={prefixWidth ? `${prefixWidth}px` : undefined}
            style:padding-inline-end={suffixWidth ? `${suffixWidth}px` : undefined}
        />

        {#if suffix}
          <span class="m-input-suffix" bind:clientWidth={suffixWidth}>
            {@render suffix()}
          </span>
        {/if}
    </div>

    {#if error}
        <span class="m-text is-danger is-size-s">{error}</span>
    {/if}
    {#if hint}
      <span class="m-text is-size-s is-weak">{hint}</span>
    {/if}
</div>
