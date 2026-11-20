<script>
    import {
        Checkbox,
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
    import ForFramework from "../../ForFramework.svelte";

    const example1 = {
        svelte: `<script>
    import { Checkbox } from "moth-ui-svelte";
<\/script>

<Checkbox label="I agree to the terms" />`,
        react: `import { Checkbox } from "moth-ui-react";

export default function Example() {
    return <Checkbox label="I agree to the terms" />;
}`
    };

    const example2 = {
        svelte: `<script>
    import { Checkbox } from "moth-ui-svelte";
<\/script>

<Checkbox checked disabled label="This is disabled" />`,
        react: `import { Checkbox } from "moth-ui-react";

export default function Example() {
    return <Checkbox defaultChecked disabled label="This is disabled" />;
}`
    };

    const example3 = {
        svelte: `<script>
    import { Checkbox } from "moth-ui-svelte";
<\/script>

<Checkbox label="Indeterminate" indeterminate />`,
        react: `import { Checkbox } from "moth-ui-react";

export default function Example() {
    return <Checkbox label="Indeterminate" indeterminate />;
}`
    };

    const example4 = {
        svelte: `<script>
    import { Checkbox } from "moth-ui-svelte";
<\/script>

<Checkbox label="Has error" error="This field has error" />`,
        react: `import { Checkbox } from "moth-ui-react";

export default function Example() {
    return <Checkbox label="Has error" error="This field has error" />;
}`
    };

    const example5 = {
        svelte: `<script>
    import { Checkbox } from "moth-ui-svelte";
<\/script>

<Checkbox label="Has hint" hint="Hint: this is a hint" />`,
        react: `import { Checkbox } from "moth-ui-react";

export default function Example() {
    return <Checkbox label="Has hint" hint="Hint: this is a hint" />;
}`
    };
    const example6 = {
        svelte: `<script>
    import { Checkbox } from "moth-ui-svelte";
<\/script>

<Checkbox style="width: 300px;" label="Custom style example" />`,
        react: `import { Checkbox } from "moth-ui-react";

export default function Example() {
    return <Checkbox style={{ width: 300 }} label="Custom style example" />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Checkbox</Text>
        <Text size="xl" variant="weak">A control that allows users to select one or more options from a set.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For options people can turn on or off independently, or a single agreement. To pick one option from several,
            use <Link size="l" href="/components/radio">Radio</Link>.
            <ForFramework>
                {#snippet svelte()}Use <Code>bind:checked</Code> to read the value.{/snippet}
                {#snippet react()}Use <Code>checked</Code> with <Code>onChange</Code> to read the value.{/snippet}
            </ForFramework>
        </Text>
        <CodeExample code={example1}>
            <Checkbox label="I agree to the terms" />
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For an option people can see but can't change right now.
        </Text>
        <CodeExample code={example2}>
           <Checkbox checked disabled label="This is disabled" />
        </CodeExample>
    </section>

    <section class="section" id="indeterminate">
        <Text size="2xl" weight="bold" as="h2">Indeterminate</Text>
        <Text size="l" variant="weak" measure="l">
            Shows that some, but not all, options in a group are selected, like a "Select all" checkbox above a list.
        </Text>
        <CodeExample code={example3}>
            <Checkbox label="Indeterminate" indeterminate />
        </CodeExample>
    </section>

    <section class="section" id="error">
        <Text size="2xl" weight="bold" as="h2">Error</Text>
        <Text size="l" variant="weak" measure="l">
            A message under the checkbox, for example when a required agreement isn't checked.
        </Text>
        <CodeExample code={example4}>
            <Checkbox label="Has error" error="This field has error" />
        </CodeExample>
    </section>

    <section class="section" id="hint">
        <Text size="2xl" weight="bold" as="h2">Hint</Text>
        <Text size="l" variant="weak" measure="l">
            Extra help under the label, when the label alone isn't enough.
        </Text>
        <CodeExample code={example5}>
            <Checkbox label="Has hint" hint="Hint: this is a hint" />
        </CodeExample>
    </section>

    <section class="section" id="custom-style">
        <Text size="2xl" weight="bold" as="h2">Custom style</Text>
        <Text size="l" variant="weak" measure="l">
            Pass <Code>style</Code> to adjust the wrapper, for example its width.
        </Text>
        <CodeExample code={example6}>
            <Checkbox style="width: 300px;" label="Custom style example" />
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
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>Applies the name attribute to the checkbox input.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>checked</Code></TableCell>
                    <TableCell>Whether the checkbox is checked. <ForFramework>{#snippet svelte()}Use <Code>bind:checked</Code> to read and update it.{/snippet}{#snippet react()}Pair it with <Code>onChange</Code> to control it, or use <Code>defaultChecked</Code> for a starting value.{/snippet}</ForFramework></TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>indeterminate</Code></TableCell>
                    <TableCell>Changes the state of the checkbox to indeterminate.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>label</Code></TableCell>
                    <TableCell>Adds a label above the checkbox.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>error</Code></TableCell>
                    <TableCell>Adds an error message below the checkbox.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>hint</Code></TableCell>
                    <TableCell>Adds a hint below the checkbox.</TableCell>
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
