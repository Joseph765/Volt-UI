<script>
    import { Check, X } from "@lucide/svelte";
    import { Banner, Code, Container, Fieldset, Flex, Link, Radio, Select, Text } from "$lib";
    import CodeExample from "../../components/CodeExample.svelte";
    import Seo from "../../Seo.svelte";
    import CalloutDiagram from "./CalloutDiagram.svelte";

    // Status diagram: one banner, with controls for its status and strength
    const statusOptions = [
        { value: "info", label: "Info" },
        { value: "success", label: "Success" },
        { value: "warning", label: "Warning" },
        { value: "danger", label: "Danger" }
    ];

    /** @type { Record<string, { title: string, body: string }> } */
    const statusCopy = {
        info: { title: "A new version is available", body: "Reload the page to get the latest features." },
        success: { title: "Payment received", body: "Your invoice has been paid and a receipt is on its way." },
        warning: { title: "Your trial ends in 3 days", body: "Upgrade to keep your projects and team members." },
        danger: { title: "Payment failed", body: "Update your card details to keep your account active." }
    };

    /** @type { "info" | "success" | "warning" | "danger" } */
    let status = $state("warning");
    let strength = $state("weak");

    // Strong: the solid fill, with its border the same color. Weak: the soft fill and its soft border.
    let statusTokens = $derived(strength === "strong"
        ? { fill: `--m-color-${status}`, text: `--m-color-text-on-${status}`, border: `--m-color-${status}` }
        : { fill: `--m-color-${status}-weak`, text: `--m-color-text-on-${status}-weak`, border: `--m-color-border-${status}-weak` });

    /** @type { import("./CalloutDiagram.svelte").Mark[] } */
    let statusMarks = $derived([
        { key: "border", token: statusTokens.border, target: "banner", y: 0.15 },
        { key: "text", token: statusTokens.text, dx: -8 },
        // Inside the banner, under the icon
        { key: "fill", token: statusTokens.fill, target: "banner", y: 1, dx: 22, dy: -24 }
    ]);

    /** @typedef { import("./CalloutDiagram.svelte").Mark } Mark */

    /** @type { import("./CalloutDiagram.svelte").Mark[] } */
    const surfaceMarks = [
        { key: "surface", token: "--m-color-surface" },
        { key: "raised", token: "--m-color-surface-raised" },
        // On the page, just left of the card
        { key: "background", token: "--m-color-background", dx: -14 }
    ];

    // Dots sit on the right of what they point at (default: right edge, middle), so lines run into empty space
    /** @type { import("./CalloutDiagram.svelte").Mark[] } */
    const textMarks = [
        { key: "text", token: "--m-color-text", dx: -10 },
        { key: "weak", token: "--m-color-text-weak", dx: -10 },
        { key: "weaker", token: "--m-color-text-weaker", dx: -10 },
        // Inside the field, just before the placeholder
        { key: "weakest", token: "--m-color-text-weakest", dx: 8 },
        { key: "danger", token: "--m-color-text-danger", dx: -10 }
    ];

    /** @type { Mark[] } */
    const borderMarks = [
        { key: "control", token: "--m-color-border-control" },
        { key: "control-focus", token: "--m-color-border-control-focus" },
        { key: "border", token: "--m-color-border" },
        { key: "info-border", token: "--m-color-border-info-weak" },
        // On the focus ring, which sits 2px outside the button
        { key: "focus", token: "--m-color-focus-ring", dx: -3 }
    ];

    // A button's fill and label sit at the same height, so each token gets its own row: the checkbox shows the fill
    /** @type { import("./CalloutDiagram.svelte").Mark[] } */
    const accentMarks = [
        { key: "selected", token: "--m-color-accent", dx: -10 },
        { key: "highlight", token: "--m-color-highlight", dx: -13 },
        // Inside the button, just before its label
        { key: "on-accent", token: "--m-color-text-on-accent", dx: -8 }
    ];

    const doCode = `.tag {
    background-color: var(--m-color-success);
    color: var(--m-color-text-on-success);
}`;

    const dontCode = `.tag {
    background-color: var(--m-success-9);
    color: var(--m-color-text);
}`;
</script>

