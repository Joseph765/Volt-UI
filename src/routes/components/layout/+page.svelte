<script>
    import { ChartPie, History, Layers, Settings } from "@jis3r/icons";
    import {
        Avatar,
        Banner,
        Code,
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
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text,
        ThemeSwitcher
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    /** @type { boolean } */
    let open = $state(false);

    /** @type { boolean } */
    let openFooter = $state(false);

    /** @type { string } */
    let activeItem = $state('dashboard');

    /** @param { string } item */
    function select(item) {
        activeItem = item;
        open = false;
        openFooter = false;
    }

    let example1 = `<script>
    import { page } from '$app/state';
    import { ChartPie, History, Layers, Settings } from "@jis3r/icons";
    import {
        Container,
        Layout,
        LayoutContent,
        LayoutHeader,
        LayoutMenuButton,
        LayoutNav,
        NavGroup,
        NavGroupItem,
        NavItem
    } from "moth-ui-svelte";

    let { children } = $props();

    /** @type { boolean } */
    let open = $state(false);
<\/script>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} onclick={() => open = !open} />
        {#snippet mobileLogo()}<a href="/" class="mobile-logo">L</a>{/snippet}
    </LayoutHeader>
    {#snippet logo()}<a href="/" class="logo">Logo</a>{/snippet}
    <LayoutNav {open} onclose={() => open = false}>
        <NavItem href="/" active={page.url.pathname === "/"} onclick={() => open = false}>
            {#snippet icon(animate)}<ChartPie {animate} />{/snippet}
            Dashboard
        </NavItem>
        <NavItem href="/assets" active={page.url.pathname === "/assets"} onclick={() => open = false}>
            {#snippet icon(animate)}<Layers {animate} />{/snippet}
            Assets
        </NavItem>
        <NavItem href="/transactions" active={page.url.pathname === "/transactions"} onclick={() => open = false}>
            {#snippet icon(animate)}<History {animate} />{/snippet}
            Transactions
        </NavItem>
        <NavGroup title="Settings">
            {#snippet icon(animate)}<Settings {animate} />{/snippet}
            <NavGroupItem href="/settings/profile" active={page.url.pathname === "/settings/profile"} onclick={() => open = false}>Profile</NavGroupItem>
            <NavGroupItem href="/settings/security" active={page.url.pathname === "/settings/security"} onclick={() => open = false}>Security</NavGroupItem>
        </NavGroup>
    </LayoutNav>
    <LayoutContent>
        <Container>
            {@render children()}
        </Container>
    </LayoutContent>
</Layout>`;

    let example2 = `<script>
    import { page } from '$app/state';
    import { ChartPie, Layers } from "@jis3r/icons";
    import {
        Layout,
        LayoutContent,
        LayoutHeader,
        LayoutMenuButton,
        LayoutNav,
        Avatar,
        NavItem,
        ThemeSwitcher
    } from "moth-ui-svelte";

    let { children } = $props();

    /** @type { boolean } */
    let open = $state(false);
<\/script>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} onclick={() => open = !open} />
    </LayoutHeader>
    <LayoutNav {open} onclose={() => open = false}>
        <NavItem href="/" active={page.url.pathname === "/"} onclick={() => open = false}>
            {#snippet icon(animate)}<ChartPie {animate} />{/snippet}
            Dashboard
        </NavItem>
        <NavItem href="/assets" active={page.url.pathname === "/assets"} onclick={() => open = false}>
            {#snippet icon(animate)}<Layers {animate} />{/snippet}
            Assets
        </NavItem>
        {#snippet footer()}
            <Avatar name="Ada Lovelace" />
            <ThemeSwitcher />
        {/snippet}
    </LayoutNav>
    <LayoutContent>
        {@render children()}
    </LayoutContent>
</Layout>`;
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Layout</Text>
        <Text size="xl" variant="weak">
            A structural component that defines the overall page structure with a sidebar navigation.
            On smaller screens the sidebar collapses into a header with a menu button that slides the navigation in from the left.
        </Text>
    </Flex>
    <Banner>Animated icons shown here are from <Link href="https://www.movingicons.dev" target="_blank">movingicons.dev</Link> (<Code>@jis3r/icons</Code>). Install it to use them.</Banner>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            The page shell: a sidebar on wide screens, and a header with a menu button below the <Code>l</Code>
            breakpoint (66rem). The window scrolls, so the header and sidebar stay in place. Fill the sidebar with <Link
            size="l" href="/components/navigation">Navigation</Link> items.
        </Text>
        <CodeExample code={example1}>
            <div class="layout-demo">
                <Layout>
                    <LayoutHeader>
                        <LayoutMenuButton {open} onclick={() => open = !open} />
                        {#snippet mobileLogo()}<a href="#top" class="example-mobile-logo">L</a>{/snippet}
                    </LayoutHeader>
                    {#snippet logo()}<a href="#top" class="example-logo">Logo</a>{/snippet}
                    <LayoutNav {open} onclose={() => open = false}>
                        <NavItem href="#top" active={activeItem === "dashboard"} onclick={() => select("dashboard")}>
                            {#snippet icon(animate)}<ChartPie {animate} />{/snippet}
                            Dashboard
                        </NavItem>
                        <NavItem href="#top" active={activeItem === "assets"} onclick={() => select("assets")}>
                            {#snippet icon(animate)}<Layers {animate} />{/snippet}
                            Assets
                        </NavItem>
                        <NavItem href="#top" active={activeItem === "transactions"} onclick={() => select("transactions")}>
                            {#snippet icon(animate)}<History {animate} />{/snippet}
                            Transactions
                        </NavItem>
                        <NavGroup title="Settings">
                            {#snippet icon(animate)}<Settings {animate} />{/snippet}
                            <NavGroupItem href="#top" active={activeItem === "profile"} onclick={() => select("profile")}>Profile</NavGroupItem>
                            <NavGroupItem href="#top" active={activeItem === "security"} onclick={() => select("security")}>Security</NavGroupItem>
                        </NavGroup>
                    </LayoutNav>
                    <LayoutContent>
                        <Container>
                            <Text size="3xl" weight="black" as="h3">Page content</Text>
                        </Container>
                    </LayoutContent>
                </Layout>
            </div>
        </CodeExample>
    </section>

    <section class="section" id="footer">
        <Text size="2xl" weight="bold" as="h2">Footer</Text>
        <Text size="l" variant="weak" measure="l">
            The <Code>footer</Code> snippet stays at the bottom of the sidebar (and of the slide-in nav on smaller
            screens) while the items above it scroll. Use it for global actions that aren't pages: the signed-in user,
            their settings, or a <Link size="l" href="/components/themeswitcher">ThemeSwitcher</Link>. Keep it to one
            row.
        </Text>
        <CodeExample code={example2}>
            <div class="layout-demo">
                <Layout>
                    <LayoutHeader>
                        <LayoutMenuButton open={openFooter} onclick={() => openFooter = !openFooter} />
                    </LayoutHeader>
                    <LayoutNav open={openFooter} onclose={() => openFooter = false}>
                        <NavItem href="#top" active={activeItem === "dashboard"} onclick={() => select("dashboard")}>
                            {#snippet icon(animate)}<ChartPie {animate} />{/snippet}
                            Dashboard
                        </NavItem>
                        <NavItem href="#top" active={activeItem === "assets"} onclick={() => select("assets")}>
                            {#snippet icon(animate)}<Layers {animate} />{/snippet}
                            Assets
                        </NavItem>
                        {#snippet footer()}
                            <Avatar name="Ada Lovelace" />
                            <ThemeSwitcher />
                        {/snippet}
                    </LayoutNav>
                    <LayoutContent>
                        <Container>
                            <Text size="3xl" weight="black" as="h3">Page content</Text>
                        </Container>
                    </LayoutContent>
                </Layout>
            </div>
        </CodeExample>
    </section>

    <section class="section" id="api-reference">
        <Text size="2xl" weight="bold" as="h2">API reference</Text>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Type</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><Code>LayoutNav open</Code></TableCell>
                    <TableCell>Slides the navigation in on screens narrower than 66rem (1056px) and blurs the page content behind it. The sidebar is always shown on larger screens.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>LayoutNav label</Code></TableCell>
                    <TableCell>Accessible name for the navigation landmark. Defaults to "Main".</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>LayoutNav onclose</Code></TableCell>
                    <TableCell>Fires when the user presses Esc or clicks the blurred page outside the navigation while it is open. Set <Code>open</Code> to false in response. On Esc, focus moves back to the menu button if it was inside the navigation.</TableCell>
                    <TableCell><Code>function</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>LayoutNav footer</Code></TableCell>
                    <TableCell>Global actions pinned to the bottom of the navigation, below a divider, such as the signed-in user, settings or a theme switcher. The items above it scroll on their own.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>LayoutMenuButton open</Code></TableCell>
                    <TableCell>Reflects whether the navigation is open so screen readers announce it (<Code>aria-expanded</Code>).</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>LayoutMenuButton onclick</Code></TableCell>
                    <TableCell>Fires when the menu button is pressed. Toggle <Code>open</Code> in response.</TableCell>
                    <TableCell><Code>function</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>Layout logo</Code></TableCell>
                    <TableCell>Logo shown above the sidebar on larger screens.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>LayoutHeader mobileLogo</Code></TableCell>
                    <TableCell>Logo centered in the header on smaller screens.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>NavItem icon</Code></TableCell>
                    <TableCell>Icon before the label. Receives <Code>animate</Code>, which is true while the item is hovered or keyboard-focused, so animated icons play for the whole row. Also available on <Code>NavGroupItem</Code>.</TableCell>
                    <TableCell><Code>Snippet</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>NavGroup icon</Code></TableCell>
                    <TableCell>Snippet rendered before the group title. Receives the same <Code>animate</Code> flag.</TableCell>
                    <TableCell><Code>Snippet&lt;[boolean]&gt;</Code></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </section>
</Flex>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        scroll-margin-block-start: var(--m-space-l);
    }

    /*
     * The demo is a whole app inside a small box, so the box acts as its window:
     * - It fills the preview area exactly and scrolls itself, so the demo's sticky header and sidebar stick
     *   inside it.
     * - `contain: layout paint` makes the box the reference for the demo's position: fixed drawer. On a phone
     *   it slides in inside the box, not over the whole screen, and is clipped while off-screen.
     */
    .layout-demo {
        width: 100%;
        height: calc(33dvh - 2 * var(--m-space-m));
        overflow-y: auto;
        contain: layout paint;
        /* Lets the demo's sidebar size itself to this box (cqh) instead of the browser window (dvh) */
        container-type: size;
        border-radius: var(--m-radius);
    }

    .layout-demo :global(.m-layout) {
        min-height: 100%;
    }

    /* The real sidebar fills the window's height below the logo; in the demo, it fills the box's height, so a long
       nav scrolls on its own under the logo and the footer sits at the bottom of the box */
    @media (min-width: 66rem) {
        .layout-demo :global(.m-layout-nav) {
            height: calc(100cqh - var(--m-layout-logo-offset));
        }
    }

    .example-logo {
        font-family: var(--m-font);
        font-size: var(--m-font-size-3xl);
        font-weight: var(--m-font-weight-black);
        line-height: 1;
        color: var(--m-color-text);
        text-decoration: none;
    }

    .example-mobile-logo {
        font-family: var(--m-font);
        font-size: var(--m-font-size-2xl);
        font-weight: var(--m-font-weight-black);
        line-height: 1;
        color: var(--m-color-text);
        text-decoration: none;
        background-color: var(--m-accent-4);
        padding: var(--m-space-s) var(--m-space-m);
        border-radius: var(--m-radius);
    }
</style>
