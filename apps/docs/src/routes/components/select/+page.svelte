<script>
    import { User } from "@lucide/svelte";
    import {
        Code,
        Flex,
        Link,
        Select,
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
    import { slotType, slotWord } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
<\/script>

<Select
    name="Country"
    label="Country"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
/>`,
        react: `import { Select } from "moth-ui-react";

export default function Example() {
    return (
        <Select
            name="Country"
            label="Country"
            options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "mx", label: "Mexico" },
            ]}
            placeholder="Choose a country..."
        />
    );
}`
    };
    const example2 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
    import { User } from "@lucide/svelte";
<\/script>

<Select
    name="Role"
    label="Role"
    options={[
        { value: "developer", label: "Developer" },
        { value: "designer", label: "Designer" },
    ]}
>
    {#snippet prefix()}
        <User size={16} />
    {/snippet}
</Select>`,
        react: `import { Select } from "moth-ui-react";
import { User } from "lucide-react";

export default function Example() {
    return (
        <Select
            name="Role"
            label="Role"
            options={[
                { value: "developer", label: "Developer" },
                { value: "designer", label: "Designer" },
            ]}
            prefix={<User size={16} />}
        />
    );
}`
    };
    const example3 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
    import { User } from "@lucide/svelte";
<\/script>

<Select
    name="Expanded"
    label="Expanded"
    options={[
        { value: "developer", label: "Developer" },
        { value: "designer", label: "Designer" },
    ]}
    expanded
>
    {#snippet prefix()}
        <User size={16} />
    {/snippet}
</Select>`,
        react: `import { Select } from "moth-ui-react";
import { User } from "lucide-react";

export default function Example() {
    return (
        <Select
            name="Expanded"
            label="Expanded"
            options={[
                { value: "developer", label: "Developer" },
                { value: "designer", label: "Designer" },
            ]}
            expanded
            prefix={<User size={16} />}
        />
    );
}`
    };
    const example4 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
<\/script>

<Select
    name="Disabled"
    label="Disabled"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    disabled
/>`,
        react: `import { Select } from "moth-ui-react";

export default function Example() {
    return (
        <Select
            name="Disabled"
            label="Disabled"
            options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "mx", label: "Mexico" },
            ]}
            placeholder="Choose a country..."
            disabled
        />
    );
}`
    };

    const example5 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
<\/script>

<Select
    name="Error"
    label="Error"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    error="There is an error"
/>`,
        react: `import { Select } from "moth-ui-react";

export default function Example() {
    return (
        <Select
            name="Error"
            label="Error"
            options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "mx", label: "Mexico" },
            ]}
            placeholder="Choose a country..."
            error="There is an error"
        />
    );
}`
    };

    const example6 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
<\/script>

<Select
    name="Required"
    label="Label"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    required
/>`,
        react: `import { Select } from "moth-ui-react";

export default function Example() {
    return (
        <Select
            name="Required"
            label="Label"
            options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "mx", label: "Mexico" },
            ]}
            placeholder="Choose a country..."
            required
        />
    );
}`
    };

    const example7 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
<\/script>

<Select
    name="Hint"
    label="Hint"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    hint="Hint: this is a hint"
/>`,
        react: `import { Select } from "moth-ui-react";

export default function Example() {
    return (
        <Select
            name="Hint"
            label="Hint"
            options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "mx", label: "Mexico" },
            ]}
            placeholder="Choose a country..."
            hint="Hint: this is a hint"
        />
    );
}`
    };
    const example8 = {
        svelte: `<script>
    import { Select } from "moth-ui-svelte";
<\/script>

<Select
    name="CustomWidth"
    label="Custom Width"
    options={[
        { value: "mr", label: "Mr" },
        { value: "mrs", label: "Mrs" },
    ]}
    placeholder="Please Select"
    id="customWidth"
    style="width: 22rem;"
/>`,
        react: `import { Select } from "moth-ui-react";

