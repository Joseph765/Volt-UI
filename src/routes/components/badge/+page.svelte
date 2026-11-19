<script>
    import { ChevronUp } from "@lucide/svelte";
    import {
        Badge,
        Code,
        Flex,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";



    let example1 = `<script>
    import { Badge, Flex } from "moth-ui-svelte";
<\/script>        

<Flex>
    <Badge>Neutral</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="info">Info</Badge>
</Flex>`;
    let example2 = `<script>
    import { Badge, Flex } from "moth-ui-svelte";
<\/script>        

<Flex>
    <Badge strong>Neutral</Badge>
    <Badge variant="danger" strong>Danger</Badge>
    <Badge variant="warning" strong>Warning</Badge>
    <Badge variant="success" strong>Success</Badge>
    <Badge variant="info" strong>Info</Badge>
</Flex>`;
    let example3 = `<script>
    import { Badge, Flex } from "moth-ui-svelte";
    import { ChevronUp } from "@lucide/svelte";
<\/script>        

<Badge variant="success">
    {#snippet icon()}<ChevronUp size={12} />{/snippet}
    22%
</Badge>`;
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Badge</Text>
        <Text size="xl" variant="weak">A small, inline label that displays status, counts, or categorical information</Text>
    </Flex>
    <section class="section" id="variants">
        <Text size="2xl" weight="bold" as="h2">Variants</Text>
        <Text size="l" variant="weak" measure="l">
            Use a status variant only to show status, like Active or Failed. Neutral is for everything else, like counts
            and categories.
        </Text>
        <CodeExample code={example1}>
            <Flex>
                <Badge>Neutral</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="info">Info</Badge>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="strong">
        <Text size="2xl" weight="bold" as="h2">Strong</Text>
        <Text size="l" variant="weak" measure="l">
            A solid fill for status that needs to stand out at a glance. Use the default, softer style for everything
            else.
        </Text>
        <CodeExample code={example2}>
            <Flex>
                <Badge strong>Neutral</Badge>
                <Badge variant="danger" strong>Danger</Badge>
                <Badge variant="warning" strong>Warning</Badge>
                <Badge variant="success" strong>Success</Badge>
                <Badge variant="info" strong>Info</Badge>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="with-icon">
        <Text size="2xl" weight="bold" as="h2">With icon</Text>
        <Text size="l" variant="weak" measure="l">
            Put a 12px icon in the <Code>icon</Code> snippet, for example to show a trend.
        </Text>
        <CodeExample code={example3}>
            <Badge variant="success">
                {#snippet icon()}<ChevronUp size={12} />{/snippet}
                22%
            </Badge>
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
                    <TableCell><Code>variant</Code></TableCell>
                    <TableCell>The style of the badge indicating status.</TableCell>
                    <TableCell><Code>neutral</Code> | <Code>danger</Code> | <Code>warning</Code> | <Code>success</Code> | <Code>info</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>strong</Code></TableCell>
                    <TableCell>More prominate secondary style for badges.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>icon</Code></TableCell>
                    <TableCell>An icon shown before the label.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
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
