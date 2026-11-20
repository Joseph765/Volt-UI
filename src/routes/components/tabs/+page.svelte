<script>
    import {
        Code,
        Flex,
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



    const example1 = {
        svelte: `<script>
    import { Tab, Tabs, Text } from "moth-ui-svelte";

    /** @type { string } */
    let selectedTab = $state("overview");
    
    /** @type {{ id: string, label: string }[]} */
    let tabs = [
        { id: "overview", label: "Overview" },
        { id: "activity", label: "Activity" },
        { id: "settings", label: "Settings" },
    ];
<\/script>

<Tabs 
    {tabs} 
    selected={selectedTab}
    onClick={(/** @type { string } */ id) => selectedTab = id}
>
    <Tab id="overview" selected={selectedTab}>
        <Text variant="weak">Your portfolio is up 4.2% this week.</Text>
    </Tab>
    <Tab id="activity" selected={selectedTab}>
        <Text variant="weak">3 transactions in the last 24 hours.</Text>
    </Tab>
    <Tab id="settings" selected={selectedTab}>
        <Text variant="weak">Manage notifications and security.</Text>
    </Tab>
</Tabs>`,
        react: `import { useState } from "react";
import { Tab, Tabs, Text } from "moth-ui-react";

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "activity", label: "Activity" },
    { id: "settings", label: "Settings" },
];

export default function Example() {
    const [selectedTab, setSelectedTab] = useState("overview");

    return (
        <Tabs tabs={tabs} selected={selectedTab} onClick={setSelectedTab}>
            <Tab id="overview" selected={selectedTab}>
                <Text variant="weak">Your portfolio is up 4.2% this week.</Text>
            </Tab>
            <Tab id="activity" selected={selectedTab}>
                <Text variant="weak">3 transactions in the last 24 hours.</Text>
            </Tab>
            <Tab id="settings" selected={selectedTab}>
                <Text variant="weak">Manage notifications and security.</Text>
            </Tab>
        </Tabs>
    );
}`
    };

    /** @type { string } */
    let selectedTab = $state("overview");

    /** @type {{ id: string, label: string }[]} */
    let tabs = [
        { id: "overview", label: "Overview" },
        { id: "activity", label: "Activity" },
        { id: "settings", label: "Settings" },
    ];
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Tabs</Text>
        <Text size="xl" variant="weak">A navigation component that organizes content into separate panels, allowing users to switch between views with clickable tab labels.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Switches between views of the same content without leaving the page. Keep tab labels short, and use them for
            a handful of views, not for site navigation.
        </Text>
        <CodeExample code={example1}>
            <Tabs 
                {tabs} 
                selected={selectedTab}
                onClick={(/** @type { string } */ id) => selectedTab = id}
            >
                <Tab id="overview" selected={selectedTab}>
                    <Text variant="weak">Your portfolio is up 4.2% this week.</Text>
                </Tab>
                <Tab id="activity" selected={selectedTab}>
                    <Text variant="weak">3 transactions in the last 24 hours.</Text>
                </Tab>
                <Tab id="settings" selected={selectedTab}>
                    <Text variant="weak">Manage notifications and security.</Text>
                </Tab>
            </Tabs>
        </CodeExample>
    </section>

    <section class="section" id="api-reference">
        <Text size="2xl" weight="bold" as="h2">API reference</Text>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Type</TableHeader>
                </TableRow>
            </TableHead>
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
    </section>
</Flex>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        scroll-margin-block-start: var(--m-space-l);
    }
</style>
