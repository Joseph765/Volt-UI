<script>
    import { 
        CodeExample,
        Flex, 
        Link,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' },
        { value: 'sizes', label: 'Example: Sizes' }
    ];

    let selectedExample = 'basic';

    let example1 = `<Link href="#">Example link</Link>`;
    let example2 = `<Flex direction="column">
    <Link href="#" size="xs">Example xs link</Link>
    <Link href="#" size="s">Example s link</Link>
    <Link href="#" size="m">Example m link</Link>
    <Link href="#" size="l">Example l link</Link>
    <Link href="#" size="xl">Example xl link</Link>
    <Link href="#" size="2xl">Example 2xl link</Link>
    <Link href="#" size="3xl">Example 3xl link</Link>
</Flex>`;
</script>

<Flex direction="column">
    <Text size="3xl" weight="bold" as="h2">Link</Text>
    <Text size="xl" variant="weak">Link description</Text>
    <Select
        name="Country"
        bind:options={options}
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