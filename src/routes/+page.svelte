<script>
    import components from "./components/components.json";
    import CodeExample from "./components/CodeExample.svelte";
    import {
        Badge,
        Button,
        Card,
        Container,
        CopyCode,
        Divider,
        Flex,
        Input,
        Select,
        Text,
        Toggle
    } from "$lib";

    // --- Live demo state (the hero card is built entirely from Volt components) ---
    let amount = "2.5";
    let validator = "lido";
    const validators = [
        { value: "lido", label: "Lido · 3.4% APR" },
        { value: "rocket", label: "Rocket Pool · 3.1% APR" },
        { value: "coinbase", label: "Coinbase · 2.9% APR" }
    ];
    /** @type { Record<string, number> } */
    const apr = { lido: 0.034, rocket: 0.031, coinbase: 0.029 };

    $: parsed = parseFloat(amount);
    $: invalid = amount !== "" && (isNaN(parsed) || parsed <= 0);
    $: yearly = !invalid && parsed > 0 ? parsed * (apr[validator] ?? 0) : 0;

    // --- Content ---
    const featured = ["Button", "Input", "Toggle", "Badge", "Banner", "Tabs", "Table", "Layout"];
    const showcase = components.filter((c) => featured.includes(c.name));

    const scales = ["gray", "accent", "info", "success", "warning", "danger"];
    const steps = Array.from({ length: 12 }, (_, i) => i + 1);

    const features = [
        {
            title: "Token-driven",
            body: "Every color, space, radius and type size is a CSS variable. Restyle the whole system by changing a handful of tokens.",
            icon: `<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>`
        },
        {
            title: "Svelte-native",
            body: "Written for Svelte 5 from the ground up. No wrappers, no virtual DOM, just components that compile away.",
            icon: `<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>`
        },
        {
            title: "Dark by design",
            body: "Twelve-step color scales tuned for dark interfaces, so contrast and hierarchy hold up on every surface.",
            icon: `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`
        },
        {
            title: "Zero dependencies",
            body: "Svelte is the only peer dependency. Install it, import one stylesheet, and start building.",
            icon: `<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`
        }
    ];
</script>

<svelte:head>
    <title>Volt UI · A dark-first design system for Svelte</title>
</svelte:head>

