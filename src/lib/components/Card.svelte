<script>
    /** @type { 'none' | 'm' | 'l' } */
    export let space = "m";

    /** @type { 'default' | 'ghost' } */
    export let variant = "default";

    /** @type { string } */
    export let style = "";
</script>

<div class="v-card has-space-{space} is-{variant}" {style}>
    {#if $$slots.header}
        <div class="v-card-header">
            <slot name="header" />
            <slot name="header-end" />
        </div>
    {/if}
    <div class="v-card-content">
        <slot />
    </div>
</div>