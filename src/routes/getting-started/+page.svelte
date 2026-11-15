<script>
    import {
        Code,
        Container,
        CopyCode,
        Flex,
        Link,
        Text
    } from "$lib";
    import CodeExample from "../components/CodeExample.svelte";
    import Seo from "../Seo.svelte";
</script>

<Seo
    title="Getting started · Moth UI"
    description="Install Moth UI, import its stylesheet and start using Svelte components in three steps."
    path="/getting-started"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Getting Started</Text>
            <Text size="l" variant="weak">
                Moth UI is a modern design system for building consistent, high-quality interfaces fast. 
                It gives you reusable components, design tokens, and utilities so your UI stays cohesive 
                without slowing you down.
            </Text>
            <Text size="l" variant="weak">
                Built on Svelte — chosen for its simplicity, tiny bundles, near-zero runtime, 
                and code that feels like plain HTML/CSS/JS. Our mission: make beautiful interfaces 
                quick and enjoyable to build.
            </Text>
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Requirements</Text>
            <Text size="l" variant="weak" measure="l">
                Moth UI needs <Code>svelte</Code> 5 or later. It works in SvelteKit and in any Vite + Svelte project.
            </Text>
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Installation</Text>
            <Text size="l" variant="weak">Install with npm:</Text>
            <CopyCode code="npm install moth-ui-svelte" />
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Importing styles</Text>
            <Text size="l" variant="weak">Add this to your main Svelte file to enable Moth styling:</Text>
            <CodeExample codeOnly code={`<script>
    import "moth-ui-svelte/css/index.css";
<\/script>`} />
        </Flex>

        <Flex direction="column" gap="s">
            <Text size="2xl" weight="bold" as="h2">What the stylesheet does</Text>
            <Text size="l" variant="weak" measure="l">Importing it once sets up everything the components need, so it's worth knowing what it changes:</Text>
            <ul class="facts">
                <li>
                    <Text size="l" variant="weak" measure="l">
                        <strong>Loads the fonts from Google Fonts.</strong> Outfit and Geist Mono are imported from
                        <Code>fonts.googleapis.com</Code>. If your site has a Content Security Policy, allow
                        <Code>fonts.googleapis.com</Code> (styles) and <Code>fonts.gstatic.com</Code> (font files).
                        Offline, text falls back to the system font.
                    </Text>
                </li>
                <li>
                    <Text size="l" variant="weak" measure="l">
                        <strong>Styles the page globally.</strong> It sets the background, text color and font on
                        <Code>html</Code> and <Code>body</Code>, removes their margin and padding, styles text selection, applies
                        <Code>box-sizing: border-box</Code> to every element, and sets <Code>color-scheme: dark</Code>
                        so scrollbars and native controls match.
                    </Text>
                </li>
                <li>
                    <Text size="l" variant="weak" measure="l">
                        <strong>Is dark only.</strong> Moth is designed for dark interfaces and has no light theme.
                    </Text>
                </li>
            </ul>
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Importing components</Text>
            <Text size="l" variant="weak">Use this in any svelte file to import components:</Text>
            <CodeExample codeOnly code={`<script>
    import { Text } from "moth-ui-svelte";
<\/script>`} />
        </Flex>

        <Flex direction="column" gap="s">
            <Text size="2xl" weight="bold" as="h2">Design Tokens</Text>
            <Text size="l" variant="weak" measure="l">
                The foundation of Moth UI: reusable values for colors, spacing, typography, etc. 
                Use them via CSS variables like <Code>var(--m-color-text)</Code>. 
                See the full list in the <Link size="l" href="/tokens/">design tokens</Link> docs.
            </Text>
        </Flex>

        <Flex direction="column" gap="s">
            <Text size="2xl" weight="bold" as="h2">Components</Text>
            <Text size="l" variant="weak" measure="l">
                Ready to use components — buttons, forms, navigation and more. 
                Start with the Layout component to get your structure and spacing right from the beginning. 
                See the full collection in the <Link size="l" href="/components">components</Link> documentation.
            </Text>
        </Flex>
    </Flex>
</Container>

<style>
    .facts {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        margin: 0;
        padding-inline-start: var(--m-space-l);
        color: var(--m-color-text-weak);
    }

    .facts strong {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }
</style>
