<script>
    import components from "./components.json";

    import {
        Badge,
        Banner,
        Button,
        Card,
        Code,
        CodeExample,
        Container,
        CopyCode,
        Flex,
        Link,
        Text
    } from "$lib";
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h2">Components</Text>
        <Text size="xl" variant="weak">
            Reusable, accessible components for building consistent interfaces quickly.
        </Text>
    </Flex>
    <section class="components">
        {#each components as component}
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
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
</style>