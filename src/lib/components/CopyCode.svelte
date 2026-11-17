<script>
    import CopyButton from "./CopyButton.svelte";

    /** @type {{ code: string, style?: string }} */
    let { code, style = "" } = $props();
</script>

<div class="m-copy-code" {style}>
    {code}
    <CopyButton copyText={code} />
</div>
