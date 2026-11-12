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
            <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
                <defs>
                    <mask id="1-mask">
                        <path
                            class="charge-path"
                            d="M32 6 A26 26 0 1 1 7.57 40.89"
                            fill="none"
                            stroke="#fff"
                            stroke-width="10"
                            pathLength="100"
                        />
                    </mask>
                </defs>
                <circle cx="32" cy="32" r="26" fill="none" stroke="#A190F0" stroke-opacity="0.25" stroke-width="6" stroke-dasharray="2.2 1.6" />
                <circle cx="32" cy="32" r="26" fill="none" stroke="#DCD5FF" stroke-width="6" stroke-dasharray="2.2 1.6" mask="url(#1-mask)" />
                <circle cx="32" cy="32" r="16" fill="#8E78EC" fill-opacity="0.3" stroke="#C9BFF5" stroke-width="1.5" />
                <path d="M34.5 22 L26 34 H31.5 L30 42.5 L38.5 30.5 H33 Z" fill="#F4F1FF" />
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
</style>
