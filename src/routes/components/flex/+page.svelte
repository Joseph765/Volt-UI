<script>
    import { 
        Card,
        Code,
        Flex,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'gap', label: 'Example: Gap' },
        { value: 'direction', label: 'Example: Direction' },
        { value: 'wrap', label: 'Example: Wrap' },
        { value: 'justify', label: 'Example: Justify' },
        { value: 'align', label: 'Example: Align' },
    ];

    let selectedExample = 'basic';

    let example1 = `<Flex>
    <Card>Item 1</Card>
    <Card>Item 2</Card>
    <Card>Item 3</Card>
</Flex>`;
    let example2 = `<Flex direction="column">
    <Flex gap="xs">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="s">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="m">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="l">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="xl">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="2xl">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
</Flex>`;
    let example3 = `<Flex gap="l">
    <Flex direction="row">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`;
    let example4 = `<Flex direction="column">
    <Flex wrap>
        <Card style="width: 500px;">1</Card>
        <Card style="width: 500px;">2</Card>
        <Card style="width: 500px;">3</Card>
    </Flex>
    <Flex>
        <Card style="width: 500px;">1</Card>
        <Card style="width: 500px;">2</Card>
        <Card style="width: 500px;">3</Card>
    </Flex>
</Flex>`;
    let example5 = `<Flex direction="column">
    <Flex justify="center">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex justify="space-between">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex justify="space-around">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`;
    let example6 = `<Flex direction="column">
    <Flex direction="column" align="start">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column" align="center">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column" align="end">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Flex</Text>
        <Text size="xl" variant="weak">A utility component that provides flexible layout control using CSS Flexbox properties.</Text>
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
                <Flex>
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                    <Card>Item 3</Card>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "gap"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Flex gap="xs">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="s">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="m">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="l">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="xl">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="2xl">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "direction"}
            <CodeExample code={example3}>
                <Flex gap="l">
                    <Flex direction="row">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex direction="column">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "wrap"}
            <CodeExample code={example4}>
                <Flex direction="column">
                    <Flex wrap>
                        <Card style="width: 500px;">1</Card>
                        <Card style="width: 500px;">2</Card>
                        <Card style="width: 500px;">3</Card>
                    </Flex>
                    <Flex>
                        <Card style="width: 500px;">1</Card>
                        <Card style="width: 500px;">2</Card>
                        <Card style="width: 500px;">3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "justify"}
            <CodeExample code={example5}>
                <Flex direction="column">
                    <Flex justify="center">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex justify="between">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex justify="around">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "align"}
            <CodeExample code={example6}>
                <Flex direction="column">
                    <Flex direction="column" align="start">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex direction="column" align="center">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex direction="column" align="end">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {/if}
    </Flex>

    <div class="v-table-wrapper">
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
                    <TableCell><Code>direction</Code></TableCell>
                    <TableCell>Defines the direction flex items are placed in the flex container.</TableCell>
                    <TableCell><Code>row</Code> | <Code>column</Code> | <Code>row-reverse</Code> | <Code>column-reverse</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>gap</Code></TableCell>
                    <TableCell>Defined the space between flex items.</TableCell>
                    <TableCell><Code>none</Code> | <Code>xs</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>wrap</Code></TableCell>
                    <TableCell>Allows the items to wrap as needed.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>justify</Code></TableCell>
                    <TableCell>Defines the alignment along the main axis.</TableCell>
                    <TableCell><Code>start</Code> | <Code>end</Code> | <Code>flex-start</Code> | <Code>flex-end</Code> | <Code>center</Code> | <Code>between</Code> | <Code>around</Code> |  <Code>evenly</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>align</Code></TableCell>
                    <TableCell>This defines the default behavior for how flex items are laid out along the cross axis on the current line.</TableCell>
                    <TableCell>
                        <Flex wrap gap="xs">
                            <Code>initial</Code> | <Code>strech</Code> | <Code>flex-start</Code> | <Code>flex-end</Code> | <Code>center</Code> | <Code>baseline</Code> | <Code>start</Code> |  <Code>end</Code> | <Code>self-start</Code> | <Code>self-end</Code>
                        </Flex>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</Flex>