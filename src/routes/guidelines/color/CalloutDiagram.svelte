<script>
    /**
     * Docs-only callout diagram: token labels in a column on the left, each joined by a short straight line to a
     * ring on the left edge of the part that uses it. The demo sits on the right and may run off the figure's edge
     * (it's cropped), so the labels keep their room on any screen.
     *
     * Tag parts in the demo with `data-mark="<key>"`. Each label is placed level with its ring, so space the marked
     * parts at least a label's height apart and the lines stay horizontal.
     *
     * @typedef {{ key: string, token: string, target?: string, x?: number, y?: number, dx?: number, dy?: number }} Mark
     * x/y place the ring as a fraction of the tagged element's box (default: left edge, middle); dx/dy nudge it in px.
     * `target` is the `data-mark` to point at, when several marks share one element (default: the key).
     */
    import { onMount, tick } from "svelte";

    /** @type {{ marks: Mark[], label: string, children: import('svelte').Snippet }} */
    let { marks, label, children } = $props();

    const GAP = 8;
    const RING = 4; // ring radius
    // Dropped from the pills on narrow screens, so the demo keeps some room
    const PREFIX = "--m-color-";

    /** @type { HTMLElement } */
    let figure;
    /** @type { HTMLElement } */
    let column;
    /** @type { HTMLElement } */
    let demo;
    /** @type { Record<string, HTMLElement> } */
    let labelEls = $state({});

    /** @type {{ x: number, y: number }[]} */
    let rings = $state([]);
    /** @type {{ x1: number, x2: number, y1: number, y2: number }[]} */
    let lines = $state([]);
    /** @type { Record<string, { margin: number, order: number }> } */
    let offsets = $state({});
    let placed = $state(false);

    function layout() {
        if (!figure) return;
        const box = figure.getBoundingClientRect();
        const col = column.getBoundingClientRect();
        const colTop = col.top - box.top;
        const colRight = col.right - box.left;

        const items = marks
            .map((m) => {
                const el = demo.querySelector(`[data-mark="${m.target ?? m.key}"]`);
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return {
                    m,
                    x: r.left - box.left + r.width * (m.x ?? 0) + (m.dx ?? 0),
                    y: r.top - box.top + r.height * (m.y ?? 0.5) + (m.dy ?? 0),
                    h: labelEls[m.key].offsetHeight
                };
            })
            .filter((item) => item !== null)
            .sort((a, b) => a.y - b.y);

        /** @type { Record<string, { margin: number, order: number }> } */
        const next = {};
        const nextLines = [];
        let bottom = -GAP;
        for (const [order, item] of items.entries()) {
            // Level with the ring, unless that would overlap the label above
            const top = Math.max(item.y - colTop - item.h / 2, bottom + GAP);
            next[item.m.key] = { margin: top - bottom - (order ? 0 : GAP), order };
            bottom = top + item.h;
            nextLines.push({ x1: colRight, y1: colTop + top + item.h / 2, x2: item.x - RING, y2: item.y });
        }
        offsets = next;
        lines = nextLines;
        rings = items.map(({ x, y }) => ({ x, y }));
        placed = true;
    }

    // Tokens change with the page's controls, which changes the pills' widths: place everything again
    $effect(() => {
        marks;
        tick().then(layout);
    });

    onMount(() => {
        const observer = new ResizeObserver(() => layout());
        observer.observe(figure);
        document.fonts?.ready.then(layout);
        return () => observer.disconnect();
    });
</script>

<figure class="callout" class:is-placed={placed} bind:this={figure} aria-label={label}>
    <ul class="callout-labels" bind:this={column}>
        {#each marks as m (m.key)}
            <li
                class="callout-label"
                bind:this={labelEls[m.key]}
                style:margin-block-start={offsets[m.key] ? `${offsets[m.key].margin}px` : undefined}
                style:order={offsets[m.key]?.order}
            >
                <span class="callout-swatch" style:background-color="var({m.token})" aria-hidden="true"></span>
                <code class="callout-token">{#if m.token.startsWith(PREFIX)}<span class="callout-prefix">{PREFIX}</span>{m.token.slice(PREFIX.length)}{:else}{m.token}{/if}</code>
            </li>
        {/each}
    </ul>
    <div class="callout-demo" bind:this={demo} aria-hidden="true" inert>
        {@render children()}
    </div>

    <svg class="callout-lines" aria-hidden="true">
        {#each lines as l}
            <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        {/each}
        {#each rings as r}
            <circle cx={r.x} cy={r.y} r={RING} />
        {/each}
    </svg>
</figure>

<style>
    .callout {
        position: relative;
        display: flex;
        gap: var(--m-space-l);
        margin: 0;
        padding-block: var(--m-space-xl);
        padding-inline-start: var(--m-space-m);
        border-radius: var(--m-radius);
        /* The page is the background too, so outline the figure to show where it starts */
        box-shadow: inset 0 0 0 1px var(--m-color-border);
        /* The demo runs off the right edge on purpose */
        overflow: hidden;
        container-type: inline-size;
    }

    .callout-labels {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        flex-shrink: 0;
        gap: var(--m-space-s);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .is-placed .callout-labels {
        justify-content: flex-start;
        gap: 0;
    }

    .callout-label {
        display: inline-flex;
        align-items: center;
        gap: var(--m-space-s);
        padding: var(--m-space-xs) var(--m-space-m) var(--m-space-xs) var(--m-space-xs);
        border: 1px solid var(--m-color-border);
        border-radius: var(--m-radius-full);
        background-color: var(--m-color-background);
    }

    /* A swatch of the token's own color, ringed so dark colors still show */
    .callout-swatch {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        border-radius: var(--m-radius-full);
        box-shadow: inset 0 0 0 1px var(--m-gray-7);
    }

    .callout-token {
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-s);
        color: var(--m-color-text-weak);
        white-space: nowrap;
    }

    /* Narrow: drop the shared prefix, e.g. "surface-raised", like Nord's pills */
    @container (max-width: 34rem) {
        .callout-prefix {
            display: none;
        }
    }

    .callout-demo {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        pointer-events: none;
        user-select: none;
    }

    .callout-lines {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
        pointer-events: none;
        display: none;
    }

    .is-placed .callout-lines {
        display: block;
    }

    .callout-lines line {
        stroke: var(--m-color-text-weaker);
        stroke-width: 1;
    }

    /* Open rings, filled with the page color so they read on any surface */
    .callout-lines circle {
        fill: var(--m-color-background);
        stroke: var(--m-color-text-weak);
        stroke-width: 1.5;
    }
</style>
