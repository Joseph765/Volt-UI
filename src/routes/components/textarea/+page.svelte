<script>
    import { 
        Button, 
        CodeExample,
        Flex,
        Icon,
        Select,
        Text,
        Textarea
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'required', label: 'Example: Required' },
        { value: 'error', label: 'Example: Error' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'helpText', label: 'Example: Help Text' },
        { value: 'customStyle', label: 'Example: Custom Style' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Textarea label="Message" placeholder="Enter a message" name="message" />`;
    let example2 = `<Textarea label="Message" placeholder="Enter a message" name="disabled" disabled />`;
    let example3 = `<Textarea label="Message" placeholder="Enter a message" name="required" required />`;
    let example5 = `<Textarea label="Message" placeholder="Expanded Style" value="Expanded style" name="expanded" expanded />`;
    let example6 = `<Textarea label="Message" placeholder="With helper text" name="helpText" help="This is helper Text" />`;
    let example8 = `<Textarea label="Message" placeholder="With custom styling" name="customStyle" style="width: 22rem;" />`;
    let example9 = `<Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Input</Text>
        <Text size="xl" variant="weak">A field that captures single-line text or data input from the user.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="Country"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
            style={selectedExample === "customStyle" || selectedExample === "prefixAndSuffix" ? "width: 13rem;" : ""}
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
            <CodeExample code={example9}>
                <Textarea label="Message" placeholder="Enter a message" name="error" error="Incorrect format" />
            </CodeExample>
        {:else if selectedExample === "expanded"}
            <CodeExample code={example5}>
                <Textarea label="Message" placeholder="Expanded Style" value="Expanded style" name="expanded" expanded />
            </CodeExample>
        {:else if selectedExample === "helpText"}
            <CodeExample code={example6}>
                <Textarea label="Message" placeholder="With helper text" name="helpText" help="This is helper Text" />
            </CodeExample>
        {:else if selectedExample === "customStyle"}
            <CodeExample code={example8}>
                <Textarea label="Message" placeholder="With custom styling" name="customStyle" style="width: 22rem;" />
            </CodeExample>
        {/if}
    </Flex>
</Flex>