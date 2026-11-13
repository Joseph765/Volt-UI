<script>
    /** @type { string } */
    export let label = "";

    /** @type { string } */
    export let value = '';

    /** @type { string } */
    export let name;

    /** @type { boolean } */
    export let expanded = false;

    /** @type { boolean } */
    export let required = false;

    /** @type { string } */
    export let error = '';

    /** @type { string } */
    export let hint = '';

    /** @type { 'start' | 'end' } */
    export let align = 'start';

    /** @type { 'on' | 'off' } */
    export let autocomplete = 'off';

    /** @type { string | undefined } */
    export let style = undefined;
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

    <div class="m-textarea-wrapper {expanded ? "is-expanded" : undefined}">
        <textarea
            {name}
            {required}
            {autocomplete}
            {style}
            bind:value
            {...$$restProps}
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