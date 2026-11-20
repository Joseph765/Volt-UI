<script>
    import { onMount } from "svelte";
    import { Code, Container, Flex, Text } from "moth-ui-svelte";
    import CodeExample from "../../components/CodeExample.svelte";
    import TokenCopy from "../TokenCopy.svelte";
    import Seo from "../../Seo.svelte";

    const sizes = [
        { key: "4xl", use: "Display headings on landing pages. Scales with the viewport." },
        { key: "3xl", use: "Page titles. Once per page." },
        { key: "2xl", use: "Section headings." },
        { key: "xl", use: "Card titles and small headings." },
        { key: "l", use: "Intro text and large body text." },
        { key: "m", use: "Default body text and most components." },
        { key: "s", use: "Small components, table cells and metadata." },
        { key: "xs", use: "Hints and the smallest labels." }
    ];

    const weights = [
        { key: "regular", name: "Regular", use: "Body text, labels and most of the interface." },
        { key: "bold", name: "Bold", use: "Headings, buttons and short emphasis inside text." },
        { key: "black", name: "Black", use: "Page titles and display headings only." }
    ];

    const pairCode = `.card-title {
    font-size: var(--m-font-size-xl);
    line-height: var(--m-line-height-xl);
    letter-spacing: var(--m-letter-spacing-xl);
}`;

    /** Token values read from the live stylesheet, so the page can't drift from tokens.css */
    /** @type { Record<string, string> } */
    let values = $state({});

    onMount(() => {
        const styles = getComputedStyle(document.documentElement);
        const tokens = [
            ...sizes.flatMap((s) => [`--m-font-size-${s.key}`, `--m-line-height-${s.key}`, `--m-letter-spacing-${s.key}`]),
            ...weights.map((w) => `--m-font-weight-${w.key}`)
        ];
        values = Object.fromEntries(tokens.map((t) => [t, styles.getPropertyValue(t).trim()]));
    });

    /**
     * Human-readable size: "1rem" → "16px", clamp(min, …, max) → "40–60px".
     * @param { string | undefined } raw
     */
    function px(raw) {
        if (!raw) return "";
        const rem = (/** @type { string } */ v) => Math.round(parseFloat(v) * 16);
        const clamp = raw.match(/^clamp\(\s*([\d.]+)rem.*,\s*([\d.]+)rem\s*\)$/);
        if (clamp) return `${rem(clamp[1])}–${rem(clamp[2])}px`;
        if (raw.endsWith("rem")) return `${rem(raw)}px`;
        return raw;
    }
</script>

