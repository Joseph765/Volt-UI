<script>
    import { onMount } from "svelte";
    import { Code, Container, Flex, Link, Text } from "$lib";
    import DoDont from "../../components/DoDont.svelte";
    import TokenCopy from "../TokenCopy.svelte";
    import Seo from "../../Seo.svelte";

    const borderTokens = [
        { token: "--m-color-border-control", use: "Form controls at rest: inputs, selects, textareas, checkboxes and radios." },
        { token: "--m-color-border-control-hover", use: "A hovered form control." },
        { token: "--m-color-border-control-focus", use: "A focused form control, inside the focus ring." },
        { token: "--m-color-border", use: "Dividers: card headers, table rows and the nav." }
    ];

    const radii = [
        { token: "--m-radius-sharp", name: "Sharp", use: "Small elements, like checkboxes and the menu button." },
        { token: "--m-radius", name: "Default", use: "Cards, tables, banners, fields and code blocks." },
        { token: "--m-radius-full", name: "Full", use: "Pills: buttons, badges, toggles and toasts." }
    ];

    /** Token values read from the live stylesheet, so the page can't drift from tokens.css */
    /** @type { Record<string, string> } */
    let values = $state({});

    onMount(() => {
        const styles = getComputedStyle(document.documentElement);
        values = Object.fromEntries(radii.map((r) => [r.token, styles.getPropertyValue(r.token).trim()]));
    });

    /** @param { string | undefined } raw */
    function radiusLabel(raw) {
        return raw === "9999px" ? "Pill" : (raw ?? "");
    }
</script>

