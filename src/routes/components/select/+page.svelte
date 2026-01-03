<script>
    import { 
        Checkbox,
        CodeExample,
        Flex, 
        Heading,
        Icon,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'prefix', label: 'Example: Prefix' },
        { value: 'expanded', label: 'Example: Expanded' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'error', label: 'Example: Error' },
        { value: 'required', label: 'Example: Required' },
        { value: 'helpText', label: 'Example: Help Text' },
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
    name="HelpText"
    label="Help Text"
    options={[
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "mx", label: "Mexico" },
    ]}
    placeholder="Choose a country..."
    help="this is some helper text"
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

<Flex direction="column">
    <Heading>Select</Heading>
    <Text>Select lets users choose one option from an options menu. Consider using select when you have 5 or more options to choose from.</Text>
    <Select
        name="Country"
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
    {:else if selectedExample === "helpText"}
        <CodeExample code={example7}>
            <Select
                name="HelpText"
                label="Help Text"
                options={[
                    { value: "us", label: "United States" },
                    { value: "ca", label: "Canada" },
                    { value: "mx", label: "Mexico" },
                ]}
                placeholder="Choose a country..."
                help="this is some helper text"
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

<!-- <Flex direction="column">
    <Select
        name="CustomWidth"
        label="Custom Width"
        options={[
            { value: 'mr', label: 'Mr' },
            { value: 'mrs', label: 'Mrs' },
        ]}
        placeholder="Please Select"
        id="customWidth"
        style="width: 22rem;"
    />
</Flex> -->