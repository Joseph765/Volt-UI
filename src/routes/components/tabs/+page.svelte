<script>
    import {
        Code,
        Flex,
        Select,
        Tab,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Tabs,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Tab, Tabs } from "$volt";

    /** @type { string } */
    let selectedTab = "one";
    
    /** @type {{ id: string, label: string }[]} */
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

    /** @type {{ id: string, label: string }[]} */
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
                <TableCell><Code>tabs</Code></TableCell>
                <TableCell>Determines the list of tabs with specific labels and IDs.</TableCell>
                <TableCell><Code>{`{ id: string, label: string }[]`}</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>onClick</Code></TableCell>
                <TableCell>Provides a callback function to set the selected tab when a tab is clicked.</TableCell>
                <TableCell><Code>{`(id: string) => string`}</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>selected</Code></TableCell>
                <TableCell>Provides the current selected tab.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>id</Code></TableCell>
                <TableCell>Provides the id to the Tab component that matches with the id in the list of tabs.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>