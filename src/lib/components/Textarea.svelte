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
    export let help = '';

    /** @type { 'start' | 'end' } */
    export let align = 'end';

    /** @type { any } */
    export let autocomplete = 'off';

    /** @type { string | undefined } */
    export let style = undefined;
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

    <div class="v-textarea-wrapper {expanded ? "is-expanded" : undefined}">
        <textarea
            {name}
            {required}
            {autocomplete}
            {style}
            bind:value
            {...$$restProps}
            class="v-textarea {expanded ? "is-expanded" : undefined} {error ? "is-danger" : undefined} is-align-{align}"
        ></textarea>
    </div>

    {#if error}
        <span class="v-help-text is-danger">{error}</span>
    {/if}

    {#if help}
      <span class="v-help-text">{help}</span>
    {/if}
</div>