<script>
    import { 
        CodeExample,
        Fieldset,
        Flex,
        Radio,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'required', label: 'Example: Required' },
        { value: 'helpText', label: 'Example: Help Text' },
        { value: 'error', label: 'Example: Error' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio" name="testRadio" label="Checked" checked value="1"/>
        <Radio id="radio2" name="testRadio" label="Unchecked" value="2" />
    </Flex>
</Fieldset>`;
    let example2 = `<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio3" name="testRadio" label="Checked" checked value="3" disabled />
        <Radio id="radio4" name="testRadio" label="Unchecked" value="4" disabled />
    </Flex>
</Fieldset>`;
    let example3 = `<Fieldset label="Radios" required>
    <Flex direction="column" gap="s">
        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
    </Flex>
</Fieldset>`;
    let example4 = `<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio7" name="testRadio" label="Checked" checked value="7" help="Help text is an accessible way to provide additional information that might help the user" />
        <Radio id="radio8" name="testRadio" label="Unchecked" value="8" /> 
    </Flex>
</Fieldset>`;
    let example5 = `<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio9" name="testRadio" label="Checked" checked value="9" error="There is an error" />
        <Radio id="radio10" name="testRadio" label="Unchecked" value="10" />
    </Flex>
</Fieldset>`;
</script>

<Flex direction="column">
    <Text size="3xl" weight="bold" as="h2">Radio</Text>
    <Text size="xl" variant="weak">Radio buttons are graphical user interface elements that allow user to choose only one option from a predefined set of mutually exclusive options.</Text>
    <Select
        name="Country"
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
    {:else if selectedExample === "helpText"}
        <CodeExample code={example4}>
            <Fieldset label="Radios">
                <Flex direction="column" gap="s">
                    <Radio id="radio7" name="testRadio" label="Checked" checked value="7" help="Help text is an accessible way to provide additional information that might help the user" />
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