<script>
    import {
        Code,
        Flex,
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";



    const example1 = {
        svelte: `<script>
    import { 
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow
    } from "moth-ui-svelte";
<\/script>

<Table>
    <TableHead>
        <TableRow>
            <TableHeader>Col 1</TableHeader>
            <TableHeader>Col 2</TableHeader>
            <TableHeader>Col 3</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>Value 1.1</TableCell>
            <TableCell>Value 1.2</TableCell>
            <TableCell>Value 1.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 2.1</TableCell>
            <TableCell>Value 2.2</TableCell>
            <TableCell>Value 2.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 3.1</TableCell>
            <TableCell>Value 3.2</TableCell>
            <TableCell>Value 3.3</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
        react: `import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow
} from "moth-ui-react";

export default function Example() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Col 1</TableHeader>
                    <TableHeader>Col 2</TableHeader>
                    <TableHeader>Col 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Value 1.1</TableCell>
                    <TableCell>Value 1.2</TableCell>
                    <TableCell>Value 1.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 2.1</TableCell>
                    <TableCell>Value 2.2</TableCell>
                    <TableCell>Value 2.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 3.1</TableCell>
                    <TableCell>Value 3.2</TableCell>
                    <TableCell>Value 3.3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}`
    };
    const example2 = {
        svelte: `<script>
    import { 
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow
    } from "moth-ui-svelte";
<\/script>

<Table striped>
    <TableHead>
        <TableRow>
            <TableHeader>Col 1</TableHeader>
            <TableHeader>Col 2</TableHeader>
            <TableHeader>Col 3</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>Value 1.1</TableCell>
            <TableCell>Value 1.2</TableCell>
            <TableCell>Value 1.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 2.1</TableCell>
            <TableCell>Value 2.2</TableCell>
            <TableCell>Value 2.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 3.1</TableCell>
            <TableCell>Value 3.2</TableCell>
            <TableCell>Value 3.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 4.1</TableCell>
            <TableCell>Value 4.2</TableCell>
            <TableCell>Value 4.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 5.1</TableCell>
            <TableCell>Value 5.2</TableCell>
            <TableCell>Value 5.3</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
        react: `import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow
} from "moth-ui-react";

export default function Example() {
    return (
        <Table striped>
            <TableHead>
                <TableRow>
                    <TableHeader>Col 1</TableHeader>
                    <TableHeader>Col 2</TableHeader>
                    <TableHeader>Col 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Value 1.1</TableCell>
                    <TableCell>Value 1.2</TableCell>
                    <TableCell>Value 1.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 2.1</TableCell>
                    <TableCell>Value 2.2</TableCell>
                    <TableCell>Value 2.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 3.1</TableCell>
                    <TableCell>Value 3.2</TableCell>
                    <TableCell>Value 3.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 4.1</TableCell>
                    <TableCell>Value 4.2</TableCell>
                    <TableCell>Value 4.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 5.1</TableCell>
                    <TableCell>Value 5.2</TableCell>
                    <TableCell>Value 5.3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}`
    };
    const example4 = {
        svelte: `<script>
    import { 
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow
    } from "moth-ui-svelte";
<\/script>

<Table interactive>
    <TableHead>
        <TableRow>
            <TableHeader>Col 1</TableHeader>
            <TableHeader>Col 2</TableHeader>
            <TableHeader>Col 3</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>Value 1.1</TableCell>
            <TableCell>Value 1.2</TableCell>
            <TableCell>Value 1.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 2.1</TableCell>
            <TableCell>Value 2.2</TableCell>
            <TableCell>Value 2.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 3.1</TableCell>
            <TableCell>Value 3.2</TableCell>
            <TableCell>Value 3.3</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
        react: `import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow
} from "moth-ui-react";

