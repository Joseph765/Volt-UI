<!-- Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md -->
<script>
    import { fly } from "svelte/transition";

    /**
     * @type {{
     *   id: string,
     *   dismissable?: boolean,
     *   variant?: 'default' | 'danger',
     *   onDismiss?: () => void,
     *   children?: import('svelte').Snippet
     * }}
     */
    let { id, dismissable = true, variant = "default", onDismiss = () => {}, children } = $props();
</script>

<div class="m-toast {variant === "danger" ? "is-danger" : undefined}" {id} transition:fly={{ x: 200, duration: 250 }}>
    <span class="m-toast-message">
        {@render children?.()}
    </span>
    {#if dismissable}
        <button class="m-toast-dismiss" aria-label="close" onclick={onDismiss}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
    {/if}
</div>