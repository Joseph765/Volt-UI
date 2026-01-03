<script>
    import { 
        Container, 
        Display, 
        Layout, 
        LayoutContent, 
        LayoutHeader, 
        LayoutNav, 
        LayoutLogo, 
        Menu, 
        MenuGroup,
        MenuGroupItem,
        MenuItem
    } from "$lib";
</script>

<svelte:head>
	<title>Volt UI</title>
	<meta name="description" content="Design System For Crypto Apps" />
</svelte:head>

<Layout>
    <LayoutHeader></LayoutHeader>
    <LayoutLogo>
        <Display>Volt</Display>
    </LayoutLogo>
    <LayoutNav>
        <Menu>
            <!-- <MenuItem href="/">Getting Started</MenuItem> -->
            <MenuGroup title="Getting Started">
                <MenuGroupItem href="/">Installation</MenuGroupItem>
                <MenuGroupItem href="/">Layout</MenuGroupItem>
                <MenuGroupItem href="/">Grid</MenuGroupItem>
                <MenuGroupItem href="/">Forms</MenuGroupItem>
            </MenuGroup>
            <MenuGroup title="Design Tokens">
                <MenuGroupItem href="/tokens/button">Color</MenuGroupItem>
                <MenuGroupItem href="/tokens/typography">Typography</MenuGroupItem>
                <MenuGroupItem href="/tokens/space">Space</MenuGroupItem>
                <MenuGroupItem href="/tokens/radius">Radius</MenuGroupItem>
            </MenuGroup>
            <MenuGroup title="Components">
                <MenuGroupItem href="/components/button">Button</MenuGroupItem>
                <MenuGroupItem href="/components/card">Card</MenuGroupItem>
                <MenuGroupItem href="/components/checkbox">Checkbox</MenuGroupItem>
                <MenuGroupItem href="/components/container">Container</MenuGroupItem>
                <MenuGroupItem href="/components/display">Display</MenuGroupItem>
                <MenuGroupItem href="/components/flex">Flex</MenuGroupItem>
                <MenuGroupItem href="/components/heading">Heading</MenuGroupItem>
                <MenuGroupItem href="/components/icon">Icon</MenuGroupItem>
                <MenuGroupItem href="/components/input">Input</MenuGroupItem>
                <MenuGroupItem href="/components/layout">Layout</MenuGroupItem>
                <MenuGroupItem href="/components/menu">Menu</MenuGroupItem>
                <MenuGroupItem href="/components/select">Select</MenuGroupItem>
                <MenuGroupItem href="/components/text">Text</MenuGroupItem>
                <MenuGroupItem href="/components/toggle">Toggle</MenuGroupItem>
            </MenuGroup>
        </Menu>
    </LayoutNav>
    <LayoutContent>
        <Container>
            <slot />
        </Container>
    </LayoutContent>
</Layout>

<style>
    @import "$lib/css";
</style>
