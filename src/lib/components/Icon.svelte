<script>
    /** @type { 'plus' | 'minus' | 'chevron-down' | 'chevron-up' | 'x' } */
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
            <path d="m6 9 6 6 6-6"/>
        {:else if name === "chevron-up"}
            <path d="m6 9 6 6 6-6"/>
        {:else if name === "x"}
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        {/if}
    </svg>
{:else} 
    <span>Icon "{name}" not found</span>
{/if}