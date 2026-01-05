<script>
    /** @type { 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' } */
    export let size = "m";

    /** @type { string } */
    export let href = "#";

    /** @type { string } */
    export let target = "";
</script>

<a
    {href}
    {target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    class="v-link is-size-{size}"
>
    <slot />
</a>