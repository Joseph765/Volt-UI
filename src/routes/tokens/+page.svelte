<script>
    import { onMount } from "svelte";
    import { Container, Text } from "$lib";
    import ColorScales from "./ColorScales.svelte";
    import TokenCopy from "./TokenCopy.svelte";
    import Seo from "../Seo.svelte";

    const fonts = [
        { token: "--m-font", name: "Outfit", mono: false, description: "Font family for the Moth design system." },
        { token: "--m-font-mono", name: "Geist Mono", mono: true, description: "Only used for code snippets and code examples." }
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

    const weights = [
        { key: "regular", name: "Regular", description: "Body text and most labels." },
        { key: "bold", name: "Bold", description: "Headings and emphasis." },
        { key: "black", name: "Black", description: "Display and page headings." }
    ];

    const breakpoints = [
        { key: "s", description: "Small phones and up." },
        { key: "m", description: "Large phones and small tablets." },
        { key: "l", description: "Tablets and small laptops." },
        { key: "xl", description: "Laptops. The sidebar layout starts here." },
        { key: "2xl", description: "Large screens. Also the widest container." }
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
        { token: "--m-radius-sharp", name: "Sharp", description: "Small elements like checkboxes." },
        { token: "--m-radius", name: "Default", description: "The default for most components." },
        { token: "--m-radius-full", name: "Full", description: "Pill shapes like buttons." }
    ];

    /** kind: "fill" shows the color as a block, "text" shows it as type on a surface */
    const colorGroups = [
        {
            title: "Surfaces & borders",
            colors: [
                { token: "--m-color-background", name: "Background", kind: "fill", description: "Background color of the content area." },
                { token: "--m-color-surface", name: "Surface", kind: "fill", description: "Surfaces on top of the background." },
                { token: "--m-color-surface-raised", name: "Surface raised", kind: "fill", description: "Surfaces on top of surfaces." },
                { token: "--m-color-border", name: "Border", kind: "fill", description: "Default border color." },
                { token: "--m-color-border-info", name: "Border info", kind: "fill", description: "Borders of informational elements." },
                { token: "--m-color-border-success", name: "Border success", kind: "fill", description: "Borders of success elements." },
                { token: "--m-color-border-warning", name: "Border warning", kind: "fill", description: "Borders of warning elements." },
                { token: "--m-color-border-danger", name: "Border danger", kind: "fill", description: "Borders of error and destructive elements." }
            ]
        },
        {
            title: "Text",
            colors: [
                { token: "--m-color-text", name: "Text", kind: "text", description: "Default color for text." },
                { token: "--m-color-text-weak", name: "Text weak", kind: "text", description: "Subdued color for body text." },
                { token: "--m-color-text-weaker", name: "Text weaker", kind: "text", description: "More subdued color for body text." },
                { token: "--m-color-text-weakest", name: "Text weakest", kind: "text", description: "Placeholders in form elements." },
                { token: "--m-color-text-accent", name: "Text accent", kind: "text", description: "Accent-colored text, used sparingly." },
                { token: "--m-color-text-contrast", name: "Text contrast", kind: "contrast", description: "Text on light fills, like a hovered primary button." }
            ]
        },
        {
            title: "Accent & status",
            colors: [
                { token: "--m-color-accent", name: "Accent", kind: "fill", description: "Brand color for primary actions and highlights." },
                { token: "--m-color-info", name: "Info", kind: "fill", description: "Informational messages." },
                { token: "--m-color-success", name: "Success", kind: "fill", description: "To convey success." },
                { token: "--m-color-warning", name: "Warning", kind: "fill", description: "Use to warn the user." },
                { token: "--m-color-danger", name: "Danger", kind: "fill", description: "Errors, or when something will be deleted." },
                { token: "--m-color-neutral", name: "Neutral", kind: "fill", description: "Solid neutral status color, used on components like badge." }
            ]
        },
        {
            title: "Focus & selection",
            colors: [
                { token: "--m-color-focus-border", name: "Focus border", kind: "fill", description: "Focus outline on every control, and the border of a focused field." },
                { token: "--m-color-focus-ring", name: "Focus ring", kind: "ring", description: "Soft halo around a focused field." },
                { token: "--m-color-highlight", name: "Highlight", kind: "fill", description: "Background of selected text, everywhere." }
            ]
        }
    ];

    /** Token values read from the live stylesheet, so the page can't drift from tokens.css */
    /** @type { Record<string, string> } */
    let values = $state({});

    onMount(() => {
        const styles = getComputedStyle(document.documentElement);
        const tokens = [
            ...sizes.flatMap((s) => [`--m-font-size-${s.key}`, `--m-line-height-${s.key}`, `--m-letter-spacing-${s.key}`]),
            ...weights.map((w) => `--m-font-weight-${w.key}`),
            ...breakpoints.map((b) => `--m-breakpoint-${b.key}`),
            "--m-control-height",
            ...spaces.map((s) => `--m-space-${s.key}`),
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

<Seo
    title="Design tokens · Moth UI"
    description="Moth UI's design tokens: fonts, type sizes, spacing, radius and 12-step color scales, all as CSS variables you can copy."
    path="/tokens"
/>

<div id="top"></div>
<Container size="xl" align="center">
    <div class="page">
        <header class="intro">
            <Text size="3xl" weight="black" as="h1">Design Tokens</Text>
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

        <!-- Font weight -->
        <section id="font-weight" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Font Weight</Text>
                <Text variant="weak">Three weights keep the hierarchy clear.</Text>
            </div>
            <div class="panel rows">
                {#each weights as weight}
                    {@const token = `--m-font-weight-${weight.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">{weight.description}</span>
                        </div>
                        <span class="row-value">{values[token]}</span>
                        <p class="type-sample weight-sample" style="font-weight: var({token});">{weight.name}: Ship with confidence</p>
                    </div>
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
                    {@const token = `--m-font-size-${size.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">{size.description}</span>
                        </div>
                        <span class="row-value">{px(values[token])}</span>
                        <p class="type-sample" style="font-size: var({token}); line-height: var(--m-line-height-{size.key});">
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
                    {@const token = `--m-line-height-${size.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">Use with the {size.key} font size.</span>
                        </div>
                        <span class="row-value">{values[token]}</span>
                        <p class="leading-sample" style="font-size: var(--m-font-size-{size.key}); line-height: var({token});">
                            Modular, consistent<br />and ready for production.
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Letter spacing -->
        <section id="letter-spacing" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Letter Spacing</Text>
                <Text variant="weak">Pairs with the font size of the same name: a little looser for small text, tighter for display text.</Text>
            </div>
            <div class="panel rows">
                {#each sizes as size}
                    {@const token = `--m-letter-spacing-${size.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">Use with the {size.key} font size.</span>
                        </div>
                        <span class="row-value">{values[token]}</span>
                        <p class="type-sample" style="font-size: var(--m-font-size-{size.key}); letter-spacing: var({token});">
                            Ship with confidence
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
                    {@const token = `--m-space-${space.key}`}
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

        <!-- Sizing -->
        <section id="sizing" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Sizing</Text>
                <Text variant="weak">Buttons, inputs and selects share one height, so they line up side by side.</Text>
            </div>
            <div class="panel rows">
                <div class="row">
                    <div class="row-token">
                        <TokenCopy token="--m-control-height" />
                        <span class="row-description">Height of medium buttons and form fields.</span>
                    </div>
                    <span class="row-value">{px(values["--m-control-height"])}</span>
                    <div class="control-sample" aria-hidden="true">
                        <span class="control-field"></span>
                        <span class="control-button"></span>
                    </div>
                </div>
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

        <!-- Breakpoints -->
        <section id="breakpoints" class="section">
            <div class="section-head">
                <Text weight="bold" size="xl" as="h3">Breakpoints</Text>
                <Text variant="weak">Screen widths where layouts change. Use the values in media queries; CSS variables can't be used there directly.</Text>
            </div>
            <div class="panel rows">
                {#each breakpoints as breakpoint}
                    {@const token = `--m-breakpoint-${breakpoint.key}`}
                    <div class="row">
                        <div class="row-token">
                            <TokenCopy {token} />
                            <span class="row-description">{breakpoint.description}</span>
                        </div>
                        <span class="row-value">{px(values[token])}</span>
                        <div class="breakpoint-track">
                            <span class="breakpoint-bar" style="width: {(parseFloat(values[token]) || 0) / parseFloat(values["--m-breakpoint-2xl"] || "1") * 100}%;"></span>
                        </div>
                    </div>
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
                                {#if color.kind === "contrast"}
                                    <div class="tile-preview is-text is-contrast" style="color: var({color.token});">
                                        <span class="text-glyph">Aa</span>
                                        <span class="text-line">The quick brown fox</span>
                                    </div>
                                {:else if color.kind === "ring"}
                                    <div class="tile-preview">
                                        <span class="ring-sample" style="box-shadow: 0 0 0 3px var({color.token});"></span>
                                    </div>
                                {:else if color.kind === "text"}
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
        gap: var(--m-space-2xl);
        padding-block-end: var(--m-space-2xl);
    }

    .intro,
    .section-head {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
    }

    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-l);
        /* Leave room above anchored sections when jumping from the nav */
        scroll-margin-block-start: var(--m-space-l);
    }

    .panel {
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    /* Font */
    .fonts {
        display: grid;
        gap: var(--m-space-m);
    }

    .font-card {
        display: flex;
        gap: var(--m-space-l);
        padding: var(--m-space-l);
    }

    .font-glyph {
        flex-shrink: 0;
        font-family: var(--m-font);
        font-size: 4.5rem;
        font-weight: var(--m-font-weight-black);
        line-height: 1;
        color: var(--m-color-text);
    }

    .font-card.is-mono .font-glyph,
    .font-card.is-mono .font-sample {
        font-family: var(--m-font-mono);
    }

    .font-card.is-mono .font-glyph {
        font-weight: var(--m-font-weight-bold);
    }

    .font-meta {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--m-space-s);
        min-width: 0;
    }

    .font-sample {
        margin: 0;
        font-family: var(--m-font);
        font-size: var(--m-font-size-m);
        line-height: var(--m-line-height-m);
        color: var(--m-color-text-weaker);
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
        padding-inline: var(--m-space-l);
    }

    .row {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--m-space-s);
        padding-block: var(--m-space-m);
        border-block-end: 1px solid var(--m-color-border);
    }

    .row:last-child {
        border-block-end: none;
    }

    .row-token {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--m-space-xs);
        min-width: 0;
    }

    .row-description {
        font-size: var(--m-font-size-s);
        line-height: var(--m-line-height-s);
        color: var(--m-color-text-weaker);
    }

    .row-value {
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-s);
        color: var(--m-color-text-weak);
        white-space: nowrap;
    }

    .type-sample {
        margin: 0;
        min-width: 0;
        color: var(--m-color-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Faint rule at the bottom of every line box, so the leading is visible */
    .leading-sample {
        margin: 0;
        min-width: 0;
        color: var(--m-color-text);
        background-image: linear-gradient(to bottom, transparent calc(100% - 1px), var(--m-gray-6) calc(100% - 1px));
        background-size: 100% 1lh;
        border-block-start: 1px solid var(--m-gray-6);
    }

    .weight-sample {
        font-size: var(--m-font-size-xl);
    }

    /* A field and a button at the shared control height */
    .control-sample {
        display: flex;
        gap: var(--m-space-s);
    }

    .control-field,
    .control-button {
        height: var(--m-control-height);
        border-radius: var(--m-radius-full);
    }

    .control-field {
        width: 10rem;
        border: 1px solid var(--m-gray-7);
    }

    .control-button {
        width: 5rem;
        background-color: var(--m-gray-10);
    }

    /* Bars are proportional to the widest breakpoint */
    .breakpoint-track {
        display: flex;
        align-items: center;
        min-height: 1.5rem;
        border-radius: 3px;
        background-color: var(--m-color-surface-raised);
    }

    .breakpoint-bar {
        display: block;
        height: 1rem;
        border-radius: 3px;
        background-color: var(--m-gray-10);
    }

    .ring-sample {
        width: 8rem;
        height: var(--m-control-height);
        border: 1px solid var(--m-color-focus-border);
        border-radius: var(--m-radius-full);
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
        background-color: var(--m-gray-10);
    }

    @media (min-width: 48rem) {
        .row {
            grid-template-columns: 14rem 5rem minmax(0, 1fr);
            align-items: center;
            gap: var(--m-space-l);
        }
    }

    /* Tiles: radius, color */
    .tiles {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        gap: var(--m-space-m);
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
        border-block-end: 1px solid var(--m-color-border);
    }

    .tile-preview.is-fill {
        /* Keep dark fills like the background color distinguishable from the page */
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.07);
        border-radius: var(--m-radius) var(--m-radius) 0 0;
    }

    /* Text colors are shown as type on the card's own surface, where they're actually used */
    .tile-preview.is-text {
        flex-direction: column;
        gap: var(--m-space-xs);
    }

    /* Contrast text is meant for light fills, so preview it on one */
    .tile-preview.is-contrast {
        background-color: var(--m-gray-12);
    }

    .text-glyph {
        font-size: var(--m-font-size-3xl);
        font-weight: var(--m-font-weight-black);
        line-height: 1;
    }

    .text-line {
        font-size: var(--m-font-size-m);
    }

    .radius-shape {
        width: 5rem;
        height: 3.5rem;
        border: 2px solid var(--m-gray-8);
        background-color: var(--m-color-surface-raised);
    }

    .tile-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--m-space-s);
        flex: 1;
        padding: var(--m-space-m);
    }

    .tile-title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: var(--m-space-s);
        width: 100%;
    }

    .color-group {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
    }

    .group-title {
        margin: 0;
        font-family: var(--m-font);
        font-size: var(--m-font-size-s);
        font-weight: var(--m-font-weight-bold);
        letter-spacing: var(--m-letter-spacing-xs);
        text-transform: uppercase;
        color: var(--m-color-text-weaker);
    }
</style>
