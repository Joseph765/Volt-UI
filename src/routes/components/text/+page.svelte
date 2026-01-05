<script>
    import {
        CodeExample,
        Flex,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'sizes', label: 'Example: Sizes' },
        { value: 'weight', label: 'Example: Weight' },
        { value: 'variants', label: 'Example: Variants' },
    ];

    let selectedExample = 'basic';

    let example1 = `<Text>This is sample text</Text>`;
    let example2 = `<Flex direction="column">
    <Text size="xs">This is xs sample text</Text>
    <Text size="s">This is s sample text</Text>
    <Text size="m">This is m sample text</Text>
    <Text size="l">This is l sample text</Text>
    <Text size="xl">This is xl sample text</Text>
    <Text size="2xl">This is 2xl sample text</Text>
    <Text size="3xl">This is 3xl sample text</Text>
</Flex>`;
    let example3 = `<Flex direction="column">
    <Text size="l" weight="regular">This is regular weight</Text>
    <Text size="l" weight="bold">This is bold weight</Text>
</Flex>`;
    let example4 = `<Flex direction="column">
    <Text size="l" variant="default">This is the default variant</Text>
    <Text size="l" variant="weak">This is the weak variant</Text>
    <Text size="l" variant="weaker">This is the weaker variant</Text>
    <Text size="l" variant="weakest">This is the weakest variant</Text>
</Flex>`;
</script>

<Flex direction="column">
    <Text size="3xl" weight="bold" as="h2">Text</Text>
    <Text size="xl" variant="weak">Text description</Text>
    <Select
        name="Country"
        bind:options={options}
        bind:value={selectedExample}
        placeholder="Select an example..."
    />
    {#if selectedExample === "basic"}
        <CodeExample code={example1}>
            <Text>This is sample text</Text>
        </CodeExample>
    {:else if selectedExample === "sizes"}
        <CodeExample code={example2}>
            <Flex direction="column">
                <Text size="xs">This is xs sample text</Text>
                <Text size="s">This is s sample text</Text>
                <Text size="m">This is m sample text</Text>
                <Text size="l">This is l sample text</Text>
                <Text size="xl">This is xl sample text</Text>
                <Text size="2xl">This is 2xl sample text</Text>
                <Text size="3xl">This is 3xl sample text</Text>
            </Flex>
        </CodeExample>
    {:else if selectedExample === "weight"}
        <CodeExample code={example3}>
            <Flex direction="column">
                <Text size="l" weight="regular">This is regular weight</Text>
                <Text size="l" weight="bold">This is bold weight</Text>
            </Flex>
        </CodeExample>
    {:else if selectedExample === "variants"}
        <CodeExample code={example4}>
            <Flex direction="column">
                <Text size="l" variant="default">This is the default variant</Text>
                <Text size="l" variant="weak">This is the weak variant</Text>
                <Text size="l" variant="weaker">This is the weaker variant</Text>
                <Text size="l" variant="weakest">This is the weakest variant</Text>
            </Flex>
        </CodeExample>
    {/if}
</Flex>