<script>
    import { 
        Checkbox,
        CodeExample,
        Flex, 
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'indeterminate', label: 'Example: Indeterminate' },
        { value: 'error', label: 'Example: Error' },
        { value: 'customStyle', label: 'Example: Custom Style' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Checkbox label="I agree to the terms" />`;
    let example2 = `<Checkbox checked disabled label="This is disabled" />`;
    let example3 = `<Checkbox label="Indeterminate" indeterminate />`;
    let example4 = `<Checkbox label="Has error" error="This field has error" />`;
    let example5 = `<Checkbox style="width: 300px;" label="Custom style example" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Checkbox</Text>
        <Text size="xl" variant="weak">A control that allows users to select one or more options from a set.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
            style={selectedExample === "customStyle" || selectedExample === "indeterminate" ? "width: 13rem;" : ""}
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
        {:else if selectedExample === "customStyle"}
            <CodeExample code={example5}>
                <Checkbox style="width: 300px;" label="Custom style example" />
            </CodeExample>
        {/if}
    </Flex>
</Flex>