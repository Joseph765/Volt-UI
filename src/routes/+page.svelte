<script>
    import { Button, Card, Display, Flex, Layout, Text } from "$lib";
</script>

<svelte:head>
	<title>Volt UI</title>
	<meta name="description" content="Design System For Crypto Apps" />
</svelte:head>

<Layout>
    <Flex direction="column">
        <Display>Introducing Volt</Display>
        <Text>Production-grade component library and design tokens for high-performance crypto interfaces.</Text>
        <Button>Test Button</Button>
        <Flex>
            <Card>
                <Text>Test Card</Text>
            </Card>
            <Card>
                <Text>Test Card</Text>
            </Card>
            <Card>
                <Text>Test Card</Text>
            </Card>
            <Card>
                <Text>Test Card</Text>
            </Card>
        </Flex>
    </Flex>
</Layout>

<style>
    @import "$lib/css";
</style>
