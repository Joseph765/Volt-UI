<script>
    // Head tags for the docs site: title, description, canonical URL and social share cards.
    // One instance per page; the root layout deliberately sets none so pages don't duplicate tags.

    const SITE_URL = "https://moth-ui.com";
    const SITE_NAME = "Moth UI";
    const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

    /**
     * @type {{
     *   title: string,
     *   description: string,
     *   path: string,
     *   image?: string,
     *   noindex?: boolean
     * }}
     */
    let { title, description, path, image = DEFAULT_IMAGE, noindex = false } = $props();

    let url = $derived(`${SITE_URL}${path === "/" ? "" : path}`);
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    {#if noindex}
        <meta name="robots" content="noindex" />
    {/if}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
</svelte:head>
