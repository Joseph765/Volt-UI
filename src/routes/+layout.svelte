<script>
    import "$lib/css/index.css";

    import { afterNavigate } from "$app/navigation";

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
        NavItem,
        Text
    } from "$lib";

    /** @type { boolean } */
    let open = false;

    afterNavigate(() => {
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
        <a href="/" class="logo">
            VOLT <span class="logo-ui">UI</span>
        </a>
    </LayoutLogo>
    <LayoutNav {open}>
        <NavItem href="/getting-started">Getting Started</NavItem>
        <NavGroup title="Design Tokens">
            <NavGroupItem href="/tokens#top">All tokens</NavGroupItem>
            <NavGroupItem href="/tokens#font">Font</NavGroupItem>
            <NavGroupItem href="/tokens#font-size">Font Size</NavGroupItem>
            <NavGroupItem href="/tokens#line-height">Line Height</NavGroupItem>
            <NavGroupItem href="/tokens#space">Space</NavGroupItem>
            <NavGroupItem href="/tokens#radius">Border Radius</NavGroupItem>
            <NavGroupItem href="/tokens#color">Color</NavGroupItem>
            <NavGroupItem href="/tokens#color-scales">Color Scales</NavGroupItem>
        </NavGroup>
        <NavGroup title="Components">
            <NavGroupItem href="/components">All Components</NavGroupItem>
            <NavGroupItem href="/components/badge">Badge</NavGroupItem>
            <NavGroupItem href="/components/banner">Banner</NavGroupItem>
            <NavGroupItem href="/components/button">Button</NavGroupItem>
            <NavGroupItem href="/components/card">Card</NavGroupItem>
            <NavGroupItem href="/components/checkbox">Checkbox</NavGroupItem>
            <NavGroupItem href="/components/code">Code</NavGroupItem>
            <NavGroupItem href="/components/container">Container</NavGroupItem>
            <NavGroupItem href="/components/divider">Divider</NavGroupItem>
            <NavGroupItem href="/components/fieldset">Fieldset</NavGroupItem>
            <NavGroupItem href="/components/flex">Flex</NavGroupItem>
            <NavGroupItem href="/components/icon">Icon</NavGroupItem>
            <NavGroupItem href="/components/input">Input</NavGroupItem>
            <NavGroupItem href="/components/layout">Layout</NavGroupItem>
            <NavGroupItem href="/components/link">Link</NavGroupItem>
            <NavGroupItem href="/components/navigation">Navigation</NavGroupItem>
            <NavGroupItem href="/components/radio">Radio</NavGroupItem>
            <NavGroupItem href="/components/select">Select</NavGroupItem>
            <NavGroupItem href="/components/table">Table</NavGroupItem>
            <NavGroupItem href="/components/tabs">Tabs</NavGroupItem>
            <NavGroupItem href="/components/text">Text</NavGroupItem>
            <NavGroupItem href="/components/textarea">Textarea</NavGroupItem>
            <NavGroupItem href="/components/toast">Toast</NavGroupItem>
            <NavGroupItem href="/components/toggle">Toggle</NavGroupItem>
        </NavGroup>
    </LayoutNav>
    <LayoutContent>
        <!-- <Container size="xl"> -->
            <slot />
        <!-- </Container> -->
    </LayoutContent>
</Layout>

<style>
    .logo {
        font-family: var(--v-font);
        font-size: var(--v-font-size-2xl);
        font-weight: var(--v-font-weight-black);
        letter-spacing: -0.2px;
        text-decoration: none;
        color: var(--v-color-text);
        text-transform: uppercase;
    }

    .logo-accent {
        color: var(--v-accent-10);
        padding-inline: -2px;
    }

    .logo-ui {
        background-color: var(--v-accent-5);
        padding: 2px 8px;
        border-radius: var(--v-radius);
    }
</style>
