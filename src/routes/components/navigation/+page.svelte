<script>
    import {
        Code,
        Flex,
        NavGroup,
        NavGroupItem,
        NavItem,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = $state('basic');

    let example1 = `<script>
    import { NavGroup, NavGroupItem, NavItem } from "moth-ui-svelte";
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
        <Text size="3xl" weight="black" as="h1">Navigation</Text>
        <Text size="xl" variant="weak">A component for creating lists of navigational items to be used within the layout's sidebar.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            {options}
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
                <TableCell><Code>NavItem href</Code></TableCell>
                <TableCell>Where the item links to. Required.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavItem active</Code></TableCell>
                <TableCell>Marks the item as the current page (sets <Code>aria-current</Code>).</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavItem icon</Code></TableCell>
                <TableCell>Icon before the label. Receives <Code>animate</Code>, true while the item is hovered or keyboard-focused.</TableCell>
                <TableCell><Code>Snippet</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavItem onclick</Code></TableCell>
                <TableCell>Fires when the item is clicked, for example to close the mobile menu.</TableCell>
                <TableCell><Code>function</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroup title</Code></TableCell>
                <TableCell>Heading of the collapsible group. Required.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroup open</Code></TableCell>
                <TableCell>Whether the group starts expanded. Defaults to <Code>true</Code>.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroup icon</Code></TableCell>
                <TableCell>Snippet rendered before the title. Receives the same <Code>animate</Code> flag.</TableCell>
                <TableCell><Code>Snippet&lt;[boolean]&gt;</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroupItem href</Code></TableCell>
                <TableCell>Where the item links to. Required.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroupItem active</Code></TableCell>
                <TableCell>Marks the item as the current page (sets <Code>aria-current</Code>).</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroupItem icon</Code></TableCell>
                <TableCell>Optional icon before the label. Receives <Code>animate</Code>.</TableCell>
                <TableCell><Code>Snippet</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroupItem onclick</Code></TableCell>
                <TableCell>Fires when the item is clicked.</TableCell>
                <TableCell><Code>function</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>
