<script>
    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' } */
    export let size = "m";

    /** @type { string } */
    export let href = "#";

    /** @type { string } */
    export let target = "";

    /** @type { string } */
    export let style = "";
</script>

<a
    {href}
    {target}
    {style}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    class="v-link is-size-{size}"
>
    <slot />
</a>