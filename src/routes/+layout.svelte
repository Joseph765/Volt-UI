<script>
    import "$lib/css/index.css";
    import { page } from '$app/state'; 
    import components from "./components/components.json";
    import VoltLogo from "$lib/components/VoltLogo.svelte";

    import { Blocks, Paintbrush, Rocket } from "@jis3r/icons";

    import { 
        Layout, 
        LayoutContent, 
        LayoutHeader, 
        LayoutMenuButton,
        LayoutNav, 
        NavGroup,
        NavGroupItem,
        NavItem
    } from "$lib";

    /** @type { boolean } */
    let open = false;
</script>

<svelte:head>
	<title>Volt UI</title>
	<meta name="description" content="Design System For Crypto Apps" />
</svelte:head>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} on:click={() => open = !open} />
        <a href="/" class="logo" slot="mobile-logo">
            <svg class="bolt" viewBox="0 0 40 64">
                <path
                    d="M26 3 L4 36 H18 L14 61 L36 27 H22 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linejoin="round"
                />
            </svg>
            <!-- <span class="logo-ui">V</span> -->
        </a>
    </LayoutHeader>
    <a href="/" class="logo" slot="logo">
        <VoltLogo />
        <!-- VOLT <span class="logo-ui">UI</span> -->
    </a>
    <LayoutNav {open}>
        <NavItem href="/getting-started" active={page.url.pathname === "/getting-started"} on:click={() => open = false}>
            <Rocket slot="icon" let:animate {animate} />
            Getting Started
        </NavItem>
        <NavGroup title="Design Tokens">
            {#snippet icon(animate)}<Paintbrush {animate} />{/snippet}
            <NavGroupItem href="/tokens#top" active={page.url.pathname + page.url.hash === "/tokens#top"} on:click={() => open = false}>All tokens</NavGroupItem>
            <NavGroupItem href="/tokens#font" active={page.url.pathname + page.url.hash === "/tokens#font"} on:click={() => open = false}>Font</NavGroupItem>
            <NavGroupItem href="/tokens#font-size" active={page.url.pathname + page.url.hash === "/tokens#font-size"} on:click={() => open = false}>Font Size</NavGroupItem>
            <NavGroupItem href="/tokens#line-height" active={page.url.pathname + page.url.hash === "/tokens#line-height"} on:click={() => open = false}>Line Height</NavGroupItem>
            <NavGroupItem href="/tokens#space" active={page.url.pathname + page.url.hash === "/tokens#space"} on:click={() => open = false}>Space</NavGroupItem>
            <NavGroupItem href="/tokens#radius" active={page.url.pathname + page.url.hash === "/tokens#radius"} on:click={() => open = false}>Border Radius</NavGroupItem>
            <NavGroupItem href="/tokens#color" active={page.url.pathname + page.url.hash === "/tokens#color"} on:click={() => open = false}>Color</NavGroupItem>
            <NavGroupItem href="/tokens#color-scales" active={page.url.pathname + page.url.hash === "/tokens#color-scales"} on:click={() => open = false}>Color Scales</NavGroupItem>
        </NavGroup>
        <NavGroup title="Components">
            {#snippet icon(animate)}<Blocks {animate} />{/snippet}
            <NavGroupItem href="/components" active={page.url.pathname === "/components"} on:click={() => open = false}>All Components</NavGroupItem>
            {#each components as component}
                <NavGroupItem href="/components/{component.name.toLocaleLowerCase()}" active={page.url.pathname === '/components/' + component.name.toLocaleLowerCase()} on:click={() => open = false}>{component.name}</NavGroupItem>
            {/each}
        </NavGroup>
    </LayoutNav>
    <LayoutContent>
        <slot />
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

    .logo-ui {
        background-color: var(--v-accent-5);
        padding: 2px 8px;
        border-radius: var(--v-radius);
    }

    .bolt {
        --volt-size: 24px;
        --bolt: var(--v-accent-10);
		width: calc(var(--volt-size) * 0.74);
		height: calc(var(--volt-size) * 1.17);
		color: var(--bolt);
		flex-shrink: 0;
	}
</style>
