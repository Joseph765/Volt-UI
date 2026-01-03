<script>
    import { 
        Button, 
        CodeExample,
        Flex, 
        Heading,
        Icon,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'sizes', label: 'Example: Sizes' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Text>This is sample text</Text>`;
    let example2 = `<Flex direction="column">
    <Text size="xs">This is sample text</Text>
    <Text size="m">This is sample text</Text>
    <Text size="l">This is sample text</Text>
    <Text size="xl">This is sample text</Text>
    <Text size="2xl">This is sample text</Text>
    <Text size="3xl">This is sample text</Text>
</Flex>`;
</script>

<Flex direction="column">
    <Heading>Text</Heading>
    <Text>Buttons are used for interface actions. Primary style should be used only once per section for main call-to-action, while other styles can appear more frequently.</Text>
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
                <Text size="xs">This is sample text</Text>
                <Text size="m">This is sample text</Text>
                <Text size="l">This is sample text</Text>
                <Text size="xl">This is sample text</Text>
                <Text size="2xl">This is sample text</Text>
                <Text size="3xl">This is sample text</Text>
            </Flex>
        </CodeExample>
    {/if}
</Flex>