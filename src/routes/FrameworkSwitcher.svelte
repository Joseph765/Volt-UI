<!-- Icons: Lucide (ISC License) -->
<script>
    import { onMount } from "svelte";
    import { framework, frameworks, loadFramework, setFramework } from "./framework.svelte.js";

    /**
     * Docs-only: the chip next to the logo that picks Svelte or React for the whole site. Its menu also shows the
     * package version. `id` must be unique per instance (it links the chip to its menu).
     * @type {{ id: string, version: string }}
     */
    let { id, version } = $props();

    let open = $state(false);

    /** @type { HTMLElement } */
    let root;
    /** @type { HTMLButtonElement } */
    let trigger;
    /** @type { HTMLElement[] } */
    let items = $state([]);

    const current = $derived(frameworks.find((f) => f.value === framework.current) ?? frameworks[0]);
    const menuId = $derived(`${id}-menu`);

    /** @param { number } index */
    async function show(index) {
        open = true;
        // Wait for the menu to render before moving focus into it
        await Promise.resolve();
        requestAnimationFrame(() => items[index]?.focus());
    }

    function hide(returnFocus = true) {
        open = false;
        if (returnFocus) trigger?.focus();
    }

    /** @param { import("./framework.svelte.js").Framework } value */
    function choose(value) {
        setFramework(value);
        hide();
    }

    /** @param { KeyboardEvent } event */
    function onTriggerKeydown(event) {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            show(event.key === "ArrowDown" ? 0 : items.length - 1);
        }
    }

    /**
     * @param { KeyboardEvent } event
     * @param { number } index
     */
    function onItemKeydown(event, index) {
        const count = frameworks.length;
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            items[(index + (event.key === "ArrowDown" ? 1 : -1) + count) % count]?.focus();
        } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            items[event.key === "Home" ? 0 : count - 1]?.focus();
        } else if (event.key === "Escape") {
            event.preventDefault();
            hide();
        } else if (event.key === "Tab") {
            hide(false);
        }
    }

    /** @param { MouseEvent } event */
    function onWindowClick(event) {
        if (open && event.target instanceof Node && !root.contains(event.target)) hide(false);
    }

    onMount(loadFramework);
</script>

<svelte:window onclick={onWindowClick} />

<div class="framework" bind:this={root}>
    <button
        bind:this={trigger}
        type="button"
        class="chip"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="Framework: {current.label}"
        onclick={() => (open ? hide(false) : show(frameworks.indexOf(current)))}
        onkeydown={onTriggerKeydown}
    >
        {current.label}
        <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>

    {#if open}
        <div class="menu" id={menuId} role="menu" aria-label="Framework">
            {#each frameworks as option, index (option.value)}
                <button
                    bind:this={items[index]}
                    type="button"
                    class="item"
                    role="menuitemradio"
                    aria-checked={framework.current === option.value}
                    tabindex="-1"
                    onclick={() => choose(option.value)}
                    onkeydown={(event) => onItemKeydown(event, index)}
                >
                    {option.label}
                    {#if framework.current === option.value}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    {/if}
                </button>
            {/each}
            <div class="version" role="none">Version {version}</div>
        </div>
    {/if}
</div>

<style>
    .framework {
        position: relative;
        display: flex;
    }

    /* A small select-like control: surface fill and a control border, like a field (so it reads in both themes).
       Gray, not the accent: the framework is a preference, not a primary action */
    .chip {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 3px var(--m-space-xs) 3px var(--m-space-s);
        border: 1px solid var(--m-color-border);
        border-radius: var(--m-radius-full);
        background-color: var(--m-color-surface);
        color: var(--m-color-text-weak);
        font-family: var(--m-font);
        font-size: var(--m-font-size-m);
        font-weight: var(--m-font-weight-regular);
        line-height: 1;
        cursor: pointer;
        touch-action: manipulation;
        transition: border-color 0.2s, color 0.2s;
    }

    .chip[aria-expanded="true"] {
        border-color: var(--m-color-border-control-hover);
        color: var(--m-color-text);
    }

    .chevron {
        transition: transform 0.2s ease-out;
    }

    .chip[aria-expanded="true"] .chevron {
        transform: rotate(180deg);
    }

    .chip:focus-visible,
    .item:focus-visible {
        outline: 2px solid transparent; /* shows in forced-colors mode, where box-shadows are dropped */
        box-shadow: var(--m-shadow-focus);
    }

    /* A floating surface (white in light mode): no border (surfaces don't have one), lifted by a shadow */
    .menu {
        position: absolute;
        top: calc(100% + var(--m-space-xs));
        left: 0;
        z-index: 3;
        display: flex;
        flex-direction: column;
        min-width: 10rem;
        padding: var(--m-space-xs);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
        box-shadow: 0 2px 6px rgb(0 0 0 / 0.12), 0 12px 32px -8px rgb(0 0 0 / 0.35);
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--m-space-s);
        padding: var(--m-space-s);
        border: none;
        border-radius: var(--m-radius-sharp);
        background: transparent;
        color: var(--m-color-text);
        font-family: var(--m-font);
        font-size: var(--m-font-size-m);
        line-height: var(--m-line-height-m);
        text-align: start;
        cursor: pointer;
    }

    /* Gray-4 shows on the menu's surface in both themes (white in light, gray-2 in dark) */
    .item:focus-visible {
        background-color: var(--m-color-neutral-weak);
    }

    .version {
        margin-block-start: var(--m-space-xs);
        padding: var(--m-space-s);
        border-block-start: 1px solid var(--m-color-border);
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-xs);
        color: var(--m-color-text-weaker);
    }

    @media (pointer: fine) {
        .chip:hover {
            border-color: var(--m-color-border-control-hover);
            color: var(--m-color-text);
        }

        .item:hover {
            background-color: var(--m-color-neutral-weak);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .chip,
        .chevron {
            transition: none;
        }
    }

    @media (prefers-contrast: more) {
        .menu {
            box-shadow: 0 0 0 1px var(--m-color-border);
        }
    }
</style>
