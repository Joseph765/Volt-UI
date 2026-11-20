<script>
    import { Banner, Code, Container, Fieldset, Flex, Radio, Select, Text } from "moth-ui-svelte";
    import ColorScales from "../ColorScales.svelte";
    import TokenCopy from "../TokenCopy.svelte";
    import Seo from "../../Seo.svelte";
    import CalloutDiagram from "./CalloutDiagram.svelte";

    /** @typedef { import("./CalloutDiagram.svelte").Mark } Mark */

    /**
     * A token in a section's list. kind: "fill" shows a block of the color, "text" shows type in it,
     * "on" shows type in it on its `fill`, "ring" shows the focus shadow.
     * @typedef {{ token: string, use: string, kind: "fill" | "text" | "on" | "ring", fill?: string }} Token
     */

    // Surfaces
    /** @type { Mark[] } */
    const surfaceMarks = [
        { key: "surface", token: "--m-color-surface" },
        { key: "raised", token: "--m-color-surface-raised" },
        // On the page, just left of the card
        { key: "background", token: "--m-color-background", dx: -14 }
    ];

    /** @type { Token[] } */
    const surfaceTokens = [
        { token: "--m-color-background", kind: "fill", use: "The page itself." },
        { token: "--m-color-surface", kind: "fill", use: "Cards, tables, panels and form fields." },
        { token: "--m-color-surface-raised", kind: "fill", use: "Anything on a surface, like a table header or a focused field." }
    ];

    // Text: dots sit on the right of what they point at, so lines run into empty space
    /** @type { Mark[] } */
    const textMarks = [
        { key: "text", token: "--m-color-text", dx: -10 },
        { key: "weak", token: "--m-color-text-weak", dx: -10 },
        { key: "weaker", token: "--m-color-text-weaker", dx: -10 },
        // Inside the field, just before the placeholder
        { key: "weakest", token: "--m-color-text-weakest", dx: 8 },
        { key: "danger", token: "--m-color-text-danger", dx: -10 }
    ];

    /** @type { Token[] } */
    const textTokens = [
        { token: "--m-color-text", kind: "text", use: "Headings, labels and anything people must read." },
        { token: "--m-color-text-weak", kind: "text", use: "Body text and descriptions." },
        { token: "--m-color-text-weaker", kind: "text", use: "Metadata, like timestamps and hints." },
        { token: "--m-color-text-weakest", kind: "text", use: "Placeholders in form fields." },
        { token: "--m-color-text-accent", kind: "text", use: "Rare accent-colored text." },
        { token: "--m-color-text-inverse", kind: "on", fill: "--m-gray-12", use: "Text on an inverted fill, like a hovered primary button." }
    ];

    // Borders
    /** @type { Mark[] } */
    const borderMarks = [
        { key: "border", token: "--m-color-border" },
        { key: "control-focus", token: "--m-color-border-control-focus" },
        { key: "info-border", token: "--m-color-border-info-weak" },
        // On the focus ring, which sits 2px outside the button
        { key: "focus", token: "--m-color-focus-ring", dx: -3 }
    ];

    /** @type { Token[] } */
    const borderTokens = [
        { token: "--m-color-border", kind: "fill", use: "Form controls at rest, dividers, card headers, nav and table rows." },
        { token: "--m-color-border-control-hover", kind: "fill", use: "A hovered form control." },
        { token: "--m-color-border-control-focus", kind: "fill", use: "A focused form control." },
        { token: "--m-color-focus-ring", kind: "ring", use: "The focus ring around every focusable element." }
    ];

    // Accent: a button's fill and label sit at the same height, so the checkbox shows the fill
    /** @type { Mark[] } */
    const accentMarks = [
        { key: "selected", token: "--m-color-accent", dx: -10 },
        { key: "highlight", token: "--m-color-highlight", dx: -13 },
        // Inside the button, just before its label
        { key: "on-accent", token: "--m-color-text-on-accent", dx: -8 }
    ];

    /** @type { Token[] } */
    const accentTokens = [
        { token: "--m-color-accent", kind: "fill", use: "Primary actions and selected state." },
        { token: "--m-color-text-on-accent", kind: "on", fill: "--m-color-accent", use: "Text and icons on the accent." },
        { token: "--m-color-highlight", kind: "fill", use: "Selected text." }
    ];

    // Status: one banner, with controls for its status and strength
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

    /** @type { Mark[] } */
    let statusMarks = $derived([
        { key: "border", token: statusTokens.border, target: "banner", y: 0.15 },
        { key: "text", token: statusTokens.text, dx: -8 },
        // Inside the banner, under the icon
        { key: "fill", token: statusTokens.fill, target: "banner", y: 1, dx: 22, dy: -24 }
    ]);

    // The list follows the controls: the selected status's tokens, both strengths
    /** @type { Token[] } */
    let statusList = $derived([
        { token: `--m-color-${status}`, kind: "fill", use: "Strong fill, for messages that need attention now." },
        { token: `--m-color-text-on-${status}`, kind: "on", fill: `--m-color-${status}`, use: "Text and icons on the strong fill." },
        { token: `--m-color-${status}-weak`, kind: "fill", use: "Weak fill, for messages people can read in their own time." },
        { token: `--m-color-text-on-${status}-weak`, kind: "on", fill: `--m-color-${status}-weak`, use: "Text and icons on the weak fill." },
        { token: `--m-color-border-${status}-weak`, kind: "fill", use: "Border of the weak fill." },
        { token: `--m-color-text-${status}`, kind: "text", use: "Status text on a surface, like an error under a field." }
    ]);
