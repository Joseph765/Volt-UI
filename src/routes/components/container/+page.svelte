<script>
    import { 
        Card,
        Code,
        CodeExample,
        Container,
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

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'sizes', label: 'Example: Size' },
        { value: 'align', label: 'Example: Align' },
        { value: 'debug', label: 'Example: debug' },
    ];

    /** @type { string } */
    let selectedExample = 'basic';

    /** @type { string } */
    let example1 = `<Container>
    <Text>Content</Text>
</Container>`;
    /** @type { string } */
    let example2 = `<Flex direction="column">
    <Container size="s">
        <Card>Size s</Card>
    </Container>
    <Container size="m">
        <Card>Size m</Card>
    </Container>
    <Container size="l">
        <Card>Size l</Card>
    </Container>
    <Container size="xl">
        <Card>Size xl</Card>
    </Container>
    <Container size="2xl">
        <Card>Size 2xl</Card>
    </Container>
</Flex>`;
    /** @type { string } */
    let example3 = `<Flex direction="column">
    <Container size="s" align="start">
        <Card style="width: 20rem;">Align start</Card>
    </Container>
    <Container size="s" align="center">
        <Card style="width: 20rem;">Align center</Card>
    </Container>
    <Container size="s" align="end">
        <Card style="width: 20rem;">Align end</Card>
    </Container>
</Flex>`;
    /** @type { string } */
    let example4 = `<Container size="l" debug></Container>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Container</Text>
        <Text size="xl" variant="weak">A wrapper that constrains content width and applies consistent padding.</Text>
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
                <Container>
                    <Text>Content</Text>
                </Container>
            </CodeExample>
        {:else if selectedExample === "sizes"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Container size="s">
                        <Card>Size s</Card>
                    </Container>
                    <Container size="m">
                        <Card>Size m</Card>
                    </Container>
                    <Container size="l">
                        <Card>Size l</Card>
                    </Container>
                    <Container size="xl">
                        <Card>Size xl</Card>
                    </Container>
                    <Container size="2xl">
                        <Card>Size 2xl</Card>
                    </Container>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "align"}
            <CodeExample code={example3}>
                <Flex direction="column">
                    <Container size="s" align="start">
                        <Card style="width: 20rem;">Align start</Card>
                    </Container>
                    <Container size="s" align="center">
                        <Card style="width: 20rem;">Align center</Card>
                    </Container>
                    <Container size="s" align="end">
                        <Card style="width: 20rem;">Align end</Card>
                    </Container>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "debug"}
            <CodeExample code={example4}>
                <Container size="l" debug></Container>
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
                <TableCell><Code>space</Code></TableCell>
                <TableCell>Changes the padding applied to the container.</TableCell>
                <TableCell><Code>default</Code> | <Code>none</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>size</Code></TableCell>
                <TableCell>Changes the maximum width of the container.</TableCell>
                <TableCell><Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>align</Code></TableCell>
                <TableCell>Determines which direction the container is aligned.</TableCell>
                <TableCell><Code>start</Code> | <Code>center</Code> | <Code>end</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>debug</Code></TableCell>
                <TableCell>Adds a red outline to the container.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>