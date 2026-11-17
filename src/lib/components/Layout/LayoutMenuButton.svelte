<!-- Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md -->
<script>
    /** @type {{ open?: boolean, onclick?: import('svelte/elements').MouseEventHandler<HTMLButtonElement> }} */
    let { open = false, onclick } = $props();
</script>

<button class="m-layout-menu-button" aria-label="Toggle navigation menu" aria-expanded={open} {onclick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu" aria-hidden="true"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
</button>
