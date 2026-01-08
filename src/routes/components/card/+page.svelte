<script>
    import { 
        Button,
        Card,
        CodeExample,
        Flex,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'space', label: 'Example: Space' },
        { value: 'header', label: 'Example: Header' },
        { value: 'headerWithAction', label: 'Example: Header With Action' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Card>Basic</Card>`;
    let example2 = `<Flex direction="column">
    <Card space="none">No space</Card>
    <Card space="m">Medium space</Card>
    <Card space="l">Large space</Card>
</Flex>`;
    let example3 = `<Flex direction="column">
    <Card>
        <Text as="h2" weight="bold" slot="header">Header content</Text>
        <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
    </Card>
</Flex>`;
    let example4 = `<Flex direction="column">
    <Card>
        <Text as="h2" weight="bold" slot="header">Header content</Text>
        <Button slot="header-end">Action</Button>
        <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
    </Card>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Card</Text>
        <Text size="xl" variant="weak">A contained surface that groups related content and actions in a visually distinct block.</Text>
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
                <Card>Basic</Card>
            </CodeExample>
        {:else if selectedExample === "space"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Card space="none">No space</Card>
                    <Card space="m">Medium space</Card>
                    <Card space="l">Large space</Card>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "header"}
            <CodeExample code={example3}>
                <Flex direction="column">
                    <Card>
                        <Text as="h2" weight="bold" slot="header">Header content</Text>
                        <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
                    </Card>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "headerWithAction"}
            <CodeExample code={example4}>
                <Flex direction="column">
                    <Card>
                        <Text as="h2" weight="bold" slot="header">Header content</Text>
                        <Button slot="header-end">Action</Button>
                        <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
                    </Card>
                </Flex>
            </CodeExample>
        {/if}
    </Flex>
</Flex>