<script>
    import { 
        Code,
        CodeExample,
        Flex, 
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text,
        Toggle
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'error', label: 'Example: Error' },
        { value: 'hint', label: 'Example: Hint' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Flex direction="column">
    <Toggle label="Checked" name="checkedToggle" checked />
    <Toggle label="Unchecked" name="unchecked" />
</Flex>`;
    let example2 = `<Flex direction="column">
    <Toggle label="Checked" name="checkedDisabled" checked disabled />
    <Toggle label="Unchecked" name="uncheckedDisabled" disabled />
</Flex>`;
    let example3 = `<Flex direction="column">
    <Toggle label="Checked" name="checkedError" checked error="There is an error" />
    <Toggle label="Unchecked" name="uncheckedError" error="There is an error" />
</Flex>`;
    let example4 = `<Toggle label="Label" name="helpText" hint="Hint: this is a hint" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Toggle</Text>
        <Text size="xl" variant="weak">A switch control that allows users to turn an option on or off.</Text>
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
                <Flex direction="column">
                    <Toggle label="Checked" name="checkedToggle" checked />
                    <Toggle label="Unchecked" name="unchecked" />
                </Flex>
            </CodeExample>
        {:else if selectedExample === "disabled"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Toggle label="Checked" name="checkedDisabled" checked disabled />
                    <Toggle label="Unchecked" name="uncheckedDisabled" disabled />
                </Flex>
            </CodeExample>
        {:else if selectedExample === "error"}
            <CodeExample code={example3}>
                <Flex direction="column">
                    <Toggle label="Checked" name="checkedError" checked error="There is an error" />
                    <Toggle label="Unchecked" name="uncheckedError" error="There is an error" />
                </Flex>
            </CodeExample>
        {:else if selectedExample === "hint"}
            <CodeExample code={example4}>
                <Toggle label="Label" name="helpText" hint="Hint: this is a hint" />
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
                <TableCell><Code>checked</Code></TableCell>
                <TableCell>Changes the status of the toggle to on.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>label</Code></TableCell>
                <TableCell>Adds a label beside the toggle button.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>name</Code></TableCell>
                <TableCell>Provides the name attribute to the element attribute.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>disabled</Code></TableCell>
                <TableCell>Makes the toggle inaccessible.</TableCell>
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
        </TableBody>
    </Table>
</Flex>