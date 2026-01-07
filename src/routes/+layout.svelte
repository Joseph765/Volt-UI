<script>
    import { beforeNavigate } from "$app/navigation";

    import { 
        Container, 
        Layout, 
        LayoutContent, 
        LayoutHeader, 
        LayoutLogo, 
        LayoutMenuButton,
        LayoutNav, 
        NavGroup,
        NavGroupItem,
        Text
    } from "$lib";

    /** @type { boolean } */
    let open = false;

    beforeNavigate(() => {
        // Closes navigation when navigating to a new page
        open = false;
    });
</script>

<svelte:head>
	<title>Volt UI</title>
	<meta name="description" content="Design System For Crypto Apps" />
</svelte:head>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton on:click={() => open = !open}></LayoutMenuButton>
    </LayoutHeader>
    <LayoutLogo>
        <a href="/" style="color: var(--v-color-text); text-decoration: none;">
            <Text size="3xl" weight="bold" as="h1">
                Volt
            </Text>
        </a>
    </LayoutLogo>
    <LayoutNav {open}>
        <!-- <MenuItem href="/">Getting Started</MenuItem> -->
        <!-- <MenuGroup title="Getting Started">
            <NavGroupItem href="/">Installation</NavGroupItem>
            <NavGroupItem href="/">Layout</NavGroupItem>
            <NavGroupItem href="/">Grid</NavGroupItem>
            <NavGroupItem href="/">Forms</NavGroupItem>
        </MenuGroup> -->
        <NavGroup title="Design Tokens">
            <NavGroupItem href="/tokens#font">Font</NavGroupItem>
            <NavGroupItem href="/tokens#font-size">Font Size</NavGroupItem>
            <NavGroupItem href="/tokens#line-height">Line Height</NavGroupItem>
            <NavGroupItem href="/tokens#space">Space</NavGroupItem>
            <NavGroupItem href="/tokens#radius">Border Radius</NavGroupItem>
            <NavGroupItem href="/tokens#color">Color</NavGroupItem>
        </NavGroup>
        <NavGroup title="Components">
            <NavGroupItem href="/components/badge">Badge</NavGroupItem>
            <NavGroupItem href="/components/banner">Banner</NavGroupItem>
            <NavGroupItem href="/components/button">Button</NavGroupItem>
            <NavGroupItem href="/components/card">Card</NavGroupItem>
            <NavGroupItem href="/components/checkbox">Checkbox</NavGroupItem>
            <NavGroupItem href="/components/container">Container</NavGroupItem>
            <NavGroupItem href="/components/flex">Flex</NavGroupItem>
            <NavGroupItem href="/components/icon">Icon</NavGroupItem>
            <NavGroupItem href="/components/input">Input</NavGroupItem>
            <NavGroupItem href="/components/layout">Layout</NavGroupItem>
            <NavGroupItem href="/components/link">Link</NavGroupItem>
            <NavGroupItem href="/components/navigation">Navigation</NavGroupItem>
            <NavGroupItem href="/components/radio">Radio</NavGroupItem>
            <NavGroupItem href="/components/select">Select</NavGroupItem>
            <NavGroupItem href="/components/table">Table</NavGroupItem>
            <NavGroupItem href="/components/text">Text</NavGroupItem>
            <NavGroupItem href="/components/toast">Toast</NavGroupItem>
            <NavGroupItem href="/components/toggle">Toggle</NavGroupItem>
        </NavGroup>
    </LayoutNav>
    <LayoutContent>
        <Container size="xl">
            <slot />
        </Container>
    </LayoutContent>
</Layout>

<style>
    @import "$lib/css";
</style>
