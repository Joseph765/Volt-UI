<script>
    import {
        Banner,
        CodeExample,
        Flex,
        Link,
        Select,
        Tab,
        Tabs,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { 
        Tab,
        Tabs
    } from "$lib";

    /** @type { string } */
    let selectedTab = "one";

    let tabs = [
        { id: "one", label: "Label 1" },
        { id: "two", label: "Label 2" },
        { id: "three", label: "Label 3" },
    ];
<\/script>

<Tabs 
    {tabs} 
    selected={selectedTab}
    onClick={(/** @type { string } */ id) => selectedTab = id}
>
    <Tab id="one" selected={selectedTab}>Content 1</Tab>
    <Tab id="two" selected={selectedTab}>Content 2</Tab>
    <Tab id="three" selected={selectedTab}>Content 3</Tab>
</Tabs>`;

    /** @type { string } */
    let selectedTab = "one";

    let tabs = [
        { id: "one", label: "Label 1" },
        { id: "two", label: "Label 2" },
        { id: "three", label: "Label 3" },
    ];
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Tabs</Text>
        <Text size="xl" variant="weak">A navigation component that organizes content into separate panels, allowing users to switch between views with clickable tab labels.</Text>
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
                <Tabs 
                    {tabs} 
                    selected={selectedTab}
                    onClick={(/** @type { string } */ id) => selectedTab = id}
                >
                    <Tab id="one" selected={selectedTab}>Content 1</Tab>
                    <Tab id="two" selected={selectedTab}>Content 2</Tab>
                    <Tab id="three" selected={selectedTab}>Content 3</Tab>
                </Tabs>
            </CodeExample>
        {/if}
    </Flex>
</Flex>