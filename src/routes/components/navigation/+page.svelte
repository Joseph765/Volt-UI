<script>
    import { 
        Flex, 
        NavGroup,
        NavGroupItem,
        NavItem,
        Select,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { NavGroup, NavGroupItem, NavItem } from "$volt";
<\/script>

<NavItem href="#">Home</NavItem>
<NavGroup title="Example">
    <NavGroupItem href="#">Page 1</NavGroupItem>
    <NavGroupItem href="#">Page 2</NavGroupItem>
    <NavGroupItem href="#">Page 3</NavGroupItem>
</NavGroup>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Navigation</Text>
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
                <NavItem href="#">Home</NavItem>
                <NavGroup title="Example">
                    <NavGroupItem href="#">Page 1</NavGroupItem>
                    <NavGroupItem href="#">Page 2</NavGroupItem>
                    <NavGroupItem href="#">Page 3</NavGroupItem>
                </NavGroup>
            </CodeExample>
        {/if}
    </Flex>
</Flex>