<script>
    import { ChevronUp } from "@lucide/svelte";
    import { 
        Badge,
        Code,
        Flex, 
        Select,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'strong', label: 'Example: Strong' },
        { value: 'icon', label: 'Example: Icon' },
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { Badge, Flex } from "moth-ui-svelte";
<\/script>        

<Flex>
    <Badge>Neutral</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="info">Info</Badge>
</Flex>`;
    let example2 = `<script>
    import { Badge, Flex } from "moth-ui-svelte";
<\/script>        

<Flex>
    <Badge strong>Neutral</Badge>
    <Badge variant="danger" strong>Danger</Badge>
    <Badge variant="warning" strong>Warning</Badge>
    <Badge variant="success" strong>Success</Badge>
    <Badge variant="info" strong>Info</Badge>
</Flex>`;
    let example3 = `<script>
    import { Badge, Flex } from "moth-ui-svelte";
    import { ChevronUp } from "@lucide/svelte";
<\/script>        

<Badge variant="success">
    <ChevronUp slot="icon" size={12} />
    22%
</Badge>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Badge</Text>
        <Text size="xl" variant="weak">A small, inline label that displays status, counts, or categorical information</Text>
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
                    <Badge>Neutral</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="info">Info</Badge>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "strong"}
            <CodeExample code={example2}>
                <Flex>
                    <Badge strong>Neutral</Badge>
                    <Badge variant="danger" strong>Danger</Badge>
                    <Badge variant="warning" strong>Warning</Badge>
                    <Badge variant="success" strong>Success</Badge>
                    <Badge variant="info" strong>Info</Badge>
                </Flex>
            </CodeExample>
        {:else if selectedExample === "icon"}
            <CodeExample code={example3}>
                <Badge variant="success">
                    <ChevronUp slot="icon" size={12} />
                    22%
                </Badge>
            </CodeExample>
        {/if}
    </Flex>
    <Table>
        <TableHead>
            <TableRow>
                <TableHeader>Property</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Type</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell><Code>variant</Code></TableCell>
                <TableCell>The style of the badge indicating status.</TableCell>
                <TableCell><Code>neutral</Code> | <Code>danger</Code> | <Code>warning</Code> | <Code>success</Code> | <Code>info</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>strong</Code></TableCell>
                <TableCell>More prominate secondary style for badges.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>slot="icon"</Code></TableCell>
                <TableCell>An icon shown before the label.</TableCell>
                <TableCell><Code>slot</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>