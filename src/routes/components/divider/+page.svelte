<script>
    import {
        Code,
        Divider,
        Flex,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    const example1 = {
        svelte: `<script>
    import { Divider } from "moth-ui-svelte";
<\/script>

<Divider />`,
        react: `import { Divider } from "moth-ui-react";

export default function Example() {
    return <Divider />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Divider</Text>
        <Text size="xl" variant="weak">A lightweight horizontal line that visually separates content.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            A line between parts of the same surface, like groups of settings on a card. Don't use it between cards;
            space already separates them.
        </Text>
        <CodeExample code={example1}>
            <Divider />
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
