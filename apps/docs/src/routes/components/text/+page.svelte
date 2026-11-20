<script>
    import {
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
    import { forFramework } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { Text } from "moth-ui-svelte";
<\/script>

<Text>This is sample text</Text>`,
        react: `import { Text } from "moth-ui-react";

export default function Example() {
    return <Text>This is sample text</Text>;
}`
    };

    const example2 = {
        svelte: `<script>
    import { Flex, Text } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Text size="xs">This is xs sample text</Text>
    <Text size="s">This is s sample text</Text>
    <Text size="m">This is m sample text</Text>
    <Text size="l">This is l sample text</Text>
    <Text size="xl">This is xl sample text</Text>
    <Text size="2xl">This is 2xl sample text</Text>
    <Text size="3xl">This is 3xl sample text</Text>
</Flex>`,
        react: `import { Flex, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Text size="xs">This is xs sample text</Text>
            <Text size="s">This is s sample text</Text>
            <Text size="m">This is m sample text</Text>
            <Text size="l">This is l sample text</Text>
            <Text size="xl">This is xl sample text</Text>
            <Text size="2xl">This is 2xl sample text</Text>
            <Text size="3xl">This is 3xl sample text</Text>
        </Flex>
    );
}`
    };

    const example3 = {
        svelte: `<script>
    import { Flex, Text } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Text size="l" weight="regular">This is regular weight</Text>
    <Text size="l" weight="bold">This is bold weight</Text>
    <Text size="l" weight="black">This is black weight</Text>
</Flex>`,
        react: `import { Flex, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Text size="l" weight="regular">This is regular weight</Text>
            <Text size="l" weight="bold">This is bold weight</Text>
            <Text size="l" weight="black">This is black weight</Text>
        </Flex>
    );
}`
    };

    const example4 = {
        svelte: `<script>
    import { Flex, Text } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Text size="l" variant="default">This is the default variant</Text>
    <Text size="l" variant="weak">This is the weak variant</Text>
    <Text size="l" variant="weaker">This is the weaker variant</Text>
    <Text size="l" variant="weakest">This is the weakest variant</Text>
</Flex>`,
        react: `import { Flex, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Text size="l" variant="default">This is the default variant</Text>
            <Text size="l" variant="weak">This is the weak variant</Text>
            <Text size="l" variant="weaker">This is the weaker variant</Text>
            <Text size="l" variant="weakest">This is the weakest variant</Text>
        </Flex>
    );
}`
    };

    const example5 = {
        svelte: `<script>
    import { Flex, Text } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Text as="span" size="l" variant="default">This is a span tag</Text>
    <Text as="h2" size="l">This is an h2 tag</Text>
</Flex>`,
        react: `import { Flex, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Text as="span" size="l" variant="default">This is a span tag</Text>
            <Text as="h2" size="l">This is an h2 tag</Text>
        </Flex>
    );
}`
    };

    const example6 = {
        svelte: `<script>
    import { Flex, Text } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Text measure="l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text measure="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text measure="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text measure="none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
</Flex>`,
        react: `import { Flex, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Text measure="l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text measure="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text measure="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text measure="none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Flex>
    );
}`
    };

    const example7 = {
        svelte: `<script>
    import { Flex, Text } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Text size="l" align="start">Start</Text>
    <Text size="l" align="center">Center</Text>
    <Text size="l" align="end">End</Text>
</Flex>`,
        react: `import { Flex, Text } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Text size="l" align="start">Start</Text>
            <Text size="l" align="center">Center</Text>
            <Text size="l" align="end">End</Text>
        </Flex>
    );
}`
    };

    const example8 = {
        svelte: `<script>
    import { Text } from "moth-ui-svelte";
<\/script>

<Text mono>Mono Text</Text>`,
        react: `import { Text } from "moth-ui-react";

