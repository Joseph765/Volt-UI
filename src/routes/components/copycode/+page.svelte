<script>
    import {
        Code,
        CopyCode,
        Flex,
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
    import { CopyCode } from "moth-ui-svelte";
<\/script>

<CopyCode code="npm install moth-ui-svelte" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">CopyCode</Text>
        <Text size="xl" variant="weak">
            A single line of code, like an install command, with a button that copies it to the clipboard.
            For multi-line snippets, use a code block instead.
        </Text>
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
                <CopyCode code="npm install moth-ui-svelte" />
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
                <TableCell><Code>code</Code></TableCell>
                <TableCell>The code to show and copy. Required.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>style</Code></TableCell>
                <TableCell>Inline styles for the wrapper, for example to change its background on a surface.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>
