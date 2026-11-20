<script>
    import {
        Code,
        CopyCode,
        Flex,
        Link,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";
    import { forFramework, installCommand } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { CopyCode } from "moth-ui-svelte";
<\/script>

<CopyCode code="npm install moth-ui-svelte" />`,
        react: `import { CopyCode } from "moth-ui-react";

export default function Example() {
    return <CopyCode code="npm install moth-ui-react" />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">CopyCode</Text>
        <Text size="xl" variant="weak">
            A single line of code, like an install command, with a button that copies it to the clipboard.
            For multi-line snippets, use a code block instead.
        </Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            A single line people will paste, like an install command. For code inside a sentence, use <Link size="l"
            href="/components/code">Code</Link>.
        </Text>
        <CodeExample code={example1}>
            <CopyCode code={installCommand()} />
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
                    <TableCell><Code>code</Code></TableCell>
                    <TableCell>The code to show and copy. Required.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>style</Code></TableCell>
                    <TableCell>Inline styles for the wrapper, for example to change its background on a surface.</TableCell>
                    <TableCell><Code>{forFramework({ svelte: "string", react: "CSSProperties" })}</Code></TableCell>
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
