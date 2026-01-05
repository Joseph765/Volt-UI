<script>
    import {
        Code,
        Flex,
        Text
    } from "$lib";
</script>

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Tokens</Text>
        <Text size="xl" variant="weak">Design tokens are a tech-agnostic way to store variables. We use tokens instead of hard coded values to ensure a better UI consistency across different platforms.</Text>
    </Flex>
    <section id="color">
        <Flex direction="column">
            <Text weight="bold" size="xl">Color</Text>
            <Flex direction="column" gap="none">
                <Flex justify="between">
                    <Text>Color</Text>
                    <Text>Description</Text>
                    <Text>Token</Text>
                </Flex>
                <div class="token">
                    <div class="color-box" style="background-color: var(--v-color-text);"></div>
                    <Text>This is a description</Text>
                    <Code>var(--v-color-text)</Code>
                </div>
            </Flex>
        </Flex>
    </section>
</Flex>

<style>
    .token {
        display: flex;
        gap: var(--v-space-xl);
        justify-content: space-between;
        border: 1px solid var(--v-color-border);
        padding: var(--v-space-s);
        background-color: var(--v-color-surface);
    }

    .color-box {
        width: 4rem;
        height: 4rem;
        border-radius: var(--v-radius-m);
    }
</style>