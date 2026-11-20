<script>
    import components from "./components/components.json";

    const repoUrl = "https://github.com/Joseph765/moth-ui";
    const year = new Date().getFullYear();
    import CodeExample from "./components/CodeExample.svelte";
    import Seo from "./Seo.svelte";
    import { installCommand } from "./framework.svelte.js";
    import {
        Badge,
        Button,
        Card,
        Container,
        CopyCode,
        Divider,
        Flex,
        Input,
        Link,
        Select,
        Text,
        Toggle
    } from "moth-ui-svelte";

    // --- Live demo state (the hero card is built entirely from Moth components) ---
    let seats = $state("5");
    let billing = $state("yearly");
    let prioritySupport = $state(false);
    const billingOptions = [
        { value: "yearly", label: "Yearly · $10 per seat / month" },
        { value: "monthly", label: "Monthly · $12 per seat / month" }
    ];
    /** @type { Record<string, number> } */
    const seatPrice = { yearly: 10, monthly: 12 };
    const supportPrice = 4;

    let seatCount = $derived(Number(seats));
    let invalid = $derived(seats !== "" && (!Number.isInteger(seatCount) || seatCount < 1));
    let monthly = $derived(!invalid && seatCount > 0 ? seatCount * ((seatPrice[billing] ?? 0) + (prioritySupport ? supportPrice : 0)) : 0);

    /** @param { number } n */
    const usd = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

    // --- Content ---
    const featured = ["Button", "Input", "Toggle", "Badge", "Banner", "Tabs", "Table", "Layout"];
    const showcase = components.filter((c) => featured.includes(c.name));

    const scales = ["gray", "accent", "info", "success", "warning", "danger"];
    const steps = Array.from({ length: 12 }, (_, i) => i + 1);

    // Quick start
    const stylesCode = {
        svelte: `<script>
    import "moth-ui-svelte/css/index.css";
<\/script>`,
        react: `import "moth-ui-react/css/index.css";`
    };

    const usageCode = {
        svelte: `<script>
    import { Button } from "moth-ui-svelte";
<\/script>

<Button variant="primary">Ship it</Button>`,
        react: `import { Button } from "moth-ui-react";

export default function Example() {
    return <Button variant="primary">Ship it</Button>;
}`
    };

    const features = [
        {
            title: "Polished on install",
            body: "No theming marathon. Moth looks distinctive and finished from the first component you drop in.",
            icon: `<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>`
        },
        {
            title: "Svelte and React",
            body: "The same components, the same look, in whichever framework you build with.",
            icon: `<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>`
        },
        {
            title: "Glows in the dark. Shines in the light.",
            body: "Both themes are designed token by token, not inverted.",
            icon: `<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>`
        },
        {
            title: "Accessible by default",
            body: "Keyboard support, visible focus, and a high-contrast mode that switches on automatically when users ask for it.",
            icon: `<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>`
        }
    ];
</script>

<Seo
    title="Moth UI · The design system for Svelte and React"
    description="A design system for Svelte and React with a look all its own: soft ambient light, {components.length} polished components, and a fast path from empty project to finished UI."
    path="/"
/>

