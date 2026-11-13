<script>
    import { onMount } from "svelte";
    import { Container, Text } from "$lib";
    import ColorScales from "./ColorScales.svelte";
    import TokenCopy from "./TokenCopy.svelte";

    const fonts = [
        { token: "--v-font", name: "Outfit", mono: false, description: "Font family for the Volt design system." },
        { token: "--v-font-mono", name: "Geist Mono", mono: true, description: "Only used for code snippets and code examples." }
    ];

    const sizes = [
        { key: "xs", description: "Small hint text." },
        { key: "s", description: "Smaller components." },
        { key: "m", description: "Default body text." },
        { key: "l", description: "Large text." },
        { key: "xl", description: "Small headers." },
        { key: "2xl", description: "Subheaders." },
        { key: "3xl", description: "Large headings. Only once per page." },
        { key: "4xl", description: "Display headings that scale with the viewport." }
    ];

    const spaces = [
        { key: "xs", description: "Extra small spacing." },
        { key: "s", description: "Small spacing." },
        { key: "m", description: "Default spacing." },
        { key: "l", description: "Large spacing." },
        { key: "xl", description: "Extra large spacing." },
        { key: "2xl", description: "Extra extra large spacing." }
    ];

    const radii = [
        { token: "--v-radius-sharp", name: "Sharp", description: "Small elements like checkboxes." },
        { token: "--v-radius", name: "Default", description: "The default for most components." },
        { token: "--v-radius-full", name: "Full", description: "Pill shapes like buttons." }
    ];

    /** kind: "fill" shows the color as a block, "text" shows it as type on a surface */
    const colorGroups = [
        {
            title: "Surfaces & borders",
            colors: [
                { token: "--v-color-background", name: "Background", kind: "fill", description: "Background color of the content area." },
                { token: "--v-color-surface", name: "Surface", kind: "fill", description: "Surfaces on top of the background." },
                { token: "--v-color-surface-raised", name: "Surface raised", kind: "fill", description: "Surfaces on top of surfaces." },
                { token: "--v-color-border", name: "Border", kind: "fill", description: "Default border color." }
            ]
        },
        {
            title: "Text",
            colors: [
                { token: "--v-color-text", name: "Text", kind: "text", description: "Default color for text." },
                { token: "--v-color-text-weak", name: "Text weak", kind: "text", description: "Subdued color for body text." },
                { token: "--v-color-text-weaker", name: "Text weaker", kind: "text", description: "More subdued color for body text." },
                { token: "--v-color-text-weakest", name: "Text weakest", kind: "text", description: "Placeholders in form elements." }
            ]
        },
        {
            title: "Accent & status",
            colors: [
                { token: "--v-color-accent", name: "Accent", kind: "fill", description: "Brand color for primary actions and highlights." },
                { token: "--v-color-info", name: "Info", kind: "fill", description: "Informational messages." },
                { token: "--v-color-success", name: "Success", kind: "fill", description: "To convey success." },
                { token: "--v-color-warning", name: "Warning", kind: "fill", description: "Use to warn the user." },
                { token: "--v-color-danger", name: "Danger", kind: "fill", description: "Errors, or when something will be deleted." },
                { token: "--v-color-neutral", name: "Neutral", kind: "fill", description: "Solid neutral status color, used on components like badge." }
            ]
        }
    ];

    /** Token values read from the live stylesheet, so the page can't drift from tokens.css */
    /** @type { Record<string, string> } */
    let values = $state({});

    onMount(() => {
        const styles = getComputedStyle(document.documentElement);
        const tokens = [
            ...sizes.flatMap((s) => [`--v-font-size-${s.key}`, `--v-line-height-${s.key}`]),
            ...spaces.map((s) => `--v-space-${s.key}`),
            ...radii.map((r) => r.token),
            ...colorGroups.flatMap((g) => g.colors.map((c) => c.token))
        ];
        values = Object.fromEntries(tokens.map((t) => [t, styles.getPropertyValue(t).trim()]));
    });

    /**
     * Human-readable size: "1rem" → "16px", clamp(min, …, max) → "40–60px", 9999px → "Pill".
     * @param { string } raw
     */
    function px(raw) {
        if (!raw) return "";
        const rem = (/** @type { string } */ v) => Math.round(parseFloat(v) * 16);
        const clamp = raw.match(/^clamp\(\s*([\d.]+)rem.*,\s*([\d.]+)rem\s*\)$/);
        if (clamp) return `${rem(clamp[1])}–${rem(clamp[2])}px`;
        if (raw.endsWith("rem")) return `${rem(raw)}px`;
        if (raw === "9999px") return "Pill";
        return raw;
    }

    /**
     * Resolved color for display, e.g. "#1a191b". Empty during SSR, before values are read.
     * @param { string | undefined } raw
     */
    function hex(raw) {
        return raw?.startsWith("#") ? raw : "";
    }
</script>

