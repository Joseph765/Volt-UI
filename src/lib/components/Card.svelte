<script>
    /** @type { 'none' | 'm' | 'l' } */
    export let space = "m";

    /** @type { string } */
    export let style = "";
</script>

<div class="m-card has-space-{space}" {style}>
    {#if $$slots.header}
        <div class="m-card-header">
            <slot name="header" />
            <slot name="header-end" />
        </div>
    {/if}
    <div class="m-card-content">
        <slot />
    </div>
</div>