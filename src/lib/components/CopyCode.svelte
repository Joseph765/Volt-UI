<script>
    import CopyButton from "./CopyButton.svelte";

    /** @type { string } */
    export let code;

    /** @type { string } */
    export let style = "";
</script>

<div class="m-copy-code" {style}>
    {code}
    <CopyButton copyText={code} />
</div>