<script>
    import { 
        Code,
        Flex,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text,
        Textarea
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'required', label: 'Example: Required' },
        { value: 'error', label: 'Example: Error' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'hint', label: 'Example: Hint' },
        { value: 'customStyle', label: 'Example: Custom Style' }
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="message" />`;
    let example2 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="disabled" disabled />`;
    let example3 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="required" required />`;
    let example4 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />`;
    let example5 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="Expanded Style" value="Expanded style" name="expanded" expanded />`;
    let example6 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="With helper text" name="helpText" hint="Hint: this is a hint" />`;
    let example7 = `<script>
    import { Textarea } from "$volt";
<\/script>

<Textarea label="Message" placeholder="With custom styling" name="customStyle" style="width: 22rem;" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Textarea</Text>
        <Text size="xl" variant="weak">A multi-line text field that allows users to enter longer-form input or comments.</Text>
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
                <Textarea label="Message" placeholder="Enter a message" name="message" />
            </CodeExample>
        {:else if selectedExample === "disabled"}
            <CodeExample code={example2}>
                <Textarea label="Message" placeholder="Enter a message" name="disabled" disabled />
            </CodeExample>
        {:else if selectedExample === "required"}
            <CodeExample code={example3}>
                <Textarea label="Message" placeholder="Enter a message" name="required" required />
            </CodeExample>
        {:else if selectedExample === "error"}
            <CodeExample code={example4}>
                <Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />
            </CodeExample>
        {:else if selectedExample === "expanded"}
            <CodeExample code={example5}>
                <Textarea label="Message" placeholder="Expanded Style" value="Expanded style" name="expanded" expanded />
            </CodeExample>
        {:else if selectedExample === "hint"}
            <CodeExample code={example6}>
                <Textarea label="Message" placeholder="With helper text" name="helpText" hint="Hint: this is a hint" />
            </CodeExample>
        {:else if selectedExample === "customStyle"}
            <CodeExample code={example7}>
                <Textarea label="Message" placeholder="With custom styling" name="customStyle" style="width: 22rem;" />
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
                <TableCell>Adds a label above the textarea element.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>placeholder</Code></TableCell>
                <TableCell>Provides a subtle hint within the textarea. Useful to communicate the proper formatting required.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>name</Code></TableCell>
                <TableCell>Provides the name attribute to the input html element.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>disabled</Code></TableCell>
                <TableCell>Makes the textarea inaccessible.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>required</Code></TableCell>
                <TableCell>Makes the textarea a required field and styles the label with a red asterisk.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>expanded</Code></TableCell>
                <TableCell>Allows the textarea to strech to full width.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>error</Code></TableCell>
                <TableCell>Adds an error message below the textarea.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
             <TableRow>
                <TableCell><Code>hint</Code></TableCell>
                <TableCell>Adds a hint below the textarea.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>align</Code></TableCell>
                <TableCell>Aligns the text within the textarea element.</TableCell>
                <TableCell><Code>start</Code> | <Code>end</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>