<script>
    import {
        Card,
        Code,
        Container,
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

    const example1 = {
        svelte: `<script>
    import { Container, Text } from "moth-ui-svelte";
<\/script>

<Container>
    <Text>Content</Text>
</Container>`,
        react: `import { Container, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Container>
            <Text>Content</Text>
        </Container>
    );
}`
    };
    const example2 = {
        svelte: `<script>
    import { Card, Container, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Container size="s">
        <Card>Size s</Card>
    </Container>
    <Container size="m">
        <Card>Size m</Card>
    </Container>
    <Container size="l">
        <Card>Size l</Card>
    </Container>
    <Container size="xl">
        <Card>Size xl</Card>
    </Container>
    <Container size="2xl">
        <Card>Size 2xl</Card>
    </Container>
</Flex>`,
        react: `import { Card, Container, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Container size="s">
                <Card>Size s</Card>
            </Container>
            <Container size="m">
                <Card>Size m</Card>
            </Container>
            <Container size="l">
                <Card>Size l</Card>
            </Container>
            <Container size="xl">
                <Card>Size xl</Card>
            </Container>
            <Container size="2xl">
                <Card>Size 2xl</Card>
            </Container>
        </Flex>
    );
}`
    };
    const example3 = {
        svelte: `<script>
    import { Card, Container, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Container size="s" align="start">
        <Card style="width: 20rem;">Align start</Card>
    </Container>
    <Container size="s" align="center">
        <Card style="width: 20rem;">Align center</Card>
    </Container>
    <Container size="s" align="end">
        <Card style="width: 20rem;">Align end</Card>
    </Container>
</Flex>`,
        react: `import { Card, Container, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Container size="s" align="start">
                <Card style={{ width: "20rem" }}>Align start</Card>
            </Container>
            <Container size="s" align="center">
                <Card style={{ width: "20rem" }}>Align center</Card>
            </Container>
            <Container size="s" align="end">
                <Card style={{ width: "20rem" }}>Align end</Card>
            </Container>
        </Flex>
    );
}`
    };
    const example4 = {
        svelte: `<script>
    import { Container } from "moth-ui-svelte";
<\/script>

<Container size="l" debug></Container>`,
        react: `import { Container } from "moth-ui-react";

export default function Example() {
    return <Container size="l" debug></Container>;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Container</Text>
        <Text size="xl" variant="weak">A wrapper that constrains content width and applies consistent padding.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Wraps a page's content to give it padding and a maximum width. By default it's as wide as the
            <Code>2xl</Code> breakpoint.
        </Text>
        <CodeExample code={example1}>
            <Container>
                <Text>Content</Text>
            </Container>
        </CodeExample>
    </section>

    <section class="section" id="sizes">
        <Text size="2xl" weight="bold" as="h2">Sizes</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>size</Code> caps the width at a <Link size="l"
            href="/foundations/spacing-and-layout#breakpoints">breakpoint</Link>. Use a smaller size for focused pages,
            like a form or an article, so lines stay readable.
        </Text>
        <CodeExample code={example2}>
            <Flex direction="column">
                <Container size="s">
                    <Card>Size s</Card>
                </Container>
                <Container size="m">
                    <Card>Size m</Card>
                </Container>
                <Container size="l">
                    <Card>Size l</Card>
                </Container>
                <Container size="xl">
                    <Card>Size xl</Card>
                </Container>
                <Container size="2xl">
                    <Card>Size 2xl</Card>
                </Container>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="align">
        <Text size="2xl" weight="bold" as="h2">Align</Text>
        <Text size="l" variant="weak" measure="l">
            Where the container sits when the page is wider than it. This site uses <Code>center</Code>.
        </Text>
        <CodeExample code={example3}>
            <Flex direction="column">
                <Container size="s" align="start">
                    <Card style="width: 20rem;">Align start</Card>
                </Container>
                <Container size="s" align="center">
                    <Card style="width: 20rem;">Align center</Card>
                </Container>
                <Container size="s" align="end">
                    <Card style="width: 20rem;">Align end</Card>
                </Container>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="debug">
        <Text size="2xl" weight="bold" as="h2">Debug</Text>
        <Text size="l" variant="weak" measure="l">
            Outlines the container in red so you can check its size while you build. Remove it before you ship.
        </Text>
        <CodeExample code={example4}>
            <Container size="l" debug></Container>
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
                    <TableCell>Changes the padding applied to the container.</TableCell>
                    <TableCell><Code>default</Code> | <Code>none</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>size</Code></TableCell>
                    <TableCell>Changes the maximum width of the container.</TableCell>
                    <TableCell><Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>align</Code></TableCell>
                    <TableCell>Determines which direction the container is aligned.</TableCell>
                    <TableCell><Code>start</Code> | <Code>center</Code> | <Code>end</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>debug</Code></TableCell>
                    <TableCell>Adds a red outline to the container.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
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
