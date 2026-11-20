<script>
    import {
        Code,
        Flex,
        Link,
        Text
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";

    const example1 = {
        svelte: `<script>
    import { Code } from "moth-ui-svelte";
<\/script>

<Code>Hello World</Code>`,
        react: `import { Code } from "moth-ui-react";

export default function Example() {
    return <Code>Hello World</Code>;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Code</Text>
        <Text size="xl" variant="weak">An inline text component that styles short code snippets with a monospaced font for clear readability.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For code inside a sentence, like a prop name or a file path. For a command people should copy, use <Link
            size="l" href="/components/copycode">CopyCode</Link>.
        </Text>
        <CodeExample code={example1}>
            <Code>Hello World</Code>
        </CodeExample>
    </section>
</Flex>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        scroll-margin-block-start: var(--m-space-l);
    }
</style>