export default function Example() {
    return <Text mono>Mono Text</Text>;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Text</Text>
        <Text size="xl" variant="weak">A typographic component for styling and displaying text with consistent typography scales.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Use Text for all copy, so sizes, line heights and colors come from the <Link size="l"
            href="/foundations/typography">type scale</Link>.
        </Text>
        <CodeExample code={example1}>
            <Text>This is sample text</Text>
        </CodeExample>
    </section>

    <section class="section" id="sizes">
        <Text size="2xl" weight="bold" as="h2">Sizes</Text>
        <Text size="l" variant="weak" measure="l">
            Each size sets its font size, line height and letter spacing together.
        </Text>
        <CodeExample code={example2}>
            <Flex direction="column">
                <Text size="xs">This is xs sample text</Text>
                <Text size="s">This is s sample text</Text>
                <Text size="m">This is m sample text</Text>
                <Text size="l">This is l sample text</Text>
                <Text size="xl">This is xl sample text</Text>
                <Text size="2xl">This is 2xl sample text</Text>
                <Text size="3xl">This is 3xl sample text</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="weight">
        <Text size="2xl" weight="bold" as="h2">Weight</Text>
        <Text size="l" variant="weak" measure="l">
            Regular for most text, bold for headings and emphasis, and black only for page titles.
        </Text>
        <CodeExample code={example3}>
            <Flex direction="column">
                <Text size="l" weight="regular">This is regular weight</Text>
                <Text size="l" weight="bold">This is bold weight</Text>
                <Text size="l" weight="black">This is black weight</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="variants">
        <Text size="2xl" weight="bold" as="h2">Variants</Text>
        <Text size="l" variant="weak" measure="l">
            Gray steps for hierarchy: default for what people must read, weak for body text, weaker for metadata and
            weakest for placeholders.
        </Text>
        <CodeExample code={example4}>
            <Flex direction="column">
                <Text size="l" variant="default">This is the default variant</Text>
                <Text size="l" variant="weak">This is the weak variant</Text>
                <Text size="l" variant="weaker">This is the weaker variant</Text>
                <Text size="l" variant="weakest">This is the weakest variant</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="element">
        <Text size="2xl" weight="bold" as="h2">Element</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>as</Code> sets the HTML element, like <Code>h2</Code> for a heading, independent of how it looks.
        </Text>
        <CodeExample code={example5}>
            <Flex direction="column">
                <Text as="span" size="l" variant="default">This is a span tag</Text>
                <Text as="h2" size="l">This is an h2 tag</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="measure">
        <Text size="2xl" weight="bold" as="h2">Measure</Text>
        <Text size="l" variant="weak" measure="l">
            Caps the line length so long paragraphs stay easy to read.
        </Text>
        <CodeExample code={example6}>
            <Flex direction="column">
                <Text measure="l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                <Text measure="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                <Text measure="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                <Text measure="none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="align">
        <Text size="2xl" weight="bold" as="h2">Align</Text>
        <Text size="l" variant="weak" measure="l">
            Without it, Text follows its container's alignment.
        </Text>
        <CodeExample code={example7}>
            <Flex direction="column">
                <Text size="l" align="start">Start</Text>
                <Text size="l" align="center">Center</Text>
                <Text size="l" align="end">End</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="mono">
        <Text size="2xl" weight="bold" as="h2">Mono</Text>
        <Text size="l" variant="weak" measure="l">
            Geist Mono, only for code. For code in a sentence, use <Link size="l" href="/components/code">Code</Link>.
        </Text>
        <CodeExample code={example8}>
            <Text mono>Mono Text</Text>
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
                    <TableCell><Code>size</Code></TableCell>
                    <TableCell>Determines the size of the text.</TableCell>
                    <TableCell><Code>xs</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code> | <Code>3xl</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>weight</Code></TableCell>
                    <TableCell>Determines the boldness of the text.</TableCell>
                    <TableCell><Code>regular</Code> | <Code>Bold</Code> | <Code>black</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>variant</Code></TableCell>
                    <TableCell>Changes the color of the text to be more or less prominate.</TableCell>
                    <TableCell><Code>default</Code> | <Code>weak</Code> | <Code>weaker</Code> | <Code>weakest</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>as</Code></TableCell>
                    <TableCell>Changes the html element rendered.</TableCell>
                    <TableCell><Code>p</Code> | <Code>span</Code> | <Code>h1</Code> | <Code>h2</Code> | <Code>h3</Code> | <Code>h4</Code> | <Code>h5</Code> | <Code>h6</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>measure</Code></TableCell>
                    <TableCell>Sets the maximum width of the paragram text.</TableCell>
                    <TableCell><Code>none</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>mono</Code></TableCell>
                    <TableCell>Displays the mono font. Used specifically for code snippets and examples.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>align</Code></TableCell>
                    <TableCell>Text alignment. When omitted, follows its container (e.g. <Code>TableCell align</Code>).</TableCell>
                    <TableCell><Code>start</Code> | <Code>center</Code> | <Code>end</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>id</Code></TableCell>
                    <TableCell>Id for the text element, for example to use as a link anchor.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>{forFramework({ svelte: "class", react: "className" })}</Code></TableCell>
                    <TableCell>Extra classes added to the element, for your own styles.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
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
