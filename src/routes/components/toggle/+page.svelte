<script>
    import { 
        CodeExample,
        Flex, 
        Select,
        Text,
        Toggle
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'error', label: 'Example: Error' },
        { value: 'helpText', label: 'Example: Help Text' }
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
    let example4 = `<Toggle label="Label" name="helpText" help="Hint is an accessible way to provide additional information that might help the user" />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Toggle</Text>
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
        {:else if selectedExample === "helpText"}
            <CodeExample code={example4}>
                <Toggle label="Label" name="helpText" help="Hint is an accessible way to provide additional information that might help the user" />
            </CodeExample>
        {/if}
    </Flex>
</Flex>