<Seo
    title="Typography · Moth UI"
    description="Moth UI's typography: the Outfit and Geist Mono fonts, the type scale with its paired line heights and letter spacing, and font weights."
    path="/foundations/typography"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Typography</Text>
            <Text size="l" variant="weak" measure="l">
                Moth sets everything in one typeface, with a small scale of sizes and three weights. Click any token
                to copy it.
            </Text>
        </Flex>

        <!-- Fonts -->
        <section class="section" id="fonts">
            <Text size="2xl" weight="bold" as="h2">Fonts</Text>
            <div class="fonts">
                <article class="panel font-card">
                    <span class="font-glyph" aria-hidden="true">Aa</span>
                    <Text size="xl" weight="bold" as="h3">Outfit</Text>
                    <p class="font-sample" aria-hidden="true">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 !?&amp;@#
                    </p>
                    <Text variant="weak">The font for everything: headings, body text, labels, buttons and fields.</Text>
                    <TokenCopy token="--m-font" />
                </article>
                <article class="panel font-card is-mono">
                    <span class="font-glyph" aria-hidden="true">Aa</span>
                    <Text size="xl" weight="bold" as="h3" mono>Geist Mono</Text>
                    <p class="font-sample" aria-hidden="true">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 !?&amp;@#
                    </p>
                    <Text variant="weak">
                        <strong class="mono-rule">Only for code.</strong> Use it for code snippets and code examples
                        (the <Code>Code</Code> and <Code>CopyCode</Code> components). Don't use it for labels,
                        numbers, headings or any other interface text.
                    </Text>
                    <TokenCopy token="--m-font-mono" />
                </article>
            </div>
        </section>

        <!-- Type scale -->
        <section class="section" id="type-scale">
            <Text size="2xl" weight="bold" as="h2">Type scale</Text>
            <Text size="l" variant="weak" measure="l">
                Each size comes as a set of three tokens with the same name: a font size, its line height and its
                letter spacing. Always use them together, so <Code>--m-font-size-m</Code> goes with
                <Code>--m-line-height-m</Code> and <Code>--m-letter-spacing-m</Code>. The <Code>Text</Code>
                component applies all three for you with its <Code>size</Code> prop.
            </Text>
            <ol class="panel scale">
                {#each sizes as size (size.key)}
                    {@const fontSize = `--m-font-size-${size.key}`}
                    {@const lineHeight = `--m-line-height-${size.key}`}
                    {@const letterSpacing = `--m-letter-spacing-${size.key}`}
                    <li class="step">
                        <div class="step-head">
                            <span class="step-key">{size.key}</span>
                            <Text variant="weak" size="s" measure="none">{size.use}</Text>
                        </div>
                        <p
                            class="step-sample"
                            style="font-size: var({fontSize}); line-height: var({lineHeight}); letter-spacing: var({letterSpacing});"
                        >
                            Ship with confidence
                        </p>
                        <div class="step-tokens">
                            <div class="step-token">
                                <span class="step-label">Size <span class="step-value">{px(values[fontSize])}</span></span>
                                <TokenCopy token={fontSize} />
                            </div>
                            <div class="step-token">
                                <span class="step-label">Line height <span class="step-value">{values[lineHeight]}</span></span>
                                <TokenCopy token={lineHeight} />
                            </div>
                            <div class="step-token">
                                <span class="step-label">Letter spacing <span class="step-value">{values[letterSpacing]}</span></span>
                                <TokenCopy token={letterSpacing} />
                            </div>
                        </div>
                    </li>
                {/each}
            </ol>
            <CodeExample codeOnly language="css" code={pairCode} />
        </section>

        <!-- Font weight -->
        <section class="section" id="font-weight">
            <Text size="2xl" weight="bold" as="h2">Font weight</Text>
            <Text size="l" variant="weak" measure="l">
                Three weights are enough for a clear hierarchy. Most text is regular; reach for bold to make
                something stand out, and keep black for the biggest headings.
            </Text>
            <ul class="panel weights">
                {#each weights as weight (weight.key)}
                    {@const token = `--m-font-weight-${weight.key}`}
                    <li class="weight">
                        <span class="weight-sample" style="font-weight: var({token});">{weight.name}</span>
                        <Text variant="weak" measure="none">{weight.use}</Text>
                        <TokenCopy {token} />
                    </li>
                {/each}
            </ul>
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

    /* Fonts */
    .fonts {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        gap: var(--m-space-m);
    }

    .font-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--m-space-m);
        padding: var(--m-space-l);
    }

    .font-glyph {
        color: var(--m-color-text);
        font-size: 4rem;
        font-weight: var(--m-font-weight-bold);
        line-height: 1;
    }

    .font-sample {
        margin: 0;
        color: var(--m-color-text-weak);
        font-size: var(--m-font-size-m);
        line-height: var(--m-line-height-m);
        letter-spacing: var(--m-letter-spacing-m);
        overflow-wrap: anywhere;
    }

    .font-card.is-mono .font-glyph,
    .font-card.is-mono .font-sample {
        font-family: var(--m-font-mono);
    }

    .mono-rule {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    /* Type scale: one row per size, its three tokens grouped underneath the sample */
    .step {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        padding: var(--m-space-l);
    }

    .step + .step {
        border-block-start: 1px solid var(--m-color-border);
    }

    .step-head {
        display: flex;
        align-items: baseline;
        gap: var(--m-space-m);
    }

    .step-key {
        min-width: 2.5rem;
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }

    .step-sample {
        margin: 0;
        color: var(--m-color-text);
        overflow-wrap: anywhere;
    }

    .step-tokens {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--m-space-m);
    }

    .step-token {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--m-space-xs);
        min-width: 0;
    }

    .step-label {
        color: var(--m-color-text-weaker);
        font-size: var(--m-font-size-s);
        line-height: var(--m-line-height-s);
        letter-spacing: var(--m-letter-spacing-s);
    }

    .step-value {
        margin-inline-start: var(--m-space-xs);
        color: var(--m-color-text-weak);
    }

    /* Font weight */
    .weight {
        display: grid;
        grid-template-columns: 7rem 1fr auto;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-m) var(--m-space-l);
    }

    .weight + .weight {
        border-block-start: 1px solid var(--m-color-border);
    }

    .weight-sample {
        color: var(--m-color-text);
        font-size: var(--m-font-size-xl);
        line-height: var(--m-line-height-xl);
        letter-spacing: var(--m-letter-spacing-xl);
    }

    /* Narrow screens: the three tokens stack, and the copy button drops under the description */
    @media (max-width: 36rem) {
        .step {
            padding: var(--m-space-m);
        }

        .step-tokens {
            grid-template-columns: minmax(0, 1fr);
        }

        .weight {
            grid-template-columns: 1fr;
            gap: var(--m-space-s);
            padding-inline: var(--m-space-m);
        }
    }

    /* More contrast: the same edge Moth's cards get, so these surfaces read against the page */
    @media (prefers-contrast: more) {
        .panel {
            border: 1px solid var(--m-color-border);
        }
    }
</style>
