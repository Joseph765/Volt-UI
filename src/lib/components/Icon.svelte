<script>
    /** @type { 'plus' | 'minus' | 'chevron-down' | 'chevron-up' | 'x' | 'search' | 'phone' | 'user' } */
    export let name;

    /** @type { 'm' | 'l' } */
    export let size = 'm';
</script>

{#if name}
    <svg xmlns="http://www.w3.org/2000/svg" width={size === "m" ? "16" : size === "l" ? "24" : "16"} height={size === "m" ? "16" : size === "l" ? "24" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        {#if name === "plus"}
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        {:else if name === "minus"}
            <path d="M5 12h14" />
        {:else if name === "chevron-down"}
            <path d="m6 9 6 6 6-6" />
        {:else if name === "chevron-up"}
            <path d="m6 9 6 6 6-6" />
        {:else if name === "x"}
            <path d="M18 6 6 18"/><path d="m6 6 12 12" />
        {:else if name === "search"}
            <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8" />
        {:else if name === "phone"}
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        {:else if name === "user"}
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        {/if}
    </svg>
{:else} 
    <span>Icon "{name}" not found</span>
{/if}