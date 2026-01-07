<script>
    /** @type { "neutral" | "danger" | "warning" | "success" | "info" } */
    export let variant = "neutral";

    /** @type { boolean } */
    export let strong = false;
</script>

<div class="v-badge is-{variant} {strong ? "is-strong" : undefined}">
    <slot name="icon" />
    <slot />
</div>