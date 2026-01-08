<script>
    import {
        Banner,
        CodeExample,
        Flex,
        Link,
        Select,
        Tabs,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';
    /** @type { string } */
    let selectedTab = "one";

    let example1 = `<script>
    import { 
        Tabs
    } from "$lib";

    /** @type { string } */
    let selectedTab = "one";
<\/script>

<Flex direction="column">
    <Tabs 
        tabs={[
            { id: "one", label: "Label 1" },
            { id: "two", label: "Label 2" },
            { id: "three", label: "Label 3" },
        ]} 
        selected={selectedTab}
        onClick={(/** @type { string } */ id) => selectedTab = id}
    />
    {#if selectedTab === "one"}
        <Text>Content for tab 1</Text>
    {:else if selectedTab === "two"}
        <Text>Content for tab 2</Text>
    {:else if selectedTab === "three"}
        <Text>Content for tab 3</Text>
    {/if}
</Flex>`;
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
                <Flex direction="column">
                    <Tabs 
                        tabs={[
                            { id: "one", label: "Label 1" },
                            { id: "two", label: "Label 2" },
                            { id: "three", label: "Label 3" },
                        ]} 
                        selected={selectedTab}
                        onClick={(/** @type { string } */ id) => selectedTab = id}
                    />
                    {#if selectedTab === "one"}
                        <Text>Content for tab 1</Text>
                    {:else if selectedTab === "two"}
                        <Text>Content for tab 2</Text>
                    {:else if selectedTab === "three"}
                        <Text>Content for tab 3</Text>
                    {/if}
                </Flex>
            </CodeExample>
        {/if}
    </Flex>
</Flex>