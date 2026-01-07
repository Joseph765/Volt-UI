<script>
    import {
        Banner,
        CodeExample,
        Fieldset,
        Flex,
        Link,
        Radio,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'required', label: 'Example: Required' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio" name="testRadio" label="Checked" checked value="1"/>
        <Radio id="radio2" name="testRadio" label="Unchecked" value="2" />
    </Flex>
</Fieldset>`;
    let example2 = `<Fieldset label="Radios" required>
    <Flex direction="column" gap="s">
        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
    </Flex>
</Fieldset>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Fieldset</Text>
        <Text size="xl" variant="weak">A grouping component that organizes related form elements with a shared label.</Text>
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
        {:else if selectedExample === "required"}
            <CodeExample code={example2}>
                <Fieldset label="Radios" required>
                    <Flex direction="column" gap="s">
                        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
                        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
                    </Flex>
                </Fieldset>
            </CodeExample>
        {/if}
    </Flex>
</Flex>