<script>
    import { 
        CodeExample,
        Flex, 
        NavGroup,
        NavGroupItem,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<NavGroup title="Example">
    <NavGroupItem href="#">Page 1</NavGroupItem>
    <NavGroupItem href="#">Page 2</NavGroupItem>
    <NavGroupItem href="#">Page 3</NavGroupItem>
</NavGroup>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Navigation</Text>
        <Text size="xl" variant="weak">A component for creating lists of navigational items to be used within the layout's sidebar.</Text>
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
                <NavGroup title="Example">
                    <NavGroupItem href="#">Page 1</NavGroupItem>
                    <NavGroupItem href="#">Page 2</NavGroupItem>
                    <NavGroupItem href="#">Page 3</NavGroupItem>
                </NavGroup>
            </CodeExample>
        {/if}
    </Flex>
</Flex>