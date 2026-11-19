<script>
    import { ChevronDown, Minus, Plus, X } from "@lucide/svelte";
    import {
        Button,
        Code,
        Flex,
        Link,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let example1 = `<script>
    import { Button, Flex } from "moth-ui-svelte";
<\/script>

<Flex>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="danger">Danger</Button>
</Flex>`;
    let example2 = `<script>
    import { Button } from "moth-ui-svelte";
<\/script>

<Button disabled>Disabled</Button>`;
    let example3 = `<script>
    import { Button, Flex } from "moth-ui-svelte";
    import { ChevronDown, Minus, Plus, X } from "@lucide/svelte";
<\/script>

<Flex>
    <Button>
        {#snippet start()}<Plus size={16} />{/snippet}
        Add
    </Button>
    <Button>
        {#snippet end()}<Plus size={16} />{/snippet}
        Add
    </Button>
    <Button variant="secondary">
        {#snippet start()}<Minus size={16} />{/snippet}
        Remove
    </Button>
    <Button variant="tertiary" aria-label="Show more">
        <ChevronDown size={24} />
    </Button>
    <Button variant="danger">
        {#snippet start()}<X size={16} />{/snippet}
        Delete
    </Button>
</Flex>`;
    let example4 = `<script>
    import { Button, Flex } from "moth-ui-svelte";
<\/script>

<Flex>
    <Button size="m">Medium</Button>
    <Button size="l">Large</Button>
</Flex>`;
    let example5 = `<script>
    import { Button } from "moth-ui-svelte";
<\/script>

<Button expanded>Expanded</Button>`;
    let example6 = `<script>
    import { Button } from "moth-ui-svelte";
<\/script>

<Button href="/components">View components</Button>`;
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Button</Text>
        <Text size="xl" variant="weak">An interactive element that triggers actions or submits forms when clicked.</Text>
    </Flex>

    <section class="section" id="variants">
        <Text size="2xl" weight="bold" as="h2">Variants</Text>
        <Text size="l" variant="weak" measure="l">
            Pick a variant by how important the action is. <strong>Primary</strong> is the main action: use at most
            one per view, placed last in a group. <strong>Secondary</strong> is for alternatives next to it, like
            Cancel. <strong>Tertiary</strong> is for low-emphasis or repeated actions, like per-row actions in a
            list. <strong>Danger</strong> is only for actions that delete something or can't be undone.
        </Text>
        <CodeExample code={example1}>
            <Flex>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="danger">Danger</Button>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="sizes">
        <Text size="2xl" weight="bold" as="h2">Sizes</Text>
        <Text size="l" variant="weak" measure="l">
            Medium is the default, and it's the same height as a field, so the two line up. Use large only for a
            standalone call to action, like on a landing page.
        </Text>
        <CodeExample code={example4}>
            <Flex>
                <Button size="m">Medium</Button>
                <Button size="l">Large</Button>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="icons">
        <Text size="2xl" weight="bold" as="h2">With icon</Text>
        <Text size="l" variant="weak" measure="l">
            Put an icon in the <Code>start</Code> or <Code>end</Code> snippet: 16px in medium buttons, 20px in large
            ones. A button with only an icon needs an <Code>aria-label</Code>.
        </Text>
        <CodeExample code={example3}>
            <Flex>
                <Button>
                    {#snippet start()}<Plus size={16} />{/snippet}
                    Add
                </Button>
                <Button>
                    {#snippet end()}<Plus size={16} />{/snippet}
                    Add
                </Button>
                <Button variant="secondary">
                    {#snippet start()}<Minus size={16} />{/snippet}
                    Remove
                </Button>
                <Button variant="tertiary" aria-label="Show more">
                    <ChevronDown size={24} />
                </Button>
                <Button variant="danger">
                    {#snippet start()}<X size={16} />{/snippet}
                    Delete
                </Button>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For an action that isn't available yet, like submitting a form that isn't complete.
        </Text>
        <CodeExample code={example2}>
            <Button disabled>Disabled</Button>
        </CodeExample>
    </section>

    <section class="section" id="full-width">
        <Text size="2xl" weight="bold" as="h2">Full width</Text>
        <Text size="l" variant="weak" measure="l">
            <Code>expanded</Code> stretches the button to fill its container, like the submit button of a sign-in
            card or a form on a phone.
        </Text>
        <CodeExample code={example5}>
            <Button expanded>Expanded</Button>
        </CodeExample>
    </section>

    <section class="section" id="link">
        <Text size="2xl" weight="bold" as="h2">Link</Text>
        <Text size="l" variant="weak" measure="l">
            Give a button an <Code>href</Code> when it takes people to another page. For a link inside a sentence,
            use <Link size="l" href="/components/link">Link</Link> instead.
        </Text>
        <CodeExample code={example6}>
            <Button href="/components">View components</Button>
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
                    <TableCell>The style of the button based on level of importance. Danger is for destructive actions.</TableCell>
                    <TableCell><Code>primary</Code> | <Code>secondary</Code> | <Code>tertiary</Code> | <Code>danger</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>size</Code></TableCell>
                    <TableCell>Allows for a larger button style.</TableCell>
                    <TableCell><Code>m</Code> | <Code>l</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>expanded</Code></TableCell>
                    <TableCell>Allows the button to stretch to full width.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>href</Code></TableCell>
                    <TableCell>Allows the button to behave like a link.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>start</Code></TableCell>
                    <TableCell>Content placed before the label, usually an icon.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>end</Code></TableCell>
                    <TableCell>Content placed after the label, usually an icon.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>onclick</Code></TableCell>
                    <TableCell>Fires when the button (or link) is clicked.</TableCell>
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

    .section :global(strong) {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }
</style>
