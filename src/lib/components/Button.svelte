<script>
    /** @type { 'default' | 'primary' | 'secondary' | 'ghost' | 'danger' } */
    export let variant = 'default';

    /** @type { boolean } */
    export let expanded = false;

    /** @type { 'm' | 'l' } */
    export let size = 'm';

    /** @type { boolean } */
    export let disabled = false;

    /** @type { string } */
    export let href = "";
</script>

<div class="v-button-wrapper" class:is-expanded={expanded}>
    <!-- Decorative copy of the label for the hover wipe; hidden from assistive tech -->
    <div class="v-button-overlay" aria-hidden="true">
        <slot name="start" />
        <slot />
        <slot name="end" />
    </div>
    {#if href}
        <a {href} class="v-button is-link is-{variant} is-size-{size}" class:is-expanded={expanded} {...$$restProps} on:click>
            <slot name="start" />
            <slot />
            <slot name="end" />
        </a>
    {:else}
        <button class="v-button is-{variant} is-size-{size}" class:is-expanded={expanded} {disabled} {...$$restProps} on:click>
            <slot name="start" />
            <slot />
            <slot name="end" />
        </button>
    {/if}
</div>
