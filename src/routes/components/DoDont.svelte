<script>
    /*
     * Docs-only do/don't example (Carbon style): a surface card with a status bar on top and a round badge in
     * the corner, the example inside on a canvas in the page's color (so components look as they would on a
     * page), and the caption under the card. Put a do and a don't side by side in a two-column grid.
     */
    import { Check, X } from "@lucide/svelte";

    /** @type {{ kind: "do" | "dont", caption: string, children: import('svelte').Snippet }} */
    let { kind, caption, children } = $props();
</script>

<div class="verdict">
    <div class="verdict-card is-{kind}">
        <span class="verdict-badge" role="img" aria-label={kind === "do" ? "Do" : "Don't"}>
            {#if kind === "do"}<Check size={16} strokeWidth={3} />{:else}<X size={16} strokeWidth={3} />{/if}
        </span>
        <div class="verdict-canvas" aria-hidden="true" inert>
            {@render children()}
        </div>
    </div>
    <p class="verdict-caption">{caption}</p>
</div>

<style>
    .verdict {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        min-width: 0;
    }

    .verdict-card {
        --verdict-color: var(--m-color-success);
        --verdict-on-color: var(--m-color-text-on-success);
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        position: relative;
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
        /* Clips the bar to the rounded corners */
        overflow: hidden;
    }

    .verdict-card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 4px;
        background-color: var(--verdict-color);
    }

    .verdict-card.is-dont {
        --verdict-color: var(--m-color-danger);
        --verdict-on-color: var(--m-color-text-on-danger);
    }

    .verdict-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: var(--m-radius-full);
        background-color: var(--verdict-color);
        color: var(--verdict-on-color);
    }

    .verdict-canvas {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: var(--m-space-s);
        padding: var(--m-space-xl) var(--m-space-l);
        border-radius: var(--m-radius-sharp);
        background-color: var(--m-color-background);
        pointer-events: none;
        user-select: none;
    }

    .verdict-caption {
        margin: 0;
        color: var(--m-color-text-weak);
        font-size: var(--m-font-size-m);
        line-height: var(--m-line-height-m);
        letter-spacing: var(--m-letter-spacing-m);
    }

    /* More contrast: the same edge Moth's cards get */
    @media (prefers-contrast: more) {
        .verdict-card {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
