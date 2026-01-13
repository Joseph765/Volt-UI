<script>
    import { 
        Button, 
        Code,
        CodeExample,
        Flex, 
        Icon,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";

    let options = [
        { value: 'variants', label: 'Example: Variants' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'size', label: 'Example: Size' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'icons', label: 'Example: With Icon' },
        { value: 'link', label: 'Example: Link' }
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
    let example4 = `<Flex>
    <Button size="m">Medium</Button>
    <Button size="l">Large</Button>
</Flex>`;
    let example5 = `<Button expanded>Expanded</Button>`;
    let example6 = `<Button href="/component">View components</Button>`;
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
        {:else if selectedExample === "size"}
            <CodeExample code={example4}>
                <Flex>
                    <Button size="m">Medium</Button>
                    <Button size="l">Large</Button>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "expanded"}
            <CodeExample code={example5}>
                <Button expanded>Expanded</Button>
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
        {:else if selectedExample === "link"}
            <CodeExample code={example6}>
                <Button href="/components">View components</Button>
            </CodeExample>
        {/if}
    </Flex>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell><Code>variant</Code></TableCell>
                <TableCell>The style of the button based on level of importance. Danger is for desctructive actions.</TableCell>
                <TableCell><Code>primary</Code> | <Code>secondary</Code> | <Code>ghost</Code> | <Code>danger</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>disabled</Code></TableCell>
                <TableCell>Makes the button inaccessible.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>size</Code></TableCell>
                <TableCell>Allows for a larger button style.</TableCell>
                <TableCell><Code>m</Code> | <Code>l</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>expanded</Code></TableCell>
                <TableCell>Allows the button to strech to full width.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>href</Code></TableCell>
                <TableCell>Allows the button to behave like a link.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>