<script>
    import {
        Code,
        Flex,
        Link,
        NavGroup,
        NavGroupItem,
        NavItem,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";
    import { eventName, forFramework, slotType } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { NavGroup, NavGroupItem, NavItem } from "moth-ui-svelte";
<\/script>

<NavItem href="#">Home</NavItem>
<NavGroup title="Example">
    <NavGroupItem href="#">Page 1</NavGroupItem>
    <NavGroupItem href="#">Page 2</NavGroupItem>
    <NavGroupItem href="#">Page 3</NavGroupItem>
</NavGroup>`,
        react: `import { NavGroup, NavGroupItem, NavItem } from "moth-ui-react";

export default function Example() {
    return (
        <>
            <NavItem href="#">Home</NavItem>
            <NavGroup title="Example">
                <NavGroupItem href="#">Page 1</NavGroupItem>
                <NavGroupItem href="#">Page 2</NavGroupItem>
                <NavGroupItem href="#">Page 3</NavGroupItem>
            </NavGroup>
        </>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Navigation</Text>
        <Text size="xl" variant="weak">A component for creating lists of navigational items to be used within the layout's sidebar.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Items for the <Link size="l" href="/components/layout">Layout</Link> sidebar. Use <Code>NavItem</Code> for a
            single page and <Code>NavGroup</Code> to collapse related pages under one heading. Mark the current page
            with <Code>active</Code>.
        </Text>
        <CodeExample code={example1}>
            <NavItem href="#">Home</NavItem>
            <NavGroup title="Example">
                <NavGroupItem href="#">Page 1</NavGroupItem>
                <NavGroupItem href="#">Page 2</NavGroupItem>
                <NavGroupItem href="#">Page 3</NavGroupItem>
            </NavGroup>
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
                    <TableCell>Icon before the label. {forFramework({ svelte: "Receives", react: "As a function, it receives" })} <Code>animate</Code>, true while the item is hovered or keyboard-focused.</TableCell>
                    <TableCell><Code>{slotType({ name: "animate", type: "boolean" })}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>NavItem {eventName("onclick")}</Code></TableCell>
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
                    <TableCell>Rendered before the title. {forFramework({ svelte: "Receives", react: "As a function, it receives" })} the same <Code>animate</Code> flag.</TableCell>
                    <TableCell><Code>{slotType({ name: "animate", type: "boolean" })}</Code></TableCell>
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
                    <TableCell>Optional icon before the label. {forFramework({ svelte: "Receives", react: "As a function, it receives" })} <Code>animate</Code>.</TableCell>
                    <TableCell><Code>{slotType({ name: "animate", type: "boolean" })}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>NavGroupItem {eventName("onclick")}</Code></TableCell>
                    <TableCell>Fires when the item is clicked.</TableCell>
                    <TableCell><Code>function</Code></TableCell>
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
