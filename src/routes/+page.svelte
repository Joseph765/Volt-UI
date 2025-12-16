<script>
    import { 
        Button, 
        Card, 
        Container,
        Display, 
        Flex, 
        Heading,
        Icon,
        Input,
        Layout, 
        Text 
    } from "$lib";
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
                
                <Input label="Money in USD" name="money">
                    <svelte:fragment slot="prefix">$</svelte:fragment>
                </Input>
                
                <Input label="Amount" type="number" name="amount">
                    <svelte:fragment slot="suffix">cm</svelte:fragment>
                </Input>
    
                <Input type="text" name="expanded" expanded label="Expanded" placeholder="Expanded" />
    
                <Input label="Money in USD" name="money" expanded>
                    <svelte:fragment slot="prefix">$</svelte:fragment>
                </Input>
    
                <Input label="Amount" type="number" name="amount" expanded>
                    <svelte:fragment slot="suffix">cm</svelte:fragment>
                </Input>
    
                <!-- <Input label="Website" bind:value={website}>
                    <svelte:fragment slot="prefix">https://</svelte:fragment>
                </Input>
    
                <Input label="Search">
                <svelte:fragment slot="prefix">
                    🔍
                </svelte:fragment>
                <input placeholder="Search..." />
                </Input> -->
            </Flex>
            <Flex>
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