</script>

<Seo
    title="Colors · Moth UI"
    description="Moth UI's colors: the full palette, and which semantic color token to use for surfaces, text, borders, the accent and status."
    path="/foundations/colors"
/>

{#snippet tokenList(/** @type { Token[] } */ tokens)}
    <ul class="tokens">
        {#each tokens as item (item.token)}
            <li class="token">
                {#if item.kind === "text"}
                    <span class="swatch is-text" style="color: var({item.token});" aria-hidden="true">Aa</span>
                {:else if item.kind === "on"}
                    <span class="swatch is-text" style="color: var({item.token}); background-color: var({item.fill});" aria-hidden="true">Aa</span>
                {:else if item.kind === "ring"}
                    <span class="swatch is-ring" aria-hidden="true"></span>
                {:else}
                    <span class="swatch" style="background-color: var({item.token});" aria-hidden="true"></span>
                {/if}
                <Text variant="weak" measure="none">{item.use}</Text>
                <TokenCopy token={item.token} />
            </li>
        {/each}
    </ul>
{/snippet}

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Colors</Text>
            <Text size="l" variant="weak" measure="l">
                These are Moth's colors. Grays do most of the work, purple marks what matters, and status colors
                show how things are going. Click any swatch or token to copy it.
            </Text>
        </Flex>

        <!-- Palette -->
        <section class="section" id="palette">
            <ColorScales scales={["gray", "accent", "info", "success", "warning", "danger"]} />
        </section>

        <!-- Surfaces -->
        <section class="section" id="surfaces">
            <Text size="2xl" weight="bold" as="h2">Surfaces</Text>
            <CalloutDiagram label="Surface tokens on a table card" marks={surfaceMarks}>
                <div class="demo-table">
                    <div class="demo-table-title" data-mark="surface">Members</div>
                    <div class="demo-table-row is-header" data-mark="raised"><span>Name</span><span>Role</span><span>Status</span></div>
                    <div class="demo-table-row" data-mark="background"><span>Ada Lovelace</span><span>Owner</span><span>Active</span></div>
                    <div class="demo-table-row"><span>Alan Turing</span><span>Editor</span><span>Invited</span></div>
                </div>
            </CalloutDiagram>
            <Text size="l" variant="weak" measure="l">
                Screens are built in layers: background, then surface, then raised. Each layer has its own fill,
                so depth comes from the fill, not from borders or shadows.
            </Text>
            {@render tokenList(surfaceTokens)}
        </section>

        <!-- Text -->
        <section class="section" id="text">
            <Text size="2xl" weight="bold" as="h2">Text</Text>
            <CalloutDiagram label="Text tokens on an invoice card" marks={textMarks}>
                <div class="demo-card">
                    <div class="demo-row"><span class="demo-title" data-mark="text">Invoice #1042</span></div>
                    <div class="demo-row"><span class="demo-body" data-mark="weak">Sent to the billing contact on file.</span></div>
                    <div class="demo-row"><span class="demo-meta" data-mark="weaker">Updated 2 minutes ago</span></div>
                    <div class="demo-row">
                        <input class="m-input demo-field" placeholder="Amount" readonly tabindex="-1" aria-hidden="true" data-mark="weakest" />
                    </div>
                    <div class="demo-row"><span class="demo-error" data-mark="danger">Enter an amount</span></div>
                </div>
            </CalloutDiagram>
            <Text size="l" variant="weak" measure="l">
                Show hierarchy with the gray text tokens, not with size alone. Most screens only need
                <Code>--m-color-text</Code> and <Code>--m-color-text-weak</Code>.
            </Text>
            {@render tokenList(textTokens)}
        </section>

        <!-- Borders -->
        <section class="section" id="borders">
            <Text size="2xl" weight="bold" as="h2">Borders</Text>
            <CalloutDiagram label="Border tokens on a field, a focused field, a badge and a focused button" marks={borderMarks}>
                <div class="demo-card">
                    <div class="demo-row">
                        <input class="m-input is-expanded" placeholder="Search" readonly tabindex="-1" aria-hidden="true" data-mark="border" />
                    </div>
                    <div class="demo-row">
                        <input class="m-input is-expanded demo-focus-field" value="Ada Lovelace" readonly tabindex="-1" aria-hidden="true" data-mark="control-focus" />
                    </div>
                    <div class="demo-row">
                        <div class="m-badge is-info" data-mark="info-border">Beta</div>
                    </div>
                    <div class="demo-row">
                        <span class="m-button is-secondary demo-focus" data-mark="focus">Cancel</span>
                    </div>
                </div>
            </CalloutDiagram>
            <Text size="l" variant="weak" measure="l">
                Surfaces already separate content, so use a border only where an edge has a job: a form control, a
                divider or a soft status component. Cards and tables don't have borders.
            </Text>
            {@render tokenList(borderTokens)}
        </section>

        <!-- Accent -->
        <section class="section" id="accent">
            <Text size="2xl" weight="bold" as="h2">Accent</Text>
            <CalloutDiagram label="Accent tokens on a checkbox, selected text and a button" marks={accentMarks}>
                <div class="demo-card">
                    <div class="demo-row">
                        <span class="m-checkbox-wrapper" aria-hidden="true">
                            <input type="checkbox" class="m-checkbox-input" checked tabindex="-1" />
                            <span class="m-checkbox-box" data-mark="selected">
                                <!-- Lucide "check" (ISC License), see THIRD_PARTY_NOTICES.md -->
                                <svg class="m-checkbox-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                            </span>
                            <span class="m-checkbox-label">Email me updates</span>
                        </span>
                    </div>
                    <div class="demo-row">
                        <span class="demo-body"><span class="demo-highlight" data-mark="highlight">Purple stays rare</span> on purpose.</span>
                    </div>
                    <div class="demo-row">
                        <span class="m-button"><span data-mark="on-accent">Save changes</span></span>
                    </div>
                </div>
            </CalloutDiagram>
            <Text size="l" variant="weak" measure="l">
                Purple belongs to the primary action and to selected state: a checked box, the active tab, the
                current nav item. Don't use it for decoration. When it's rare, it tells people where to look.
            </Text>
            {@render tokenList(accentTokens)}
        </section>

        <!-- Status -->
        <section class="section" id="status">
            <Text size="2xl" weight="bold" as="h2">Status</Text>
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
                Use status colors only for status, never for emphasis, and pair them with an icon or a word. Pick
                strong or weak by how much attention the message needs, then use that strength's tokens together.
            </Text>
            {@render tokenList(statusList)}
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

    /* Token list: swatch, what it's for, and the copy button */
    .tokens {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        list-style: none;
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

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
        /* Keeps dark fills like the background distinguishable from the list */
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--m-gray-12) 8%, transparent);
    }

    .swatch.is-text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: var(--m-font-weight-bold);
    }

    .swatch.is-ring {
        width: 1.75rem;
        height: 1.75rem;
        margin: 0.25rem;
        background-color: var(--m-color-surface-raised);
        box-shadow: var(--m-shadow-focus);
    }

    /* Narrow screens: the copy button drops under the description */
    @media (max-width: 36rem) {
        .token {
            grid-template-columns: 2.25rem 1fr;
            padding-inline: var(--m-space-m);
        }

        .token :global(.token-copy) {
            grid-column: 2;
        }
    }

    /* Diagram demos: static markup with Moth's classes, so they look like the real components.
       Each is wider than the figure, so it runs off the right edge */
    .demo-table,
    .demo-card,
    .demo-banner {
        width: calc(100% + 6rem);
        min-width: 24rem;
    }

    .demo-table,
    .demo-card {
        border-radius: var(--m-radius) 0 0 var(--m-radius);
        background-color: var(--m-color-surface);
    }

    .demo-table {
        overflow: hidden;
    }

    .demo-card {
        padding: var(--m-space-m) var(--m-space-l);
    }

    .demo-table-title {
        padding: var(--m-space-m);
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    /* Rows at least a label pill apart, so each label sits level with its ring */
    .demo-table-row {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
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

    /* One thing per row, each a label pill's height apart, so every line stays straight */
    .demo-row {
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

    /* A field and a button drawn in their focused state */
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

    .status-select {
        width: 12rem;
    }

    /* As tall as the select, so the radios sit level with it */
    .strength-options {
        display: flex;
        align-items: center;
        gap: var(--m-space-l);
        min-height: var(--m-control-height);
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

    /* More contrast: the same edge Moth's cards get, so these surfaces read against the page */
    @media (prefers-contrast: more) {
        .tokens,
        .demo-table,
        .demo-card {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
