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

<Flex direction="column" gap="2xl">
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
                <a href="/components/{component.name.toLocaleLowerCase()}" class="component-card">
                    <div class="showcase" inert>
                        {@html component.example}
                    </div>
                    <div style="padding: var(--v-space-m); border-top: 1px solid var(--v-color-border);">
                        <Flex direction="column">
                            <Text as="h4" weight="bold" size="2xl">{component.name}</Text>
                            <Text measure="none" variant="weak">{component.description}</Text>
                        </Flex>
                    </div>
                </a>
            {/each}
        </section>
    </Flex>
</Flex>

<style>
    .showcase {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 197px;
        padding: 0; 
        background-color: var(--v-color-background);
        pointer-events: none;
        user-select: none;
        border-radius: var(--v-radius-sharp) var(--v-radius-sharp) 0 0;
    }

    .components {
        display: grid;
        grid-template-columns: repeat(auto-fit, 378px);
        gap: var(--v-space-l);
        width: 100%;
    }

    .component-card {
        border: 1px solid var(--v-color-border);
        border-radius: var(--v-radius-sharp);
        text-decoration: none;
        color: var(--v-color-text);
        height: 407px;      
        background-color: var(--v-color-surface);
    }

    @media (pointer: fine) {
        .component-card:hover {
            border-color: var(--v-color-accent);
            box-shadow: 0 0 12px 2px var(--v-color-highlight);
        }
    }
    
    @media (max-width: 82rem) {
        .components {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
    }
</style>