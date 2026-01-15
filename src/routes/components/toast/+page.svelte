<script>
    import { 
        Button, 
        Code,
        Flex, 
        Select,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text,
        Toast,
        ToastGroup
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";

    let options = $state([
        { value: 'basic', label: 'Example: Basic' },
        { value: 'danger', label: 'Example: Danger' }
    ]);

    let selectedExample = $state('basic');

    let example1 = `<script>
    import { Button, Toast, ToastGroup } from "$lib";

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
    import { Button, Toast, ToastGroup } from "$lib";

    /**
     * @typedef { object } Toast
     * @property { string } id - Id of Toast
     * @property { string } message - Message displayed on Toast
     * @property { NodeJS.Timeout } timeoutId - Id to clear timeout set on Toast
     * @property { 'default' | 'danger' } status - Status of Toast
    */

    /** @type { Toast[] } */
    let toasts = $state([]);
    /** @type { number } */
    let nextId = $state(1);

    /** @param { string } message @param { 'default' | 'danger' } status - Message displayed on Toast */
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
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)} variant={toast.status}>{toast.message}</Toast>
    {/each}
</ToastGroup>`;

    /**
     * @typedef { object } Toast
     * @property { string } id - Id of Toast
     * @property { string } message - Message displayed on Toast
     * @property { NodeJS.Timeout } timeoutId - Id to clear timeout set on Toast
     * @property { 'default' | 'danger' } status - Status of Toast
    */

    /** @type { Toast[] } */
    let toasts = $state([]);
    /** @type { number } */
    let nextId = $state(1);

    /** @param { string } message @param { 'default' | 'danger' } status - Message displayed on Toast */
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
        <Text size="3xl" weight="black" as="h2">Toast</Text>
        <Text size="xl" variant="weak">A temporary, non-intrusive notification that appears in the bottom-right corner to provide feedback.</Text>
    </Flex>
    <Flex direction="column">
        <Select
            name="examples"
            bind:options={options}
            bind:value={selectedExample}
            placeholder="Select an example..."
        />
        {#if selectedExample === "basic"}
            <CodeExample code={example1}>
                <Button onclick={() => addToast("Copied to clipboard", "default")}>Add Toast</Button>
            </CodeExample>
        {:else if selectedExample === "danger"}
            <CodeExample code={example2}>
                <Button onclick={() => addToast("No internet connection", "danger")}>Danger Toast</Button>
            </CodeExample>
        {/if}
    </Flex>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell><Code>onDismiss</Code></TableCell>
                <TableCell>Executes a function when the dismiss button is clicked.</TableCell>
                <TableCell><Code>{`() => void`}</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>id</Code></TableCell>
                <TableCell>ID passed to the Toast component. Necessary for dismissable functionality.</TableCell>
                <TableCell><Code>string</Code></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Code>variant</Code></TableCell>
                <TableCell>The style of the toast.</TableCell>
                <TableCell><Code>default</Code> | <Code>danger</Code></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</Flex>

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)} variant={toast.status}>{toast.message}</Toast>
    {/each}
</ToastGroup>