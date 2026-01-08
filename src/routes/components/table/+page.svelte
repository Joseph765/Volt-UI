<script>
    import { 
        Button, 
        Card,
        CodeExample,
        Flex, 
        Icon,
        Select,
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'striped', label: 'Example: Striped' },
        { value: 'card', label: 'Example: Inside Card' },
        { value: 'interactive', label: 'Example: Interactive' },
        { value: 'align', label: 'Example: Align' },
        { value: 'truncate', label: 'Example: Truncate' },
        { value: 'caption', label: 'Example: Caption' },
    ];

    let selectedExample = 'basic';

    let example1 = `<script>
    import { 
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Table>
    <TableHeader>
        <TableRow>
            <TableHead>Col 1</TableHead>
            <TableHead>Col 2</TableHead>
            <TableHead>Col 3</TableHead>
        </TableRow>
    </TableHeader>
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
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Table striped>
    <TableHeader>
        <TableRow>
            <TableHead>Col 1</TableHead>
            <TableHead>Col 2</TableHead>
            <TableHead>Col 3</TableHead>
        </TableRow>
    </TableHeader>
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
    let example3 = `<script>
    import { 
        Card,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Card space="none" variant="ghost">
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Col 1</TableHead>
                <TableHead>Col 2</TableHead>
                <TableHead>Col 3</TableHead>
            </TableRow>
        </TableHeader>
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
</Card>`;
    let example4 = `<script>
    import { 
        Card,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Card space="none" variant="ghost">
    <Table interactive>
        <TableHeader>
            <TableRow>
                <TableHead>Col 1</TableHead>
                <TableHead>Col 2</TableHead>
                <TableHead>Col 3</TableHead>
            </TableRow>
        </TableHeader>
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
</Card>`;
    let example5 = `<script>
    import { 
        Card,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Card space="none" variant="ghost">
    <Table interactive>
        <TableHeader>
            <TableRow>
                <TableHead>Col 1</TableHead>
                <TableHead align="end">Align End</TableHead>
                <TableHead>Col 3</TableHead>
            </TableRow>
        </TableHeader>
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
</Card>`;
    let example6 = `<script>
    import { 
        Card,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Card space="none" variant="ghost">
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Col 1</TableHead>
                <TableHead>Col 2</TableHead>
                <TableHead>Col 3</TableHead>
            </TableRow>
        </TableHeader>
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
</Card>`;
    let example7 = `<script>
    import { 
        Table,
        TableBody,
        TableCaption,
        TableCell,
        TableHead,
        TableHeader,
        TableRow
    } from "$lib";
<\/script>

<Table>
    <TableCaption>
        <Text size="2xl">Caption</Text>
    </TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Col 1</TableHead>
            <TableHead>Col 2</TableHead>
            <TableHead>Col 3</TableHead>
        </TableRow>
    </TableHeader>
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
        <Text size="3xl" weight="black" as="h2">Table</Text>
        <Text size="xl" variant="weak">A structured component for displaying tabular data in rows and columns with consistent styling and layout.</Text>
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
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Col 1</TableHead>
                            <TableHead>Col 2</TableHead>
                            <TableHead>Col 3</TableHead>
                        </TableRow>
                    </TableHeader>
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
                    <TableHeader>
                        <TableRow>
                            <TableHead>Col 1</TableHead>
                            <TableHead>Col 2</TableHead>
                            <TableHead>Col 3</TableHead>
                        </TableRow>
                    </TableHeader>
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
        {:else if selectedExample === "card"}
            <CodeExample code={example3}>
                <Card space="none" variant="ghost">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Col 1</TableHead>
                                <TableHead>Col 2</TableHead>
                                <TableHead>Col 3</TableHead>
                            </TableRow>
                        </TableHeader>
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
                </Card>
            </CodeExample>
        {:else if selectedExample === "interactive"}
            <CodeExample code={example4}>
                <Card space="none" variant="ghost">
                    <Table interactive>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Col 1</TableHead>
                                <TableHead>Col 2</TableHead>
                                <TableHead>Col 3</TableHead>
                            </TableRow>
                        </TableHeader>
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
                </Card>
            </CodeExample>
        {:else if selectedExample === "align"}
            <CodeExample code={example5}>
                <Card space="none" variant="ghost">
                    <Table interactive>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Col 1</TableHead>
                                <TableHead align="end">Align End</TableHead>
                                <TableHead>Col 3</TableHead>
                            </TableRow>
                        </TableHeader>
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
                </Card>
            </CodeExample>
        {:else if selectedExample === "truncate"}
            <CodeExample code={example6}>
                <Card space="none" variant="ghost">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Col 1</TableHead>
                                <TableHead>Col 2</TableHead>
                                <TableHead>Col 3</TableHead>
                            </TableRow>
                        </TableHeader>
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
                </Card>
            </CodeExample>
        {:else if selectedExample === "caption"}
            <CodeExample code={example7}>
                <Table>
                    <TableCaption>
                        <Text size="2xl">Caption</Text>
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Col 1</TableHead>
                            <TableHead>Col 2</TableHead>
                            <TableHead>Col 3</TableHead>
                        </TableRow>
                    </TableHeader>
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
</Flex>