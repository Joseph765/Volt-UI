<script>
    import { onMount } from "svelte";
    import { Code, Container, Flex, Text } from "moth-ui-svelte";
    import CodeExample from "../../components/CodeExample.svelte";
    import TokenCopy from "../TokenCopy.svelte";
    import Seo from "../../Seo.svelte";

    const spaces = [
        { key: "xs", use: "Tight pairs: a field and its hint, an icon and its label." },
        { key: "s", use: "Closely related items: a label and its field, buttons in a group." },
        { key: "m", use: "The default: between fields, and padding in small cards." },
        { key: "l", use: "Padding in larger cards, and between groups inside them." },
        { key: "xl", use: "Between blocks on a page, like cards in a column." },
        { key: "2xl", use: "Between major page sections." }
    ];

    const breakpoints = [
        { key: "s", use: "Phones. The smallest screen Moth supports." },
        { key: "m", use: "Large phones and small tablets." },
        { key: "l", use: "Tablets and laptops. Layout switches from the menu button to the sidebar here." },
        { key: "xl", use: "Laptops and desktops." },
        { key: "2xl", use: "Large screens. Also the widest Container and Layout's content." }
    ];

    const mediaCode = `/* Phones first, then more room from the l breakpoint (66rem) up */
.toolbar {
    flex-direction: column;
}

@media (min-width: 66rem) {
    .toolbar {
        flex-direction: row;
    }
}`;

    /** Token values read from the live stylesheet, so the page can't drift from tokens.css */
    /** @type { Record<string, string> } */
    let values = $state({});

    let controlHeight = $derived(px(values["--m-control-height"]));

    onMount(() => {
        const styles = getComputedStyle(document.documentElement);
        const tokens = [
            ...spaces.map((s) => `--m-space-${s.key}`),
            "--m-control-height",
            ...breakpoints.map((b) => `--m-breakpoint-${b.key}`)
        ];
        values = Object.fromEntries(tokens.map((t) => [t, styles.getPropertyValue(t).trim()]));
    });

    /**
     * A breakpoint's width as a share of the widest one, for its bar
     * @param { string } key
     */
    function share(key) {
        const widest = parseFloat(values["--m-breakpoint-2xl"]);
        return widest ? (parseFloat(values[`--m-breakpoint-${key}`]) / widest) * 100 : 0;
    }

    /**
     * "1rem" → "16px"
     * @param { string | undefined } raw
     */
    function px(raw) {
        if (!raw) return "";
        return raw.endsWith("rem") ? `${Math.round(parseFloat(raw) * 16)}px` : raw;
    }
</script>

