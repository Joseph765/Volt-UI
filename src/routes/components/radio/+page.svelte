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
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'required', label: 'Example: Required' },
        { value: 'hint', label: 'Example: Hint' },
        { value: 'error', label: 'Example: Error' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Fieldset, Flex, Radio } from "$volt";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio" name="testRadio" label="Checked" checked value="1"/>
        <Radio id="radio2" name="testRadio" label="Unchecked" value="2" />
    </Flex>
</Fieldset>`;
    let example2 = `<script>
    import { Fieldset, Flex, Radio } from "$volt";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio3" name="testRadio" label="Checked" checked value="3" disabled />
        <Radio id="radio4" name="testRadio" label="Unchecked" value="4" disabled />
    </Flex>
</Fieldset>`;
    let example3 = `<script>
    import { Fieldset, Flex, Radio } from "$volt";
<\/script>

<Fieldset label="Radios" required>
    <Flex direction="column" gap="s">
        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
    </Flex>
</Fieldset>`;
    let example4 = `<script>
    import { Fieldset, Flex, Radio } from "$volt";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio7" name="testRadio" label="Checked" checked value="7" hint="Hint: this is a hint" />
        <Radio id="radio8" name="testRadio" label="Unchecked" value="8" /> 
    </Flex>
</Fieldset>`;
    let example5 = `<script>
    import { Fieldset, Flex, Radio } from "$volt";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio9" name="testRadio" label="Checked" checked value="9" error="There is an error" />
        <Radio id="radio10" name="testRadio" label="Unchecked" value="10" />
    </Flex>
</Fieldset>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Radio</Text>
        <Text size="xl" variant="weak">A control that allows users to select exactly one option from a set.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
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
        {:else if selectedExample === "disabled"}
            <CodeExample code={example2}>
                <Fieldset label="Radios">
                    <Flex direction="column" gap="s">
                        <Radio id="radio3" name="testRadio" label="Checked" checked value="3" disabled />
                        <Radio id="radio4" name="testRadio" label="Unchecked" value="4" disabled />
                    </Flex>
                </Fieldset>
            </CodeExample>
        {:else if selectedExample === "required"}
            <CodeExample code={example3}>
                <Fieldset label="Radios" required>
                    <Flex direction="column" gap="s">
                        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
                        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
                    </Flex>
                </Fieldset>
            </CodeExample>
        {:else if selectedExample === "hint"}
            <CodeExample code={example4}>
                <Fieldset label="Radios">
                    <Flex direction="column" gap="s">
                        <Radio id="radio7" name="testRadio" label="Checked" checked value="7" hint="Hint: this is a hint" />
                        <Radio id="radio8" name="testRadio" label="Unchecked" value="8" /> 
                    </Flex>
                </Fieldset>
            </CodeExample>
        {:else if selectedExample === "error"}
            <CodeExample code={example5}>
                <Fieldset label="Radios">
                    <Flex direction="column" gap="s">
                        <Radio id="radio9" name="testRadio" label="Checked" checked value="9" error="There is an error" />
                        <Radio id="radio10" name="testRadio" label="Unchecked" value="10" />
                    </Flex>
                </Fieldset>
            </CodeExample>
        {/if}
    </Flex>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell><Code>variant</Code></TableCell>
                <TableCell>The style of the badge indicating status.</TableCell>
                <TableCell><Code>neutral</Code> | <Code>danger</Code> | <Code>warning</Code> | <Code>success</Code> | <Code>info</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>label</Code></TableCell>
                <TableCell>Adds a label beside the radio button.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>name</Code></TableCell>
                <TableCell>Sets the name HTML attribute to the input element.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>checked</Code></TableCell>
                <TableCell>Changes the state of the radio to checked.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>disabled</Code></TableCell>
                <TableCell>Makes the radio button inaccessible.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>hint</Code></TableCell>
                <TableCell>Adds a hint below the radio button.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>error</Code></TableCell>
                <TableCell>Adds an error message below the radio button.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>