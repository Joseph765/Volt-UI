<script>
    import {
        Code,
        Flex,
        Progress,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";

    const example1 = {
        svelte: `<script>
    import { Progress } from "moth-ui-svelte";
<\/script>

<Progress label="Uploading files" value={64} />`,
        react: `import { Progress } from "moth-ui-react";

export default function Example() {
    return <Progress label="Uploading files" value={64} />;
}`
    };

    const example2 = {
        svelte: `<script>
    import { Flex, Progress } from "moth-ui-svelte";
<\/script>

<Flex direction="column" gap="l">
    <Progress label="Monthly revenue" value={48290} max={60000} />
    <Progress label="New customers" value={312} max={400} />
    <Progress label="NPS responses" value={188} max={200} />
</Flex>`,
        react: `import { Flex, Progress } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column" gap="l">
            <Progress label="Monthly revenue" value={48290} max={60000} />
            <Progress label="New customers" value={312} max={400} />
            <Progress label="NPS responses" value={188} max={200} />
        </Flex>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Progress</Text>
        <Text size="xl" variant="weak">A slim bar that shows how far along something is, with its label and percentage.</Text>
    </Flex>

    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Give it a <Code>label</Code> and a <Code>value</Code> from 0 to 100. The percentage shows on the right, and
            the bar animates as the value changes.
        </Text>
        <CodeExample code={example1}>
            <div class="demo">
                <Progress label="Uploading files" value={64} />
            </div>
        </CodeExample>
    </section>

    <section class="section" id="max">
        <Text size="2xl" weight="bold" as="h2">Max</Text>
        <Text size="l" variant="weak" measure="l">
            For progress towards a goal, pass the goal as <Code>max</Code> and the current amount as <Code>value</Code>;
            the percentage is worked out for you. Stack several with a <Code>l</Code> gap.
        </Text>
        <CodeExample code={example2}>
            <div class="demo">
                <Flex direction="column" gap="l">
                    <Progress label="Monthly revenue" value={48290} max={60000} />
                    <Progress label="New customers" value={312} max={400} />
                    <Progress label="NPS responses" value={188} max={200} />
                </Flex>
            </div>
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
                    <TableCell><Code>label</Code></TableCell>
                    <TableCell>What the progress is for, shown above the bar. Also the bar's accessible name. Required.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>value</Code></TableCell>
                    <TableCell>How far along it is, from 0 to <Code>max</Code>. Values outside that range are clamped. Required.</TableCell>
                    <TableCell><Code>number</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>max</Code></TableCell>
                    <TableCell>The value that means done. Defaults to 100.</TableCell>
                    <TableCell><Code>number</Code></TableCell>
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

    /* A bar fills its container, so give the demo a realistic width */
    .demo {
        width: min(100%, 24rem);
    }
</style>
