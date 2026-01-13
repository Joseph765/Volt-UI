<script>
    import { 
        Code,
        CodeExample,
        Flex, 
        Icon,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'prefix', label: 'Example: Prefix' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'error', label: 'Example: Error' },
        { value: 'required', label: 'Example: Required' },
        { value: 'hint', label: 'Example: Hint' },
        { value: 'customStyle', label: 'Example: Custom Style' },
    ];

    let selectedExample = 'basic';

    let example1 = `<Select
    name="Country"
    label="Country"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
/>`;
    let example2 = `<Select
    name="Role"
    label="Role"
    options={[
        { value: "developer", label: "Developer" },
        { value: "designer', label: "Designer" },
    ]}
>
    <span slot="prefix">
        <Icon name="user" />
    </span>
</Select>`;
    let example3 = `<Select
    name="Expanded"
    label="Expanded"
    options={[
        { value: "developer", label: "Developer" },
        { value: "designer", label: "Designer" },
    ]}
    expanded
>
    <span slot="prefix">
        <Icon name="user" />
    </span>
</Select>`;
    let example4 = `<Select
    name="Disabled"
    label="Disabled"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    disabled
/>`;
    let example5 = `<Select
    name="Error"
    label="Error"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    error="There is an error"
/>`;
    let example6 = `<Select
    name="Required"
    label="Label"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    required
/>`;
    let example7 = `<Select
    name="Hint"
    label="Hint"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    hint="Hint: this is a hint"
/>`;
    let example8 = `<Select
    name="CustomWidth"
    label="Custom Width"
    options={[
        { value: "mr", label: "Mr" },
        { value: "mrs", label: "Mrs" },
    ]}
    placeholder="Please Select"
    id="customWidth"
    style="width: 22rem;"
/>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Select</Text>
        <Text size="xl" variant="weak">A dropdown menu that lets users choose one option from a list of choices.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
            style={selectedExample === "customStyle" ? "width: 13rem;" : ""}
        />
        {#if selectedExample === "basic"}
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
        {:else if selectedExample === "prefix"}
            <CodeExample code={example2}>
               <Select
                    name="Role"
                    label="Role"
                    options={[
                        { value: 'developer', label: 'Developer' },
                        { value: 'designer', label: 'Designer' },
                    ]}
                >
                    <span slot="prefix">
                        <Icon name="user" />
                    </span>
                </Select>
            </CodeExample>
        {:else if selectedExample === "expanded"}
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
                    <span slot="prefix">
                        <Icon name="user" />
                    </span>
                </Select>
            </CodeExample>
        {:else if selectedExample === "disabled"}
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
        {:else if selectedExample === "error"}
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
        {:else if selectedExample === "required"}
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
        {:else if selectedExample === "hint"}
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
        {:else if selectedExample === "customStyle"}
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
                <TableCell>Makes the select inaccessible.</TableCell>
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
        </TableBody>
    </Table>
</Flex>