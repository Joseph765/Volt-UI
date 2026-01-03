<script>
    import { 
        Button, 
        CodeExample,
        Flex, 
        Heading,
        Icon,
        Select,
        Text,
        Toast,
        ToastGroup
    } from "$lib";

    let options = $state([
        { value: 'basic', label: 'Example: Basic' },
        { value: 'disabled', label: 'Example: Disabled' },
        { value: 'icons', label: 'Example: Icons' }
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

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)}>{toast.message}</Toast>
    {/each}
</ToastGroup>`;
    let example2 = ``;
    let example3 = ``;

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
    <Select
        name="Country"
        bind:options={options}
        bind:value={selectedExample}
        placeholder="Select an example..."
    />
    {#if selectedExample === "basic"}
        <CodeExample code={example1}>
            <Button onclick={() => addToast("Copied to clipboard")}>Add Toast</Button>
        </CodeExample>
    {:else if selectedExample === "disabled"}
        <CodeExample code={example2}>

        </CodeExample>
    {:else if selectedExample === "icons"}
        <CodeExample code={example3}>

        </CodeExample>
    {/if}
</Flex>

<!-- <script>
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
</script> -->

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)}>{toast.message}</Toast>
    {/each}
</ToastGroup>