<script>
    import { 
        Button,
        Flex, 
        Heading,
        Text,
        Toast,
        ToastGroup
    } from "$lib";

    /**
     * @typedef { object } Toast
     * @property { string } id - Id of Toast
     * @property { string } message - Message displayed on Toast
     * @property { NodeJS.Timeout } timeoutId - Id to clear timeout set on Toast
    */

    /** @type { Toast[] } */
    let toasts = $state([]);
    let nextId = $state(1);

    /** @param { string } message - Message displayed on Toast */
    function addToast(message) {
        // Auto-dismiss after 5 seconds
        const timeoutId = setTimeout(() => {
            removeToast(newToast.id);
        }, 2000);

        /** @type { Toast } */
        const newToast = { 
            id: nextId.toString(),
            message: message,
            timeoutId: timeoutId
        }
        
        toasts = [...toasts, newToast];
        nextId++;
    }

    /** @param { string } id - id of Toast*/
    function removeToast(id) {
        // Clear timeout if it exists
        const toast = toasts.find((t) => t.id === id);
        if (toast?.timeoutId) {
            clearTimeout(toast.timeoutId);
        }

        toasts = toasts.filter((t) => t.id !== id);
    }
</script>

<Flex direction="column">
    <Heading>Toast</Heading>
    <Text>Toasts are non-disruptive messages that appear in the interface to provide quick, at-a-glance feedback on the outcome of an action.</Text>
    <ToastGroup>
        {#each toasts as toast (toast.id)}
            <Toast id={toast.id} onDismiss={() => removeToast(toast.id)}>{toast.message}</Toast>
        {/each}
    </ToastGroup>
    <Button onclick={() => addToast("Copied to clipboard")}>Add Toast</Button>
</Flex>