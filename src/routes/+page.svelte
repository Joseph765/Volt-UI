<script>
    import { 
        Button, 
        Card, 
        Checkbox,
        Container,
        Display, 
        Flex, 
        Heading,
        Icon,
        Input,
        Layout, 
        Select,
        Text 
    } from "$lib";

    let agree = false;
    let notifications = true;
    /** @type { any } */
    let fruits = [];
    let indeterminateParent = true;
</script>

<svelte:head>
	<title>Volt UI</title>
	<meta name="description" content="Design System For Crypto Apps" />
</svelte:head>

<Layout>
    <Container>
        <Flex direction="column" gap="2xl">
            <Flex direction="column">
                <Display>Introducing Volt</Display>
                <Text>Production-grade component library and design tokens for high-performance crypto interfaces.</Text>
            </Flex>
            <Flex direction="column">
                <Heading>Button</Heading>
                <Flex>
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                </Flex>
                <Flex>
                    <Button disabled>Disabled Primary</Button>
                    <Button disabled variant="secondary">Disabled Secondary</Button>
                    <Button disabled variant="ghost">Disabled Ghost</Button>
                    <Button disabled variant="danger">Disabled Danger</Button>
                </Flex>
                <Flex>
                    <Button>
                        <Icon name="plus" slot="start" />
                        Add
                    </Button>
                    <Button>
                        <Icon name="plus" slot="end" />
                        Add
                    </Button>
                    <Button variant="secondary">
                        <Icon name="minus" slot="start" />
                        Remove
                    </Button>
                    <Button variant="ghost">
                        <Icon name="chevron-down" size="l" />
                    </Button>
                    <Button variant="danger">
                        <Icon name="x" slot="start" />
                        Delete
                    </Button>
                </Flex>
            </Flex>
            <Flex direction="column">
                <Heading>Icon</Heading>
                <Flex>
                    <Icon name="plus" size="l" />
                    <Icon name="minus" size="l" />
                    <Icon name="chevron-down" size="l" />
                    <Icon name="x" size="l" />
                </Flex>
            </Flex>
            <Flex direction="column">
                <Heading>Input</Heading>
                <Input type="text" name="email" label="Email" placeholder="Example@example.com" />
                <Input type="password" name="password" label="Password" placeholder="Password" />
                <Input type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />
                <Input type="text" name="required" label="Required" placeholder="Required" value="Value" required />
                <Input type="text" name="errorPresent" label="Error" error="This field is required" required />
                <Input label="Prefix" name="money">
                    <svelte:fragment slot="prefix">$</svelte:fragment>
                </Input>
                <Input label="Suffix" type="text" name="amount">
                    <svelte:fragment slot="suffix">cm</svelte:fragment>
                </Input>
                <Input label="Suffix With Number" type="number" name="amountwithNumber">
                    <svelte:fragment slot="suffix">cm</svelte:fragment>
                </Input>
                <Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />
                <Input label="Prefix Expanded" name="moneyExpanded" expanded>
                    <svelte:fragment slot="prefix">$</svelte:fragment>
                </Input>
                <Input label="Suffix Expanded" type="number" name="amountExpanded" expanded>
                    <svelte:fragment slot="suffix">cm</svelte:fragment>
                </Input>
                <Input type="text" name="helpText" label="Help Text" help="This is helper Text" />
                <Input label="Unit" type="unit" name="unit" placeholder="1234" align="right">
                    <svelte:fragment slot="suffix">cm</svelte:fragment>
                </Input>
                <Input type="email" name="autocomplete" label="Autocomplete" placeholder="example@example.com" autocomplete="email" id="email" />
                <Input label="Icon Prefix" name="iconPrefix">
                    <svelte:fragment slot="prefix">
                        <Icon name="search" />
                    </svelte:fragment>
                </Input>
                <Input label="Icon Prefix 2" name="iconPrefix2">
                    <svelte:fragment slot="prefix">
                        <Icon name="phone" />
                    </svelte:fragment>
                </Input>
                <Input type="text" name="custom" label="Custom Width" style="width: 22rem;" />
            </Flex>
            <Flex direction="column">
                <Heading>Icon</Heading>
                <Flex direction="column">
                    <Select
                        name="Country"
                        label="Country"
                        options={[
                            { value: 'us', label: 'United States' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'mx', label: 'Mexico' },
                        ]}
                        placeholder="Choose a country..."
                    />

                    <Select
                        name="Role"
                        label="Role"
                        options={[
                            { value: 'developer', label: 'Developer' },
                            { value: 'designer', label: 'Designer' },
                        ]}
                    >
                        <span slot="prefix">
                            <Icon name="user" />
                        </span>
                    </Select>

                    <Select
                        name="Expanded"
                        label="Expanded"
                        options={[
                            { value: 'developer', label: 'Developer' },
                            { value: 'designer', label: 'Designer' },
                        ]}
                        expanded
                    >
                        <span slot="prefix">
                            <Icon name="user" />
                        </span>
                    </Select>

                    <Select
                        name="Disabled"
                        label="Disabled"
                        options={[
                            { value: 'us', label: 'United States' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'mx', label: 'Mexico' },
                        ]}
                        placeholder="Choose a country..."
                        disabled
                    />

                    <Select
                        name="Error"
                        label="Error"
                        options={[
                            { value: 'us', label: 'United States' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'mx', label: 'Mexico' },
                        ]}
                        placeholder="Choose a country..."
                        error="There is an error"
                    />

                    <Select
                        name="Required"
                        label="Label"
                        options={[
                            { value: 'us', label: 'United States' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'mx', label: 'Mexico' },
                        ]}
                        placeholder="Choose a country..."
                        required
                    />

                    <Select
                        name="HelpText"
                        label="Help Text"
                        options={[
                            { value: 'us', label: 'United States' },
                            { value: 'ca', label: 'Canada' },
                            { value: 'mx', label: 'Mexico' },
                        ]}
                        placeholder="Choose a country..."
                        help="this is some helper text"
                    />

                    <Select
                        name="Autocomplete"
                        label="Autocomplete"
                        options={[
                            { value: 'mr', label: 'Mr' },
                            { value: 'miss', label: 'Miss' },
                            { value: 'ms', label: 'Ms' },
                            { value: 'mrs', label: 'Mrs' },
                            { value: 'dr', label: 'Dr' },
                        ]}
                        placeholder="Please Select"
                        id="select"
                        autocomplete="honorific-prefix"
                    />

                    <Select
                        name="CustomWidth"
                        label="Custom Width"
                        options={[
                            { value: 'mr', label: 'Mr' },
                            { value: 'mrs', label: 'Mrs' },
                        ]}
                        placeholder="Please Select"
                        id="customWidth"
                        style="width: 22rem;"
                    />
                </Flex>
            </Flex>
            <Flex direction="column">
                <Heading>Checkbox</Heading>
                <Flex direction="column">
                    <!-- Basic -->
                    <Checkbox bind:checked={agree} label="I agree to the terms" />

                    <!-- With slot for rich label -->
                    <Checkbox bind:checked={notifications}>
                        Send me <strong>email notifications</strong>
                    </Checkbox>

                    <!-- Group (array binding) -->
                    {#each ['Apple', 'Banana', 'Orange'] as fruit}
                        <Checkbox value={fruit} bind:group={fruits} label={fruit} />
                    {/each}

                    <p>Selected: {fruits.join(', ')}</p>

                    <!-- Indeterminate (e.g. parent checkbox when some children selected) -->
                    <Checkbox bind:checked={indeterminateParent} indeterminate={fruits.length > 0 && fruits.length < 3}>
                        Select all fruits
                    </Checkbox>

                    <!-- Disabled -->
                    <Checkbox checked disabled label="This is disabled" />

                    <!-- Custom width/styling -->
                    <Checkbox class="mb-4" style="width: 300px;" label="Full width example" />

                    <!-- Indeterminate -->
                    <Checkbox label="Indeterminate" indeterminate />

                    <!-- Error -->
                    <Checkbox label="Has error" error="This field is required" />
                </Flex>
            </Flex>
            <Flex direction="column">
                <Heading>Card</Heading>
                <Card>
                    <Text>Card</Text>
                </Card>
                <Card>
                    <Text>Card</Text>
                </Card>
                <Card>
                    <Text>Card</Text>
                </Card>
                <Card>
                    <Text>Card</Text>
                </Card>
            </Flex>
        </Flex>
    </Container>
</Layout>

<style>
    @import "$lib/css";
</style>
