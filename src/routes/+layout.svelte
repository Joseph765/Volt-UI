<script>
    import "$lib/css/index.css";
    import "./glow.css";
    import { page } from '$app/state';
    import components from "./components/components.json";
    import MothLogo from "./MothLogo.svelte";
    import FrameworkSwitcher from "./FrameworkSwitcher.svelte";
    import { version } from "../../package.json";

    import { Blocks, Compass, Layers, Rocket } from "@jis3r/icons"; // Compass: the hidden Guidelines group

    import { 
        Layout, 
        LayoutContent, 
        LayoutHeader, 
        LayoutMenuButton,
        LayoutNav, 
        Avatar,
        NavGroup,
        NavGroupItem,
        NavItem,
        ThemeSwitcher
    } from "$lib";

    /** @type {{ children: import('svelte').Snippet }} */
    let { children } = $props();

    /** @type { boolean } */
    let open = $state(false);
</script>


<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} onclick={() => open = !open} />
        {#snippet mobileLogo()}
            <div class="mobile-brand">
                <a href="/" class="logo" aria-label="Moth UI home">
                    <MothLogo size={32} wordmark={false} />
                </a>
                <FrameworkSwitcher id="framework-mobile" {version} />
            </div>
        {/snippet}
    </LayoutHeader>
    {#snippet logo()}
        <a href="/" class="logo is-desktop">
            <MothLogo size={36} />
        </a>
        <FrameworkSwitcher id="framework-desktop" {version} />
    {/snippet}
    <LayoutNav {open} onclose={() => open = false}>
        <NavItem href="/getting-started" active={page.url.pathname === "/getting-started"} onclick={() => open = false}>
            {#snippet icon(animate)}<Rocket {animate} />{/snippet}
            Getting Started
        </NavItem>
        <NavGroup title="Foundations">
            {#snippet icon(animate)}<Layers {animate} />{/snippet}
            <NavGroupItem href="/foundations/colors" active={page.url.pathname === "/foundations/colors"} onclick={() => open = false}>Colors</NavGroupItem>
            <NavGroupItem href="/foundations/typography" active={page.url.pathname === "/foundations/typography"} onclick={() => open = false}>Typography</NavGroupItem>
            <NavGroupItem href="/foundations/spacing-and-layout" active={page.url.pathname === "/foundations/spacing-and-layout"} onclick={() => open = false}>Spacing &amp; Layout</NavGroupItem>
            <NavGroupItem href="/foundations/surfaces" active={page.url.pathname === "/foundations/surfaces"} onclick={() => open = false}>Surfaces</NavGroupItem>
        </NavGroup>
        <!-- Guidelines is hidden from the nav for now (the page still exists while its content moves elsewhere)
        <NavGroup title="Guidelines" open={page.url.pathname.startsWith("/guidelines")}>
            {#snippet icon(animate)}<Compass {animate} />{/snippet}
            <NavGroupItem href="/guidelines" active={page.url.pathname === "/guidelines"} onclick={() => open = false}>Overview</NavGroupItem>
        </NavGroup>
        -->
        <NavGroup title="Components">
            {#snippet icon(animate)}<Blocks {animate} />{/snippet}
            <NavGroupItem href="/components" active={page.url.pathname === "/components"} onclick={() => open = false}>All Components</NavGroupItem>
            {#each components as component}
                <NavGroupItem href="/components/{component.name.toLocaleLowerCase()}" active={page.url.pathname === '/components/' + component.name.toLocaleLowerCase()} onclick={() => open = false}>{component.name}</NavGroupItem>
            {/each}
        </NavGroup>
        {#snippet footer()}
            <Avatar name="Guest" />
            <ThemeSwitcher />
        {/snippet}
    </LayoutNav>
    <LayoutContent>
        {@render children()}
    </LayoutContent>
</Layout>

<style>
    /* Flex, so the inline SVG doesn't sit on a text baseline with space underneath */
    .logo {
        display: flex;
        text-decoration: none;
    }

    /* Center the 36px mark on the nav's 24px icon column, so it starts 6px further left */
    .logo.is-desktop {
        margin-inline-start: -6px;
        margin-inline-end: var(--m-space-s);
    }

    .mobile-brand {
        display: flex;
        align-items: center;
        gap: var(--m-space-s);
    }
</style>
