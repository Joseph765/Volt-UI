<script>
    /** @type { string } */
    export let label = "";

    /** @type { string } */
    export let value = '';

    /** @type { string } */
    export let type = 'text';

    /** @type { string } */
    export let name;

    /** @type { boolean } */
    export let expanded = false;

    /** @type { boolean } */
    export let required = false;

    /** @type { string } */
    export let error = '';

    /** @type { string } */
    export let help = '';

    /** @type { 'left' | 'right' } */
    export let align = 'left';

    /** @type { any } */
    export let autocomplete = 'off';

    /** @type { number } */
    let prefixWidth = 0;

    /** @type { number } */
    let suffixWidth = 0;
</script>

<div class="v-label-wrapper">
    {#if label}
        <label class="v-label {required ? "is-required" : ""}" for={name}>{label}</label>
    {/if}

    <div class="v-input-wrapper {expanded ? "is-expanded" : "expanded"}">
        {#if $$slots.prefix}
          <span class="v-input-prefix" bind:clientWidth={prefixWidth}>
            <slot name="prefix" />
          </span>
        {/if}
    
        <input
            {type}
            {name}
            {required}
            {autocomplete}
            bind:value
            {...$$restProps}
            class="v-input {expanded ? "is-expanded" : "expanded"} {error ? "is-danger" : ""} is-align-{align}"
            style:padding-left={prefixWidth ? `${prefixWidth}px` : undefined}
            style:padding-right={(type === 'number' && suffixWidth) ? `${suffixWidth + 16}px` : suffixWidth ? `${suffixWidth + 16}px` : undefined}
        />
    
        {#if $$slots.suffix}
          <span class="v-input-suffix" bind:clientHeight={suffixWidth}>
            <slot name="suffix" />
          </span>
        {/if}
    </div>

    {#if error}
        <span class="v-help-text is-danger">{error}</span>
    {/if}

    {#if help}
      <span class="v-help-text">{help}</span>
    {/if}
</div>