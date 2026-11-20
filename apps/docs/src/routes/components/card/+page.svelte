<script>
    import {
        Button,
        Card,
        Code,
        Flex,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";
    import { slotType, slotWord } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { Card } from "moth-ui-svelte";
<\/script>

<Card>Basic</Card>`,
        react: `import { Card } from "moth-ui-react";

export default function Example() {
    return <Card>Basic</Card>;
}`
    };

    const example2 = {
        svelte: `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Card space="none">No space</Card>
    <Card space="m">Medium space</Card>
    <Card space="l">Large space</Card>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Card space="none">No space</Card>
            <Card space="m">Medium space</Card>
            <Card space="l">Large space</Card>
        </Flex>
    );
}`
    };
    const example3 = {
        svelte: `<script>
    import { Card, Text } from "moth-ui-svelte";
<\/script>

<Card>
    {#snippet header()}<Text as="h2" weight="bold">Header content</Text>{/snippet}
    <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
</Card>`,
        react: `import { Card, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Card header={<Text as="h2" weight="bold">Header content</Text>}>
            <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
        </Card>
    );
}`
    };
    const example4 = {
        svelte: `<script>
    import { Button, Card, Text } from "moth-ui-svelte";
<\/script>

<Card>
    {#snippet header()}<Text as="h2" weight="bold">Header content</Text>{/snippet}
    {#snippet headerEnd()}<Button>Action</Button>{/snippet}
    <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
</Card>`,
        react: `import { Button, Card, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Card
            header={<Text as="h2" weight="bold">Header content</Text>}
            headerEnd={<Button>Action</Button>}
        >
            <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
        </Card>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Card</Text>
        <Text size="xl" variant="weak">A contained surface that groups related content and actions in a visually distinct block.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            A surface that groups related content. Cards have no border: the fill separates them from the page. A card
            doesn't space its children, so wrap several in a <Code>Flex direction="column"</Code>.
        </Text>
        <CodeExample code={example1}>
            <Card>Basic</Card>
        </CodeExample>
    </section>

    <section class="section" id="space">
        <Text size="2xl" weight="bold" as="h2">Space</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>space</Code> sets the padding: <Code>m</Code> (the default) for most cards, <Code>l</Code> for larger
            ones, and <Code>none</Code> when the content brings its own.
        </Text>
        <CodeExample code={example2}>
            <Flex direction="column">
                <Card space="none">No space</Card>
                <Card space="m">Medium space</Card>
                <Card space="l">Large space</Card>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="header">
        <Text size="2xl" weight="bold" as="h2">Header</Text>
        <Text size="l" variant="weak" measure="l">
            The <Code>header</Code> {slotWord()} adds a title above a divider.
        </Text>
        <CodeExample code={example3}>
            <Card>
                {#snippet header()}<Text as="h2" weight="bold">Header content</Text>{/snippet}
                <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
            </Card>
        </CodeExample>
    </section>

    <section class="section" id="header-action">
        <Text size="2xl" weight="bold" as="h2">Header with action</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>headerEnd</Code> puts content at the end of the header, usually one button that acts on the whole
            card.
        </Text>
        <CodeExample code={example4}>
            <Card>
                {#snippet header()}<Text as="h2" weight="bold">Header content</Text>{/snippet}
                {#snippet headerEnd()}<Button>Action</Button>{/snippet}
                <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
            </Card>
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
                    <TableCell><Code>space</Code></TableCell>
                    <TableCell>The amount of padding applied to the card.</TableCell>
                    <TableCell><Code>none</Code> | <Code>m</Code> | <Code>l</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>header</Code></TableCell>
                    <TableCell>Content for the card header, shown above a divider.</TableCell>
                    <TableCell><Code>{slotType()}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>headerEnd</Code></TableCell>
                    <TableCell>Content aligned to the end of the header, such as an action button.</TableCell>
                    <TableCell><Code>{slotType()}</Code></TableCell>
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
