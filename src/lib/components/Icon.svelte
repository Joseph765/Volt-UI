<script>
    /** @type { 'plus' | 'minus' | 'chevron-down' | 'chevron-up' | 'x' | 'search' | 'phone' | 'user' | 'arrow-up' | 'arrow-down' | 'circle-question-mark' | 'info' | 'triangle-alert' | 'circle-check' } */
    export let name;

    /** @type { 's' | 'm' | 'l' } */
    export let size = 'm';
</script>

{#if name}
    <svg xmlns="http://www.w3.org/2000/svg" width={size === "s" ? "12" : size === "m" ? "16" : size === "l" ? "24" : "16"} height={size === "m" ? "16" : size === "l" ? "24" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        {#if name === "plus"}
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        {:else if name === "minus"}
            <path d="M5 12h14" />
        {:else if name === "chevron-down"}
            <path d="m6 9 6 6 6-6" />
        {:else if name === "chevron-up"}
            <path d="m18 15-6-6-6 6"/>
        {:else if name === "x"}
            <path d="M18 6 6 18"/><path d="m6 6 12 12" />
        {:else if name === "search"}
            <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8" />
        {:else if name === "phone"}
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        {:else if name === "user"}
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        {:else if name === "arrow-up"}
            <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
        {:else if name === "arrow-down"}
            <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
        {:else if name === "circle-question-mark"}
            <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
        {:else if name === "info"}
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
        {:else if name === "triangle-alert"}
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>
        {:else if name === "circle-check"}
            <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
        {/if}
    </svg>
{:else} 
    <span>Icon "{name}" not found</span>
{/if}