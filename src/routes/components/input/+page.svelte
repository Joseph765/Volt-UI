<script>
    import { 
        Button, 
        CodeExample,
        Flex,
        Icon,
        Input,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'types', label: 'Example: Types' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'required', label: 'Example: Required' },
        { value: 'error', label: 'Example: Error' },
        { value: 'prefixAndSuffix', label: 'Example: Prefix & Suffix' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'helpText', label: 'Example: Help Text' },
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
    let example6 = `<Input type="text" name="helpText" label="Help Text" help="This is helper Text" />`;
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

<Flex direction="column">
    <Text size="3xl" weight="bold" as="h2">Input</Text>
    <Text size="xl" variant="weak">Inputs are used to allow users to provide text input when the expected input is short. As well as plain text, Input supports various types of text, including passwords and numbers.</Text>
    <Select
        name="Country"
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
    {:else if selectedExample === "helpText"}
        <CodeExample code={example6}>
            <Input type="text" name="helpText" label="Help Text" help="This is helper Text" />
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