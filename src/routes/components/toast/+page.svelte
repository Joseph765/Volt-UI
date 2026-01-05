<script>
    import { 
        Button, 
        CodeExample,
        Flex, 
        Select,
        Text,
        Toast,
        ToastGroup
    } from "$lib";

    let options = $state([
        { value: 'basic', label: 'Example: Basic' },
        { value: 'danger', label: 'Example: Danger' }
    ]);

    let selectedExample = $state('basic');

    let example1 = `<script>
    /**
     * @typedef { object } Toast
     * @property { string } id - Id of Toast
     * @property { string } message - Message displayed on Toast
     * @property { NodeJS.Timeout } timeoutId - Id to clear timeout set on Toast
    */

    /** @type { Toast[] } */
    let toasts = $state([]);
    /** @type { number } */
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
<\/script>

<Button onclick={() => addToast("Copied to clipboard", "neutral")}>Add Toast</Button>

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)}>{toast.message}</Toast>
    {/each}
</ToastGroup>`;
    let example2 = `<script>
    /**
     * @typedef { object } Toast
     * @property { string } id - Id of Toast
     * @property { string } message - Message displayed on Toast
     * @property { NodeJS.Timeout } timeoutId - Id to clear timeout set on Toast
     * @property { 'neutral' | 'danger' } status - Status of Toast
    */

    /** @type { Toast[] } */
    let toasts = $state([]);
    /** @type { number } */
    let nextId = $state(1);

    /** @param { string } message @param { 'neutral' | 'danger' } status - Message displayed on Toast */
    function addToast(message, status) {
        // Auto-dismiss after 5 seconds
        const timeoutId = setTimeout(() => {
            removeToast(newToast.id);
        }, 2000);

        /** @type { Toast } */
        const newToast = { 
            id: nextId.toString(),
            message: message,
            timeoutId: timeoutId,
            status: status
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
<\/script>

<Button onclick={() => addToast("No internet connection", "danger")}>Danger Toast</Button>

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)} status={toast.status}>{toast.message}</Toast>
    {/each}
</ToastGroup>`;

    /**
     * @typedef { object } Toast
     * @property { string } id - Id of Toast
     * @property { string } message - Message displayed on Toast
     * @property { NodeJS.Timeout } timeoutId - Id to clear timeout set on Toast
     * @property { 'neutral' | 'danger' } status - Status of Toast
    */

    /** @type { Toast[] } */
    let toasts = $state([]);
    /** @type { number } */
    let nextId = $state(1);

    /** @param { string } message @param { 'neutral' | 'danger' } status - Message displayed on Toast */
    function addToast(message, status) {
        // Auto-dismiss after 5 seconds
        const timeoutId = setTimeout(() => {
            removeToast(newToast.id);
        }, 2000);

        /** @type { Toast } */
        const newToast = { 
            id: nextId.toString(),
            message: message,
            timeoutId: timeoutId,
            status: status
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

<Flex direction="column" gap="xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Toast</Text>
        <Text size="xl" variant="weak">Toasts are non-disruptive messages that appear in the interface to provide quick, at-a-glance feedback on the outcome of an action.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="Country"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "basic"}
            <CodeExample code={example1}>
                <Button onclick={() => addToast("Copied to clipboard", "neutral")}>Add Toast</Button>
            </CodeExample>
        {:else if selectedExample === "danger"}
            <CodeExample code={example2}>
                <Button onclick={() => addToast("No internet connection", "danger")}>Danger Toast</Button>
            </CodeExample>
        {/if}
    </Flex>
</Flex>

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)} status={toast.status}>{toast.message}</Toast>
    {/each}
</ToastGroup>