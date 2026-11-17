<script>
    import { 
        Code,
        Flex, 
        Link,
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
        { value: 'sizes', label: 'Example: Size' }
    ];

    let selectedExample = $state('basic');

    let example1 = `<script>
    import { Link } from "moth-ui-svelte";
<\/script>

<Link href="#">Example link</Link>`;
    let example2 = `<script>
    import { Flex, Link } from "moth-ui-svelte";
<\/script>

<Flex direction="column">
    <Link href="#" size="xs">Example xs link</Link>
    <Link href="#" size="s">Example s link</Link>
    <Link href="#" size="m">Example m link</Link>
    <Link href="#" size="l">Example l link</Link>
    <Link href="#" size="xl">Example xl link</Link>
    <Link href="#" size="2xl">Example 2xl link</Link>
    <Link href="#" size="3xl">Example 3xl link</Link>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Link</Text>
        <Text size="xl" variant="weak">An interactive text element that navigates to another page or resource.</Text>
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
                <Link href="#">Example link</Link>
            </CodeExample>
        {:else if selectedExample === "sizes"}
            <CodeExample code={example2}>
                <Flex direction="column">
                    <Link href="#" size="xs">Example xs link</Link>
                    <Link href="#" size="s">Example s link</Link>
                    <Link href="#" size="m">Example m link</Link>
                    <Link href="#" size="l">Example l link</Link>
                    <Link href="#" size="xl">Example xl link</Link>
                    <Link href="#" size="2xl">Example 2xl link</Link>
                    <Link href="#" size="3xl">Example 3xl link</Link>
                </Flex>
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
                <TableCell><Code>size</Code></TableCell>
                <TableCell>Sets the size of the link.</TableCell>
                <TableCell><Code>xs</Code> | <Code>s</Code> | <Code>m</Code> | <Code>l</Code> | <Code>xl</Code> | <Code>2xl</Code> | <Code>3xl</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>href</Code></TableCell>
                <TableCell>Where the link goes.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>target</Code></TableCell>
                <TableCell>Where to open the link. <Code>_blank</Code> opens a new tab and adds <Code>rel="noopener noreferrer"</Code> automatically.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>