<script>
    import { 
        Button,
        Card,
        Code,
        Flex,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'space', label: 'Example: Space' },
        { value: 'header', label: 'Example: Header' },
        { value: 'headerWithAction', label: 'Example: Header With Action' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Card } from "moth-ui-svelte";
<\/script>

<Card>Basic</Card>`;
    let example2 = `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Card space="none">No space</Card>
    <Card space="m">Medium space</Card>
    <Card space="l">Large space</Card>
</Flex>`;
    let example3 = `<script>
    import { Card, Text } from "moth-ui-svelte";
<\/script>

<Card>
    <Text as="h2" weight="bold" slot="header">Header content</Text>
    <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
</Card>`;
    let example4 = `<script>
    import { Button, Card, Text } from "moth-ui-svelte";
<\/script>

<Card>
    <Text as="h2" weight="bold" slot="header">Header content</Text>
    <Button slot="header-end">Action</Button>
    <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
</Card>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Card</Text>
        <Text size="xl" variant="weak">A contained surface that groups related content and actions in a visually distinct block.</Text>
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
                <Card>Basic</Card>
            </CodeExample>
        {:else if selectedExample === "space"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Card space="none">No space</Card>
                    <Card space="m">Medium space</Card>
                    <Card space="l">Large space</Card>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "header"}
            <CodeExample code={example3}>
                <Card>
                    <Text as="h2" weight="bold" slot="header">Header content</Text>
                    <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
                </Card>
            </CodeExample>
        {:else if selectedExample === "headerWithAction"}
            <CodeExample code={example4}>
                <Card>
                    <Text as="h2" weight="bold" slot="header">Header content</Text>
                    <Button slot="header-end">Action</Button>
                    <Text measure="none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?</Text>
                </Card>
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
                <TableCell><Code>space</Code></TableCell>
                <TableCell>The amount of padding applied to the card.</TableCell>
                <TableCell><Code>none</Code> | <Code>m</Code> | <Code>l</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>slot="header"</Code></TableCell>
                <TableCell>Content for the card header, shown above a divider.</TableCell>
                <TableCell><Code>slot</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>slot="header-end"</Code></TableCell>
                <TableCell>Content aligned to the end of the header, such as an action button.</TableCell>
                <TableCell><Code>slot</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>