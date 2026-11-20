<script>
    import { Phone, Search } from "@lucide/svelte";
    import {
        Code,
        Flex,
        Input,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";
    import ForFramework from "../../ForFramework.svelte";
    import { eventName, slotType, slotWord } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { Flex, Input } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Input type="text" name="email" label="Email" placeholder="Example@example.com" />
    <Input type="password" name="password" label="Password" placeholder="Password" />
</Flex>`,
        react: `import { Flex, Input } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Input type="text" name="email" label="Email" placeholder="Example@example.com" />
            <Input type="password" name="password" label="Password" placeholder="Password" />
        </Flex>
    );
}`
    };

    const example2 = {
        svelte: `<script>
    import { Input } from "moth-ui-svelte";
<\/script>

<Input type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />`,
        react: `import { Input } from "moth-ui-react";

export default function Example() {
    return <Input type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />;
}`
    };

    const example3 = {
        svelte: `<script>
    import { Input } from "moth-ui-svelte";
<\/script>

<Input type="text" name="required" label="Required" placeholder="Required" value="Value" required />`,
        react: `import { Input } from "moth-ui-react";

export default function Example() {
    return <Input type="text" name="required" label="Required" placeholder="Required" defaultValue="Value" required />;
}`
    };
    const example4 = {
        svelte: `<script>
    import { Flex, Input } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Input label="Prefix" name="money">
        {#snippet prefix()}\${/snippet}
    </Input>
    <Input label="Suffix" type="text" name="amount">
        {#snippet suffix()}cm{/snippet}
    </Input>
</Flex>`,
        react: `import { Flex, Input } from "moth-ui-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Input label="Prefix" name="money" prefix="$" />
            <Input label="Suffix" type="text" name="amount" suffix="cm" />
        </Flex>
    );
}`
    };
    const example5 = {
        svelte: `<script>
    import { Input } from "moth-ui-svelte";
<\/script>

<Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />`,
        react: `import { Input } from "moth-ui-react";

export default function Example() {
    return <Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />;
}`
    };

    const example6 = {
        svelte: `<script>
    import { Input } from "moth-ui-svelte";
<\/script>

<Input type="text" name="hint" label="Hint" hint="Hint: this is a hint" />`,
        react: `import { Input } from "moth-ui-react";

export default function Example() {
    return <Input type="text" name="hint" label="Hint" hint="Hint: this is a hint" />;
}`
    };
    const example7 = {
        svelte: `<script>
    import { Flex, Input } from "moth-ui-svelte";
    import { Phone, Search } from "@lucide/svelte";
<\/script>

