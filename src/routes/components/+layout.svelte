<script>
    import { page } from "$app/state";
    import Container from "$lib/components/Container.svelte";
    import Seo from "../Seo.svelte";
    import components from "./components.json";

    let { children } = $props();

    // Every component page gets its title and description from components.json, so new components need no SEO setup
    let component = $derived(
        components.find((c) => page.url.pathname === `/components/${c.name.toLocaleLowerCase()}`)
    );
</script>

{#if component}
    <Seo
        title="{component.name} · Svelte component · Moth UI"
        description={component.description}
        path={page.url.pathname}
    />
{:else}
    <Seo
        title="Components · Moth UI"
        description="Every Moth UI component for Svelte 5: buttons, forms, navigation, tables, layout and more, ready to drop into your app."
        path="/components"
    />
{/if}

<Container size="2xl" align="center">
    {@render children()}
</Container>
