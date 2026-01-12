<script>
    import {
        Code,
        CodeExample,
        Container,
        CopyCode,
        Flex,
        Link,
        Text
    } from "$lib";
</script>

<Container size="l">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h2">Getting Started</Text>
            <Text size="xl" variant="weak">
                Volt UI is a modern design system for building consistent, high-quality interfaces fast. 
                It gives you reusable components, design tokens, and utilities so your UI stays cohesive 
                without slowing you down.
            </Text>
            <Text size="xl" variant="weak">
                Built on Svelte — chosen for its simplicity, tiny bundles, near-zero runtime, 
                and code that feels like plain HTML/CSS/JS. Our mission: make beautiful interfaces 
                quick and enjoyable to build.
            </Text>
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold">Installation</Text>
            <CopyCode code="npm install volt-ui" style="background-color: var(--v-color-surface);" />
        </Flex>

        <Flex direction="column">
            <Text size="2xl" weight="bold">Importing styles</Text>
            <CodeExample codeOnly code={`<script>
  import "volt-ui/dist/volt-ui.css";
<\/script>`} />
        </Flex>

        <Flex direction="column" gap="s">
            <Text size="2xl" weight="bold">Design Tokens</Text>
            <Text size="l" variant="weak" measure="l">
                The foundation of Volt UI: reusable values for colors, spacing, typography, etc. 
                Use them via CSS variables like <Code>var(--v-color-primary)</Code>. 
                See the full list in the <Link size="l" href="/tokens/">design tokens</Link> docs.
            </Text>
        </Flex>

        <Flex direction="column" gap="s">
            <Text size="2xl" weight="bold">Components</Text>
            <Text size="l" variant="weak" measure="l">
                Ready to use components — buttons, forms, navigation and more. 
                Start with the Layout component to get your structure and spacing right from the beginning. 
                See the full collection in the <Link size="l" href="/components/button">components</Link> documentation.
            </Text>
        </Flex>
    </Flex>
</Container>