<script>
    /** @type { 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' } */
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

{#if href}
    <a {href} class="v-button is-link is-size-{size} {expanded ? "is-expanded" : undefined}" tabindex="0" {...$$restProps} on:click>
        <slot name="start" />
        <slot />
        <slot name="end" />
    </a>
{:else}
    <button class="v-button is-{variant} is-size-{size} {expanded ? "is-expanded" : undefined}" disabled={disabled} tabindex="0" {...$$restProps} on:click>
        <slot name="start" />
        <slot />
        <slot name="end" />
    </button>
{/if}