<Container size="2xl" align="center">
    <div class="page">
        <!-- Hero -->
        <section class="hero">
            <div class="hero-glow" aria-hidden="true"></div>
            <div class="hero-copy">
                <h1 class="hero-title">
                    The design system that <span class="accent">ships with you.</span>
                </h1>
                <Text size="xl" variant="weak" measure="s">
                    Volt UI gives you {components.length} production-ready components and a complete token
                    system, so every screen looks consistent from day one.
                </Text>
                <Flex wrap>
                    <Button size="l" variant="primary" href="/getting-started">Get started</Button>
                    <Button size="l" variant="secondary" href="/components">Browse components</Button>
                </Flex>
                <div class="install">
                    <CopyCode code="npm install volt-ui-svelte" />
                </div>
            </div>

            <div class="hero-demo">
                <Card space="l">
                    <Flex slot="header" justify="between" align="center" style="width: 100%;">
                        <Text size="xl" weight="bold" as="h2">Stake ETH</Text>
                        <Badge variant="success">Live</Badge>
                    </Flex>
                    <Flex direction="column" gap="l">
                        <Input
                            name="demo-amount"
                            label="Amount"
                            bind:value={amount}
                            expanded
                            inputmode="decimal"
                            error={invalid ? "Enter an amount greater than 0" : ""}
                        >
                            <span slot="suffix">ETH</span>
                        </Input>
                        <Select name="demo-validator" label="Validator" options={validators} bind:value={validator} expanded />
                        <Toggle name="demo-compound" label="Auto-compound rewards" checked />
                        <Divider />
                        <Flex justify="between" align="center">
                            <Text variant="weak">Estimated yearly reward</Text>
                            <Text weight="bold" mono>{yearly.toFixed(4)} ETH</Text>
                        </Flex>
                        <Button variant="primary" size="l" expanded disabled={invalid || !amount}>Stake now</Button>
                    </Flex>
                </Card>
                <p class="demo-caption">Every element above is a Volt component. Try it.</p>
            </div>
        </section>

        <!-- Stats -->
        <section class="stats" aria-label="Volt UI at a glance">
            <div class="stat"><span class="stat-value">{components.length}</span><span class="stat-label">Components</span></div>
            <div class="stat"><span class="stat-value">{scales.length}×12</span><span class="stat-label">Color steps</span></div>
            <div class="stat"><span class="stat-value">0</span><span class="stat-label">Runtime dependencies</span></div>
            <div class="stat"><span class="stat-value">MIT</span><span class="stat-label">Licensed</span></div>
        </section>

        <!-- Features -->
        <section class="section">
            <div class="section-head">
                <Text size="3xl" weight="black" as="h2">Why Volt</Text>
                <Text size="l" variant="weak" measure="m">A small, opinionated foundation that stays out of your way.</Text>
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
                        <CodeExample codeOnly code={`npm install volt-ui-svelte`} />
                    </div>
                </li>
                <li class="step">
                    <span class="step-number">2</span>
                    <div class="step-body">
                        <Text size="l" weight="bold" as="h3">Import the styles once</Text>
                        <CodeExample codeOnly code={`<script>
    import "$volt/css/index.css";
<\/script>`} />
                    </div>
                </li>
                <li class="step">
                    <span class="step-number">3</span>
                    <div class="step-body">
                        <Text size="l" weight="bold" as="h3">Use any component</Text>
                        <CodeExample codeOnly code={`<script>
    import { Button } from "$volt";
<\/script>

<Button variant="primary">Ship it</Button>`} />
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
                <Button variant="ghost" href="/components">View all {components.length} →</Button>
            </div>
            <div class="showcase-grid">
                {#each showcase as component}
                    <a href="/components/{component.name.toLocaleLowerCase()}" class="showcase-card grayscale-wrapper">
                        <div class="showcase-preview is-grayscale" inert>
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
                <Button variant="ghost" href="/tokens#color-scales">Explore tokens →</Button>
            </div>
            <div class="palette">
                {#each scales as scale}
                    <div class="scale">
                        <span class="scale-name">{scale}</span>
                        <div class="scale-swatches">
                            {#each steps as step}
                                <span
                                    class="swatch"
                                    style="background-color: var(--v-{scale}-{step});"
                                    title="--v-{scale}-{step}"
                                ></span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Final CTA -->
        <section class="cta">
            <Text size="3xl" weight="black" as="h2" align="center">Start building with Volt</Text>
            <Text size="l" variant="weak" align="center" measure="s">
                Free, open source, and ready for your next project.
            </Text>
            <Flex justify="center" wrap>
                <Button size="l" variant="primary" href="/getting-started">Get started</Button>
                <Button size="l" variant="secondary" href="https://github.com/Joseph765/Volt-UI" target="_blank" rel="noopener noreferrer">
                    Star on GitHub
                </Button>
            </Flex>
        </section>
    </div>
</Container>

<style>
    .page {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        padding-block-end: var(--v-space-2xl);
    }

    /* Hero */
    .hero {
        position: relative;
        /* Keep the glow/content z-index layering local so it can't paint over the mobile nav */
        isolation: isolate;
        display: grid;
        gap: var(--v-space-2xl);
        align-items: center;
    }

    .hero-glow {
        position: absolute;
        inset: -6rem auto auto -4rem;
        width: 36rem;
        height: 28rem;
        max-width: 100%;
        background: radial-gradient(closest-side, color-mix(in srgb, var(--v-accent-9) 28%, transparent), transparent);
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
        gap: var(--v-space-l);
    }

    .hero-title {
        margin: 0;
        font-family: var(--v-font);
        font-size: var(--v-font-size-4xl);
        font-weight: var(--v-font-weight-black);
        line-height: 1.05;
        letter-spacing: var(--v-letter-spacing-4xl);
        color: var(--v-color-text);
        text-wrap: balance;
    }

    .accent {
        background: linear-gradient(90deg, var(--v-accent-11), var(--v-accent-9) 60%, var(--v-info-10));
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

    .hero-demo :global(.v-card) {
        background-color: var(--v-color-surface);
        box-shadow: 0 24px 60px -20px color-mix(in srgb, var(--v-accent-9) 45%, transparent);
    }

    .demo-caption {
        margin: var(--v-space-m) 0 0;
        text-align: center;
        font-size: var(--v-font-size-s);
        color: var(--v-color-text-weaker);
    }

    @media (min-width: 72rem) {
        .hero {
            grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
        }

        .hero-demo {
            justify-self: end;
        }
    }
    /* Stats */
    .stats {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        border-radius: var(--v-radius);
        background-color: var(--v-color-surface);
        overflow: hidden;
    }

    .stat {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-xs);
        padding: var(--v-space-l);
        border-inline-end: 1px solid var(--v-color-border);
        border-block-end: 1px solid var(--v-color-border);
    }

    .stat:nth-child(2n) {
        border-inline-end: none;
    }

    .stat:nth-last-child(-n + 2) {
        border-block-end: none;
    }

    .stat-value {
        font-size: var(--v-font-size-3xl);
        font-weight: var(--v-font-weight-black);
        line-height: 1;
        color: var(--v-color-text);
    }

    .stat-label {
        font-size: var(--v-font-size-m);
        color: var(--v-color-text-weak);
    }

    @media (min-width: 48rem) {
        .stats {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .stat {
            border-block-end: none;
        }

        .stat:nth-child(2n) {
            border-inline-end: 1px solid var(--v-color-border);
        }

        .stat:last-child {
            border-inline-end: none;
        }
    }

    /* Sections */
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-xl);
    }

    .section-head {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-s);
    }

    .section-head.is-row {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: var(--v-space-m);
    }

    .section-head.is-row > div {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-s);
    }

    .inline-link {
        color: var(--v-color-text-accent);
        text-decoration: none;
        white-space: nowrap;
    }

    .inline-link:hover {
        text-decoration: underline;
    }

    /* Features */
    .features {
        display: grid;
        gap: var(--v-space-l);
    }

    .feature {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-s);
        padding: var(--v-space-l);
        border-radius: var(--v-radius);
        background-color: var(--v-color-surface);
    }

    .feature-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        margin-block-end: var(--v-space-s);
        border-radius: var(--v-radius-sharp);
        background-color: var(--v-accent-3);
        border: 1px solid var(--v-accent-5);
        color: var(--v-accent-11);
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
        gap: var(--v-space-m);
        padding-block-end: var(--v-space-xl);
    }

    .step:last-child {
        padding-block-end: 0;
    }

    /* Connector line between step numbers */
    .step:not(:last-child)::before {
        content: "";
        position: absolute;
        top: 2.75rem;
        bottom: var(--v-space-s);
        left: calc(1.25rem - 1px);
        width: 2px;
        background: linear-gradient(var(--v-accent-6), var(--v-color-border));
    }

    .step-number {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--v-radius-full);
        background-color: var(--v-accent-3);
        border: 1px solid var(--v-accent-7);
        color: var(--v-accent-11);
        font-weight: var(--v-font-weight-bold);
    }

    .step-body {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-s);
        padding-block-start: 0.4rem;
        min-width: 0;
    }

    /* Component showcase */
    .showcase-grid {
        display: grid;
        gap: var(--v-space-m);
        grid-template-columns: minmax(0, 1fr);
    }

    .showcase-card {
        display: flex;
        flex-direction: column;
        border-radius: var(--v-radius);
        background-color: var(--v-color-surface-raised);
        color: var(--v-color-text);
        text-decoration: none;
        overflow: hidden;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }

    .showcase-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10rem;
        padding: var(--v-space-m) var(--v-space-l);
        overflow: hidden;
        background-color: var(--v-color-surface);
        pointer-events: none;
        user-select: none;
    }

    /* The shared example sizes the banner for the unpadded components page; fill the padded preview here */
    .showcase-preview :global(.v-banner) {
        width: 100% !important;
    }

    /* Inputs default to a fixed 16rem, which overflows the narrower preview cards */
    .showcase-preview :global(.v-label-wrapper),
    .showcase-preview :global(.v-input) {
        width: 100%;
    }

    .showcase-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--v-space-m);
    }

    .arrow {
        color: var(--v-color-text-weaker);
        transition: transform 0.15s ease, color 0.15s ease;
    }

    .showcase-card:focus-visible {
        outline: 2px solid var(--v-color-accent);
        outline-offset: 2px;
    }

    @media (pointer: fine) {
        .showcase-card:hover {
            border-color: var(--v-color-accent);
            box-shadow: 0 0 12px 2px color-mix(in srgb, var(--v-color-highlight) 60%, transparent);
        }

        .showcase-card:hover .arrow {
            color: var(--v-color-text-accent);
            transform: translateX(4px);
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
        gap: var(--v-space-s);
        padding: var(--v-space-l);
        border-radius: var(--v-radius);
        background-color: var(--v-color-surface);
    }

    .scale {
        display: grid;
        grid-template-columns: 5rem minmax(0, 1fr);
        align-items: center;
        gap: var(--v-space-m);
    }

    .scale-name {
        font-family: var(--v-font-mono);
        font-size: var(--v-font-size-s);
        color: var(--v-color-text-weak);
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
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.04);
    }

    @media (max-width: 36rem) {
        .scale {
            grid-template-columns: minmax(0, 1fr);
            gap: var(--v-space-xs);
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
        gap: var(--v-space-m);
        padding: var(--v-space-2xl) var(--v-space-l);
        border-radius: var(--v-radius);
        background:
            radial-gradient(ellipse at top, color-mix(in srgb, var(--v-accent-9) 30%, transparent), transparent 70%),
            var(--v-color-surface);
    }

    .cta :global(.v-flex) {
        margin-block-start: var(--v-space-s);
    }
</style>
