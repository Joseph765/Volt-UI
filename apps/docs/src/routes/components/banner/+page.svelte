<script>
    import {
        Banner,
        Code,
        Flex,
        Link,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    const example1 = {
        svelte: `<script>
    import { Banner, Flex, Link } from "moth-ui-svelte";
<\/script>        

<Flex direction="column">
    <Banner variant="info">We've updated your plan, make sure you know how these changes affect it. <Link href="#">Learn more.</Link></Banner>
    <Banner variant="danger">We're experiencing an incident. Please see our <Link href="#">status page</Link> for more details.</Banner>
    <Banner variant="warning">Payment details missing. To stay on your current plan, <Link href="#">add payment details.</Link></Banner>
    <Banner variant="success">Your order has been shipped and will arrive on May 27th. <Link href="#">Track order.</Link></Banner>
</Flex>`,
        react: `import { Banner, Flex, Link } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Banner variant="info">We've updated your plan, make sure you know how these changes affect it. <Link href="#">Learn more.</Link></Banner>
            <Banner variant="danger">We're experiencing an incident. Please see our <Link href="#">status page</Link> for more details.</Banner>
            <Banner variant="warning">Payment details missing. To stay on your current plan, <Link href="#">add payment details.</Link></Banner>
            <Banner variant="success">Your order has been shipped and will arrive on May 27th. <Link href="#">Track order.</Link></Banner>
        </Flex>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Banner</Text>
        <Text size="xl" variant="weak">A prominent full-width strip that displays important messages, alerts, or announcements with optional actions.</Text>
    </Flex>
    <section class="section" id="variants">
        <Text size="2xl" weight="bold" as="h2">Variants</Text>
        <Text size="l" variant="weak" measure="l">
            A message about the whole page or app, like an incident or missing payment details. Pick the variant by
            status, and keep it to a sentence or two with a link to act on it.
        </Text>
        <CodeExample code={example1}>
            <Flex direction="column">
                <Banner variant="info">We've updated your plan, make sure you know how these changes affect it. <Link href="#">Learn more.</Link></Banner>
                <Banner variant="danger">We're experiencing an incident. Please see our <Link href="#">status page</Link> for more details.</Banner>
                <Banner variant="warning">Payment details missing. To stay on your current plan, <Link href="#">add payment details.</Link></Banner>
                <Banner variant="success">Your order has been shipped and will arrive on May 27th. <Link href="#">Track order.</Link></Banner>
            </Flex>
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
                    <TableCell>The style of the banner indicating status.</TableCell>
                    <TableCell><Code>info</Code> | <Code>danger</Code> | <Code>warning</Code> | <Code>success</Code></TableCell>
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
