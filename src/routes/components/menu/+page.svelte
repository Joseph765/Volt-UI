<script>
    import { 
        Button, 
        CodeExample,
        Flex, 
        Heading,
        MenuGroup,
        MenuGroupItem,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<MenuGroup title="Example">
    <MenuGroupItem href="#">Page 1</MenuGroupItem>
    <MenuGroupItem href="#">Page 2</MenuGroupItem>
    <MenuGroupItem href="#">Page 3</MenuGroupItem>
</MenuGroup>`;
</script>

<Flex direction="column">
    <Heading>Menu</Heading>
    <Text>Menu is used to display the primary navigation in the sidebar of an application. Menu includes a list of links that users use to move between sections of the application.</Text>
    <Select
        name="Country"
        bind:options={options}
        bind:value={selectedExample}
        placeholder="Select an example..."
    />
    {#if selectedExample === "basic"}
        <CodeExample code={example1}>
            <MenuGroup title="Example">
                <MenuGroupItem href="#">Page 1</MenuGroupItem>
                <MenuGroupItem href="#">Page 2</MenuGroupItem>
                <MenuGroupItem href="#">Page 3</MenuGroupItem>
            </MenuGroup>
        </CodeExample>
    {/if}
</Flex>