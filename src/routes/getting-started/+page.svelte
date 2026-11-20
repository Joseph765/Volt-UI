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
    description="Install Moth UI, import its stylesheet and start using its components in three steps."
    path="/getting-started"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Getting Started</Text>
            <Text size="l" variant="weak">
                Moth UI is a design system with a look all its own: soft ambient light, polished components, and a
                fast path from empty project to finished UI.
            </Text>
            <Text size="l" variant="weak">
                It comes for Svelte and React: the same components and the same look, in whichever framework you
                build with.
            </Text>
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Requirements</Text>
            <Text size="l" variant="weak" measure="l">
                The Svelte version needs <Code>svelte</Code> 5 or later. It works in SvelteKit and in any Vite + Svelte
                project.
            </Text>
            <Text size="l" variant="weak" measure="l">
                It targets modern browsers: Chrome and Edge 111+, Safari 16.2+ and Firefox 121+. Its styles use
                <Code>:has()</Code>, <Code>color-mix()</Code> and dynamic viewport units, which older browsers don't support.
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
                        <Code>box-sizing: border-box</Code> to every element, and sets <Code>color-scheme</Code>
                        so scrollbars and native controls match the theme.
                    </Text>
                </li>
                <li>
                    <Text size="l" variant="weak" measure="l">
                        <strong>Is dark by default.</strong> The light theme is one attribute away (see Themes
                        below); both are designed token by token.
                    </Text>
                </li>
            </ul>
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2" id="themes">Themes</Text>
            <Text size="l" variant="weak" measure="l">
                Moth is dark unless you say otherwise. For the light theme, set <Code>data-theme="light"</Code> on
                <Code>html</Code>. It also works on any element, to show just that part of the page in the other theme.
                Every token switches with it, so your own styles follow as long as they use Moth's tokens. To let people
                choose, and to follow their system setting, add a
                <Link size="l" href="/components/themeswitcher">ThemeSwitcher</Link>.
            </Text>
            <CodeExample codeOnly code={`<html lang="en" data-theme="light">`} />
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Importing components</Text>
            <Text size="l" variant="weak">Use this in any svelte file to import components:</Text>
            <CodeExample codeOnly code={`<script>
    import { Text } from "moth-ui-svelte";
<\/script>`} />
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold" as="h2">Icons</Text>
            <Text size="l" variant="weak" measure="l">
                Moth doesn't include an icon set. Use Lucide, the family Moth's own components are drawn from.
                See the <Link size="l" href="/guidelines#icons">icon guidelines</Link> for sizes and colors.
            </Text>
            <CopyCode code="npm install @lucide/svelte" />
            <CodeExample codeOnly code={`<script>
    import { Button } from "moth-ui-svelte";
    import { Plus } from "@lucide/svelte";
<\/script>

<Button>
    {#snippet start()}<Plus size={16} />{/snippet}
    New project
</Button>`} />
        </Flex>

        <Flex direction="column" gap="s">
            <Text size="2xl" weight="bold" as="h2">Design Tokens</Text>
            <Text size="l" variant="weak" measure="l">
                The foundation of Moth UI: reusable values for colors, spacing, typography, etc. 
                Use them via CSS variables like <Code>var(--m-color-text)</Code>. 
                They're documented in Foundations: <Link size="l" href="/foundations/colors">Colors</Link>,
                <Link size="l" href="/foundations/typography">Typography</Link>,
                <Link size="l" href="/foundations/spacing-and-layout">Spacing &amp; Layout</Link> and
                <Link size="l" href="/foundations/surfaces">Surfaces</Link>.
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
