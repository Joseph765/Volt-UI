<script>
    import { Button, Code, Container, Flex, Input, Link, Text } from "$lib";
    import { CircleCheck, Plus, Search, Settings } from "@lucide/svelte";
    import Seo from "../Seo.svelte";
</script>

<Seo
    title="Guidelines · Moth UI"
    description="How to use Moth UI well: button hierarchy, when to use the accent color, focus states, forms, icons and dark-only design."
    path="/guidelines"
/>

<Container size="l" align="center">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Guidelines</Text>
            <Text size="l" variant="weak" measure="l">
                Moth's components already look finished. These few rules keep whole screens looking that way:
                clear hierarchy, purple only where it means something, and nothing competing with the content.
            </Text>
        </Flex>

        <!-- Buttons -->
        <section class="guideline">
            <Text size="2xl" weight="bold" as="h2">Button hierarchy</Text>
            <Text size="l" variant="weak" measure="l">
                Every view should have one obvious next step. Pick the variant by importance, not by looks.
            </Text>
            <div class="example">
                <Flex wrap align="center">
                    <Button>Save changes</Button>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="tertiary">Learn more</Button>
                </Flex>
            </div>
            <ul class="rules">
                <li><Text size="l" variant="weak" measure="l"><strong>Primary:</strong> the main action. Use at most one per view.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Secondary:</strong> alternatives next to the primary action, like Cancel or Back.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Tertiary:</strong> low-emphasis or repeated actions, like "View all" links or per-row actions in a list.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Danger:</strong> only for actions that delete or can't be undone.</Text></li>
            </ul>
        </section>

        <!-- Accent -->
        <section class="guideline">
            <Text size="2xl" weight="bold" as="h2">Use the accent color sparingly</Text>
            <Text size="l" variant="weak" measure="l">
                Purple tells people where to look, so it only works when it's rare. Moth uses it for primary actions
                and for selected state (checked boxes, the active tab and nav item). Everything else is grayscale.
            </Text>
            <ul class="rules">
                <li><Text size="l" variant="weak" measure="l">Don't use the accent for decoration, icons, borders or section backgrounds.</Text></li>
                <li><Text size="l" variant="weak" measure="l">If a screen shows more than a few purple elements, demote some to secondary or tertiary.</Text></li>
                <li><Text size="l" variant="weak" measure="l">Status colors (success, warning, danger, info) are for status only, never for emphasis.</Text></li>
            </ul>
        </section>

        <!-- Focus -->
        <section class="guideline">
            <Text size="2xl" weight="bold" as="h2">Focus</Text>
            <Text size="l" variant="weak" measure="l">
                Every interactive element shows the same neutral focus outline (<Code>--m-color-focus-border</Code>)
                when reached with the keyboard, and form fields add a soft halo (<Code>--m-color-focus-ring</Code>).
                Keep focus visible: never remove an outline without replacing it.
            </Text>
        </section>

        <!-- Forms -->
        <section class="guideline">
            <Text size="2xl" weight="bold" as="h2">Forms</Text>
            <Text size="l" variant="weak" measure="l">
                Fields are deliberately quiet so the actions stand out. Choose where a form lives by what it is:
            </Text>
            <ul class="rules">
                <li><Text size="l" variant="weak" measure="l"><strong>On a card:</strong> self-contained tasks such as sign in, checkout steps, or a form among other content.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Directly on the page:</strong> pages that are the form (settings), search and filter toolbars, and single-field sign-ups.</Text></li>
                <li><Text size="l" variant="weak" measure="l">Put hints under the field they describe. When there's an error, show it under the field and keep what the user typed so they can fix it.</Text></li>
                <li><Text size="l" variant="weak" measure="l">Fields and medium buttons share <Code>--m-control-height</Code>, so a field and its button line up without extra work.</Text></li>
            </ul>
            <div class="example">
                <div class="inline-form">
                    <Input name="guideline-email" type="email" placeholder="you@example.com" expanded />
                    <Button>Subscribe</Button>
                </div>
            </div>
        </section>

        <!-- Icons -->
        <section class="guideline" id="icons">
            <Text size="2xl" weight="bold" as="h2">Icons</Text>
            <Text size="l" variant="weak" measure="l">
                Moth doesn't ship an icon set. Use <Link size="l" href="https://lucide.dev" target="_blank">Lucide</Link>
                (<Code>npm i @lucide/svelte</Code>): it's the family Moth's own components are drawn from, so your
                icons match the built-in ones. Pass them into slots and prefixes like any other content.
            </Text>
            <div class="example">
                <Flex wrap align="center" gap="l">
                    <Button>
                        <Plus slot="start" size={16} />
                        New project
                    </Button>
                    <Button variant="tertiary" aria-label="Settings">
                        <Settings size={16} />
                    </Button>
                    <Input name="guideline-search" type="search" placeholder="Search">
                        <svelte:fragment slot="prefix"><Search size={16} /></svelte:fragment>
                    </Input>
                    <span class="status">
                        <CircleCheck size={16} color="var(--m-color-success)" />
                        <Text size="s" variant="weak" as="span">All systems normal</Text>
                    </span>
                </Flex>
            </div>
            <ul class="rules">
                <li><Text size="l" variant="weak" measure="l"><strong>Size:</strong> 16px next to body text and in medium controls (buttons, field prefixes), 20px in banners and large buttons, 24px on their own.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Color:</strong> icons use <Code>currentColor</Code>, so they follow the text and stay gray. Don't color them with the accent; use a status color (e.g. <Code>--m-color-success</Code>) only when the icon shows a status.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Accessibility:</strong> icons next to a label are decorative and hidden from screen readers by default. An icon-only button needs an <Code>aria-label</Code>.</Text></li>
                <li><Text size="l" variant="weak" measure="l"><strong>Animated icons:</strong> the icons that move when you hover this site's navigation come from <Link size="l" href="https://www.movingicons.dev" target="_blank">movingicons.dev</Link> (<Code>npm i @jis3r/icons</Code>), animated versions of Lucide icons. Nav items pass an <Code>animate</Code> value to their icon slot that's true while hovered or keyboard-focused, so these icons play only then. See the <Link size="l" href="/components/navigation">Navigation</Link> docs. Keep animation to navigation; elsewhere, use still icons.</Text></li>
            </ul>
        </section>

        <!-- Dark only -->
        <section class="guideline">
            <Text size="2xl" weight="bold" as="h2">Dark only</Text>
            <Text size="l" variant="weak" measure="l">
                Moth is designed for dark interfaces and has no light theme. Build on <Code>--m-color-background</Code>,
                raise content onto <Code>--m-color-surface</Code> cards, and use <Code>--m-color-surface-raised</Code>
                for anything that sits on a card. See the <Link size="l" href="/tokens#color">color tokens</Link>.
            </Text>
        </section>
    </Flex>
</Container>

<style>
    .guideline {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
    }

    .example {
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    .inline-form {
        display: flex;
        gap: var(--m-space-s);
        max-width: 28rem;
    }

    .inline-form :global(.m-label-wrapper) {
        flex: 1;
    }

    .status {
        display: inline-flex;
        align-items: center;
        gap: var(--m-space-xs);
    }

    .rules {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-s);
        margin: 0;
        padding-inline-start: var(--m-space-l);
        color: var(--m-color-text-weak);
    }

    .rules strong {
        color: var(--m-color-text);
        font-weight: var(--m-font-weight-bold);
    }
</style>
