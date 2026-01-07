<script>
    import { 
        Card,
        Code,
        CodeExample,
        Flex, 
        Link,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'gap', label: 'Example: Gap' },
        { value: 'direction', label: 'Example: Direction' },
        { value: 'wrap', label: 'Example: Wrap' },
        { value: 'justify', label: 'Example: Justify' },
        { value: 'align', label: 'Example: Align' },
    ];

    let selectedExample = 'basic';

    let example1 = `<Flex>
    <Card>Item 1</Card>
    <Card>Item 2</Card>
    <Card>Item 3</Card>
</Flex>`;
    let example2 = `<Flex direction="column">
    <Flex gap="xs">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="s">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="m">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="l">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="xl">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
    <Flex gap="2xl">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
    </Flex>
</Flex>`;
    let example3 = `<Flex gap="l">
    <Flex direction="row">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`;
    let example4 = `<Flex direction="column">
    <Flex wrap>
        <Card style="width: 500px;">1</Card>
        <Card style="width: 500px;">2</Card>
        <Card style="width: 500px;">3</Card>
    </Flex>
    <Flex>
        <Card style="width: 500px;">1</Card>
        <Card style="width: 500px;">2</Card>
        <Card style="width: 500px;">3</Card>
    </Flex>
</Flex>`;
    let example5 = `<Flex direction="column">
    <Flex justify="center">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex justify="space-between">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex justify="space-around">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`;
    let example6 = `<Flex direction="column">
    <Flex direction="column" align="start">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column" align="center">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
    <Flex direction="column" align="end">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
    </Flex>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Flex</Text>
        <Text size="xl" variant="weak">A utility component that provides flexible layout control using CSS Flexbox properties.</Text>
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
                    <Card>Item 1</Card>
                    <Card>Item 2</Card>
                    <Card>Item 3</Card>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "gap"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Flex gap="xs">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="s">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="m">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="l">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="xl">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                    <Flex gap="2xl">
                        <Card>Item 1</Card>
                        <Card>Item 2</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "direction"}
            <CodeExample code={example3}>
                <Flex gap="l">
                    <Flex direction="row">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex direction="column">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "wrap"}
            <CodeExample code={example4}>
                <Flex direction="column">
                    <Flex wrap>
                        <Card style="width: 500px;">1</Card>
                        <Card style="width: 500px;">2</Card>
                        <Card style="width: 500px;">3</Card>
                    </Flex>
                    <Flex>
                        <Card style="width: 500px;">1</Card>
                        <Card style="width: 500px;">2</Card>
                        <Card style="width: 500px;">3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "justify"}
            <CodeExample code={example5}>
                <Flex direction="column">
                    <Flex justify="center">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex justify="between">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex justify="around">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "align"}
            <CodeExample code={example6}>
                <Flex direction="column">
                    <Flex direction="column" align="start">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex direction="column" align="center">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                    <Flex direction="column" align="end">
                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                    </Flex>
                </Flex>
            </CodeExample>
        {/if}
    </Flex>

    <div class="v-table-wrapper">
        <table class="v-table">
            <caption class="v-table-caption">
                Properties
            </caption>
            <thead>
                <tr>
                    <th scope="col" class="v-table-heading">Property</th>
                    <th scope="col" class="v-table-heading">Description</th>
                    <th scope="col" class="v-table-heading">Type</th>
                </tr>
            </thead>
            <tbody class="v-table-body">
                <tr>
                    <td class="v-table-data">
                        <Code>direction</Code>
                    </td>
                    <td class="v-table-data" style="min-width: 250px;">Defines the direction flex items are placed in the flex container.</td>
                    <td class="v-table-data" style="min-width: 300px;">
                        <Code>row</Code>
                        |
                        <Code>column</Code>
                        |
                        <Code>row-reverse</Code>
                        |
                        <Code>column-reverse</Code>
                    </td>
                </tr>
                <tr>
                    <td class="v-table-data">
                        <Code>gap</Code>
                    </td>
                    <td class="v-table-data">Explicitly controls the space between flex items.</td>
                    <td class="v-table-data">
                        <Code>none</Code>
                        |
                        <Code>xs</Code>
                        |
                        <Code>s</Code>
                        |
                        <Code>m</Code>
                        |
                        <Code>l</Code>
                        |
                        <Code>xl</Code>
                        |
                        <Code>2xl</Code>
                    </td>
                </tr>
                <tr>
                    <td class="v-table-data">
                        <Code>wrap</Code>
                    </td>
                    <td class="v-table-data">Allows the items to wrap as needed.</td>
                    <td class="v-table-data">
                        <Code>boolean</Code>
                    </td>
                </tr>
                <tr>
                    <td class="v-table-data">
                        <Code>justify</Code>
                    </td>
                    <td class="v-table-data">Defines the alignment along the main axis.</td>
                    <td class="v-table-data">
                        <Code>start</Code>
                        |
                        <Code>end</Code>
                        |
                        <Code>flex-start</Code>
                        |
                        <Code>flex-end</Code>
                        |
                        <Code>center</Code>
                        |
                        <Code>between</Code>
                        |
                        <Code>around</Code>
                        |
                        <Code>evenly</Code>
                    </td>
                </tr>
                <tr>
                    <td class="v-table-data">
                        <Code>align</Code>
                    </td>
                    <td class="v-table-data">This defines the default behavior for how flex items are laid out along the cross axis on the current line.</td>
                    <td class="v-table-data">
                        <Code>initial</Code>
                        |
                        <Code>strech</Code>
                        |
                        <Code>flex-start</Code>
                        |
                        <Code>flex-end</Code>
                        |
                        <Code>center</Code>
                        |
                        <Code>baseline</Code>
                        |
                        <Code>start</Code>
                        |
                        <Code>end</Code>
                        |
                        <Code>self-start</Code>
                        |
                        <Code>self-end</Code>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</Flex>

<style>
    .v-table {
        table-layout: auto;
        width: 100%;
        font-family: var(--v-font-body);
        border-collapse: collapse;
        overflow: scroll;
    }

    .v-table-wrapper {
        overflow-x: auto;
        width: 100%;
    }

    .v-table-caption {
        text-align: start;
        font-family: var(--v-font-body);
        font-size: var(--v-font-size-2xl);
        padding-bottom: var(--v-space-m);
    }

    .v-table-heading {
        text-align: start;
        padding: var(--v-space-m);
        font-family: var(--v-font-body);
        font-weight: 400;
        font-size: var(--v-font-size-m);
        line-height: var(--v-line-height-m);
        border-bottom: 1px solid var(--v-color-border);
        background-color: var(--v-color-surface);
    }

    .v-table-data {
        font-family: var(--v-font-body);
        font-weight: 400;
        font-size: var(--v-font-size-m);
        line-height: var(--v-line-height-m);
        padding: var(--v-space-m);
        border-bottom: 1px solid var(--v-color-border);
    }
</style>