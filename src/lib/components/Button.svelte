<script>
    /** @type { 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' } */
    export let variant = 'default';

    /** @type { boolean } */
    export let expand = false;

    /** @type { boolean } */
    export let disabled = false;
</script>

<button class="v-button is-{variant} {expand ? "is-expanded" : undefined}" disabled={disabled} tabindex="0" {...$$restProps} on:click>
    <slot name="start" />
    <slot />
    <slot name="end" />
</button>