<Seo
    title="Spacing & Layout · Moth UI"
    description="Moth UI's spacing scale for padding, margins and gaps, the shared control height that keeps fields and buttons lined up, and the breakpoints."
    path="/foundations/spacing-and-layout"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Spacing &amp; Layout</Text>
            <Text size="l" variant="weak" measure="l">
                Six steps for every padding, margin and gap, and one shared height for controls. Related things sit
                close together, space grows as things become less related, and controls side by side line up.
                Click any token to copy it.
            </Text>
        </Flex>

        <!-- Scale -->
        <section class="section" id="scale">
            <Text size="2xl" weight="bold" as="h2">Scale</Text>
            <Text size="l" variant="weak" measure="l">
                Use the tokens instead of pixel values, so spacing stays on the same rhythm everywhere. The blocks
                are drawn at actual size.
            </Text>
            <ul class="panel scale">
                {#each spaces as space (space.key)}
                    {@const token = `--m-space-${space.key}`}
                    <li class="step">
                        <span class="step-box" aria-hidden="true">
                            <span class="step-block" style="width: var({token}); height: var({token});"></span>
                        </span>
                        <span class="step-name">
                            <span class="step-key">{space.key}</span>
                            <span class="step-value">{px(values[token])}</span>
                        </span>
                        <Text variant="weak" measure="none">{space.use}</Text>
                        <TokenCopy {token} />
                    </li>
                {/each}
            </ul>
        </section>

        <!-- In practice -->
        <section class="section" id="in-practice">
            <Text size="2xl" weight="bold" as="h2">In practice</Text>
            <Text size="l" variant="weak" measure="l">
                The striped areas are spacing. Inside a field, the label sits <Code>s</Code> above the input and
                the hint <Code>xs</Code> below it. Fields are <Code>m</Code> apart, the actions are a group of
                their own, <Code>l</Code> below, and the card is padded with <Code>l</Code>.
            </Text>
            <figure class="spec" aria-label="A profile card with its spacing marked">
                <div class="spec-card" aria-hidden="true" inert>
                    <span class="spec-tag is-padding">l · 24px</span>
                    <div class="spec-content">
                        <span class="spec-label">Display name</span>
                        <div class="spec-gap is-s" data-tag="s · 8px"></div>
                        <span class="m-input is-expanded spec-input">Ada Lovelace</span>
                        <div class="spec-gap is-xs" data-tag="xs · 4px"></div>
                        <span class="spec-hint">Shown on your profile and in comments.</span>
                        <div class="spec-gap is-m" data-tag="m · 16px"></div>
                        <span class="spec-label">Email</span>
                        <div class="spec-gap is-s" data-tag="s · 8px"></div>
                        <span class="m-input is-expanded spec-input">ada@example.com</span>
                        <div class="spec-gap is-l" data-tag="l · 24px"></div>
                        <div class="spec-actions">
                            <span class="m-button is-secondary">Cancel</span>
                            <div class="spec-gap is-inline" data-tag="s · 8px"></div>
                            <span class="m-button">Save</span>
                        </div>
                    </div>
                </div>
            </figure>
        </section>

        <!-- Control height -->
        <section class="section" id="control-height">
            <Text size="2xl" weight="bold" as="h2">Control height</Text>
            <figure class="height-spec" aria-label="A search field, a select and two buttons sharing one height">
                <div class="height-row" aria-hidden="true" inert>
                    <span class="m-input height-field">Search members</span>
                    <span class="m-input height-select">
                        All roles
                        <!-- Lucide "chevron-down" (ISC License), see THIRD_PARTY_NOTICES.md -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                    <span class="m-button is-secondary">Export</span>
                    <span class="m-button">Invite</span>
                    <span class="height-measure">{controlHeight}</span>
                </div>
            </figure>
            <Text size="l" variant="weak" measure="l">
                Inputs, selects and medium buttons are all <Code>--m-control-height</Code> tall, and so is the
                copy button, as a circle. Large buttons (<Code>size="l"</Code>) are the exception: they're for
                standalone calls to action, not for rows of controls. Use the token when you build a control of
                your own, so it lines up with Moth's.
            </Text>
            <ul class="panel">
                <li class="height-token">
                    <span class="height-value">{controlHeight}</span>
                    <Text variant="weak" measure="none">Height of inputs, selects and medium buttons.</Text>
                    <TokenCopy token="--m-control-height" />
                </li>
            </ul>
        </section>

        <!-- Breakpoints -->
        <section class="section" id="breakpoints">
            <Text size="2xl" weight="bold" as="h2">Breakpoints</Text>
            <Text size="l" variant="weak" measure="l">
                Five screen widths where a layout can change. Each is a minimum width: design for phones first, then
                add room as the screen grows. They also cap <Code>Container</Code>: <Code>size="l"</Code> is never
                wider than <Code>--m-breakpoint-l</Code>.
            </Text>
            <ul class="panel">
                {#each breakpoints as breakpoint (breakpoint.key)}
                    {@const token = `--m-breakpoint-${breakpoint.key}`}
                    <li class="breakpoint">
                        <span class="step-name">
                            <span class="step-key">{breakpoint.key}</span>
                            <span class="step-value">{px(values[token])}</span>
                        </span>
                        <div class="breakpoint-body">
                            <Text variant="weak" measure="none">{breakpoint.use}</Text>
                            <span class="breakpoint-track" aria-hidden="true">
                                <span class="breakpoint-bar" style="width: {share(breakpoint.key)}%;"></span>
                            </span>
                        </div>
                        <TokenCopy {token} />
                    </li>
                {/each}
            </ul>
            <Text size="l" variant="weak" measure="l">
                CSS variables don't work inside a media query, so write the breakpoint's value there, in rem.
                Copy the token for anything else, like a <Code>max-width</Code>.
            </Text>
            <CodeExample codeOnly language="css" code={mediaCode} />
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

    /* Scale: a true-size block, the step's name and value, what it's for, and the copy button */
    .step {
        display: grid;
        grid-template-columns: 4.5rem 4.5rem 1fr auto;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-m) var(--m-space-l);
    }

    .step + .step {
        border-block-start: 1px solid var(--m-color-border);
    }

    /* As big as the largest step, so every block lines up on the same corner */
    .step-box {
        display: flex;
        align-items: center;
        width: 4.5rem;
        height: 4.5rem;
    }

    .step-block {
        border-radius: 2px;
        background-color: var(--m-gray-10);
    }

    .step-name {
        display: flex;
        flex-direction: column;
    }

    .step-key {
        color: var(--m-color-text);
        font-size: var(--m-font-size-l);
        line-height: var(--m-line-height-l);
        letter-spacing: var(--m-letter-spacing-l);
        font-weight: var(--m-font-weight-bold);
    }

    .step-value {
        color: var(--m-color-text-weaker);
        font-size: var(--m-font-size-s);
        line-height: var(--m-line-height-s);
        letter-spacing: var(--m-letter-spacing-s);
    }

    /* In practice: a static card where the spacing is drawn as stripes. The tags sit in a gutter on the right */
    .spec {
        --stripes: repeating-linear-gradient(
            -45deg,
            color-mix(in srgb, var(--m-gray-8) 60%, transparent) 0 1px,
            transparent 1px 6px
        );
        margin: 0;
        padding-inline-end: 6rem;
        pointer-events: none;
        user-select: none;
    }

    .spec-card {
        position: relative;
        max-width: 26rem;
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
        background-image: var(--stripes);
    }

    .spec-content {
        display: flex;
        flex-direction: column;
        background-color: var(--m-color-surface);
    }

    .spec-label {
        color: var(--m-color-text);
        font-size: var(--m-font-size-m);
        line-height: var(--m-line-height-m);
        letter-spacing: var(--m-letter-spacing-m);
    }

    .spec-input {
        display: flex;
        align-items: center;
        color: var(--m-color-text);
    }

    .spec-hint {
        color: var(--m-color-text-weaker);
        font-size: var(--m-font-size-s);
        line-height: var(--m-line-height-s);
        letter-spacing: var(--m-letter-spacing-s);
    }

    .spec-gap {
        position: relative;
        background-image: var(--stripes);
    }

    .spec-gap.is-xs { height: var(--m-space-xs); }
    .spec-gap.is-s { height: var(--m-space-s); }
    .spec-gap.is-m { height: var(--m-space-m); }
    .spec-gap.is-l { height: var(--m-space-l); }

    .spec-gap.is-inline {
        width: var(--m-space-s);
        align-self: stretch;
    }

    /* The step's name, out in the gutter level with its gap */
    .spec-gap::after,
    .spec-tag {
        color: var(--m-color-text-weak);
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-s);
        line-height: 1;
        white-space: nowrap;
    }

    .spec-gap::after {
        content: attr(data-tag);
        position: absolute;
        inset-block-start: 50%;
        /* Past the card's padding, into the gutter */
        inset-inline-start: calc(100% + var(--m-space-l) + var(--m-space-s));
        transform: translateY(-50%);
    }

    /* The gap between the buttons: tag it underneath, in the card's bottom padding */
    .spec-gap.is-inline::after {
        inset-block-start: calc(100% + var(--m-space-xs));
        inset-inline-start: 50%;
        transform: translateX(-50%);
    }

    /* The card's padding, tagged in the middle of the top edge */
    .spec-tag.is-padding {
        position: absolute;
        inset-block-start: calc(var(--m-space-l) / 2);
        inset-inline-start: 50%;
        transform: translate(-50%, -50%);
        padding-inline: var(--m-space-xs);
        background-color: var(--m-color-surface);
    }

    .spec-actions {
        display: flex;
        justify-content: flex-end;
    }

    /* Narrow screens: the copy button drops under the description */
    @media (max-width: 36rem) {
        .step {
            grid-template-columns: 4.5rem 1fr;
            padding-inline: var(--m-space-m);
        }

        .step > :global(:nth-child(n + 3)) {
            grid-column: 2;
        }

        .spec {
            padding-inline-end: 5.5rem;
        }
    }

    /* Control height */
    /* The demo row on the page, with dashed guides along its top and bottom and the height marked on the right */
    .height-spec {
        margin: 0;
        padding-block: var(--m-space-l);
        overflow: hidden;
        pointer-events: none;
        user-select: none;
    }

    .height-row {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--m-space-s);
        height: var(--m-control-height);
    }

    /* The guides run the full width of the figure, past the controls */
    .height-row::before,
    .height-row::after {
        content: "";
        position: absolute;
        inset-inline: 0;
        border-block-start: 1px dashed var(--m-gray-7);
    }

    .height-row::before {
        inset-block-start: 0;
    }

    .height-row::after {
        inset-block-end: 0;
    }

    .height-field,
    .height-select {
        display: flex;
        align-items: center;
        flex-shrink: 1;
        min-width: 0;
        white-space: nowrap;
        color: var(--m-color-text-weakest);
    }

    .height-field {
        width: 14rem;
    }

    .height-select {
        justify-content: space-between;
        gap: var(--m-space-s);
        width: 9rem;
        color: var(--m-color-text);
    }

    .height-row .m-button {
        flex-shrink: 0;
    }

    /* A bracket the height of the row, with its value, right after the controls */
    .height-measure {
        align-self: stretch;
        flex-shrink: 0;
        margin-inline-start: var(--m-space-m);
        display: flex;
        align-items: center;
        padding-inline-start: var(--m-space-s);
        border-inline-start: 1px solid var(--m-gray-8);
        color: var(--m-color-text-weak);
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-s);
    }

    .height-token {
        display: grid;
        grid-template-columns: 4.5rem 1fr auto;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-m) var(--m-space-l);
    }

    .height-value {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    /* Narrow screens: drop the select and secondary button so the row fits; the copy button drops under the text */
    @media (max-width: 36rem) {
        .height-select,
        .height-row .m-button.is-secondary {
            display: none;
        }

        .height-token {
            grid-template-columns: 4.5rem 1fr;
            padding-inline: var(--m-space-m);
        }

        .height-token :global(.token-copy) {
            grid-column: 2;
        }
    }

    /* Breakpoints: name and value, what it's for with a bar to scale against the widest, and the copy button */
    /* A fixed copy column, so every bar's track is the same length and they compare */
    .breakpoint {
        display: grid;
        grid-template-columns: 4.5rem 1fr 10.5rem;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-m) var(--m-space-l);
    }

    .breakpoint + .breakpoint {
        border-block-start: 1px solid var(--m-color-border);
    }

    .breakpoint-body {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        min-width: 0;
    }

    .breakpoint-track {
        display: block;
        height: 6px;
        border-radius: var(--m-radius-full);
        background-color: var(--m-color-surface-raised);
    }

    .breakpoint-bar {
        display: block;
        height: 100%;
        border-radius: inherit;
        background-color: var(--m-gray-10);
    }

    .breakpoint :global(.token-copy) {
        justify-self: end;
    }

    @media (max-width: 36rem) {
        .breakpoint {
            grid-template-columns: 4.5rem 1fr;
            padding-inline: var(--m-space-m);
        }

        .breakpoint :global(.token-copy) {
            grid-column: 2;
            justify-self: start;
        }
    }

    /* More contrast: the same edge Moth's cards get, so these surfaces read against the page */
    @media (prefers-contrast: more) {
        .panel,
        .spec-card {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