<Seo
    title="Color guidelines · Moth UI"
    description="When to use Moth UI's semantic color tokens: surfaces, text, borders, the accent, status colors and text on solid fills."
    path="/guidelines/color"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Color</Text>
            <Text size="l" variant="weak" measure="l">
                Moth's colors come in two layers. The <Link size="l" href="/tokens#color-scales">color scales</Link>
                are the raw material: twelve steps of gray, accent and each status color. The semantic tokens
                (<Code>--m-color-*</Code>) name a role, like "surface" or "text on danger", and point to the right
                step. Build with the semantic tokens, and the colors stay consistent with Moth's own components.
            </Text>
        </Flex>

        <!-- Principles -->
        <section class="guideline">
            <Text size="2xl" weight="bold" as="h2">Principles</Text>
            <div class="principles">
                <div class="principle">
                    <Text weight="bold" size="l" as="h3">Use color sparingly</Text>
                    <Text variant="weak">
                        Interfaces are grayscale by default. Purple marks primary actions and selected state, and status
                        colors mark status. When color is rare, it tells people where to look.
                    </Text>
                </div>
                <div class="principle">
                    <Text weight="bold" size="l" as="h3">Pick a role, not a shade</Text>
                    <Text variant="weak">
                        Ask what the color is for, then use that token. <Code>--m-color-surface</Code> says what it
                        means; <Code>--m-gray-2</Code> only says what it looks like.
                    </Text>
                </div>
                <div class="principle">
                    <Text weight="bold" size="l" as="h3">Keep it readable</Text>
                    <Text variant="weak">
                        Put text on a fill with that fill's matching text token, and never rely on color alone: pair a
                        status color with an icon or a word.
                    </Text>
                </div>
            </div>
        </section>

        <!-- Surfaces -->
        <section class="guideline" id="surfaces">
            <Text size="2xl" weight="bold" as="h2">Surfaces</Text>
            <Text size="l" variant="weak" measure="l">
                Screens are built in layers: background, then surface, then content. Each layer up is a little
                lighter, so depth comes from the fill, not from borders or shadows. Text, buttons and fields always
                sit on one of these.
            </Text>
            <CalloutDiagram label="Surface tokens on a table card" marks={surfaceMarks}>
                <div class="demo-table">
                    <div class="demo-table-title" data-mark="surface">Members</div>
                    <div class="demo-table-row is-header" data-mark="raised"><span>Name</span><span>Role</span><span>Status</span></div>
                    <div class="demo-table-row" data-mark="background"><span>Ada Lovelace</span><span>Owner</span><span>Active</span></div>
                    <div class="demo-table-row"><span>Alan Turing</span><span>Editor</span><span>Invited</span></div>
                </div>
            </CalloutDiagram>
        </section>

        <!-- Text -->
        <section class="guideline" id="text">
            <Text size="2xl" weight="bold" as="h2">Text</Text>
            <Text size="l" variant="weak" measure="l">
                Show hierarchy with the gray text tokens, not with size alone. Most screens need only
                <Code>--m-color-text</Code> and <Code>--m-color-text-weak</Code>. Two more are for special cases:
                <Code>--m-color-text-accent</Code> for rare accent-colored text, and <Code>--m-color-text-inverse</Code>
                for dark text on a light fill, like the label of a hovered primary button.
            </Text>
            <CalloutDiagram label="Text tokens on an invoice card" marks={textMarks}>
                <div class="demo-invoice">
                    <div class="demo-text-row"><span class="demo-title" data-mark="text">Invoice #1042</span></div>
                    <div class="demo-text-row"><span class="demo-body" data-mark="weak">Sent to the billing contact on file.</span></div>
                    <div class="demo-text-row"><span class="demo-meta" data-mark="weaker">Updated 2 minutes ago</span></div>
                    <div class="demo-text-row">
                        <input class="m-input demo-field" placeholder="Amount" readonly tabindex="-1" data-mark="weakest" />
                    </div>
                    <div class="demo-text-row"><span class="demo-error" data-mark="danger">Enter an amount</span></div>
                </div>
            </CalloutDiagram>
        </section>

        <!-- Borders -->
        <section class="guideline" id="borders">
            <Text size="2xl" weight="bold" as="h2">Borders</Text>
            <Text size="l" variant="weak" measure="l">
                Surfaces already separate content, so use borders only where an edge has a job: a form control, a
                divider, or a soft status component. Form controls get their own token,
                <Code>--m-color-border-control</Code>, which turns brighter when people ask their system for more
                contrast. When a field is focused, its border brightens to <Code>--m-color-border-control-focus</Code>,
                and like every focusable element it gets the focus ring, <Code>--m-shadow-focus</Code>, drawn in
                <Code>--m-color-focus-ring</Code>. Moth's cards and tables don't have borders.
            </Text>
            <CalloutDiagram label="Border tokens on a field, a focused field, a divider, a badge and a focused button" marks={borderMarks}>
                <div class="demo-borders">
                    <div class="demo-text-row">
                        <input class="m-input is-expanded" placeholder="Search" readonly tabindex="-1" data-mark="control" />
                    </div>
                    <div class="demo-text-row">
                        <input class="m-input is-expanded demo-focus-field" value="Ada Lovelace" readonly tabindex="-1" data-mark="control-focus" />
                    </div>
                    <div class="demo-text-row">
                        <div class="m-divider demo-divider" data-mark="border"></div>
                    </div>
                    <div class="demo-text-row">
                        <div class="m-badge is-info" data-mark="info-border">Beta</div>
                    </div>
                    <div class="demo-text-row">
                        <span class="m-button is-secondary demo-focus" data-mark="focus">Cancel</span>
                    </div>
                </div>
            </CalloutDiagram>
        </section>

        <!-- Accent -->
        <section class="guideline" id="accent">
            <Text size="2xl" weight="bold" as="h2">Accent</Text>
            <Text size="l" variant="weak" measure="l">
                <Code>--m-color-accent</Code> is Moth's purple. It belongs to the primary action and to selected
                state: a checked box, the active tab, the current nav item. <Code>--m-color-highlight</Code> colors
                selected text. Don't use the accent for decoration, icons, borders or section backgrounds; if a
                screen has more than a few purple elements, demote some actions to secondary or tertiary.
            </Text>
            <CalloutDiagram label="Accent tokens on a checkbox, selected text and a button" marks={accentMarks}>
                <div class="demo-accent">
                    <div class="demo-text-row">
                        <label class="m-checkbox-wrapper">
                            <input type="checkbox" class="m-checkbox-input" checked tabindex="-1" />
                            <span class="m-checkbox-box" data-mark="selected">
                                <!-- Lucide "check" (ISC License), see THIRD_PARTY_NOTICES.md -->
                                <svg class="m-checkbox-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                            </span>
                            <span class="m-checkbox-label">Email me updates</span>
                        </label>
                    </div>
                    <div class="demo-text-row">
                        <span class="demo-body"><span class="demo-highlight" data-mark="highlight">Purple stays rare</span> on purpose.</span>
                    </div>
                    <div class="demo-text-row">
                        <span class="m-button"><span data-mark="on-accent">Save changes</span></span>
                    </div>
                </div>
            </CalloutDiagram>
        </section>

        <!-- Status -->
        <section class="guideline" id="status">
            <Text size="2xl" weight="bold" as="h2">Status colors</Text>
            <Text size="l" variant="weak" measure="l">
                Neutral, info, success, warning and danger tell people the state of something. Use them only for
                status, never for emphasis. Each status comes as a set of tokens in two strengths. Pick the strength
                by how much attention the message needs, then use every token from that set together.
            </Text>
            <div class="status-controls">
                <div class="status-select">
                    <Select name="status-demo" label="Status" options={statusOptions} bind:value={status} expanded />
                </div>
                <Fieldset label="Strength">
                    <div class="strength-options">
                        <Radio id="strength-weak" name="strength-demo" label="Weak" value="weak" bind:group={strength} />
                        <Radio id="strength-strong" name="strength-demo" label="Strong" value="strong" bind:group={strength} />
                    </div>
                </Fieldset>
            </div>
            <CalloutDiagram label="Status tokens on a banner" marks={statusMarks}>
                <div class="demo-banner" data-mark="banner">
                    <Banner
                        variant={status}
                        style="background-color: var({statusTokens.fill}); color: var({statusTokens.text}); border: 1px solid var({statusTokens.border}); align-items: flex-start;"
                    >
                        <span class="demo-banner-title">{statusCopy[status].title}</span>
                        <span class="demo-banner-body" data-mark="text">{statusCopy[status].body}</span>
                    </Banner>
                </div>
            </CalloutDiagram>
            <Text size="l" variant="weak" measure="l">
                Strong uses the solid fill, its on-color and a border in the fill's own color. Weak uses the
                <Code>-weak</Code> fill, text and border. For status text on a regular surface, like an error message under a field, use
                <Code>--m-color-text-&lt;status&gt;</Code> instead.
            </Text>
        </section>

        <!-- Text on color -->
        <section class="guideline" id="text-on-color">
            <Text size="2xl" weight="bold" as="h2">Text on color</Text>
            <Text size="l" variant="weak" measure="l">
                Step 9 of each scale is its solid color, and the regular text tokens aren't made to sit on it. Whenever
                text or an icon sits on a solid fill, use the matching <Code>--m-color-text-on-*</Code> token. Most are
                white; warning's is dark, because white doesn't read on yellow.
            </Text>
            <ul class="rules">
                <li><Text size="l" variant="weak" measure="l"><strong>Solid fill:</strong> <Code>--m-color-accent</Code> takes <Code>--m-color-text-on-accent</Code>, <Code>--m-color-danger</Code> takes <Code>--m-color-text-on-danger</Code>, and so on.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Weak fill:</strong> use the <Code>-weak</Code> text token, e.g. <Code>--m-color-text-on-info-weak</Code> on <Code>--m-color-info-weak</Code>.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Light fill:</strong> use <Code>--m-color-text-inverse</Code>.</Text></li>
            </ul>
            <div class="do-dont">
                <div class="verdict">
                    <div class="verdict-card is-do">
                        <span class="verdict-badge" role="img" aria-label="Do"><Check size={16} strokeWidth={3} /></span>
                        <CodeExample codeOnly code={doCode} />
                    </div>
                    <Text variant="weak">Pair the semantic fill with its on-color.</Text>
                </div>
                <div class="verdict">
                    <div class="verdict-card is-dont">
                        <span class="verdict-badge" role="img" aria-label="Don't"><X size={16} strokeWidth={3} /></span>
                        <CodeExample codeOnly code={dontCode} />
                    </div>
                    <Text variant="weak">Use a raw step for the fill or a regular text color on it.</Text>
                </div>
            </div>
        </section>

        <!-- Icons -->
        <section class="guideline" id="icons">
            <Text size="2xl" weight="bold" as="h2">Icons</Text>
            <Text size="l" variant="weak" measure="l">
                Icons use <Code>currentColor</Code>, so they follow the text next to them. On a solid fill they pick
                up the fill's on-color automatically. Color an icon yourself only to show a status, with a status
                color. See <Link size="l" href="/guidelines#icons">Icons</Link> for sizes.
            </Text>
        </section>

        <!-- Scales -->
        <section class="guideline" id="scales">
            <Text size="2xl" weight="bold" as="h2">When to use the scales</Text>
            <Text size="l" variant="weak" measure="l">
                Reach for a scale step like <Code>--m-gray-6</Code> only when no semantic token fits, for example a
                chart, a progress bar's track, or an illustration. If you need the same raw step in several places,
                it's probably a role, so check the <Link size="l" href="/tokens#color">color tokens</Link> again
                first.
            </Text>
        </section>
    </Flex>
