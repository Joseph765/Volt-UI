<script>
    import { fly } from "svelte/transition";

    /** @type { string } */
    export let id;

    /** @type { boolean } */
    export let dismissable = true;

    /** @type { 'neutral' | 'danger' } */
    export let status = "neutral";

    /** @type { any } */
    export let onDismiss = () => {};
</script>

<div class="v-toast {status === "danger" ? "is-danger" : undefined}" {id} transition:fly={{ x: 200, duration: 250 }}>
    <span class="v-toast-message">
        <slot />
    </span>
    {#if dismissable}
        <button class="v-toast-dismiss" aria-label="close" onclick={onDismiss}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
    {/if}
</div>