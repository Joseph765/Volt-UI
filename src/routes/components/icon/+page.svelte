<script>
    import {
        Banner,
        Code,
        CodeExample,
        Flex,
        Icon,
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
	import Link from "$lib/components/Link.svelte";

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
        <Text size="3xl" weight="black" as="h2">Icon</Text>
        <Text size="xl" variant="weak">A scalable vector component for displaying symbolic icons with customizable size, color, and accessibility features.</Text>
    </Flex>
    <Banner>This component uses lucide icons. Check them out <Link href="https://lucide.dev/icons/">here</Link>.</Banner>
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
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell><Code>name</Code></TableCell>
                <TableCell>The type of icon.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>size</Code></TableCell>
                <TableCell>The size of the icon.</TableCell>
                <TableCell><Code>s</Code> | <Code>m</Code> | <Code>l</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>