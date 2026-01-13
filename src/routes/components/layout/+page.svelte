<script>
    import { page } from '$app/state'; 
    import {
        Container,
        Flex,
        Layout, 
        LayoutContent, 
        LayoutHeader, 
        LayoutMenuButton,
        LayoutNav,
        Link,
        NavGroup,
        NavGroupItem,
        NavItem,
        Select,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = [
        { value: 'basic', label: 'Example: Basic' }
    ];

    /** @type { string } */
    let selectedExample = 'basic';

    /** @type { boolean } */
    let open = false;

    let example1 = `<script>
    import { page } from '$app/state'; 

    /** @type { boolean } */
    let open = false;
<\/script>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton on:click={() => open = !open}></LayoutMenuButton>
        <Link href="/" style="text-decoration: none; color: var(--v-color-text);" slot="mobile-logo">
            <Text size="3xl" weight="bold" as="h1">Logo</Text>
        </Link>
    </LayoutHeader>
    <Link href="/" style="text-decoration: none; color: var(--v-color-text);" slot="logo">
        <Text size="3xl" weight="bold" as="h1">Logo</Text>
    </Link>
    <LayoutNav {open}>
        <NavItem href="/" active={page.url.pathname === "/"} on:click={() => open = false}>Home</NavItem>
        <NavGroup title="Nav Group">
            <NavGroupItem href="/getting-started" active={page.url.pathname === "/getting-started"} on:click={() => open = false}>Getting Started</NavGroupItem>
            <NavGroupItem href="/tokens" active={page.url.pathname === "/getting-started"} on:click={() => open = false}>Tokens</NavGroupItem>
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
        <Text size="3xl" weight="black" as="h2">Layout</Text>
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
                        <Link href="/" style="text-decoration: none; color: var(--v-color-text);" slot="mobile-logo">
                            <Text size="3xl" weight="bold" as="h1">Logo</Text>
                        </Link>
                    </LayoutHeader>
                    <Link href="/" style="text-decoration: none; color: var(--v-color-text);" slot="logo">
                        <Text size="3xl" weight="bold" as="h1">Logo</Text>
                    </Link>
                    <LayoutNav {open}>
                        <NavItem href="/" active={page.url.pathname === "/"} on:click={() => open = false}>Home</NavItem>
                        <NavGroup title="Nav Group">
                            <NavGroupItem href="/getting-started" active={page.url.pathname === "/getting-started"} on:click={() => open = false}>Getting Started</NavGroupItem>
                            <NavGroupItem href="/tokens" active={page.url.pathname === "/getting-started"} on:click={() => open = false}>Tokens</NavGroupItem>
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