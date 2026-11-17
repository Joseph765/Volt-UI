<script>
    import "$lib/css/index.css";
    import "./glow.css";
    import { page } from '$app/state';
    import components from "./components/components.json";
    import MothLogo from "./MothLogo.svelte";
    import { version } from "../../package.json";

    import { Blocks, Compass, Paintbrush, Rocket } from "@jis3r/icons";

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

    /** @type {{ children: import('svelte').Snippet }} */
    let { children } = $props();

    /** @type { boolean } */
    let open = $state(false);
</script>


<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} onclick={() => open = !open} />
        {#snippet mobileLogo()}
            <a href="/" class="logo" aria-label="Moth UI home">
                <MothLogo size={32} wordmark={false} />
            </a>
        {/snippet}
    </LayoutHeader>
    {#snippet logo()}
        <a href="/" class="logo is-desktop">
            <MothLogo size={36} />
        </a>
        <span class="version">v{version}</span>
    {/snippet}
    <LayoutNav {open} onclose={() => open = false}>
        <NavItem href="/getting-started" active={page.url.pathname === "/getting-started"} onclick={() => open = false}>
            {#snippet icon(animate)}<Rocket {animate} />{/snippet}
            Getting Started
        </NavItem>
        <NavGroup title="Guidelines" open={page.url.pathname.startsWith("/guidelines")}>
            {#snippet icon(animate)}<Compass {animate} />{/snippet}
            <NavGroupItem href="/guidelines" active={page.url.pathname === "/guidelines"} onclick={() => open = false}>Overview</NavGroupItem>
            <NavGroupItem href="/guidelines/color" active={page.url.pathname === "/guidelines/color"} onclick={() => open = false}>Color</NavGroupItem>
        </NavGroup>
        <NavGroup title="Design Tokens" open={page.url.pathname === "/tokens"}>
            {#snippet icon(animate)}<Paintbrush {animate} />{/snippet}
            <NavGroupItem href="/tokens#top" active={page.url.pathname + page.url.hash === "/tokens#top"} onclick={() => open = false}>All tokens</NavGroupItem>
            <NavGroupItem href="/tokens#font" active={page.url.pathname + page.url.hash === "/tokens#font"} onclick={() => open = false}>Font</NavGroupItem>
            <NavGroupItem href="/tokens#font-weight" active={page.url.pathname + page.url.hash === "/tokens#font-weight"} onclick={() => open = false}>Font Weight</NavGroupItem>
            <NavGroupItem href="/tokens#font-size" active={page.url.pathname + page.url.hash === "/tokens#font-size"} onclick={() => open = false}>Font Size</NavGroupItem>
            <NavGroupItem href="/tokens#line-height" active={page.url.pathname + page.url.hash === "/tokens#line-height"} onclick={() => open = false}>Line Height</NavGroupItem>
            <NavGroupItem href="/tokens#letter-spacing" active={page.url.pathname + page.url.hash === "/tokens#letter-spacing"} onclick={() => open = false}>Letter Spacing</NavGroupItem>
            <NavGroupItem href="/tokens#space" active={page.url.pathname + page.url.hash === "/tokens#space"} onclick={() => open = false}>Space</NavGroupItem>
            <NavGroupItem href="/tokens#sizing" active={page.url.pathname + page.url.hash === "/tokens#sizing"} onclick={() => open = false}>Sizing</NavGroupItem>
            <NavGroupItem href="/tokens#radius" active={page.url.pathname + page.url.hash === "/tokens#radius"} onclick={() => open = false}>Border Radius</NavGroupItem>
            <NavGroupItem href="/tokens#breakpoints" active={page.url.pathname + page.url.hash === "/tokens#breakpoints"} onclick={() => open = false}>Breakpoints</NavGroupItem>
            <NavGroupItem href="/tokens#color" active={page.url.pathname + page.url.hash === "/tokens#color"} onclick={() => open = false}>Color</NavGroupItem>
            <NavGroupItem href="/tokens#color-scales" active={page.url.pathname + page.url.hash === "/tokens#color-scales"} onclick={() => open = false}>Color Scales</NavGroupItem>
        </NavGroup>
        <NavGroup title="Components">
            {#snippet icon(animate)}<Blocks {animate} />{/snippet}
            <NavGroupItem href="/components" active={page.url.pathname === "/components"} onclick={() => open = false}>All Components</NavGroupItem>
            {#each components as component}
                <NavGroupItem href="/components/{component.name.toLocaleLowerCase()}" active={page.url.pathname === '/components/' + component.name.toLocaleLowerCase()} onclick={() => open = false}>{component.name}</NavGroupItem>
            {/each}
        </NavGroup>
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
    }

    /* Sit the version on the wordmark's baseline ("last" skips the mark, which comes first) */
    .logo.is-desktop,
    .version {
        align-self: last baseline;
    }

    .version {
        margin-inline-start: var(--m-space-s);
        font-family: var(--m-font-mono);
        font-size: var(--m-font-size-xs);
        color: var(--m-color-text-weaker);
    }
</style>