<Seo
    title="Surfaces · Moth UI"
    description="How Moth UI treats surfaces: depth from fills instead of borders, when borders are used (form controls and dividers), and the border radius scale."
    path="/foundations/surfaces"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Surfaces</Text>
            <Text size="l" variant="weak" measure="l">
                How Moth draws the things content sits on: fills instead of outlines, borders only where an edge has
                a job, and three corner radii. Click any token to copy it.
            </Text>
        </Flex>

        <!-- No borders on surfaces -->
        <section class="section" id="no-borders">
            <Text size="2xl" weight="bold" as="h2">Surfaces don't have borders</Text>
            <Text size="l" variant="weak" measure="l">
                Cards, tables, panels and banners are separated by their fill, not by an outline. Each layer up is a
                little lighter than the one below it (background, then surface, then raised), so depth reads
                without a line around every box. Fewer lines also keep dense screens calm. See
                <Link size="l" href="/foundations/colors#surfaces">Colors</Link> for the surface tokens.
            </Text>
            <div class="do-dont">
                <DoDont kind="do" caption="Let the surface fill separate the card from the page.">
                    <div class="mini-card">
                        <span class="mini-title">Storage</span>
                        <span class="mini-body">12.4 GB of 20 GB used</span>
                    </div>
                </DoDont>
                <DoDont kind="dont" caption="Outline a card or panel with a border.">
                    <div class="mini-card is-bordered">
                        <span class="mini-title">Storage</span>
                        <span class="mini-body">12.4 GB of 20 GB used</span>
                    </div>
                </DoDont>
            </div>
            <Text size="l" variant="weak" measure="l">
                The one exception is more contrast: when people ask their system for it
                (<Code>prefers-contrast: more</Code>), surfaces get a <Code>--m-color-border</Code> edge, because
                the step between fills is too small to rely on.
            </Text>
        </section>

        <!-- Borders -->
        <section class="section" id="borders">
            <Text size="2xl" weight="bold" as="h2">When to use a border</Text>
            <Text size="l" variant="weak" measure="l">
                Use a border only where an edge has a job. There are three:
            </Text>
            <ul class="rules">
                <li><Text size="l" variant="weak" measure="l"><strong>Form controls.</strong> Fields share the surface fill, and they often sit on a surface card, so the border is what shows where to click and type. It also carries state: it brightens on hover and turns near-white on focus.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Dividers.</strong> A single line between parts of one surface, like a card's header and body or the rows of a table.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Soft status components.</strong> A weak badge or banner has a border in its status color. See <Link size="l" href="/foundations/colors#status">Colors</Link>.</Text></li>
            </ul>

            <!-- Field states: rest, hover, focus -->
            <figure class="states" aria-label="A field at rest, hovered and focused">
                <div class="state" aria-hidden="true" inert>
                    <span class="m-input is-expanded state-field">Ada Lovelace</span>
                    <span class="state-label">Rest</span>
                </div>
                <div class="state" aria-hidden="true" inert>
                    <span class="m-input is-expanded state-field is-hover">Ada Lovelace</span>
                    <span class="state-label">Hover</span>
                </div>
                <div class="state" aria-hidden="true" inert>
                    <span class="m-input is-expanded state-field is-focus">Ada Lovelace</span>
                    <span class="state-label">Focus</span>
                </div>
            </figure>
            <Text size="l" variant="weak" measure="l">
                Rest, hover and focus each step up in brightness, so the change is easy to see. On focus the field
                also lifts its fill to <Code>--m-color-surface-raised</Code> and gets the focus ring
                (<Code>--m-shadow-focus</Code>), like every focusable element. Borders are always 1px.
            </Text>
            <ul class="panel tokens">
                {#each borderTokens as item (item.token)}
                    <li class="token">
                        <span class="swatch" style="background-color: var({item.token});" aria-hidden="true"></span>
                        <Text variant="weak" measure="none">{item.use}</Text>
                        <TokenCopy token={item.token} />
                    </li>
                {/each}
            </ul>
        </section>

        <!-- Radius -->
        <section class="section" id="radius">
            <Text size="2xl" weight="bold" as="h2">Border radius</Text>
            <Text size="l" variant="weak" measure="l">
                Three radii. Most things use the default; small elements get a tighter corner so they don't turn
                into circles, and buttons and small labels like badges are pills.
            </Text>
            <div class="radii">
                {#each radii as radius (radius.token)}
                    <article class="panel radius">
                        <span class="radius-shape" style="border-radius: var({radius.token});" aria-hidden="true"></span>
                        <span class="radius-name">
                            <Text weight="bold" size="l" as="h3">{radius.name}</Text>
                            <span class="radius-value">{radiusLabel(values[radius.token])}</span>
                        </span>
                        <Text variant="weak">{radius.use}</Text>
                        <TokenCopy token={radius.token} />
                    </article>
                {/each}
            </div>
        </section>
    </Flex>
</Container>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-l);
        scroll-margin-block-start: var(--m-space-l);
    }

    .panel {
        margin: 0;
        padding: 0;
        list-style: none;
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    .rules {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        margin: 0;
        padding-inline-start: var(--m-space-l);
        color: var(--m-color-text-weak);
    }

    .rules strong {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    /* A do and a don't side by side (DoDont draws each card) */
    .do-dont {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        gap: var(--m-space-m);
    }

    /* Fills the DoDont canvas, like a card in a column */
    .mini-card {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--m-space-xs);
        padding: var(--m-space-m);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    /* The "don't": what a bordered card would look like */
    .mini-card.is-bordered {
        border: 1px solid var(--m-gray-7);
    }

    .mini-title {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    .mini-body {
        color: var(--m-color-text-weak);
        font-size: var(--m-font-size-s);
        line-height: var(--m-line-height-s);
        letter-spacing: var(--m-letter-spacing-s);
    }

    /* Field states, drawn statically on the page */
    .states {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--m-space-l);
        margin: 0;
        /* Room for the focus glow */
        padding: var(--m-space-s);
        pointer-events: none;
        user-select: none;
    }

    .state {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        min-width: 0;
    }

    .state-field {
        display: flex;
        align-items: center;
        color: var(--m-color-text);
    }

    .state-field.is-hover {
        border-color: var(--m-color-border-control-hover);
    }

    .state-field.is-focus {
        border-color: var(--m-color-border-control-focus);
        background-color: var(--m-color-surface-raised);
        box-shadow: var(--m-shadow-focus);
    }

    .state-label {
        color: var(--m-color-text-weaker);
        font-size: var(--m-font-size-s);
        line-height: var(--m-line-height-s);
        letter-spacing: var(--m-letter-spacing-s);
    }

    /* Token list: swatch, what it's for, and the copy button */
    .token {
        display: grid;
        grid-template-columns: 2.25rem 1fr auto;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-m) var(--m-space-l);
    }

    .token + .token {
        border-block-start: 1px solid var(--m-color-border);
    }

    .swatch {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 6px;
    }

    /* Radius */
    .radii {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: var(--m-space-m);
    }

    .radius {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--m-space-m);
        padding: var(--m-space-l);
    }

    .radius-shape {
        width: 100%;
        height: 4.5rem;
        background-color: var(--m-gray-6);
    }

    .radius-name {
        display: flex;
        align-items: baseline;
        gap: var(--m-space-s);
    }

    .radius-value {
        color: var(--m-color-text-weaker);
        font-size: var(--m-font-size-s);
    }

    /* Narrow screens: field states stack; the copy button drops under the description */
    @media (max-width: 36rem) {
        .states {
            grid-template-columns: minmax(0, 1fr);
        }

        .token {
            grid-template-columns: 2.25rem 1fr;
            padding-inline: var(--m-space-m);
        }

        .token :global(.token-copy) {
            grid-column: 2;
        }
    }

    /* More contrast: the same edge Moth's cards get, so these surfaces read against the page */
    @media (prefers-contrast: more) {
        .panel,
        .mini-card {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
