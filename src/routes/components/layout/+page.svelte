<script>
    import { ChartPie, History, Layers, Settings } from "@jis3r/icons";
    import {
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
        Select,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
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

    /** @type { string } */
    let activeItem = 'dashboard';

    /** @param { string } item */
    function select(item) {
        activeItem = item;
        open = false;
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

    /** @type { boolean } */
    let open = false;
<\/script>

<Layout>
    <LayoutHeader>
        <LayoutMenuButton {open} on:click={() => open = !open} />
        <a href="/" class="mobile-logo" slot="mobile-logo">L</a>
    </LayoutHeader>
    <a href="/" class="logo" slot="logo">Logo</a>
    <LayoutNav {open} on:close={() => open = false}>
        <NavItem href="/" active={page.url.pathname === "/"} on:click={() => open = false}>
            <ChartPie slot="icon" let:animate {animate} />
            Dashboard
        </NavItem>
        <NavItem href="/assets" active={page.url.pathname === "/assets"} on:click={() => open = false}>
            <Layers slot="icon" let:animate {animate} />
            Assets
        </NavItem>
        <NavItem href="/transactions" active={page.url.pathname === "/transactions"} on:click={() => open = false}>
            <History slot="icon" let:animate {animate} />
            Transactions
        </NavItem>
        <NavGroup title="Settings">
            {#snippet icon(animate)}<Settings {animate} />{/snippet}
            <NavGroupItem href="/settings/profile" active={page.url.pathname === "/settings/profile"} on:click={() => open = false}>Profile</NavGroupItem>
            <NavGroupItem href="/settings/security" active={page.url.pathname === "/settings/security"} on:click={() => open = false}>Security</NavGroupItem>
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
        <Text size="3xl" weight="black" as="h1">Layout</Text>
        <Text size="xl" variant="weak">
            A structural component that defines the overall page structure with a sidebar navigation.
            On smaller screens the sidebar collapses into a header with a menu button that slides the navigation in from the left.
        </Text>
    </Flex>
    <Banner>Animated icons shown here are from <Link href="https://www.movingicons.dev" target="_blank">movingicons.dev</Link> (<Code>@jis3r/icons</Code>). Install it to use them.</Banner>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "basic"}
            <CodeExample code={example1}>
                <div class="layout-demo">
                    <Layout>
                        <LayoutHeader>
                            <LayoutMenuButton {open} on:click={() => open = !open} />
                            <a href="#top" class="example-mobile-logo" slot="mobile-logo">L</a>
                        </LayoutHeader>
                        <a href="#top" class="example-logo" slot="logo">Logo</a>
                        <LayoutNav {open} on:close={() => open = false}>
                            <NavItem href="#top" active={activeItem === "dashboard"} on:click={() => select("dashboard")}>
                                <ChartPie slot="icon" let:animate {animate} />
                                Dashboard
                            </NavItem>
                            <NavItem href="#top" active={activeItem === "assets"} on:click={() => select("assets")}>
                                <Layers slot="icon" let:animate {animate} />
                                Assets
                            </NavItem>
                            <NavItem href="#top" active={activeItem === "transactions"} on:click={() => select("transactions")}>
                                <History slot="icon" let:animate {animate} />
                                Transactions
                            </NavItem>
                            <NavGroup title="Settings">
                                {#snippet icon(animate)}<Settings {animate} />{/snippet}
                                <NavGroupItem href="#top" active={activeItem === "profile"} on:click={() => select("profile")}>Profile</NavGroupItem>
                                <NavGroupItem href="#top" active={activeItem === "security"} on:click={() => select("security")}>Security</NavGroupItem>
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
        {/if}
    </Flex>
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
                <TableCell><Code>LayoutNav on:close</Code></TableCell>
                <TableCell>Fires when the user presses Esc or clicks the blurred page outside the navigation while it is open. Set <Code>open</Code> to false in response. On Esc, focus moves back to the menu button if it was inside the navigation.</TableCell>
                <TableCell><Code>event</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>LayoutMenuButton open</Code></TableCell>
                <TableCell>Reflects whether the navigation is open so screen readers announce it (<Code>aria-expanded</Code>).</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>LayoutMenuButton on:click</Code></TableCell>
                <TableCell>Fires when the menu button is pressed. Toggle <Code>open</Code> in response.</TableCell>
                <TableCell><Code>event</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>Layout slot="logo"</Code></TableCell>
                <TableCell>Logo shown above the sidebar on larger screens.</TableCell>
                <TableCell><Code>slot</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>LayoutHeader slot="mobile-logo"</Code></TableCell>
                <TableCell>Logo centered in the header on smaller screens.</TableCell>
                <TableCell><Code>slot</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavItem slot="icon"</Code></TableCell>
                <TableCell>Icon before the label. Receives <Code>animate</Code>, which is true while the item is hovered or keyboard-focused, so animated icons play for the whole row. Also available on <Code>NavGroupItem</Code>.</TableCell>
                <TableCell><Code>slot</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>NavGroup icon</Code></TableCell>
                <TableCell>Snippet rendered before the group title. Receives the same <Code>animate</Code> flag.</TableCell>
                <TableCell><Code>Snippet&lt;[boolean]&gt;</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>

<style>
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

    /* The real sidebar is capped at the window's height below the logo; in the demo, cap it at the box's height,
       so a long nav scrolls on its own under the logo instead of sliding up over it */
    .layout-demo :global(.m-layout-nav) {
        max-height: calc(100cqh - var(--m-layout-logo-offset));
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
