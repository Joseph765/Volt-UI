<script>
    import { 
        Card,
        CodeExample,
        Container,
        Flex, 
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'sizes', label: 'Example: Sizes' },
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
</Flex>