<script>
    import {
        Banner,
        CodeExample,
        Flex,
        Link,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Flex direction="column">
    <Banner variant="info">We've updated your plan, make sure you know how these changes affect it. <Link href="#">Learn more.</Link></Banner>
    <Banner variant="warning">Payment details missing. To stay on your current plan, <Link href="#">add payment details.</Link></Banner>
    <Banner variant="danger">We're experiencing an incident. Please see our <Link href="#">status page</Link> for more details.</Banner>
    <Banner variant="success">Your order has been shipped and will arrive on May 27th. <Link href="#">Track order.</Link></Banner>
</Flex>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Banner</Text>
        <Text size="xl" variant="weak">A prominent full-width strip that displays important messages, alerts, or announcements with optional actions.</Text>
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
                <Flex direction="column">
                    <Banner variant="info">We've updated your plan, make sure you know how these changes affect it. <Link href="#">Learn more.</Link></Banner>
                    <Banner variant="warning">Payment details missing. To stay on your current plan, <Link href="#">add payment details.</Link></Banner>
                    <Banner variant="danger">We're experiencing an incident. Please see our <Link href="#">status page</Link> for more details.</Banner>
                    <Banner variant="success">Your order has been shipped and will arrive on May 27th. <Link href="#">Track order.</Link></Banner>
                </Flex>
            </CodeExample>
        {/if}
    </Flex>
</Flex>