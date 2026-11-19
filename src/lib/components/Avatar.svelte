<script>
    /**
     * A round picture of a person. Shows `src` when given, otherwise the first letter of `name`.
     * If the image fails to load, it falls back to the letter.
     * @type {{
     *   name: string,
     *   src?: string
     * }}
     */
    let { name, src } = $props();

    let failed = $state(false);

    // A new image gets a fresh chance to load
    $effect(() => {
        src;
        failed = false;
    });

    const letter = $derived(name.trim().charAt(0).toLocaleUpperCase());
</script>

{#if src && !failed}
    <img class="m-avatar" {src} alt={name} onerror={() => failed = true} />
{:else}
    <span class="m-avatar" role="img" aria-label={name}>
        <span aria-hidden="true">{letter}</span>
    </span>
{/if}
