<!-- Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md -->
<script module>
    /** @typedef { "system" | "light" | "dark" } ThemeChoice */

    // Shared by every ThemeSwitcher on the page (e.g. one in a mobile header and one on desktop), so they agree
    const theme = $state({ choice: /** @type { ThemeChoice } */ ("system") });
</script>

<script>
    import { onMount } from "svelte";

    /**
     * Lets people pick System, Light or Dark. It sets `data-theme` on <html>; System follows the OS setting, live.
     * The choice is saved in localStorage under `storageKey` (an empty string turns saving off).
     * @type {{
     *   storageKey?: string,
     *   label?: string,
     *   onchange?: (choice: ThemeChoice) => void
     * }}
     */
    let { storageKey = "moth-theme", label = "Theme", onchange } = $props();

    /** @type { { value: ThemeChoice, label: string }[] } */
    const options = [
        { value: "system", label: "System theme" },
        { value: "light", label: "Light theme" },
        { value: "dark", label: "Dark theme" }
    ];

    /** @type { HTMLElement[] } */
    let buttons = $state([]);

    /** @param { ThemeChoice } value */
    function apply(value) {
        const light = value === "light" || (value === "system" && matchMedia("(prefers-color-scheme: light)").matches);
        document.documentElement.dataset.theme = light ? "light" : "dark";
    }

    /** @param { ThemeChoice } value */
    function choose(value) {
        theme.choice = value;
        apply(value);
        if (storageKey) {
            try {
                if (value === "system") localStorage.removeItem(storageKey);
                else localStorage.setItem(storageKey, value);
            } catch {
                // Storage can be blocked (e.g. private browsing); the choice still applies for this visit
            }
        }
        onchange?.(value);
    }

    /**
     * Arrow keys move the choice, like any radio group
     * @param { KeyboardEvent } event
     * @param { number } index
     */
    function onkeydown(event, index) {
        const step = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1
            : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
        if (!step) return;
        event.preventDefault();
        const next = (index + step + options.length) % options.length;
        choose(options[next].value);
        buttons[next]?.focus();
    }

    onMount(() => {
        if (storageKey) {
            try {
                const saved = localStorage.getItem(storageKey);
                theme.choice = saved === "light" || saved === "dark" ? saved : "system";
            } catch {}
        }
        apply(theme.choice);

        // While on System, follow the OS when it switches (e.g. at sunset)
        const query = matchMedia("(prefers-color-scheme: light)");
        const onquerychange = () => { if (theme.choice === "system") apply("system"); };
        query.addEventListener("change", onquerychange);
        return () => query.removeEventListener("change", onquerychange);
    });
</script>

<div class="m-theme-switcher" role="radiogroup" aria-label={label}>
    {#each options as option, index (option.value)}
        <button
            bind:this={buttons[index]}
            type="button"
            role="radio"
            class="m-theme-switcher-option"
            aria-checked={theme.choice === option.value}
            aria-label={option.label}
            title={option.label}
            tabindex={theme.choice === option.value ? 0 : -1}
            onclick={() => choose(option.value)}
            onkeydown={(event) => onkeydown(event, index)}
        >
            {#if option.value === "system"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            {:else if option.value === "light"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
            {/if}
        </button>
    {/each}
</div>
