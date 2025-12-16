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

    /** @type { number } */
    let prefixWidth = 0;

    /** @type { number } */
    let suffixWidth = 0;

    /** @type { number } */
    let wrapperWidth = 0;
</script>

<div class="v-label-wrapper">
    {#if label}
        <label class="v-label {required ? "is-required" : ""}" for={name}>{label}</label>
    {/if}

    <div class="v-input-wrapper {expanded ? "is-expanded" : "expanded"}" bind:clientWidth={wrapperWidth}>
        {#if $$slots.prefix}
          <span class="v-input-prefix" bind:clientWidth={prefixWidth}>
            <slot name="prefix" />
          </span>
        {/if}
    
        <input
            {type}
            {name}
            {required}
            bind:value
            {...$$restProps}
            class="v-input {expanded ? "is-expanded" : "expanded"} {error ? "is-danger" : ""}"
            style:padding-left={prefixWidth ? `${prefixWidth}px` : undefined}
            style:padding-right={(type === 'number' && suffixWidth) ? `${suffixWidth + 16}px` : suffixWidth ? `${suffixWidth}px` : undefined}
            style:width={
              expanded ? undefined
              : prefixWidth 
              ? `${238 - (prefixWidth - 26)}px` 
              : suffixWidth 
              ? `${238 - (suffixWidth - 18)}px` 
              : "238px"
            }
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
</div>