<script>
    import CopyButton from "./CopyButton.svelte";

    /** @type { string } */
    export let code;
</script>

<div class="v-copy-code">
    {code}
    <CopyButton copyText={code} />
</div>