<script>
    import {
        Code,
        Flex,
        Select,
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'striped', label: 'Example: Striped' },
        { value: 'interactive', label: 'Example: Interactive' },
        { value: 'align', label: 'Example: Align' },
        { value: 'truncate', label: 'Example: Truncate' },
        { value: 'caption', label: 'Example: Caption' },
    ];

    let selectedExample = $state('basic');

    let example1 = `<script>
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
</Table>`;
    let example2 = `<script>
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
</Table>`;
    let example4 = `<script>
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
</Table>`;
    let example5 = `<script>
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
</Table>`;
    let example6 = `<script>
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
</Table>`;
    let example7 = `<script>
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
</Table>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Table</Text>
        <Text size="xl" variant="weak">A structured component for displaying tabular data in rows and columns with consistent styling and layout.</Text>
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
        {:else if selectedExample === "striped"}
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
        {:else if selectedExample === "interactive"}
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
        {:else if selectedExample === "align"}
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
        {:else if selectedExample === "truncate"}
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
        {:else if selectedExample === "caption"}
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
</Flex>
