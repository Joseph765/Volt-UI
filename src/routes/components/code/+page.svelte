<script>
    import {
        Code,
        Flex,
        Select,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Code } from "$volt";
<\/script>

<Code>Hello World</Code>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Code</Text>
        <Text size="xl" variant="weak">An inline text component that styles short code snippets with a monospaced font for clear readability.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "basic"}
            <CodeExample code={example1}>
                <Code>Hello World</Code>
            </CodeExample>
        {/if}
    </Flex>
</Flex>