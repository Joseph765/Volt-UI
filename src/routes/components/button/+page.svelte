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
        { value: 'variants', label: 'Example: Variants' },
        { value: 'icons', label: 'Example: Icons' }
    ];

    let selectedExample = 'variants';

    let example1 = `<Flex>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
    <Button disabled>Disabled</Button>
</Flex>`;

    let example2 = `<Flex>
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

<Flex direction="column">
    <Heading>Button</Heading>
    <Text>Buttons are used for interface actions. Primary style should be used only once per section for main call-to-action, while other styles can appear more frequently.</Text>
    <Select
        name="Country"
        bind:options={options}
        bind:value={selectedExample}
        placeholder="Select an example..."
    />
    {#if selectedExample === "variants"}
        <CodeExample code={example1.trim()}>
            <Flex>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button disabled>Disabled</Button>
            </Flex>
        </CodeExample>
    {:else if selectedExample === "icons"}
        <CodeExample code={example2.trim()}>
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
    <!-- <Flex>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
    </Flex>
    <Flex>
        <Button disabled>Disabled Primary</Button>
        <Button disabled variant="secondary">Disabled Secondary</Button>
        <Button disabled variant="ghost">Disabled Ghost</Button>
        <Button disabled variant="danger">Disabled Danger</Button>
    </Flex>
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
    </Flex> -->
</Flex>