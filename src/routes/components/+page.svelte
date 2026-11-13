<script>
    import components from "./components.json";
    import {
        Flex,
        Icon,
        Input,
        Text
    } from "$lib";

    let componentResults = components;
    let searchTerm = "";

    $: if (searchTerm) {
        search(searchTerm.toLocaleLowerCase());
    } else {
        componentResults = components;
    }

    /** @param { string } searchTerm - Search term entered by input */
    function search(searchTerm) {
        componentResults = components.filter((component) => component.name.toLocaleLowerCase().includes(searchTerm));
    }
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Components</Text>
        <Text size="xl" variant="weak">
            Reusable, accessible components for building consistent interfaces quickly.
        </Text>
    </Flex>
    <Flex direction="column" gap="l">
        <Input type="search" name="componentSearch" placeholder="Search" expanded bind:value={searchTerm}>
            <svelte:fragment slot="prefix">
                <Icon name="search" />
            </svelte:fragment>
        </Input>
        <section class="components">
            {#each componentResults as component}
                <a href="/components/{component.name.toLocaleLowerCase()}" class="component-card grayscale-wrapper">
                    <div class="component-preview is-grayscale" inert>
                        {@html component.example}
                    </div>
                    <div class="component-info">
                        <div class="component-name">
                            <Text as="h3" weight="bold" size="l">{component.name}</Text>
                            <span class="arrow" aria-hidden="true">→</span>
                        </div>
                        <Text measure="none" variant="weak">{component.description}</Text>
                    </div>
                </a>
            {/each}
        </section>
    </Flex>
</Flex>

<style>
    /* Same card treatment as the components section on the landing page */
    .components {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: var(--m-space-m);
        width: 100%;
    }

    .component-card {
        display: flex;
        flex-direction: column;
        border-radius: var(--m-radius);
        background-color: var(--m-color-surface-raised);
        color: var(--m-color-text);
        text-decoration: none;
        overflow: hidden;
        transition: box-shadow 0.15s ease;
    }

    .component-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10rem;
        padding: var(--m-space-m) var(--m-space-l);
        overflow: hidden;
        background-color: var(--m-color-surface);
        pointer-events: none;
        user-select: none;
    }

    /* The shared examples are sized for an unpadded preview; fill the padded area instead */
    .component-preview :global(.m-banner) {
        width: 100% !important;
    }

    /* Form fields default to a fixed width, which overflows the narrower cards */
    .component-preview :global(.m-label-wrapper),
    .component-preview :global(.m-input-wrapper),
    .component-preview :global(.m-input),
    .component-preview :global(.m-textarea-wrapper),
    .component-preview :global(.m-textarea),
    .component-preview :global(.m-select-wrapper),
    .component-preview :global(.m-select) {
        width: 100%;
    }

    /* The preview background is the card's own surface color; raise the example so its shape shows */
    .component-preview :global(.m-card) {
        background-color: var(--m-color-surface-raised);
    }

    /* The real container padding (up to 72px) is far taller than the preview */
    .component-preview :global(.m-container) {
        padding: var(--m-space-l) var(--m-space-xl);
    }

    /* Tighter cells so the two-column table fits the narrowest cards */
    .component-preview :global(.m-table) {
        width: 100% !important;
    }

    .component-preview :global(.m-table-head),
    .component-preview :global(.m-table-cell) {
        padding-inline: var(--m-space-s);
    }

    .component-info {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-xs);
        flex: 1;
        padding: var(--m-space-m);
    }

    .component-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .arrow {
        color: var(--m-color-text-weaker);
        transition: transform 0.15s ease, color 0.15s ease;
    }

    .component-card:focus-visible {
        outline: 2px solid var(--m-color-accent);
        outline-offset: 2px;
    }

    @media (pointer: fine) {
        .component-card:hover {
            box-shadow: 0 0 12px 2px color-mix(in srgb, var(--m-color-highlight) 60%, transparent);
        }

        .component-card:hover .arrow {
            color: var(--m-color-text-accent);
            transform: translateX(4px);
        }
    }
</style>