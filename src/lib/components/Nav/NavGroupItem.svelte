<script>
    import { page } from '$app/state'; 
    
    /** @type {{ href: string; children?: import('svelte').Snippet; }} */
    let { href, children } = $props();
    
    let currentPath = $derived(page.url.pathname + page.url.hash);
</script>

<a {href} class="v-nav-group-item {currentPath === href ? "is-active" : undefined}">
    {@render children?.()}
</a>