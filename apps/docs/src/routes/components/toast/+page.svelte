<script>
    import {
        Button,
        Code,
        Flex,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text,
        Toast,
        ToastGroup
    } from "moth-ui-svelte";
    import CodeExample from "../CodeExample.svelte";



    const example1 = {
        svelte: `<script>
    import { Button, Toast, ToastGroup } from "moth-ui-svelte";

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
        // Auto-dismiss after 2 seconds
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

<Button onclick={() => addToast("Copied to clipboard")}>Add Toast</Button>

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)}>{toast.message}</Toast>
    {/each}
</ToastGroup>`,
        react: `import { useRef, useState } from "react";
import { Button, Toast, ToastGroup } from "moth-ui-react";

export default function Example() {
    const [toasts, setToasts] = useState([]);
    const nextId = useRef(1);

    function removeToast(id) {
        setToasts((current) => current.filter((toast) => toast.id !== id));
    }

    function addToast(message) {
        const id = String(nextId.current++);
        setToasts((current) => [...current, { id, message }]);
        // Auto-dismiss after 2 seconds
        setTimeout(() => removeToast(id), 2000);
    }

    return (
        <>
            <Button onClick={() => addToast("Copied to clipboard")}>Add Toast</Button>
            <ToastGroup>
                {toasts.map((toast) => (
                    <Toast key={toast.id} id={toast.id} onDismiss={() => removeToast(toast.id)}>
                        {toast.message}
                    </Toast>
                ))}
            </ToastGroup>
        </>
    );
}`
    };
    const example2 = {
        svelte: `<script>
    import { Button, Toast, ToastGroup } from "moth-ui-svelte";

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
        // Auto-dismiss after 2 seconds
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
</ToastGroup>`,
        react: `import { useRef, useState } from "react";
import { Button, Toast, ToastGroup } from "moth-ui-react";

export default function Example() {
    const [toasts, setToasts] = useState([]);
    const nextId = useRef(1);

    function removeToast(id) {
        setToasts((current) => current.filter((toast) => toast.id !== id));
    }

    function addToast(message, variant) {
        const id = String(nextId.current++);
        setToasts((current) => [...current, { id, message, variant }]);
        // Auto-dismiss after 2 seconds
        setTimeout(() => removeToast(id), 2000);
    }

    return (
        <>
            <Button onClick={() => addToast("No internet connection", "danger")}>Danger Toast</Button>
            <ToastGroup>
                {toasts.map((toast) => (
                    <Toast key={toast.id} id={toast.id} onDismiss={() => removeToast(toast.id)} variant={toast.variant}>
                        {toast.message}
                    </Toast>
                ))}
            </ToastGroup>
        </>
    );
}`
    };

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
        // Auto-dismiss after 2 seconds
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

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Toast</Text>
        <Text size="xl" variant="weak">A temporary, non-intrusive notification that appears in the bottom-right corner to provide feedback.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            A short confirmation that something happened, like "Copied to clipboard". Toasts stack in a
            <Code>ToastGroup</Code> at the bottom right. You keep the list and remove each toast after a few seconds;
            the example does it after 2.
        </Text>
        <CodeExample code={example1}>
            <Button onclick={() => addToast("Copied to clipboard", "default")}>Add Toast</Button>
        </CodeExample>
    </section>

    <section class="section" id="danger">
        <Text size="2xl" weight="bold" as="h2">Danger</Text>
        <Text size="l" variant="weak" measure="l">
            For a problem people should know about, like a lost connection.
        </Text>
        <CodeExample code={example2}>
            <Button onclick={() => addToast("No internet connection", "danger")}>Danger Toast</Button>
        </CodeExample>
    </section>

    <section class="section" id="api-reference">
        <Text size="2xl" weight="bold" as="h2">API reference</Text>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Type</TableHeader>
                </TableRow>
            </TableHead>
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
                <TableRow>
                    <TableCell><Code>dismissable</Code></TableCell>
                    <TableCell>Shows a close button. Defaults to <Code>true</Code>.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>onDismiss</Code></TableCell>
                    <TableCell>Called when the close button is clicked. Remove the toast from your list here.</TableCell>
                    <TableCell><Code>() =&gt; void</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>ToastGroup</Code></TableCell>
                    <TableCell>Wrap all toasts in one group. It stacks them in the corner and is a polite live region, so screen readers announce each new toast without interrupting.</TableCell>
                    <TableCell><Code>component</Code></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </section>
</Flex>

<ToastGroup>
    {#each toasts as toast (toast.id)}
        <Toast id={toast.id} onDismiss={() => removeToast(toast.id)} variant={toast.status}>{toast.message}</Toast>
    {/each}
</ToastGroup>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        scroll-margin-block-start: var(--m-space-l);
    }
</style>
