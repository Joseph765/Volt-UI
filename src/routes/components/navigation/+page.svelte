<script>
    import { 
        Button, 
        CodeExample,
        Flex, 
        Heading,
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

<Flex direction="column">
    <Heading>Navigation</Heading>
    <Text>Navigation is used to display the primary navigation in the sidebar of an application. Navigation includes a list of links that users use to move between sections of the application.</Text>
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