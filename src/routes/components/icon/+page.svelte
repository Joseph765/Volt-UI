<script>
    import {
        Code,
        CodeExample,
        Flex,
        Icon,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'size', label: 'Example: Size' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Flex>
    <Icon size="l" name="info" />
    <Icon size="l" name="circle-question-mark" />
    <Icon size="l" name="triangle-alert" />
    <Icon size="l" name="circle-check" />
    <Icon size="l" name="user" />
    <Icon size="l" name="search" />
    <Icon size="l" name="phone" />
    <Icon size="l" name="arrow-up" />
    <Icon size="l" name="arrow-down" />
    <Icon size="l" name="chevron-up" />
    <Icon size="l" name="chevron-down" />
    <Icon size="l" name="plus" />
    <Icon size="l" name="minus" />
    <Icon size="l" name="x" />
</Flex>`;
    let example2 = `<Flex align="center">
    <Icon size="s" name="user" />
    <Icon size="m" name="user" />
    <Icon size="l" name="user" />
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Icon</Text>
        <Text size="xl" variant="weak">A scalable vector component for displaying symbolic icons with customizable size, color, and accessibility features.</Text>
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
                <Flex>
                    <Icon size="l" name="info" />
                    <Icon size="l" name="circle-question-mark" />
                    <Icon size="l" name="triangle-alert" />
                    <Icon size="l" name="circle-check" />
                    <Icon size="l" name="user" />
                    <Icon size="l" name="search" />
                    <Icon size="l" name="phone" />
                    <Icon size="l" name="arrow-up" />
                    <Icon size="l" name="arrow-down" />
                    <Icon size="l" name="chevron-up" />
                    <Icon size="l" name="chevron-down" />
                    <Icon size="l" name="plus" />
                    <Icon size="l" name="minus" />
                    <Icon size="l" name="x" />
                </Flex>
            </CodeExample>
        {:else if selectedExample === "size"}
            <CodeExample code={example2}>
                <Flex align="center">
                    <Icon size="s" name="user" />
                    <Icon size="m" name="user" />
                    <Icon size="l" name="user" />
                </Flex>
            </CodeExample>
        {/if}
    </Flex>
</Flex>