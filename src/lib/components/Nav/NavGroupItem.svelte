<script>    
    /** @type { string } */
    export let href;

    /** @type { boolean } */
    export let active = false;
</script>

<a {href} class="v-nav-group-item" aria-current={active} on:click>
    <slot />
</a>