export default function Example() {
    return (
        <Select
            name="CustomWidth"
            label="Custom Width"
            options={[
                { value: "mr", label: "Mr" },
                { value: "mrs", label: "Mrs" },
            ]}
            placeholder="Please Select"
            id="customWidth"
            style={{ width: "22rem" }}
        />
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Select</Text>
        <Text size="xl" variant="weak">A dropdown menu that lets users choose one option from a list of choices.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For picking one option from a list that's too long for <Link size="l"
            href="/components/radio">radios</Link>. Add a <Code>placeholder</Code> when there's no sensible default.
        </Text>
        <CodeExample code={example1}>
            <Select
                name="Country"
                label="Country"
                options={[
                    { value: 'us', label: 'United States' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'mx', label: 'Mexico' },
                ]}
                placeholder="Choose a country..."
            />
        </CodeExample>
    </section>

    <section class="section" id="hint">
        <Text size="2xl" weight="bold" as="h2">Hint</Text>
        <Text size="l" variant="weak" measure="l">
            Help under the field.
        </Text>
        <CodeExample code={example7}>
            <Select
                name="Hint"
                label="Hint"
                options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "mx", label: "Mexico" },
                ]}
                placeholder="Choose a country..."
                hint="Hint: this is a hint"
            />
        </CodeExample>
    </section>

    <section class="section" id="error">
        <Text size="2xl" weight="bold" as="h2">Error</Text>
        <Text size="l" variant="weak" measure="l">
            Says what went wrong, under the field.
        </Text>
        <CodeExample code={example5}>
            <Select
                name="Error"
                label="Error"
                options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "mx", label: "Mexico" },
                ]}
                placeholder="Choose a country..."
                error="There is an error"
            />
        </CodeExample>
    </section>

    <section class="section" id="required">
        <Text size="2xl" weight="bold" as="h2">Required</Text>
        <Text size="l" variant="weak" measure="l">
            Marks the field as required with an asterisk on its label.
        </Text>
        <CodeExample code={example6}>
            <Select
                name="Required"
                label="Label"
                options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "mx", label: "Mexico" },
                ]}
                placeholder="Choose a country..."
                required
            />
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For a value people can see but can't change right now.
        </Text>
        <CodeExample code={example4}>
            <Select
                name="Disabled"
                label="Disabled"
                options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "mx", label: "Mexico" },
                ]}
                placeholder="Choose a country..."
                disabled
            />
        </CodeExample>
    </section>

    <section class="section" id="prefix">
        <Text size="2xl" weight="bold" as="h2">Prefix</Text>
        <Text size="l" variant="weak" measure="l">
            A 16px icon in the <Code>prefix</Code> {slotWord()}.
        </Text>
        <CodeExample code={example2}>
           <Select
                name="Role"
                label="Role"
                options={[
                    { value: 'developer', label: 'Developer' },
                    { value: 'designer', label: 'Designer' },
                ]}
            >
                {#snippet prefix()}
                    <User size={16} />
                {/snippet}
            </Select>
        </CodeExample>
    </section>

    <section class="section" id="full-width">
        <Text size="2xl" weight="bold" as="h2">Full width</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>expanded</Code> stretches the field to fill its container.
        </Text>
        <CodeExample code={example3}>
            <Select
                name="Expanded"
                label="Expanded"
                options={[
                    { value: "developer", label: "Developer" },
                    { value: "designer", label: "Designer" },
                ]}
                expanded
            >
                {#snippet prefix()}
                    <User size={16} />
                {/snippet}
            </Select>
        </CodeExample>
    </section>

    <section class="section" id="custom-width">
        <Text size="2xl" weight="bold" as="h2">Custom width</Text>
        <Text size="l" variant="weak" measure="l">
            Pass <Code>style</Code> to set a specific width.
        </Text>
        <CodeExample code={example8}>
            <Select
                name="CustomWidth"
                label="Custom Width"
                options={[
                    { value: "mr", label: "Mr" },
                    { value: "mrs", label: "Mrs" },
                ]}
                placeholder="Please Select"
                id="customWidth"
                style="width: 22rem;"
            />
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
                    <TableCell>Adds a label above the select element.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>placeholder</Code></TableCell>
                    <TableCell>Provides a subtle hint within the select.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>options</Code></TableCell>
                    <TableCell>Specifies the list of options availble in the select.</TableCell>
                    <TableCell><Code>{`{ value: string, label: string }[]`}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>Sets the name HTML attribute to the select element.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>expanded</Code></TableCell>
                    <TableCell>Allows the select element to stretch to full width.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>required</Code></TableCell>
                    <TableCell>Makes the input a required field and styles the label with a red asterisk.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>error</Code></TableCell>
                    <TableCell>Adds an error message below the select.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>hint</Code></TableCell>
                    <TableCell>Adds a hint below the select.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>autocomplete</Code></TableCell>
                    <TableCell>Whether the browser may autofill the field.</TableCell>
                    <TableCell><Code>on</Code> | <Code>off</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>prefix</Code></TableCell>
                    <TableCell>Content shown inside the field before the selected option, such as an icon.</TableCell>
                    <TableCell><Code>{slotType()}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>suffix</Code></TableCell>
                    <TableCell>Content shown inside the field after the selected option.</TableCell>
                    <TableCell><Code>{slotType()}</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>value</Code></TableCell>
                    <TableCell>The selected option's value. <ForFramework>{#snippet svelte()}Use <Code>bind:value</Code> to read and update it.{/snippet}{#snippet react()}Pair it with <Code>onChange</Code> to control it, or use <Code>defaultValue</Code> for a starting value.{/snippet}</ForFramework></TableCell>
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