<div id="top"></div>
<Container size="xl" align="center">
    <div class="page">
        <header class="intro">
            <Text size="3xl" weight="black" as="h2">Design Tokens</Text>
            <Text size="xl" variant="weak">
                Foundational values that define the visual style of the design system, including colors, typography, spacing, and more.
                Click any token to copy it.
            </Text>
        </header>

        <!-- Font -->
        <section id="font" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Font</Text>
                <Text variant="weak">Two families: one for everything, one for code.</Text>
            </div>
            <div class="fonts">
                {#each fonts as font}
                    <article class="panel font-card" class:is-mono={font.mono}>
                        <span class="font-glyph" aria-hidden="true">Aa</span>
                        <div class="font-meta">
                            <Text size="xl" weight="bold" mono={font.mono}>{font.name}</Text>
                            <p class="font-sample" aria-hidden="true">
                                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 !?&amp;@#
                            </p>
                            <Text variant="weak" measure="none">{font.description}</Text>
                            <TokenCopy token={font.token} />
                        </div>
                    </article>
                {/each}
            </div>
        </section>

        <!-- Font size -->
        <section id="font-size" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Font Size</Text>
                <Text variant="weak">The type scale, from hint text to display headings.</Text>
            </div>
            <div class="panel rows">
                {#each sizes as size}
                    {@const token = `--v-font-size-${size.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">{size.description}</span>
                        </div>
                        <span class="row-value">{px(values[token])}</span>
                        <p class="type-sample" style="font-size: var({token}); line-height: var(--v-line-height-{size.key});">
                            Ship with confidence
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Line height -->
        <section id="line-height" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Line Height</Text>
                <Text variant="weak">Each line height pairs with the font size of the same name. Guides show the height of each line.</Text>
            </div>
            <div class="panel rows">
                {#each sizes as size}
                    {@const token = `--v-line-height-${size.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">Use with the {size.key} font size.</span>
                        </div>
                        <span class="row-value">{values[token]}</span>
                        <p class="leading-sample" style="font-size: var(--v-font-size-{size.key}); line-height: var({token});">
                            Modular, consistent<br />and ready for production.
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Space -->
        <section id="space" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Space</Text>
                <Text variant="weak">Use for padding, margins and gaps. Bars are drawn at actual size.</Text>
            </div>
            <div class="panel rows">
                {#each spaces as space}
                    {@const token = `--v-space-${space.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">{space.description}</span>
                        </div>
                        <span class="row-value">{px(values[token])}</span>
                        <div class="space-track">
                            <span class="space-bar" style="width: var({token});"></span>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Radius -->
        <section id="radius" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Border Radius</Text>
                <Text variant="weak">Three corner styles cover every component.</Text>
            </div>
            <div class="tiles is-thirds">
                {#each radii as radius}
                    <article class="panel tile">
                        <div class="tile-preview">
                            <span class="radius-shape" style="border-radius: var({radius.token});"></span>
                        </div>
                        <div class="tile-body">
                            <div class="tile-title">
                                <Text weight="bold" size="l">{radius.name}</Text>
                                <span class="row-value">{px(values[radius.token])}</span>
                            </div>
                            <Text variant="weak" measure="none">{radius.description}</Text>
                            <TokenCopy token={radius.token} />
                        </div>
                    </article>
                {/each}
            </div>
        </section>

        <!-- Color -->
        <section id="color" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Color</Text>
                <Text variant="weak">Semantic colors. Reach for these before the raw scales below.</Text>
            </div>
            {#each colorGroups as group}
                <div class="color-group">
                    <h4 class="group-title">{group.title}</h4>
                    <div class="tiles" class:is-thirds={group.colors.length % 3 === 0} class:is-quarters={group.colors.length % 4 === 0}>
                        {#each group.colors as color}
                            <article class="panel tile">
                                {#if color.kind === "text"}
                                    <div class="tile-preview is-text" style="color: var({color.token});">
                                        <span class="text-glyph">Aa</span>
                                        <span class="text-line">The quick brown fox</span>
                                    </div>
                                {:else}
                                    <div class="tile-preview is-fill" style="background-color: var({color.token});"></div>
                                {/if}
                                <div class="tile-body">
                                    <div class="tile-title">
                                        <Text weight="bold" size="l">{color.name}</Text>
                                        <span class="row-value">{hex(values[color.token])}</span>
                                    </div>
                                    <Text variant="weak" measure="none">{color.description}</Text>
                                    <TokenCopy token={color.token} />
                                </div>
                            </article>
                        {/each}
                    </div>
                </div>
            {/each}
        </section>

        <!-- Color scales -->
        <section id="color-scales" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Color Scales</Text>
                <Text variant="weak">The raw 12-step scales behind every semantic color.</Text>
            </div>
            <ColorScales scales={["gray", "success", "warning", "danger", "info", "accent"]} />
        </section>
    </div>
</Container>

<style>
    .page {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-2xl);
        padding-block-end: var(--v-space-2xl);
    }

    .intro,
    .section-head {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-s);
    }

    .section {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-l);
        /* Leave room above anchored sections when jumping from the nav */
        scroll-margin-block-start: var(--v-space-l);
    }

    .panel {
        border-radius: var(--v-radius);
        background-color: var(--v-color-surface);
    }

    /* Font */
    .fonts {
        display: grid;
        gap: var(--v-space-m);
    }

    .font-card {
        display: flex;
        gap: var(--v-space-l);
        padding: var(--v-space-l);
    }

    .font-glyph {
        flex-shrink: 0;
        font-family: var(--v-font);
        font-size: 4.5rem;
        font-weight: var(--v-font-weight-black);
        line-height: 1;
        color: var(--v-color-text);
    }

    .font-card.is-mono .font-glyph,
    .font-card.is-mono .font-sample {
        font-family: var(--v-font-mono);
    }

    .font-card.is-mono .font-glyph {
        font-weight: var(--v-font-weight-bold);
    }

    .font-meta {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--v-space-s);
        min-width: 0;
    }

    .font-sample {
        margin: 0;
        font-family: var(--v-font);
        font-size: var(--v-font-size-m);
        line-height: var(--v-line-height-m);
        color: var(--v-color-text-weaker);
        overflow-wrap: anywhere;
    }

    @media (min-width: 48rem) {
        .fonts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    /* Rows: font size, line height, space */
    .rows {
        display: flex;
        flex-direction: column;
        padding-inline: var(--v-space-l);
    }

    .row {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--v-space-s);
        padding-block: var(--v-space-m);
        border-block-end: 1px solid var(--v-color-border);
    }

    .row:last-child {
        border-block-end: none;
    }

    .row-token {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--v-space-xs);
        min-width: 0;
    }

    .row-description {
        font-size: var(--v-font-size-s);
        line-height: var(--v-line-height-s);
        color: var(--v-color-text-weaker);
    }

    .row-value {
        font-family: var(--v-font-mono);
        font-size: var(--v-font-size-s);
        color: var(--v-color-text-weak);
        white-space: nowrap;
    }

    .type-sample {
        margin: 0;
        min-width: 0;
        color: var(--v-color-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Faint rule at the bottom of every line box, so the leading is visible */
    .leading-sample {
        margin: 0;
        min-width: 0;
        color: var(--v-color-text);
        background-image: linear-gradient(to bottom, transparent calc(100% - 1px), var(--v-gray-6) calc(100% - 1px));
        background-size: 100% 1lh;
        border-block-start: 1px solid var(--v-gray-6);
    }

    .space-track {
        display: flex;
        align-items: center;
        min-height: 1.5rem;
    }

    .space-bar {
        display: block;
        height: 1rem;
        border-radius: 3px;
        background-color: var(--v-color-accent);
    }

    @media (min-width: 48rem) {
        .row {
            grid-template-columns: 14rem 5rem minmax(0, 1fr);
            align-items: center;
            gap: var(--v-space-l);
        }
    }

    /* Tiles: radius, color */
    .tiles {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        gap: var(--v-space-m);
    }

    /* Keep rows even: sets of 3 or 6 sit in three columns, sets of 4 in two or four */
    .tiles.is-thirds {
        grid-template-columns: minmax(0, 1fr);
    }

    @media (min-width: 44rem) {
        .tiles.is-thirds {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (min-width: 36rem) {
        .tiles.is-quarters {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (min-width: 90rem) {
        .tiles.is-quarters {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }

    .tile {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .tile-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7rem;
        border-block-end: 1px solid var(--v-color-border);
    }

    .tile-preview.is-fill {
        /* Keep dark fills like the background color distinguishable from the page */
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.07);
        border-radius: var(--v-radius) var(--v-radius) 0 0;
    }

    /* Text colors are shown as type on the card's own surface, where they're actually used */
    .tile-preview.is-text {
        flex-direction: column;
        gap: var(--v-space-xs);
    }

    .text-glyph {
        font-size: var(--v-font-size-3xl);
        font-weight: var(--v-font-weight-black);
        line-height: 1;
    }

    .text-line {
        font-size: var(--v-font-size-m);
    }

    .radius-shape {
        width: 5rem;
        height: 3.5rem;
        border: 2px solid var(--v-color-accent);
        background-color: var(--v-accent-3);
    }

    .tile-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--v-space-s);
        flex: 1;
        padding: var(--v-space-m);
    }

    .tile-title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: var(--v-space-s);
        width: 100%;
    }

    .color-group {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-m);
    }

    .group-title {
        margin: 0;
        font-family: var(--v-font);
        font-size: var(--v-font-size-s);
        font-weight: var(--v-font-weight-bold);
        letter-spacing: var(--v-letter-spacing-xs);
        text-transform: uppercase;
        color: var(--v-color-text-weaker);
    }
</style>
