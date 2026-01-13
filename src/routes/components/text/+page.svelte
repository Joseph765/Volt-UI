<script>
    import {
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
        { value: 'sizes', label: 'Example: Size' },
        { value: 'weight', label: 'Example: Weight' },
        { value: 'variants', label: 'Example: Variants' },
        { value: 'as', label: 'Example: As' },
        { value: 'measure', label: 'Example: Measure' },
        { value: 'mono', label: 'Example: Mono' },
        { value: 'align', label: 'Example: Align' },
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
    <Text size="l" weight="black">This is black weight</Text>
</Flex>`;
    let example4 = `<Flex direction="column">
    <Text size="l" variant="default">This is the default variant</Text>
    <Text size="l" variant="weak">This is the weak variant</Text>
    <Text size="l" variant="weaker">This is the weaker variant</Text>
    <Text size="l" variant="weakest">This is the weakest variant</Text>
</Flex>`;
    let example5 = `<Flex direction="column">
    <Text as="span" size="l" variant="default">This is a span tag</Text>
    <Text as="h2" size="l">This is an h2 tag</Text>
</Flex>`;
    let example6 = `<Flex direction="column">
    <Text measure="l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text measure="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text measure="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text measure="none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
</Flex>`;
    let example7 = `<Flex direction="column">
    <Text size="l" align="start">Start</Text>
    <Text size="l" align="center">Center</Text>
    <Text size="l" align="end">End</Text>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Text</Text>
        <Text size="xl" variant="weak">A typographic component for styling and displaying text with consistent typography scales.</Text>
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
                    <Text size="l" weight="black">This is black weight</Text>
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
        {:else if selectedExample === "as"}
            <CodeExample code={example5}>
                <Flex direction="column">
                    <Text as="span" size="l" variant="default">This is a span tag</Text>
                    <Text as="h2" size="l">This is an h2 tag</Text>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "measure"}
            <CodeExample code={example6}>
                <Flex direction="column">
                    <Text measure="l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Text measure="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Text measure="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Text measure="none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "mono"}
            <CodeExample code={example7}>
                <Text mono>Mono Text</Text>
            </CodeExample>
        {:else if selectedExample === "align"}
            <CodeExample code={example7}>
                <Flex direction="column">
                    <Text size="l" align="start">Start</Text>
                    <Text size="l" align="center">Center</Text>
                    <Text size="l" align="end">End</Text>
                </Flex>
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
                <TableCell><Code>size</Code></TableCell>
                <TableCell>Determines the size of the text.</TableCell>
                <TableCell><Code>xs</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code> | <Code>3xl</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>weight</Code></TableCell>
                <TableCell>Determines the boldness of the text.</TableCell>
                <TableCell><Code>regular</Code> | <Code>Bold</Code> | <Code>black</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>variant</Code></TableCell>
                <TableCell>Changes the color of the text to be more or less prominate.</TableCell>
                <TableCell><Code>default</Code> | <Code>weak</Code> | <Code>weaker</Code> | <Code>weakest</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>as</Code></TableCell>
                <TableCell>Changes the html element rendered.</TableCell>
                <TableCell><Code>p</Code> | <Code>span</Code> | <Code>h1</Code> | <Code>h2</Code> | <Code>h3</Code> | <Code>h4</Code> | <Code>h5</Code> | <Code>h6</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>measure</Code></TableCell>
                <TableCell>Sets the maximum width of the paragram text.</TableCell>
                <TableCell><Code>none</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>mono</Code></TableCell>
                <TableCell>Displays the mono font. Used specifically for code snippets and examples.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>align</Code></TableCell>
                <TableCell>The direction the text is aligned.</TableCell>
                <TableCell><Code>start</Code> | <Code>center</Code> | <Code>end</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>