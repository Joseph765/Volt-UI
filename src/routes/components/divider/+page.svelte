<script>
    import {
        Divider,
        Flex,
        Select,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = $state('basic');

    let example1 = `<script>
    import { Divider } from "moth-ui-svelte";
<\/script>

<Divider />`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Divider</Text>
        <Text size="xl" variant="weak">A lightweight horizontal line that visually separates content.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            {options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "basic"}
            <CodeExample code={example1}>
                <Divider />
            </CodeExample>
        {/if}
    </Flex>
</Flex>