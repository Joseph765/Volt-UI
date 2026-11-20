<script>
    import {
        Avatar,
        Code,
        Flex,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";

    const example1 = {
        svelte: `<script>
    import { Avatar } from "moth-ui-svelte";
<\/script>

<Avatar name="Ada Lovelace" />`,
        react: `import { Avatar } from "moth-ui-react";

export default function Example() {
    return <Avatar name="Ada Lovelace" />;
}`
    };

    const example2 = {
        svelte: `<script>
    import { Avatar } from "moth-ui-svelte";
<\/script>

<Avatar name="Ada Lovelace" src="/avatars/ada.jpg" />`,
        react: `import { Avatar } from "moth-ui-react";

export default function Example() {
    return <Avatar name="Ada Lovelace" src="/avatars/ada.jpg" />;
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Avatar</Text>
        <Text size="xl" variant="weak">A small circle that stands for a person, with their photo or the first letter of their name.</Text>
    </Flex>

    <section class="section" id="letter">
        <Text size="2xl" weight="bold" as="h2">Letter</Text>
        <Text size="l" variant="weak" measure="l">
            Without a photo, the avatar shows the first letter of <Code>name</Code> on a soft gray fill. Screen readers
            read the full name.
        </Text>
        <CodeExample code={example1}>
            <Avatar name="Ada Lovelace" />
        </CodeExample>
    </section>

    <section class="section" id="image">
        <Text size="2xl" weight="bold" as="h2">Image</Text>
        <Text size="l" variant="weak" measure="l">
            Pass the photo's URL as <Code>src</Code>. It's cropped to a circle, so square photos work best. Keep
            <Code>name</Code> too: it's the image's alt text, and the letter shows if the photo fails to load.
        </Text>
        <CodeExample code={example2}>
            <Avatar name="Ada Lovelace" src="/avatar-example.svg" />
        </CodeExample>
    </section>

    <section class="section" id="api-reference">
        <Text size="2xl" weight="bold" as="h2">API reference</Text>
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
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>The person's name. Its first letter is shown when there's no photo, and it's the accessible name. Required.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>src</Code></TableCell>
                    <TableCell>URL of the person's photo. Falls back to the letter if it fails to load.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </section>
</Flex>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        scroll-margin-block-start: var(--m-space-l);
    }
</style>