<Flex direction="column">
    <Input label="Icon Prefix" name="iconPrefix">
        {#snippet prefix()}
            <Search size={16} />
        {/snippet}
    </Input>
    <Input label="Icon Prefix 2" name="iconPrefix2">
        {#snippet prefix()}
            <Phone size={16} />
        {/snippet}
    </Input>
</Flex>`,
        react: `import { Flex, Input } from "moth-ui-react";
import { Phone, Search } from "lucide-react";

export default function Example() {
    return (
        <Flex direction="column">
            <Input label="Icon Prefix" name="iconPrefix" prefix={<Search size={16} />} />
            <Input label="Icon Prefix 2" name="iconPrefix2" prefix={<Phone size={16} />} />
        </Flex>
    );
}`
    };
    const example8 = {
        svelte: `<script>
    import { Input } from "moth-ui-svelte";
<\/script>

<Input type="text" name="custom" label="Custom Width" style="width: 22rem;" />`,
        react: `import { Input } from "moth-ui-react";

export default function Example() {
    return <Input type="text" name="custom" label="Custom Width" style={{ width: "22rem" }} />;
}`
    };
    const example9 = {
        svelte: `<script>
    import { Input } from "moth-ui-svelte";
<\/script>

<Input type="text" name="errorPresent" label="Error" error="Incorrect format" />`,
        react: `import { Input } from "moth-ui-react";

export default function Example() {
    return <Input type="text" name="errorPresent" label="Error" error="Incorrect format" />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Input</Text>
        <Text size="xl" variant="weak">A field that captures single-line text or data input from the user.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            A single-line field with a label. Set <Code>type</Code>, like <Code>email</Code> or <Code>password</Code>,
            so browsers offer the right keyboard and autofill.
        </Text>
        <CodeExample code={example1}>
            <Flex direction="column">
                <Input type="text" name="email" label="Email" placeholder="Example@example.com" />
                <Input type="password" name="password" label="Password" placeholder="Password" />
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="hint">
        <Text size="2xl" weight="bold" as="h2">Hint</Text>
        <Text size="l" variant="weak" measure="l">
            Help under the field, like the expected format.
        </Text>
        <CodeExample code={example6}>
            <Input type="text" name="example-hint" label="Hint" hint="Hint: this is a hint" />
        </CodeExample>
    </section>

    <section class="section" id="error">
        <Text size="2xl" weight="bold" as="h2">Error</Text>
        <Text size="l" variant="weak" measure="l">
            Says what went wrong, under the field. Keep what the person typed so they can fix it.
        </Text>
        <CodeExample code={example9}>
            <Input type="text" name="errorPresent" label="Error" error="Incorrect format" />
        </CodeExample>
    </section>

    <section class="section" id="required">
        <Text size="2xl" weight="bold" as="h2">Required</Text>
        <Text size="l" variant="weak" measure="l">
            Marks the field as required with an asterisk on its label.
        </Text>
        <CodeExample code={example3}>
            <Input type="text" name="example-required" label="Required" placeholder="Required" value="Value" required />
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For a value people can see but can't change right now.
        </Text>
        <CodeExample code={example2}>
            <Input type="text" name="example-disabled" label="Disabled" placeholder="Disabled" disabled />
        </CodeExample>
    </section>

    <section class="section" id="prefix-suffix">
        <Text size="2xl" weight="bold" as="h2">Prefix and suffix</Text>
        <Text size="l" variant="weak" measure="l">
            Text before or after the value, like a currency or a unit.
        </Text>
        <CodeExample code={example4}>
            <Flex direction="column">
                <Input label="Prefix" name="money">
                    {#snippet prefix()}${/snippet}
                </Input>
                <Input label="Suffix" type="text" name="amount">
                    {#snippet suffix()}cm{/snippet}
                </Input>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="icon-prefix">
        <Text size="2xl" weight="bold" as="h2">Icon prefix</Text>
        <Text size="l" variant="weak" measure="l">
            A 16px icon in the <Code>prefix</Code> {slotWord()}, like a search icon.
        </Text>
        <CodeExample code={example7}>
            <Flex direction="column">
                <Input label="Icon Prefix" name="iconPrefix">
                    {#snippet prefix()}
                        <Search size={16} />
                    {/snippet}
                </Input>
                <Input label="Icon Prefix 2" name="iconPrefix2">
                    {#snippet prefix()}
                        <Phone size={16} />
                    {/snippet}
                </Input>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="full-width">
        <Text size="2xl" weight="bold" as="h2">Full width</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>expanded</Code> stretches the field to fill its container.
        </Text>
        <CodeExample code={example5}>
            <Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />
        </CodeExample>
    </section>

    <section class="section" id="custom-width">
        <Text size="2xl" weight="bold" as="h2">Custom width</Text>
        <Text size="l" variant="weak" measure="l">
            Pass <Code>style</Code> to set a specific width.
        </Text>
        <CodeExample code={example8}>
            <Input type="text" name="custom" label="Custom Width" style="width: 22rem;" />
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
                    <TableCell>Adds a label above the input element.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>placeholder</Code></TableCell>
                    <TableCell>Provides a subtle hint within the input. Useful to communicate the proper formatting required.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>Provides the name attribute to the input html element.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>id</Code></TableCell>
                    <TableCell>The field's id, which its label points at. Defaults to <Code>name</Code>.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>required</Code></TableCell>
                    <TableCell>Makes the input a required field and styles the label with a red asterisk.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>expanded</Code></TableCell>
                    <TableCell>Allows the input to stretch to full width.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>error</Code></TableCell>
                    <TableCell>Adds an error message below the input.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>hint</Code></TableCell>
                    <TableCell>Adds a hint below the input.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>align</Code></TableCell>
                    <TableCell>Aligns the text within the input.</TableCell>
                    <TableCell><Code>start</Code> | <Code>end</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>value</Code></TableCell>
                    <TableCell>Current text. <ForFramework>{#snippet svelte()}Use <Code>bind:value</Code> to read and update it.{/snippet}{#snippet react()}Pair it with <Code>onChange</Code> to control it, or use <Code>defaultValue</Code> for a starting value.{/snippet}</ForFramework></TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>type</Code></TableCell>
                    <TableCell>The input type, such as <Code>text</Code>, <Code>email</Code>, <Code>password</Code> or <Code>number</Code>. Defaults to <Code>text</Code>.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>autocomplete</Code></TableCell>
                    <TableCell>Whether the browser may autofill the field.</TableCell>
                    <TableCell><Code>on</Code> | <Code>off</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>prefix</Code></TableCell>
                    <TableCell>Content shown inside the field before the text, such as an icon or a unit.</TableCell>
                    <TableCell><Code>{slotType()}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>suffix</Code></TableCell>
                    <TableCell>Content shown inside the field after the text, such as a unit.</TableCell>
                    <TableCell><Code>{slotType()}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>{eventName("onchange")}</Code></TableCell>
                    <TableCell>Fires when the value is committed (on blur or Enter).</TableCell>
                    <TableCell><Code>function</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>{eventName("onkeydown")}</Code></TableCell>
                    <TableCell>Fires for each key press while the field is focused.</TableCell>
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