export default function Example() {
    return (
        <Table interactive>
            <TableHead>
                <TableRow>
                    <TableHeader>Col 1</TableHeader>
                    <TableHeader>Col 2</TableHeader>
                    <TableHeader>Col 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Value 1.1</TableCell>
                    <TableCell>Value 1.2</TableCell>
                    <TableCell>Value 1.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 2.1</TableCell>
                    <TableCell>Value 2.2</TableCell>
                    <TableCell>Value 2.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 3.1</TableCell>
                    <TableCell>Value 3.2</TableCell>
                    <TableCell>Value 3.3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}`
    };
    const example5 = {
        svelte: `<script>
    import { 
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow
    } from "moth-ui-svelte";
<\/script>

<Table interactive>
    <TableHead>
        <TableRow>
            <TableHeader>Col 1</TableHeader>
            <TableHeader align="end">Align End</TableHeader>
            <TableHeader>Col 3</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>Value 1.1</TableCell>
            <TableCell align="end">Value 1.2</TableCell>
            <TableCell>Value 1.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 2.1</TableCell>
            <TableCell align="end">Value 2.2</TableCell>
            <TableCell>Value 2.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 3.1</TableCell>
            <TableCell align="end">Value 3.2</TableCell>
            <TableCell>Value 3.3</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
        react: `import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow
} from "moth-ui-react";

export default function Example() {
    return (
        <Table interactive>
            <TableHead>
                <TableRow>
                    <TableHeader>Col 1</TableHeader>
                    <TableHeader align="end">Align End</TableHeader>
                    <TableHeader>Col 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Value 1.1</TableCell>
                    <TableCell align="end">Value 1.2</TableCell>
                    <TableCell>Value 1.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 2.1</TableCell>
                    <TableCell align="end">Value 2.2</TableCell>
                    <TableCell>Value 2.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 3.1</TableCell>
                    <TableCell align="end">Value 3.2</TableCell>
                    <TableCell>Value 3.3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}`
    };
    const example6 = {
        svelte: `<script>
    import { 
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow
    } from "moth-ui-svelte";
<\/script>

<Table>
    <TableHead>
        <TableRow>
            <TableHeader>Col 1</TableHeader>
            <TableHeader>Col 2</TableHeader>
            <TableHeader>Col 3</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>Value 1.1</TableCell>
            <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
            <TableCell>Value 1.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 2.1</TableCell>
            <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
            <TableCell>Value 2.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 3.1</TableCell>
            <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
            <TableCell>Value 3.3</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
        react: `import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow
} from "moth-ui-react";

export default function Example() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Col 1</TableHeader>
                    <TableHeader>Col 2</TableHeader>
                    <TableHeader>Col 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Value 1.1</TableCell>
                    <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell>Value 1.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 2.1</TableCell>
                    <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell>Value 2.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 3.1</TableCell>
                    <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell>Value 3.3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}`
    };
    const example7 = {
        svelte: `<script>
    import { 
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Text
    } from "moth-ui-svelte";
<\/script>