</Container>


<style>
    .guideline {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
    }


    .principles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: var(--m-space-m);
    }

    .principle {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    /* Diagram demos: static markup with Moth's classes, so they look like the real components */
    /* Surfaces: a table card wider than the figure, so it runs off the right edge */
    .demo-table {
        /* Always wider than the space, so it runs off the figure's edge */
        width: calc(100% + 6rem);
        min-width: 24rem;
        border-radius: var(--m-radius) 0 0 var(--m-radius);
        background-color: var(--m-color-surface);
        overflow: hidden;
    }

    .demo-table-title {
        padding: var(--m-space-m);
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    .demo-table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        /* Rows at least a label pill apart, so each label sits level with its ring */
        padding: var(--m-space-m);
        color: var(--m-color-text-weak);
        font-size: var(--m-font-size-s);
    }

    .demo-table-row.is-header {
        background-color: var(--m-color-surface-raised);
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    .demo-table-row + .demo-table-row:not(.is-header) {
        border-block-start: 1px solid var(--m-color-border);
    }

    /* Text: an invoice card wider than the figure, so it runs off the right edge */
    .demo-invoice {
        width: calc(100% + 6rem);
        min-width: 24rem;
        padding: var(--m-space-m) var(--m-space-l);
        border-radius: var(--m-radius) 0 0 var(--m-radius);
        background-color: var(--m-color-surface);
    }

    /* Accent: a card wider than the figure, so it runs off the right edge */
    .demo-accent {
        width: calc(100% + 6rem);
        min-width: 24rem;
        padding: var(--m-space-m) var(--m-space-l);
        border-radius: var(--m-radius) 0 0 var(--m-radius);
        background-color: var(--m-color-surface);
    }

    /* One text style per row, each a label pill's height apart, so every line stays straight */
    .demo-text-row {
        display: flex;
        align-items: center;
        min-height: 2.5rem;
    }

    .demo-title {
        color: var(--m-color-text);
        font-size: var(--m-font-size-l);
        font-weight: var(--m-font-weight-bold);
    }

    .demo-body {
        color: var(--m-color-text-weak);
    }

    .demo-meta {
        color: var(--m-color-text-weaker);
        font-size: var(--m-font-size-s);
    }

    /* A little more room before the placeholder, for its ring */
    .demo-field {
        padding-inline: var(--m-space-m);
    }

    .demo-error {
        color: var(--m-color-text-danger);
        font-size: var(--m-font-size-s);
    }

    /* Borders: a card wider than the figure, so the field and divider run off the right edge */
    .demo-borders {
        width: calc(100% + 6rem);
        min-width: 24rem;
        padding: var(--m-space-m) var(--m-space-l);
        border-radius: var(--m-radius) 0 0 var(--m-radius);
        background-color: var(--m-color-surface);
    }

    .demo-divider {
        flex: 1;
    }

    /* A field drawn in its focused state */
    .demo-focus-field {
        border-color: var(--m-color-border-control-focus);
        box-shadow: var(--m-shadow-focus);
    }

    .demo-focus {
        box-shadow: var(--m-shadow-focus);
    }


    .demo-highlight {
        background-color: var(--m-color-highlight);
        color: var(--m-color-text);
    }

    .status-controls {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: var(--m-space-l);
    }

    /* As tall as the select, so the radios sit level with it */
    .strength-options {
        display: flex;
        align-items: center;
        gap: var(--m-space-l);
        min-height: var(--m-control-height);
    }

    .status-select {
        width: 12rem;
    }

    /* Status: a banner wider than the figure, so it runs off the right edge like the surfaces table */
    .demo-banner {
        width: calc(100% + 6rem);
        min-width: 24rem;
    }

    .demo-banner-title,
    .demo-banner-body {
        display: block;
    }

    .demo-banner-title {
        font-weight: var(--m-font-weight-bold);
    }

    /* Room under the text for the fill's ring, a label's height below the text's */
    .demo-banner :global(.m-banner) {
        padding-block: var(--m-space-l) calc(var(--m-space-xl) + var(--m-space-m));
    }

    .do-dont {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        gap: var(--m-space-m);
    }

    .verdict {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        min-width: 0;
    }

    /* The example sits inside a card with a status bar along the top and a badge in the corner;
       the caption sits underneath */
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

    /* The status bar along the top */
    .verdict-card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 4px;
        background-color: var(--verdict-color);
    }

    /* The example on its own raised canvas. No copy button: these snippets illustrate, they aren't for pasting */
    .verdict-card :global(pre code.hljs) {
        background-color: var(--m-color-surface-raised);
    }

    .verdict-card :global(.m-copy-button) {
        display: none;
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

    /* More contrast: the same edge Moth's cards get, so these surfaces read against the page
       (principle and do/don't cards, and the demo cards in the diagrams) */
    @media (prefers-contrast: more) {
        .principle,
        .verdict-card,
        .demo-table,
        .demo-invoice,
        .demo-accent,
        .demo-borders {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
