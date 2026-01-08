<script>
    import { 
        Button, 
        CodeExample,
        Flex, 
        Icon,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'variants', label: 'Example: Variants' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'icons', label: 'Example: Icons' }
    ];

    let selectedExample = 'variants';

    let example1 = `<Flex>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
</Flex>`;
    let example2 = `<Button disabled>Disabled</Button>`;
    let example3 = `<Flex>
    <Button>
        <Icon name="plus" slot="start" />
        Add
    </Button>
    <Button>
        <Icon name="plus" slot="end" />
        Add
    </Button>
    <Button variant="secondary">
        <Icon name="minus" slot="start" />
        Remove
    </Button>
    <Button variant="ghost">
        <Icon name="chevron-down" size="l" />
    </Button>
    <Button variant="danger">
        <Icon name="x" slot="start" />
        Delete
    </Button>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Button</Text>
        <Text size="xl" variant="weak">An interactive element that triggers actions or submits forms when clicked.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "variants"}
            <CodeExample code={example1}>
                <Flex>
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "disabled"}
            <CodeExample code={example2}>
                <Button disabled>Disabled</Button>
            </CodeExample>
        {:else if selectedExample === "icons"}
            <CodeExample code={example3}>
                <Flex>
                    <Button>
                        <Icon name="plus" slot="start" />
                        Add
                    </Button>
                    <Button>
                        <Icon name="plus" slot="end" />
                        Add
                    </Button>
                    <Button variant="secondary">
                        <Icon name="minus" slot="start" />
                        Remove
                    </Button>
                    <Button variant="ghost">
                        <Icon name="chevron-down" size="l" />
                    </Button>
                    <Button variant="danger">
                        <Icon name="x" slot="start" />
                        Delete
                    </Button>
                </Flex>
            </CodeExample>
        {/if}
    </Flex>
</Flex>