<Table>
    <TableCaption>
        <Text size="2xl">Caption</Text>
    </TableCaption>
    <TableHead>
        <TableRow>
            <TableHeader>Col 1</TableHeader>
            <TableHeader>Col 2</TableHeader>
            <TableHeader>Col 3</TableHeader>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>Value 1.1</TableCell>
            <TableCell>Value 1.2</TableCell>
            <TableCell>Value 1.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 2.1</TableCell>
            <TableCell>Value 2.2</TableCell>
            <TableCell>Value 2.3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Value 3.1</TableCell>
            <TableCell>Value 3.2</TableCell>
            <TableCell>Value 3.3</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
        react: `import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
    Text
} from "moth-ui-react";

export default function Example() {
    return (
        <Table>
            <TableCaption>
                <Text size="2xl">Caption</Text>
            </TableCaption>
            <TableHead>
                <TableRow>
                    <TableHeader>Col 1</TableHeader>
                    <TableHeader>Col 2</TableHeader>
                    <TableHeader>Col 3</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Value 1.1</TableCell>
                    <TableCell>Value 1.2</TableCell>
                    <TableCell>Value 1.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 2.1</TableCell>
                    <TableCell>Value 2.2</TableCell>
                    <TableCell>Value 2.3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Value 3.1</TableCell>
                    <TableCell>Value 3.2</TableCell>
                    <TableCell>Value 3.3</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Table</Text>
        <Text size="xl" variant="weak">A structured component for displaying tabular data in rows and columns with consistent styling and layout.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For data people compare across rows. A table looks like a card: a surface with a raised header and no
            border.
        </Text>
        <CodeExample code={example1}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Col 1</TableHeader>
                        <TableHeader>Col 2</TableHeader>
                        <TableHeader>Col 3</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Value 1.1</TableCell>
                        <TableCell>Value 1.2</TableCell>
                        <TableCell>Value 1.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 2.1</TableCell>
                        <TableCell>Value 2.2</TableCell>
                        <TableCell>Value 2.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 3.1</TableCell>
                        <TableCell>Value 3.2</TableCell>
                        <TableCell>Value 3.3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CodeExample>
    </section>

    <section class="section" id="striped">
        <Text size="2xl" weight="bold" as="h2">Striped</Text>
        <Text size="l" variant="weak" measure="l">
            Tints every other row, which helps people follow wide rows.
        </Text>
        <CodeExample code={example2}>
            <Table striped>
                <TableHead>
                    <TableRow>
                        <TableHeader>Col 1</TableHeader>
                        <TableHeader>Col 2</TableHeader>
                        <TableHeader>Col 3</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Value 1.1</TableCell>
                        <TableCell>Value 1.2</TableCell>
                        <TableCell>Value 1.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 2.1</TableCell>
                        <TableCell>Value 2.2</TableCell>
                        <TableCell>Value 2.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 3.1</TableCell>
                        <TableCell>Value 3.2</TableCell>
                        <TableCell>Value 3.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 4.1</TableCell>
                        <TableCell>Value 4.2</TableCell>
                        <TableCell>Value 4.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 5.1</TableCell>
                        <TableCell>Value 5.2</TableCell>
                        <TableCell>Value 5.3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CodeExample>
    </section>

    <section class="section" id="interactive">
        <Text size="2xl" weight="bold" as="h2">Interactive</Text>
        <Text size="l" variant="weak" measure="l">
            Highlights the row under the pointer. Use it when rows can be clicked or have actions.
        </Text>
        <CodeExample code={example4}>
            <Table interactive>
                <TableHead>
                    <TableRow>
                        <TableHeader>Col 1</TableHeader>
                        <TableHeader>Col 2</TableHeader>
                        <TableHeader>Col 3</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Value 1.1</TableCell>
                        <TableCell>Value 1.2</TableCell>
                        <TableCell>Value 1.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 2.1</TableCell>
                        <TableCell>Value 2.2</TableCell>
                        <TableCell>Value 2.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 3.1</TableCell>
                        <TableCell>Value 3.2</TableCell>
                        <TableCell>Value 3.3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CodeExample>
    </section>

    <section class="section" id="align">
        <Text size="2xl" weight="bold" as="h2">Align</Text>
        <Text size="l" variant="weak" measure="l">
            Align numbers to the end so their digits line up. Set <Code>align</Code> on the header and on every cell in
            the column.
        </Text>
        <CodeExample code={example5}>
            <Table interactive>
                <TableHead>
                    <TableRow>
                        <TableHeader>Col 1</TableHeader>
                        <TableHeader align="end">Align End</TableHeader>
                        <TableHeader>Col 3</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Value 1.1</TableCell>
                        <TableCell align="end">Value 1.2</TableCell>
                        <TableCell>Value 1.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 2.1</TableCell>
                        <TableCell align="end">Value 2.2</TableCell>
                        <TableCell>Value 2.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 3.1</TableCell>
                        <TableCell align="end">Value 3.2</TableCell>
                        <TableCell>Value 3.3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CodeExample>
    </section>

    <section class="section" id="truncate">
        <Text size="2xl" weight="bold" as="h2">Truncate</Text>
        <Text size="l" variant="weak" measure="l">
            Cells wrap like normal HTML tables. <Code>truncate</Code> keeps a cell on one line and cuts it off with an
            ellipsis.
        </Text>
        <CodeExample code={example6}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Col 1</TableHeader>
                        <TableHeader>Col 2</TableHeader>
                        <TableHeader>Col 3</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Value 1.1</TableCell>
                        <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                        <TableCell>Value 1.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 2.1</TableCell>
                        <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                        <TableCell>Value 2.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 3.1</TableCell>
                        <TableCell truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                        <TableCell>Value 3.3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CodeExample>
    </section>

    <section class="section" id="caption">
        <Text size="2xl" weight="bold" as="h2">Caption</Text>
        <Text size="l" variant="weak" measure="l">
            A title for the table, which also names it for screen readers.
        </Text>
        <CodeExample code={example7}>
            <Table>
                <TableCaption>
                    <Text size="2xl">Caption</Text>
                </TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeader>Col 1</TableHeader>
                        <TableHeader>Col 2</TableHeader>
                        <TableHeader>Col 3</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Value 1.1</TableCell>
                        <TableCell>Value 1.2</TableCell>
                        <TableCell>Value 1.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 2.1</TableCell>
                        <TableCell>Value 2.2</TableCell>
                        <TableCell>Value 2.3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Value 3.1</TableCell>
                        <TableCell>Value 3.2</TableCell>
                        <TableCell>Value 3.3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
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
                    <TableCell><Code>Table striped</Code></TableCell>
                    <TableCell>Tints every other body row to make long tables easier to scan.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>Table interactive</Code></TableCell>
                    <TableCell>Highlights body rows on hover, for rows that can be selected or opened.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>TableHeader align</Code></TableCell>
                    <TableCell>Horizontal alignment of the header cell. Defaults to <Code>start</Code>.</TableCell>
                    <TableCell><Code>start</Code> | <Code>center</Code> | <Code>end</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>TableCell align</Code></TableCell>
                    <TableCell>Horizontal alignment of the cell. Use <Code>end</Code> for numbers.</TableCell>
                    <TableCell><Code>start</Code> | <Code>center</Code> | <Code>end</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>TableCell truncate</Code></TableCell>
                    <TableCell>Cuts long content to one line with an ellipsis.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>TableCell colspan</Code></TableCell>
                    <TableCell>Number of columns the cell spans, for example a full-width "No results" row.</TableCell>
                    <TableCell><Code>number</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>TableCaption</Code></TableCell>
                    <TableCell>Title for the table, shown inside its card at the top.</TableCell>
                    <TableCell><Code>component</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>TableHead / TableBody / TableRow</Code></TableCell>
                    <TableCell>Structural parts that render <Code>thead</Code>, <Code>tbody</Code> and <Code>tr</Code>.</TableCell>
                    <TableCell><Code>component</Code></TableCell>
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