<Container size="2xl" align="center">
    <div class="page">
        <!-- Hero -->
        <section class="hero">
            <div class="hero-glow" aria-hidden="true"></div>
            <div class="hero-copy">
                <h1 class="hero-title">
                    Drawn to <span class="accent">the light</span>
                </h1>
                <Text size="xl" variant="weak" measure="s">
                    A design system with a look all its own: soft ambient light, polished components, and a fast path
                    from empty project to finished UI.
                </Text>
                <Flex wrap>
                    <Button size="l" variant="primary" href="/getting-started">Get started</Button>
                    <Button size="l" variant="secondary" href="/components">Browse components</Button>
                </Flex>
                <div class="install">
                    <CopyCode code={installCommand()} />
                </div>
            </div>

            <div class="hero-demo">
                <Card space="l">
                    {#snippet header()}
                        <Flex justify="between" align="center" style="width: 100%;">
                            <Text size="xl" weight="bold" as="h2">Team plan</Text>
                            {#if billing === "yearly"}
                                <Badge variant="success">Save 17%</Badge>
                            {/if}
                        </Flex>
                    {/snippet}
                    <Flex direction="column" gap="l">
                        <Input
                            name="demo-seats"
                            label="Seats"
                            bind:value={seats}
                            expanded
                            inputmode="numeric"
                            error={invalid ? "Enter a whole number of seats" : ""}
                        >
                            {#snippet suffix()}<span>seats</span>{/snippet}
                        </Input>
                        <Select name="demo-billing" label="Billing" options={billingOptions} bind:value={billing} expanded />
                        <Toggle name="demo-support" label="Priority support (+$4 per seat)" bind:checked={prioritySupport} />
                        <Divider />
                        <Flex justify="between" align="center">
                            <Text variant="weak">Total per month</Text>
                            <Text weight="bold" mono>{usd(monthly)}</Text>
                        </Flex>
                        <Button variant="primary" size="l" expanded disabled={invalid || !seats}>Upgrade plan</Button>
                    </Flex>
                </Card>
                <p class="demo-caption">Every element above is a Moth component. Try it.</p>
            </div>
        </section>

        <!-- Features -->
        <section class="section">
            <div class="section-head">
                <Text size="3xl" weight="black" as="h2">Why Moth</Text>
                <Text size="l" variant="weak" measure="m">Every design decision is already made. You just build.</Text>
            </div>
            <div class="features">
                {#each features as feature}
                    <div class="feature">
                        <span class="feature-icon" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{@html feature.icon}</svg>
                        </span>
                        <Text size="xl" weight="bold" as="h3">{feature.title}</Text>
                        <Text variant="weak" measure="none">{feature.body}</Text>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Quick start -->
        <section class="section">
            <div class="section-head">
                <Text size="3xl" weight="black" as="h2">Up and running in three steps</Text>
                <Text size="l" variant="weak" measure="m">
                    No config generators, no theme providers. <a class="inline-link" href="/getting-started">Read the full guide →</a>
                </Text>
            </div>
            <ol class="steps">
                <li class="step">
                    <span class="step-number">1</span>
                    <div class="step-body">
                        <Text size="l" weight="bold" as="h3">Install the package</Text>
                        <CopyCode code={installCommand()} />
                    </div>
                </li>
                <li class="step">
                    <span class="step-number">2</span>
                    <div class="step-body">
                        <Text size="l" weight="bold" as="h3">Import the styles once</Text>
                        <CodeExample codeOnly code={stylesCode} />
                    </div>
                </li>
                <li class="step">
                    <span class="step-number">3</span>
                    <div class="step-body">
                        <Text size="l" weight="bold" as="h3">Use any component</Text>
                        <CodeExample codeOnly code={usageCode} />
                    </div>
                </li>
            </ol>
        </section>

        <!-- Component showcase -->
        <section class="section">
            <div class="section-head is-row">
                <div>
                    <Text size="3xl" weight="black" as="h2">Components</Text>
                    <Text size="l" variant="weak" measure="m">From form controls to full page layouts.</Text>
                </div>
                <Button variant="tertiary" href="/components">View all {components.length} →</Button>
            </div>
            <div class="showcase-grid">
                {#each showcase as component}
                    <a href="/components/{component.name.toLocaleLowerCase()}" class="showcase-card glow-card">
                        <div class="showcase-preview glow-stage is-grayscale" inert>
                            {@html component.example}
                        </div>
                        <div class="showcase-label">
                            <Text weight="bold" size="l">{component.name}</Text>
                            <span class="arrow" aria-hidden="true">→</span>
                        </div>
                    </a>
                {/each}
            </div>
        </section>

        <!-- Tokens -->
        <section class="section">
            <div class="section-head is-row">
                <div>
                    <Text size="3xl" weight="black" as="h2">A palette with purpose</Text>
                    <Text size="l" variant="weak" measure="m">
                        Six 12-step scales, each step with a job: backgrounds, borders, solids and text.
                    </Text>
                </div>
                <Button variant="tertiary" href="/foundations/colors">Explore colors →</Button>
            </div>
            <div class="palette">
                {#each scales as scale}
                    <div class="scale">
                        <span class="scale-name">{scale}</span>
                        <div class="scale-swatches">
                            {#each steps as step}
                                <span
                                    class="swatch"
                                    style="background-color: var(--m-{scale}-{step});"
                                    title="--m-{scale}-{step}"
                                ></span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Final CTA -->
        <section class="cta">
            <Text size="3xl" weight="black" as="h2" align="center">Start building with Moth</Text>
            <Text size="l" variant="weak" align="center" measure="s">
                Free, open source, and ready for your next project.
            </Text>
            <Flex justify="center" wrap>
                <Button size="l" variant="primary" href="/getting-started">Get started</Button>
                <Button size="l" variant="secondary" href={repoUrl} target="_blank" rel="noopener noreferrer">
                    Star on GitHub
                </Button>
            </Flex>
        </section>

        <footer class="footer">
            <Text size="s" variant="weaker">© {year > 2025 ? `2025–${year}` : 2025} Joseph Chauvin</Text>
            <nav class="footer-links" aria-label="Footer">
                <Link size="s" href="{repoUrl}/blob/main/LICENSE" target="_blank">MIT License</Link>
                <Link size="s" href={repoUrl} target="_blank">GitHub</Link>
            </nav>
        </footer>
    </div>
</Container>

<style>
    .page {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        padding-block-end: var(--m-space-2xl);
    }

    /* Hero */
    .hero {
        position: relative;
        /* Keep the glow/content z-index layering local so it can't paint over the mobile nav */
        isolation: isolate;
        display: grid;
        gap: var(--m-space-2xl);
        align-items: center;
    }

    .hero-glow {
        position: absolute;
        inset: -6rem auto auto -4rem;
        width: 36rem;
        height: 28rem;
        max-width: 100%;
        background: radial-gradient(closest-side, color-mix(in srgb, var(--m-accent-9) 28%, transparent), transparent);
        filter: blur(20px);
        pointer-events: none;
        z-index: 0;
    }

    .hero-copy,
    .hero-demo {
        position: relative;
        z-index: 1;
    }

    .hero-copy {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-l);
    }

    .hero-title {
        margin: 0;
        font-family: var(--m-font);
        font-size: var(--m-font-size-4xl);
        font-weight: var(--m-font-weight-black);
        line-height: 1.05;
        letter-spacing: var(--m-letter-spacing-4xl);
        color: var(--m-color-text);
        text-wrap: balance;
    }

    .accent {
        background: linear-gradient(90deg, var(--m-accent-11), var(--m-accent-9) 60%, var(--m-info-10));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .install {
        max-width: 22rem;
    }

    .hero-demo {
        width: 100%;
        max-width: 26rem;
    }

    .hero-demo :global(.m-card) {
        background-color: var(--m-color-surface);
        box-shadow: 0 24px 60px -20px color-mix(in srgb, var(--m-accent-9) 45%, transparent);
    }

    .demo-caption {
        margin: var(--m-space-m) 0 0;
        text-align: center;
        font-size: var(--m-font-size-s);
        color: var(--m-color-text-weaker);
    }

    @media (min-width: 72rem) {
        .hero {
            grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
        }

        .hero-demo {
            justify-self: end;
        }
    }
    /* Sections */
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-xl);
    }

    .section-head {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
    }

    .section-head.is-row {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: var(--m-space-m);
    }

    .section-head.is-row > div {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
    }

    .inline-link {
        color: var(--m-color-text);
        text-decoration: none;
        white-space: nowrap;
    }

    .inline-link:hover {
        text-decoration: underline;
    }

    /* Features */
    .features {
        display: grid;
        gap: var(--m-space-l);
    }

    .feature {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    .feature-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        margin-block-end: var(--m-space-s);
        border-radius: var(--m-radius-sharp);
        background-color: var(--m-color-surface-raised);
        border: 1px solid var(--m-color-border);
        color: var(--m-color-text);
    }

    @media (min-width: 40rem) {
        .features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (min-width: 90rem) {
        .features {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }

    /* Steps */
    .steps {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    .step {
        position: relative;
        display: grid;
        grid-template-columns: 2.5rem minmax(0, 1fr);
        gap: var(--m-space-m);
        padding-block-end: var(--m-space-xl);
    }

    .step:last-child {
        padding-block-end: 0;
    }

    /* Connector line between step numbers */
    .step:not(:last-child)::before {
        content: "";
        position: absolute;
        top: 2.75rem;
        bottom: var(--m-space-s);
        left: calc(1.25rem - 1px);
        width: 2px;
        background-color: var(--m-color-border);
    }

    .step-number {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--m-radius-full);
        background-color: var(--m-color-surface-raised);
        border: 1px solid var(--m-color-border);
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    .step-body {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        padding-block-start: 0.4rem;
        min-width: 0;
    }

    /* Component showcase */
    .showcase-grid {
        display: grid;
        gap: var(--m-space-m);
        grid-template-columns: minmax(0, 1fr);
    }

    .showcase-card {
        display: flex;
        flex-direction: column;
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface-raised);
        color: var(--m-color-text);
        text-decoration: none;
        overflow: hidden;
    }

    .showcase-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10rem;
        padding: var(--m-space-m) var(--m-space-l);
        overflow: hidden;
        background-color: var(--m-color-surface);
        pointer-events: none;
        user-select: none;
    }

    /* The shared example sizes the banner for the unpadded components page; fill the padded preview here */
    .showcase-preview :global(.m-banner) {
        width: 100% !important;
    }

    /* Inputs default to a fixed 16rem, which overflows the narrower preview cards */
    .showcase-preview :global(.m-label-wrapper),
    .showcase-preview :global(.m-input) {
        width: 100%;
    }

    /* Tighter cells so the table fits the narrow preview; recess it so its edges show on the matching surface */
    .showcase-preview :global(.m-table-header),
    .showcase-preview :global(.m-table-cell) {
        padding-inline: var(--m-space-s);
    }

    .showcase-preview :global(.m-table-wrapper) {
        width: 100% !important;
        background-color: var(--m-color-background);
    }

    .showcase-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--m-space-m);
    }

    .arrow {
        color: var(--m-color-text-weaker);
        transition: color 0.15s ease;
    }

    .showcase-card:focus-visible {
        outline: 2px solid transparent; /* shows in forced-colors mode; the ring itself is in glow.css */
    }

    @media (pointer: fine) {
        .showcase-card:hover .arrow {
            color: var(--m-color-text);
        }
    }

    @media (min-width: 36rem) {
        .showcase-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (min-width: 72rem) {
        .showcase-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }

    /* Palette */
    .palette {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    .scale {
        display: grid;
        grid-template-columns: 5rem minmax(0, 1fr);
        align-items: center;
        gap: var(--m-space-m);
    }

    .scale-name {
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-s);
        color: var(--m-color-text-weak);
        text-transform: capitalize;
    }

    .scale-swatches {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: 4px;
    }

    .swatch {
        height: 2.25rem;
        border-radius: 6px;
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--m-gray-12) 8%, transparent);
    }

    @media (max-width: 36rem) {
        .scale {
            grid-template-columns: minmax(0, 1fr);
            gap: var(--m-space-xs);
        }

        .swatch {
            height: 1.5rem;
            border-radius: 4px;
        }
    }

    /* CTA */
    .cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-2xl) var(--m-space-l);
        border-radius: var(--m-radius);
        background:
            radial-gradient(ellipse at top, color-mix(in srgb, var(--m-accent-9) 30%, transparent), transparent 70%),
            var(--m-color-surface);
    }

    .cta :global(.m-flex) {
        margin-block-start: var(--m-space-s);
    }

    /* Footer */
    .footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--m-space-s) var(--m-space-l);
        padding-block: var(--m-space-l) var(--m-space-xl);
        border-block-start: 1px solid var(--m-color-border);
    }

    .footer-links {
        display: flex;
        gap: var(--m-space-l);
    }

    /* Quiet links so the footer doesn't compete with the CTA above it */
    .footer-links :global(.m-link) {
        color: var(--m-color-text-weaker);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .footer-links :global(.m-link:hover),
    .footer-links :global(.m-link:focus-visible) {
        color: var(--m-color-text);
    }

    /* More contrast: the same edge Moth's cards get, so these surfaces (feature tiles and the palette panel) read against the page */
    @media (prefers-contrast: more) {
        .feature,
        .palette {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
