<script>
    // Private test bench for redesigning hover and focus. Not linked from the nav or sitemap; robots.txt disallows /examples.
    // Each variant only overrides tokens inside its own panel, so the library is untouched until one is picked.
    import { Button, Checkbox, Container, Flex, Input, Select, Text } from "$lib";
    import Seo from "../../Seo.svelte";

    const variants = [
        {
            id: "current",
            name: "Before",
            note: "The style before Lamplight: a gray-7 hover, then a gray-10 border and a 2px gray ring 2px away."
        },
        {
            id: "lamp",
            name: "Lamplight",
            note: "The field switches on like a lamp: a near-white border and a soft white glow. Chosen: this is now the library's focus style."
        },
        {
            id: "moon",
            name: "Moonlit",
            note: "A lavender border with a purple glow, the moth drawn to the light. Tried in the library, then swapped for Lamplight: it uses the accent for focus."
        },
        {
            id: "halo",
            name: "Halo ring",
            note: "Today's gapped ring, turned bright white, with a faint glow behind it."
        }
    ];

    const options = [
        { value: "eth", label: "Ethereum" },
        { value: "arb", label: "Arbitrum" }
    ];
</script>

<Seo title="Focus preview · Moth UI" description="Internal page for comparing focus styles." path="/examples/focus" noindex />

<Container size="xl" align="center">
    <Flex direction="column" gap="xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Focus preview</Text>
            <Text size="l" variant="weak" measure="l">
                Each panel shows a field at rest, hovered and focused, then live controls: hover them, click a field, or
                press Tab to move through them.
            </Text>
        </Flex>

        <div class="variants">
            {#each variants as variant}
                <section class="variant is-{variant.id}">
                    <Flex direction="column" gap="xs">
                        <Text size="xl" weight="bold" as="h2">{variant.name}</Text>
                        <Text variant="weak" size="s">{variant.note}</Text>
                    </Flex>

                    <!-- Static states, so all three can be compared at once -->
                    <div class="states">
                        {#each ["Rest", "Hover", "Focus"] as state}
                            <div class="state">
                                <span class="state-label">{state}</span>
                                <input
                                    class="m-input is-expanded is-{state.toLowerCase()}"
                                    placeholder="you@example.com"
                                    readonly
                                    tabindex="-1"
                                    aria-hidden="true"
                                />
                            </div>
                        {/each}
                    </div>

                    <!-- Live controls -->
                    <div class="live">
                        <Input name="email-{variant.id}" label="Email" placeholder="you@example.com" expanded />
                        <Select name="network-{variant.id}" label="Network" {options} expanded />
                        <Flex align="center" justify="between">
                            <Checkbox name="remember-{variant.id}" label="Remember me" />
                            <Button>Save</Button>
                        </Flex>
                    </div>
                </section>
            {/each}
        </div>
    </Flex>
</Container>

<style>
    .variants {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: var(--m-space-l);
    }

    /* Each panel is a card, where fields usually live */
    .variant {
        --demo-hover: var(--m-gray-7);
        display: flex;
        flex-direction: column;
        gap: var(--m-space-l);
        padding: var(--m-space-l);
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface);
    }

    /* Before: the old values written out, so this panel keeps showing them now that the library uses Lamplight */
    .variant.is-current {
        --m-color-border-control-focus: var(--m-gray-10);
        --m-shadow-focus: 0 0 0 2px var(--m-color-background), 0 0 0 4px var(--m-gray-10);
    }

    /* Lamplight: near-white border, the field's fill lifts, a soft white glow */
    .variant.is-lamp {
        --demo-hover: var(--m-gray-9);
        --demo-focus-fill: var(--m-gray-3);
        --m-color-border-control-focus: var(--m-gray-12);
        --m-shadow-focus:
            0 0 0 3px color-mix(in srgb, var(--m-gray-12) 25%, transparent),
            0 0 28px 4px color-mix(in srgb, var(--m-gray-12) 20%, transparent);
    }

    /* Moonlit: lavender border, the field's fill lifts, a purple glow */
    .variant.is-moon {
        --demo-hover: var(--m-gray-9);
        --demo-focus-fill: var(--m-gray-3);
        --m-color-border-control-focus: var(--m-accent-11);
        --m-shadow-focus:
            0 0 0 3px color-mix(in srgb, var(--m-accent-9) 55%, transparent),
            0 0 32px 4px color-mix(in srgb, var(--m-accent-9) 50%, transparent);
    }

    /* Halo ring: bright gapped ring plus a glow */
    .variant.is-halo {
        --demo-hover: var(--m-gray-9);
        --m-color-border-control-focus: var(--m-gray-12);
        --m-shadow-focus:
            0 0 0 2px var(--m-color-background),
            0 0 0 4px var(--m-gray-12),
            0 0 24px 6px color-mix(in srgb, var(--m-gray-12) 20%, transparent);
    }

    /* Hover: the library hard-codes gray-7, so each panel sets its own */
    @media (pointer: fine) {
        .variant :global(.m-input:hover:not(:focus-visible)),
        .variant :global(.m-select-wrapper:hover:not(:has(:focus-visible))) {
            border-color: var(--demo-hover);
        }
    }

    /* Focus fill: the library now lifts a focused field's fill, so the variants without one keep the plain surface */
    .variant.is-current :global(.m-input:focus-visible),
    .variant.is-current :global(.m-select-wrapper:has(:focus-visible)),
    .variant.is-halo :global(.m-input:focus-visible),
    .variant.is-halo :global(.m-select-wrapper:has(:focus-visible)) {
        background-color: var(--m-color-surface);
    }

    /* Focus fill: only the variants that set one */
    .variant.is-lamp :global(.m-input:focus-visible),
    .variant.is-lamp :global(.m-select-wrapper:has(:focus-visible)),
    .variant.is-moon :global(.m-input:focus-visible),
    .variant.is-moon :global(.m-select-wrapper:has(:focus-visible)) {
        background-color: var(--demo-focus-fill);
    }

    .states {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
    }

    .state {
        display: grid;
        grid-template-columns: 4rem 1fr;
        align-items: center;
        gap: var(--m-space-m);
    }

    .state-label {
        font-size: var(--m-font-size-s);
        color: var(--m-color-text-weaker);
    }

    /* Static states drawn with the same tokens the real :hover and :focus-visible rules use */
    .state :global(.m-input.is-hover) {
        border-color: var(--demo-hover);
    }

    .state :global(.m-input.is-focus) {
        background-color: var(--demo-focus-fill, var(--m-color-surface));
        border-color: var(--m-color-border-control-focus);
        outline: 2px solid transparent;
        box-shadow: var(--m-shadow-focus);
    }

    .live {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        padding-block-start: var(--m-space-l);
        border-block-start: 1px solid var(--m-color-border);
    }
</style>
