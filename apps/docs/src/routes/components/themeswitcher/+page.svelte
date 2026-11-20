<script>
    import {
        Code,
        Flex,
        Link,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text,
        ThemeSwitcher
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";
    import { eventName, forFramework } from "../../framework.svelte.js";

    const example1 = {
        svelte: `<script>
    import { ThemeSwitcher } from "moth-ui-svelte";
<\/script>

<ThemeSwitcher />`,
        react: `import { ThemeSwitcher } from "moth-ui-react";

export default function Example() {
    return <ThemeSwitcher />;
}`
    };

    const example2 = {
        svelte: `<!-- src/app.html, inside <head> -->
<script>
    try {
        const saved = localStorage.getItem("moth-theme");
        const light = saved ? saved === "light" : matchMedia("(prefers-color-scheme: light)").matches;
        document.documentElement.dataset.theme = light ? "light" : "dark";
    } catch {}
<\/script>`,
        react: `<!-- index.html (Vite), inside <head> -->
<script>
    try {
        const saved = localStorage.getItem("moth-theme");
        const light = saved ? saved === "light" : matchMedia("(prefers-color-scheme: light)").matches;
        document.documentElement.dataset.theme = light ? "light" : "dark";
    } catch {}
<\/script>`
    };

    const example3 = {
        svelte: `<script>
    import { ThemeSwitcher } from "moth-ui-svelte";
<\/script>

<!-- Saved under your own key -->
<ThemeSwitcher storageKey="acme-theme" />

<!-- Not saved: every visit starts on System -->
<ThemeSwitcher storageKey="" />`,
        react: `import { ThemeSwitcher } from "moth-ui-react";

export default function Example() {
    return (
        <>
            {/* Saved under your own key */}
            <ThemeSwitcher storageKey="acme-theme" />

            {/* Not saved: every visit starts on System */}
            <ThemeSwitcher storageKey="" />
        </>
    );
}`
    };
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">ThemeSwitcher</Text>
        <Text size="xl" variant="weak">A small switch that lets people choose the system, light or dark theme, and remembers their choice.</Text>
    </Flex>

    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            System follows the operating system's setting, and switches when it does. Light and Dark override it. The
            switcher sets <Code>data-theme</Code> on <Code>html</Code> and saves the choice in the browser. Put it
            somewhere easy to find, like the top right of a header. Try it: it switches this site too.
        </Text>
        <CodeExample code={example1}>
            <ThemeSwitcher />
        </CodeExample>
    </section>

    <section class="section" id="no-flash">
        <Text size="2xl" weight="bold" as="h2">Avoid a flash</Text>
        <Text size="l" variant="weak" measure="l">
            The switcher only runs once the page loads, so a light-mode visitor would see a dark flash first. Add this
            script to the <Code>head</Code> of
            <Code>{forFramework({ svelte: "src/app.html", react: "index.html" })}</Code> to apply the theme before the first paint.
            Without the switcher, Moth stays dark unless you set <Code>data-theme</Code>; see
            <Link size="l" href="/getting-started#themes">Themes</Link>.
        </Text>
        <!-- Plain HTML in both frameworks; only the file differs -->
        <CodeExample codeOnly code={forFramework(example2)} />
    </section>

    <section class="section" id="storage">
        <Text size="2xl" weight="bold" as="h2">Storage</Text>
        <Text size="l" variant="weak" measure="l">
            The choice is saved in <Code>localStorage</Code> as <Code>moth-theme</Code>. Use <Code>storageKey</Code>
            to save it under your own key (and use the same key in the script above), or an empty string to not save
            it at all.
        </Text>
        <CodeExample codeOnly code={example3} />
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
                    <TableCell><Code>storageKey</Code></TableCell>
                    <TableCell>The <Code>localStorage</Code> key the choice is saved under. Defaults to <Code>moth-theme</Code>. An empty string turns saving off.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>label</Code></TableCell>
                    <TableCell>Accessible name for the group of options. Defaults to "Theme".</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>{eventName("onchange")}</Code></TableCell>
                    <TableCell>Fires when someone picks an option, with <Code>system</Code>, <Code>light</Code> or <Code>dark</Code>.</TableCell>
                    <TableCell><Code>function</Code></TableCell>
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
</style>
