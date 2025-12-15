<script>
    /** @type { 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' } */
    export let variant = 'default';

    /** @type { boolean } */
    export let disabled = false;
</script>

<button class="v-button is-{variant}" disabled={disabled}>
    <slot name="start" />
    <slot />
    <slot name="end" />
</button>