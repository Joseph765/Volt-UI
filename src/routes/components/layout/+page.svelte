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
        TableHead,
        TableHeader,
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
    } from "$moth";

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
        <Text size="3xl" weight="black" as="h2">Layout</Text>
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
            </CodeExample>
        {/if}
    </Flex>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell><Code>LayoutNav open</Code></TableCell>
                <TableCell>Slides the navigation in on screens narrower than 82rem and blurs the page content behind it. The sidebar is always shown on larger screens.</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>LayoutNav label</Code></TableCell>
                <TableCell>Accessible name for the navigation landmark. Defaults to "Main".</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>LayoutNav on:close</Code></TableCell>
                <TableCell>Fires when the user presses Esc while the navigation is open. Set <Code>open</Code> to false in response. Focus moves back to the menu button if it was inside the navigation.</TableCell>
                <TableCell><Code>event</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>LayoutMenuButton open</Code></TableCell>
                <TableCell>Reflects whether the navigation is open so screen readers announce it (<Code>aria-expanded</Code>).</TableCell>
                <TableCell><Code>boolean</Code></TableCell>
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
