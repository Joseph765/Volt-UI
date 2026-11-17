<script>
    import {
        Code,
        Fieldset,
        Flex,
        Radio,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'required', label: 'Example: Required' }
    ];

    let selectedExample = $state('basic');

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

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Fieldset</Text>
        <Text size="xl" variant="weak">A grouping component that organizes related form elements with a shared label.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            {options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "basic"}
            <CodeExample code={example1}>
                <Fieldset label="Radios">
                    <Flex direction="column" gap="s">
                        <Radio id="radio" name="testRadio" label="Checked" checked value="1"/>
                        <Radio id="radio2" name="testRadio" label="Unchecked" value="2" />
                    </Flex>
                </Fieldset>
            </CodeExample>
        {:else if selectedExample === "required"}
            <CodeExample code={example2}>
                <Fieldset label="Radios" required>
                    <Flex direction="column" gap="s">
                        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
                        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
                    </Flex>
                </Fieldset>
            </CodeExample>
        {/if}
    </Flex>
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
</Flex>