<script>
    import "$lib/css/index.css";
    import { page } from '$app/state'; 
    import components from "./components/components.json";
    import MothLogo from "$lib/components/MothLogo.svelte";

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
	<title>Moth UI</title>
	<meta name="description" content="Design System For Crypto Apps" />
</svelte:head>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} on:click={() => open = !open} />
        <a href="/" class="logo" slot="mobile-logo" aria-label="Moth UI home">
            <svg
                class="mark"
                width="32"
                height="32"
                viewBox="0 0 64 64"
                aria-hidden="true"
            >
                <g stroke-linejoin="round" stroke-width="3">
                    <path fill="#8E78EC" stroke="#8E78EC" d="M30 23 L7 11 Q5 10 6 13 L11 33 Q12 35 14 34 L30 31 Z" />
                    <path fill="#8E78EC" stroke="#8E78EC" d="M34 23 L57 11 Q59 10 58 13 L53 33 Q52 35 50 34 L34 31 Z" />
                    <path fill="#5A46A8" stroke="#5A46A8" d="M30 34 L16 38 Q13 39 15 42 L22 51 Q24 53 25 51 L30 42 Z" />
                    <path fill="#5A46A8" stroke="#5A46A8" d="M34 34 L48 38 Q51 39 49 42 L42 51 Q40 53 39 51 L34 42 Z" />
                </g>
                <rect fill="#EEEEF0" x="29" y="19" width="6" height="30" rx="3" />
                <path
                    d="M31 20 Q28 12 23 8 M33 20 Q36 12 41 8"
                    fill="none"
                    stroke="#C9BFF5"
                    stroke-width="2.2"
                    stroke-linecap="round"
                />
            </svg>
        </a>
    </LayoutHeader>
    <a href="/" class="logo is-desktop" slot="logo">
        <MothLogo size={36} />
    </a>
    <LayoutNav {open} on:close={() => open = false}>
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
    /* Center the 36px mark on the nav's 24px icon column, so it starts 6px further left */
    .logo.is-desktop {
        margin-inline-start: -6px;
    }
</style>
