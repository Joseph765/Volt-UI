<script>
    import {
        Code,
        CodeExample,
        Flex,
        Icon,
        Input,
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
        { value: 'types', label: 'Example: Types' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'required', label: 'Example: Required' },
        { value: 'error', label: 'Example: Error' },
        { value: 'prefixAndSuffix', label: 'Example: Prefix & Suffix' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'hint', label: 'Example: Hint' },
        { value: 'iconPrefix', label: 'Example: Icon Prefix' },
        { value: 'customStyle', label: 'Example: Custom Style' }
    ];

    let selectedExample = 'types';

    let example1 = `<Flex direction="column">
    <Input type="text" name="email" label="Email" placeholder="Example@example.com" />
    <Input type="password" name="password" label="Password" placeholder="Password" />
</Flex>`;
    let example2 = `<Input type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />`;
    let example3 = `<Input type="text" name="required" label="Required" placeholder="Required" value="Value" required />`;
    let example4 = `<Flex direction="column">
    <Input label="Prefix" name="money">
        <svelte:fragment slot="prefix">$</svelte:fragment>
    </Input>
    <Input label="Suffix" type="text" name="amount">
        <svelte:fragment slot="suffix">cm</svelte:fragment>
    </Input>
</Flex>`;
    let example5 = `<Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />`;
    let example6 = `<Input type="text" name="hint" label="Hint" hint="Hint: this is a hint" />`;
    let example7 = `<Flex direction="column">
    <Input label="Icon Prefix" name="iconPrefix">
        <svelte:fragment slot="prefix">
            <Icon name="search" />
        </svelte:fragment>
    </Input>
    <Input label="Icon Prefix 2" name="iconPrefix2">
        <svelte:fragment slot="prefix">
            <Icon name="phone" />
        </svelte:fragment>
    </Input>
</Flex>`;
    let example8 = `<Input type="text" name="custom" label="Custom Width" style="width: 22rem;" />`;
    let example9 = `<Input type="text" name="errorPresent" label="Error" error="Incorrect format" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Input</Text>
        <Text size="xl" variant="weak">A field that captures single-line text or data input from the user.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
            style={selectedExample === "customStyle" || selectedExample === "prefixAndSuffix" ? "width: 13rem;" : ""}
        />
        {#if selectedExample === "types"}
            <CodeExample code={example1}>
                <Flex direction="column">
                    <Input type="text" name="email" label="Email" placeholder="Example@example.com" />
                    <Input type="password" name="password" label="Password" placeholder="Password" />
                </Flex>
            </CodeExample>
        {:else if selectedExample === "disabled"}
            <CodeExample code={example2}>
                <Input type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />
            </CodeExample>
        {:else if selectedExample === "required"}
            <CodeExample code={example3}>
                <Input type="text" name="required" label="Required" placeholder="Required" value="Value" required />
            </CodeExample>
        {:else if selectedExample === "error"}
            <CodeExample code={example9}>
                <Input type="text" name="errorPresent" label="Error" error="Incorrect format" />
            </CodeExample>
        {:else if selectedExample === "prefixAndSuffix"}
            <CodeExample code={example4}>
                <Flex direction="column">
                    <Input label="Prefix" name="money">
                        <svelte:fragment slot="prefix">$</svelte:fragment>
                    </Input>
                    <Input label="Suffix" type="text" name="amount">
                        <svelte:fragment slot="suffix">cm</svelte:fragment>
                    </Input>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "expanded"}
            <CodeExample code={example5}>
                <Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />
            </CodeExample>
        {:else if selectedExample === "hint"}
            <CodeExample code={example6}>
                <Input type="text" name="hint" label="Hint" hint="Hint: this is a hint" />
            </CodeExample>
        {:else if selectedExample === "iconPrefix"}
            <CodeExample code={example7}>
                <Flex direction="column">
                    <Input label="Icon Prefix" name="iconPrefix">
                        <svelte:fragment slot="prefix">
                            <Icon name="search" />
                        </svelte:fragment>
                    </Input>
                    <Input label="Icon Prefix 2" name="iconPrefix2">
                        <svelte:fragment slot="prefix">
                            <Icon name="phone" />
                        </svelte:fragment>
                    </Input>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "customStyle"}
            <CodeExample code={example8}>
                <Input type="text" name="custom" label="Custom Width" style="width: 22rem;" />
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
                <TableCell><Code>disabled</Code></TableCell>
                <TableCell>Makes the input inaccessible.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>required</Code></TableCell>
                <TableCell>Makes the input a required field and styles the label with a red asterisk.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>expanded</Code></TableCell>
                <TableCell>Allows the input to strech to full width.</TableCell>
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
        </TableBody>
    </Table>
</Flex>