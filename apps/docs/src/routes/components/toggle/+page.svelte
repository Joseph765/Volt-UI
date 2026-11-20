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
        Toggle
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";
    import ForFramework from "../../ForFramework.svelte";
    import { eventName } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { Flex, Toggle } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Toggle label="Checked" name="checkedToggle" checked />
    <Toggle label="Unchecked" name="unchecked" />
</Flex>`,
        react: `import { Flex, Toggle } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Toggle label="Checked" name="checkedToggle" defaultChecked />
            <Toggle label="Unchecked" name="unchecked" />
        </Flex>
    );
}`
    };

    const example2 = {
        svelte: `<script>
    import { Flex, Toggle } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Toggle label="Checked" name="checkedDisabled" checked disabled />
    <Toggle label="Unchecked" name="uncheckedDisabled" disabled />
</Flex>`,
        react: `import { Flex, Toggle } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Toggle label="Checked" name="checkedDisabled" defaultChecked disabled />
            <Toggle label="Unchecked" name="uncheckedDisabled" disabled />
        </Flex>
    );
}`
    };

    const example3 = {
        svelte: `<script>
    import { Flex, Toggle } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Toggle label="Checked" name="checkedError" checked error="There is an error" />
    <Toggle label="Unchecked" name="uncheckedError" error="There is an error" />
</Flex>`,
        react: `import { Flex, Toggle } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Toggle label="Checked" name="checkedError" defaultChecked error="There is an error" />
            <Toggle label="Unchecked" name="uncheckedError" error="There is an error" />
        </Flex>
    );
}`
    };

    const example4 = {
        svelte: `<script>
    import { Toggle } from "moth-ui-svelte";
<\/script>

<Toggle label="Label" name="helpText" hint="Hint: this is a hint" />`,
        react: `import { Toggle } from "moth-ui-react";

export default function Example() {
    return <Toggle label="Label" name="helpText" hint="Hint: this is a hint" />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Toggle</Text>
        <Text size="xl" variant="weak">A switch control that allows users to turn an option on or off.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For a setting that takes effect right away, like turning notifications on. For a choice that's submitted
            with a form, use a <Link size="l" href="/components/checkbox">Checkbox</Link>.
        </Text>
        <CodeExample code={example1}>
            <Flex direction="column">
                <Toggle label="Checked" name="checkedToggle" checked />
                <Toggle label="Unchecked" name="unchecked" />
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="hint">
        <Text size="2xl" weight="bold" as="h2">Hint</Text>
        <Text size="l" variant="weak" measure="l">
            Help under the label, like what the setting changes.
        </Text>
        <CodeExample code={example4}>
            <Toggle label="Label" name="helpText" hint="Hint: this is a hint" />
        </CodeExample>
    </section>

    <section class="section" id="error">
        <Text size="2xl" weight="bold" as="h2">Error</Text>
        <Text size="l" variant="weak" measure="l">
            A message under the toggle.
        </Text>
        <CodeExample code={example3}>
            <Flex direction="column">
                <Toggle label="Checked" name="checkedError" checked error="There is an error" />
                <Toggle label="Unchecked" name="uncheckedError" error="There is an error" />
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For a setting people can see but can't change right now.
        </Text>
        <CodeExample code={example2}>
            <Flex direction="column">
                <Toggle label="Checked" name="checkedDisabled" checked disabled />
                <Toggle label="Unchecked" name="uncheckedDisabled" disabled />
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
                    <TableCell><Code>checked</Code></TableCell>
                    <TableCell>Whether the toggle is on. <ForFramework>{#snippet svelte()}Use <Code>bind:checked</Code> to read and update it.{/snippet}{#snippet react()}Pair it with <Code>onChange</Code> to control it, or use <Code>defaultChecked</Code> for a starting value.{/snippet}</ForFramework></TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>label</Code></TableCell>
                    <TableCell>Adds a label beside the toggle button.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>Sets the input's name attribute.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>error</Code></TableCell>
                    <TableCell>Adds an error message below the toggle.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell><Code>hint</Code></TableCell>
                    <TableCell>Adds a hint below the toggle.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>{eventName("onchange")}</Code></TableCell>
                    <TableCell>Fires when the toggle is switched.</TableCell>
                    <TableCell><Code>function</Code></TableCell>
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
