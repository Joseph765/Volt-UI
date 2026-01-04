<script>
    import { 
        Badge,
        Button, 
        CodeExample,
        Flex, 
        Heading,
        Icon,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'strong', label: 'Example: Strong' },
        { value: 'icon', label: 'Example: Icon' },
    ];

    let selectedExample = 'basic';

    let example1 = `<Flex>
    <Badge>Neutral</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="success">Success</Badge>
</Flex>`;
    let example2 = `<Flex>
    <Badge strong>Neutral</Badge>
    <Badge variant="danger" strong>Danger</Badge>
    <Badge variant="warning" strong>Warning</Badge>
    <Badge variant="success" strong>Success</Badge>
</Flex>`;
    let example3 = `<Badge variant="success">
    <Icon name="chevron-up" slot="icon" size="s" />
    22%
</Badge>`;
</script>

<Flex direction="column">
    <Heading>Badge</Heading>
    <Text>Badges are used to inform users of the status of an object or of an action that's been taken. Commonly used in tabular data to indicate status.</Text>
    <Select
        name="Country"
        bind:options={options}
        bind:value={selectedExample}
        placeholder="Select an example..."
    />
    {#if selectedExample === "basic"}
        <CodeExample code={example1}>
            <Flex>
                <Badge>Neutral</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="success">Success</Badge>
            </Flex>
        </CodeExample>
    {:else if selectedExample === "strong"}
        <CodeExample code={example2}>
            <Flex>
                <Badge strong>Neutral</Badge>
                <Badge variant="danger" strong>Danger</Badge>
                <Badge variant="warning" strong>Warning</Badge>
                <Badge variant="success" strong>Success</Badge>
            </Flex>
        </CodeExample>
    {:else if selectedExample === "icon"}
        <CodeExample code={example3}>
            <Badge variant="success">
                <Icon name="chevron-up" slot="icon" size="s" />
                22%
            </Badge>
        </CodeExample>
    {/if}
</Flex>