<script>
    import {
        Code,
        Fieldset,
        Flex,
        Radio,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";



    let example1 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio" name="testRadio" label="Checked" checked value="1"/>
        <Radio id="radio2" name="testRadio" label="Unchecked" value="2" />
    </Flex>
</Fieldset>`;
    let example2 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios" required>
    <Flex direction="column" gap="s">
        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
    </Flex>
</Fieldset>`;
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Fieldset</Text>
        <Text size="xl" variant="weak">A grouping component that organizes related form elements with a shared label.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            Groups related controls under one label, like a set of radios. The label names the whole group, so each
            control can keep a short label of its own.
        </Text>
        <CodeExample code={example1}>
            <Fieldset label="Radios">
                <Flex direction="column" gap="s">
                    <Radio id="radio" name="testRadio-basic" label="Checked" checked value="1"/>
                    <Radio id="radio2" name="testRadio-basic" label="Unchecked" value="2" />
                </Flex>
            </Fieldset>
        </CodeExample>
    </section>

    <section class="section" id="required">
        <Text size="2xl" weight="bold" as="h2">Required</Text>
        <Text size="l" variant="weak" measure="l">
            Marks the group as required with an asterisk on its label.
        </Text>
        <CodeExample code={example2}>
            <Fieldset label="Radios" required>
                <Flex direction="column" gap="s">
                    <Radio id="radio5" name="testRadio-required" label="Checked" checked value="5" />
                    <Radio id="radio6" name="testRadio-required" label="Unchecked" value="6" />
                </Flex>
            </Fieldset>
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
                    <TableCell><Code>required</Code></TableCell>
                    <TableCell>Adds a red asterisk to the label for required fields.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>label</Code></TableCell>
                    <TableCell>Legend text that names the group of fields. Required.</TableCell>
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
