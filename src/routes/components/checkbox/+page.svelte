<script>
    import { 
        Checkbox,
        Code,
        Flex, 
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
        { value: 'indeterminate', label: 'Example: Indeterminate' },
        { value: 'error', label: 'Example: Error' },
        { value: 'hint', label: 'Example: Hint' },
        { value: 'customStyle', label: 'Example: Custom Style' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Checkbox } from "$volt";
<\/script>

<Checkbox label="I agree to the terms" />`;
    let example2 = `<script>
    import { Checkbox } from "$volt";
<\/script>

<Checkbox checked disabled label="This is disabled" />`;
    let example3 = `<script>
    import { Checkbox } from "$volt";
<\/script>

<Checkbox label="Indeterminate" indeterminate />`;
    let example4 = `<script>
    import { Checkbox } from "$volt";
<\/script>

<Checkbox label="Has error" error="This field has error" />`;
    let example5 = `<script>
    import { Checkbox } from "$volt";
<\/script>

<Checkbox label="Has hint" hint="Hint: this is a hint" />`;
    let example6 = `<script>
    import { Checkbox } from "$volt";
<\/script>

<Checkbox style="width: 300px;" label="Custom style example" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Checkbox</Text>
        <Text size="xl" variant="weak">A control that allows users to select one or more options from a set.</Text>
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
                <Checkbox label="I agree to the terms" />
            </CodeExample>
        {:else if selectedExample === "disabled"}
            <CodeExample code={example2}>
               <Checkbox checked disabled label="This is disabled" />
            </CodeExample>
        {:else if selectedExample === "indeterminate"}
            <CodeExample code={example3}>
                <Checkbox label="Indeterminate" indeterminate />
            </CodeExample>
        {:else if selectedExample === "error"}
            <CodeExample code={example4}>
                <Checkbox label="Has error" error="This field has error" />
            </CodeExample>
        {:else if selectedExample === "hint"}
            <CodeExample code={example5}>
                <Checkbox label="Has hint" hint="Hint: this is a hint" />
            </CodeExample>
        {:else if selectedExample === "customStyle"}
            <CodeExample code={example6}>
                <Checkbox style="width: 300px;" label="Custom style example" />
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
                <TableCell><Code>name</Code></TableCell>
                <TableCell>Applies the name attribute to the checkbox input.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>checked</Code></TableCell>
                <TableCell>Changes the state of the checkbox to checked.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>disabled</Code></TableCell>
                <TableCell>Makes the checkbox inaccessible.</TableCell>
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
</Flex>