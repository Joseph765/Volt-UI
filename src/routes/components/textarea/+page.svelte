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
        Text,
        Textarea
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";
    import ForFramework from "../../ForFramework.svelte";

    const example1 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="message" />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="Enter a message" name="message" />;
}`
    };

    const example2 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="disabled" disabled />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="Enter a message" name="disabled" disabled />;
}`
    };

    const example3 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="required" required />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="Enter a message" name="required" required />;
}`
    };

    const example4 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />;
}`
    };

    const example5 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="Expanded Style" value="Expanded style" name="expanded" expanded />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="Expanded Style" defaultValue="Expanded style" name="expanded" expanded />;
}`
    };

    const example6 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="With helper text" name="helpText" hint="Hint: this is a hint" />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="With helper text" name="helpText" hint="Hint: this is a hint" />;
}`
    };
    const example7 = {
        svelte: `<script>
    import { Textarea } from "moth-ui-svelte";
<\/script>

<Textarea label="Message" placeholder="With custom styling" name="customStyle" style="width: 22rem;" />`,
        react: `import { Textarea } from "moth-ui-react";

export default function Example() {
    return <Textarea label="Message" placeholder="With custom styling" name="customStyle" style={{ width: "22rem" }} />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Textarea</Text>
        <Text size="xl" variant="weak">A multi-line text field that allows users to enter longer-form input or comments.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For longer answers, like a message or a description. For a single line, use an <Link size="l"
            href="/components/input">Input</Link>.
        </Text>
        <CodeExample code={example1}>
            <Textarea label="Message" placeholder="Enter a message" name="message" />
        </CodeExample>
    </section>

    <section class="section" id="hint">
        <Text size="2xl" weight="bold" as="h2">Hint</Text>
        <Text size="l" variant="weak" measure="l">
            Help under the field, like a length limit.
        </Text>
        <CodeExample code={example6}>
            <Textarea label="Message" placeholder="With helper text" name="helpText" hint="Hint: this is a hint" />
        </CodeExample>
    </section>

    <section class="section" id="error">
        <Text size="2xl" weight="bold" as="h2">Error</Text>
        <Text size="l" variant="weak" measure="l">
            Says what went wrong, under the field. Keep what the person typed so they can fix it.
        </Text>
        <CodeExample code={example4}>
            <Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />
        </CodeExample>
    </section>

    <section class="section" id="required">
        <Text size="2xl" weight="bold" as="h2">Required</Text>
        <Text size="l" variant="weak" measure="l">
            Marks the field as required with an asterisk on its label.
        </Text>
        <CodeExample code={example3}>
            <Textarea label="Message" placeholder="Enter a message" name="required" required />
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For a value people can see but can't change right now.
        </Text>
        <CodeExample code={example2}>
            <Textarea label="Message" placeholder="Enter a message" name="disabled" disabled />
        </CodeExample>
    </section>

    <section class="section" id="full-width">
        <Text size="2xl" weight="bold" as="h2">Full width</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>expanded</Code> stretches the field to fill its container.
        </Text>
        <CodeExample code={example5}>
            <Textarea label="Message" placeholder="Expanded Style" value="Expanded style" name="expanded" expanded />
        </CodeExample>
    </section>

    <section class="section" id="custom-width">
        <Text size="2xl" weight="bold" as="h2">Custom width</Text>
        <Text size="l" variant="weak" measure="l">
            Pass <Code>style</Code> to set a specific width.
        </Text>
        <CodeExample code={example7}>
            <Textarea label="Message" placeholder="With custom styling" name="customStyle" style="width: 22rem;" />
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
                    <TableCell>Adds a label above the textarea element.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>placeholder</Code></TableCell>
                    <TableCell>Provides a subtle hint within the textarea. Useful to communicate the proper formatting required.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>Provides the name attribute to the input html element.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>required</Code></TableCell>
                    <TableCell>Makes the textarea a required field and styles the label with a red asterisk.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>expanded</Code></TableCell>
                    <TableCell>Allows the textarea to stretch to full width.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>error</Code></TableCell>
                    <TableCell>Adds an error message below the textarea.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell><Code>hint</Code></TableCell>
                    <TableCell>Adds a hint below the textarea.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>align</Code></TableCell>
                    <TableCell>Aligns the text within the textarea element.</TableCell>
                    <TableCell><Code>start</Code> | <Code>end</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>value</Code></TableCell>
                    <TableCell>Current text. <ForFramework>{#snippet svelte()}Use <Code>bind:value</Code> to read and update it.{/snippet}{#snippet react()}Pair it with <Code>onChange</Code> to control it, or use <Code>defaultValue</Code> for a starting value.{/snippet}</ForFramework></TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>autocomplete</Code></TableCell>
                    <TableCell>Whether the browser may autofill the field.</TableCell>
                    <TableCell><Code>on</Code> | <Code>off</Code></TableCell>
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
