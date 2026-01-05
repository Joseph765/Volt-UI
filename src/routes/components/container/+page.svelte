<script>
    import { 
        CodeExample,
        Container,
        Flex, 
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    /** @type { string } */
    let selectedExample = 'basic';

    /** @type { string } */
    let example1 = `<Container>
    <Text>Content</Text>
</Container>`;
</script>

<Flex direction="column">
    <Text size="3xl" weight="bold" as="h2">Container</Text>
    <Text size="xl" variant="weak">Contains content and adds padding</Text>
    <Select
        name="Country"
        bind:options={options}
        bind:value={selectedExample}
        placeholder="Select an example..."
    />
    {#if selectedExample === "basic"}
        <CodeExample code={example1}>
            <Container>
                <Text>Content</Text>
            </Container>
        </CodeExample>
    {/if}
</Flex>