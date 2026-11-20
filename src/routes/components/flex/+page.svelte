<script>
    import {
        Card,
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
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex>
    <Card>Item 1</Card>
    <Card>Item 2</Card>
    <Card>Item 3</Card>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex>
            <Card>Item 1</Card>
            <Card>Item 2</Card>
            <Card>Item 3</Card>
        </Flex>
    );
}`
    };

    const example2 = {
        svelte: `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Flex gap="xs">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="s">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="m">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="l">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="xl">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="2xl">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Flex gap="xs">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
            </Flex>
            <Flex gap="s">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
            </Flex>
            <Flex gap="m">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
            </Flex>
            <Flex gap="l">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
            </Flex>
            <Flex gap="xl">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
            </Flex>
            <Flex gap="2xl">
                <Card>Item 1</Card>
                <Card>Item 2</Card>
            </Flex>
        </Flex>
    );
}`
    };

    const example3 = {
        svelte: `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex gap="l">
    <Flex direction="row">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex gap="l">
            <Flex direction="row">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
            <Flex direction="column">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
        </Flex>
    );
}`
    };
    const example4 = {
        svelte: `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Flex wrap>
        <Card style="width: 500px;">1</Card>
        <Card style="width: 500px;">2</Card>
        <Card style="width: 500px;">3</Card>
    </Flex>
    <Flex>
        <Card style="width: 500px;">1</Card>
        <Card style="width: 500px;">2</Card>
        <Card style="width: 500px;">3</Card>
    </Flex>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Flex wrap>
                <Card style={{ width: 500 }}>1</Card>
                <Card style={{ width: 500 }}>2</Card>
                <Card style={{ width: 500 }}>3</Card>
            </Flex>
            <Flex>
                <Card style={{ width: 500 }}>1</Card>
                <Card style={{ width: 500 }}>2</Card>
                <Card style={{ width: 500 }}>3</Card>
            </Flex>
        </Flex>
    );
}`
    };
    const example5 = {
        svelte: `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Flex justify="center">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex justify="space-between">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex justify="space-around">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Flex justify="center">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
            <Flex justify="space-between">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
            <Flex justify="space-around">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
        </Flex>
    );
}`
    };

    const example6 = {
        svelte: `<script>
    import { Card, Flex } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Flex direction="column" align="start">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column" align="center">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column" align="end">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`,
        react: `import { Card, Flex } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Flex direction="column" align="start">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
            <Flex direction="column" align="center">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
            <Flex direction="column" align="end">
                <Card>1</Card>
                <Card>2</Card>
                <Card>3</Card>
            </Flex>
        </Flex>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Flex</Text>
        <Text size="xl" variant="weak">A utility component that provides flexible layout control using CSS Flexbox properties.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Lays out its children in a row with an <Code>m</Code> gap. It's full width, except directly inside a row
            Flex, where it sizes to its content so groups can sit side by side.
        </Text>
        <CodeExample code={example1}>
            <Flex>
                <Card>Item 1</Card>
                <Card>Item 2</Card>
                <Card>Item 3</Card>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="gap">
        <Text size="2xl" weight="bold" as="h2">Gap</Text>
        <Text size="l" variant="weak" measure="l">
            The space between items, from the <Link size="l" href="/foundations/spacing-and-layout">spacing
            scale</Link>. Closely related items get a smaller gap.
        </Text>
        <CodeExample code={example2}>
            <Flex direction="column">
                <Flex gap="xs">
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                </Flex>
                <Flex gap="s">
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                </Flex>
                <Flex gap="m">
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                </Flex>
                <Flex gap="l">
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                </Flex>
                <Flex gap="xl">
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                </Flex>
                <Flex gap="2xl">
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                </Flex>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="direction">
        <Text size="2xl" weight="bold" as="h2">Direction</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>row</Code> (the default) or <Code>column</Code>.
        </Text>
        <CodeExample code={example3}>
            <Flex gap="l">
                <Flex direction="row">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
                <Flex direction="column">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="wrap">
        <Text size="2xl" weight="bold" as="h2">Wrap</Text>
        <Text size="l" variant="weak" measure="l">
            Lets items move onto a new line when they don't fit, instead of overflowing.
        </Text>
        <CodeExample code={example4}>
            <Flex direction="column">
                <Flex wrap>
                    <Card style="width: 500px;">1</Card>
                    <Card style="width: 500px;">2</Card>
                    <Card style="width: 500px;">3</Card>
                </Flex>
                <Flex>
                    <Card style="width: 500px;">1</Card>
                    <Card style="width: 500px;">2</Card>
                    <Card style="width: 500px;">3</Card>
                </Flex>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="justify">
        <Text size="2xl" weight="bold" as="h2">Justify</Text>
        <Text size="l" variant="weak" measure="l">
            How items spread along the main axis, for example <Code>between</Code> to push a title and its actions
            apart.
        </Text>
        <CodeExample code={example5}>
            <Flex direction="column">
                <Flex justify="center">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
                <Flex justify="between">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
                <Flex justify="around">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="align">
        <Text size="2xl" weight="bold" as="h2">Align</Text>
        <Text size="l" variant="weak" measure="l">
            How items line up on the cross axis.
        </Text>
        <CodeExample code={example6}>
            <Flex direction="column">
                <Flex direction="column" align="start">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
                <Flex direction="column" align="center">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
                <Flex direction="column" align="end">
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Flex>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="api-reference">
        <Text size="2xl" weight="bold" as="h2">API reference</Text>
        <div class="m-table-wrapper">
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
                        <TableCell><Code>direction</Code></TableCell>
                        <TableCell>Defines the direction flex items are placed in the flex container.</TableCell>
                        <TableCell><Code>row</Code> | <Code>column</Code> | <Code>row-reverse</Code> | <Code>column-reverse</Code></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Code>gap</Code></TableCell>
                        <TableCell>Defined the space between flex items.</TableCell>
                        <TableCell><Code>none</Code> | <Code>xs</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Code>wrap</Code></TableCell>
                        <TableCell>Allows the items to wrap as needed.</TableCell>
                        <TableCell><Code>boolean</Code></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Code>justify</Code></TableCell>
                        <TableCell>Defines the alignment along the main axis.</TableCell>
                        <TableCell><Code>start</Code> | <Code>end</Code> | <Code>flex-start</Code> | <Code>flex-end</Code> | <Code>center</Code> | <Code>between</Code> | <Code>around</Code> |  <Code>evenly</Code></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Code>align</Code></TableCell>
                        <TableCell>This defines the default behavior for how flex items are laid out along the cross axis on the current line.</TableCell>
                        <TableCell>
                            <Flex wrap gap="xs">
                                <Code>initial</Code> | <Code>stretch</Code> | <Code>flex-start</Code> | <Code>flex-end</Code> | <Code>center</Code> | <Code>baseline</Code> | <Code>start</Code> |  <Code>end</Code> | <Code>self-start</Code> | <Code>self-end</Code>
                            </Flex>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
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
