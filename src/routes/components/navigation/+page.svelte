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
        <Text size="xl" variant="weak">Navigation is used to display the primary navigation in the sidebar of an application. Navigation includes a list of links that users use to move between sections of the application.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="Country"
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