<script>
    import { beforeNavigate } from "$app/navigation";
    import {
        CodeExample,
        Container,
        Flex,
        Layout, 
        LayoutContent, 
        LayoutHeader, 
        LayoutLogo,
        LayoutMenuButton,
        LayoutNav,
        Link,
        NavGroup,
        NavGroupItem,
        Select,
        Text
    } from "$lib";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    /** @type { string } */
    let selectedExample = 'basic';

    /** @type { boolean } */
    let open = false;

    beforeNavigate(() => {
        // Closes navigation when navigating to a new page
        open = false;
    });

    let example1 = `<script>
    import { beforeNavigate } from "$app/navigation";

    /** @type { boolean } */
    let open = false;

    beforeNavigate(() => {
        // Closes navigation when navigating to a new page
        open = false;
    });
<\/script>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton on:click={() => open = !open}></LayoutMenuButton>
    </LayoutHeader>
    <LayoutLogo>
        <Link href="/" style="text-decoration: none;">
            <Text size="3xl" weight="bold" as="h1">Logo</Text>
        </Link>
    </LayoutLogo>
    <LayoutNav {open}>
        <NavGroup title="Nav Group">
            <NavGroupItem href="#">Nav Item 1</NavGroupItem>
            <NavGroupItem href="#">Nav Item 2</NavGroupItem>
            <NavGroupItem href="#">Nav Item 3</NavGroupItem>
            <NavGroupItem href="#">Nav Item 4</NavGroupItem>
        </NavGroup>
    </LayoutNav>
    <LayoutContent>
        <Container>
            <slot />
        </Container>
    </LayoutContent>
</Layout>`;
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Layout</Text>
        <Text size="xl" variant="weak">A structural component that defines the overall page structure with header and side navigation areas.</Text>
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
                <Layout>
                    <LayoutHeader>
                        <LayoutMenuButton on:click={() => open = !open}></LayoutMenuButton>
                    </LayoutHeader>
                    <LayoutLogo>
                        <Link href="/" style="text-decoration: none;">
                            <Text size="3xl" weight="bold" as="h1">Logo</Text>
                        </Link>
                    </LayoutLogo>
                    <LayoutNav {open}>
                        <NavGroup title="Nav Group">
                            <NavGroupItem href="#">Nav Item 1</NavGroupItem>
                            <NavGroupItem href="#">Nav Item 2</NavGroupItem>
                            <NavGroupItem href="#">Nav Item 3</NavGroupItem>
                            <NavGroupItem href="#">Nav Item 4</NavGroupItem>
                        </NavGroup>
                    </LayoutNav>
                    <LayoutContent>
                        <Container>
                            <slot />
                        </Container>
                    </LayoutContent>
                </Layout>
            </CodeExample>
        {/if}
    </Flex>
</Flex>