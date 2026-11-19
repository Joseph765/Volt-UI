<script>
    import { CircleCheck, Plus, X } from "@lucide/svelte";
    // Example app UI for stress-testing the design system: a task manager.
    // Not linked from the nav; visit /examples/tasks.
    import {
        Badge,
        Button,
        Card,
        Checkbox,
        Container,
        Divider,
        Flex,
        Input,
        Select,
        Tab,
        Tabs,
        Text,
        Toast,
        ToastGroup
    } from "$lib";
    import Seo from "../../Seo.svelte";

    /** @typedef {{ id: number, title: string, project: string, priority: 'high' | 'medium' | 'low', due: string, done: boolean }} Task */

    /** @type { Task[] } */
    let tasks = $state([
        { id: 1, title: "Write release notes for v1.0", project: "Launch", priority: "high", due: "Today", done: false },
        { id: 2, title: "Review pricing page copy", project: "Website", priority: "medium", due: "Tomorrow", done: false },
        { id: 3, title: "Fix focus ring on mobile Safari", project: "Bugs", priority: "high", due: "Overdue", done: false },
        { id: 4, title: "Record product walkthrough video", project: "Launch", priority: "low", due: "Fri", done: false },
        { id: 5, title: "Set up status page", project: "Infra", priority: "medium", due: "Mon", done: true },
        { id: 6, title: "Draft onboarding emails", project: "Growth", priority: "low", due: "Last week", done: true }
    ]);
    let nextId = $state(7);

    const priorities = [
        { value: "high", label: "High priority" },
        { value: "medium", label: "Medium priority" },
        { value: "low", label: "Low priority" }
    ];
    const priorityVariant = /** @type { const } */ ({ high: "danger", medium: "warning", low: "neutral" });

    let newTitle = $state("");
    /** @type { 'high' | 'medium' | 'low' } */
    let newPriority = $state("medium");
    let titleError = $state("");

    let filter = $state("active");
    let tabs = $derived([
        { id: "active", label: `Active (${tasks.filter((t) => !t.done).length})` },
        { id: "done", label: `Completed (${tasks.filter((t) => t.done).length})` },
        { id: "all", label: `All (${tasks.length})` }
    ]);

    /** @param { string } which */
    function visible(which) {
        return tasks.filter((t) => (which === "all" ? true : which === "done" ? t.done : !t.done));
    }

    let completedCount = $derived(tasks.filter((t) => t.done).length);
    let progress = $derived(tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0);

    /** @param { SubmitEvent } event */
    function addTask(event) {
        event.preventDefault();
        const title = newTitle.trim();
        if (!title) {
            titleError = "Give the task a name.";
            return;
        }
        tasks = [{ id: nextId++, title, project: "Inbox", priority: newPriority, due: "No date", done: false }, ...tasks];
        newTitle = "";
        titleError = "";
        filter = "active";
        toast("Task added");
    }

    /** @param { number } id */
    function remove(id) {
        tasks = tasks.filter((t) => t.id !== id);
        toast("Task deleted");
    }

    function clearCompleted() {
        const count = completedCount;
        tasks = tasks.filter((t) => !t.done);
        toast(`Cleared ${count} completed ${count === 1 ? "task" : "tasks"}`);
    }

    /** @type {{ id: string, message: string }[]} */
    let toasts = $state([]);
    let nextToastId = $state(1);

    /** @param { string } message */
    function toast(message) {
        const id = String(nextToastId++);
        toasts = [...toasts, { id, message }];
        setTimeout(() => (toasts = toasts.filter((t) => t.id !== id)), 2000);
    }
</script>

<Seo title="Tasks example · Moth UI" description="Example task manager built with Moth UI." path="/examples/tasks" noindex />

<Container align="center" size="l">
    <Flex direction="column" gap="xl">
        <Flex justify="between" align="end" wrap gap="m">
            <Flex direction="column" gap="xs">
                <Text size="3xl" weight="black" as="h1">My tasks</Text>
                <Text variant="weak">{completedCount} of {tasks.length} done · {progress}% complete</Text>
            </Flex>
            <Button variant="secondary" disabled={!completedCount} onclick={clearCompleted}>Clear completed</Button>
        </Flex>

        <Card space="l">
            <form class="add-form" onsubmit={addTask}>
                <Input name="new-task" placeholder="What needs doing?" bind:value={newTitle} error={titleError} aria-label="New task" expanded>
                    {#snippet prefix()}<Plus size={16} />{/snippet}
                </Input>
                <Select name="new-priority" options={priorities} bind:value={newPriority} aria-label="Priority" />
                <Button variant="primary" type="submit">Add task</Button>
            </form>
            {#if titleError}
                <Text size="s" variant="danger" style="margin-block-start: var(--m-space-xs);">{titleError}</Text>
            {/if}
        </Card>

        <Tabs {tabs} selected={filter} onClick={(/** @type { string } */ id) => (filter = id)}>
            {#each ["active", "done", "all"] as which}
                <Tab id={which} selected={filter}>
                    {#if visible(which).length}
                        <Card space="none">
                            <ul class="task-list">
                                {#each visible(which) as task (task.id)}
                                    <li class="task">
                                        <Checkbox name="task-{task.id}" bind:checked={task.done} aria-label="Mark “{task.title}” as done" />
                                        <Flex direction="column" gap="xs" style="flex: 1; min-width: 0;">
                                            <Text class={task.done ? "task-title is-done" : "task-title"}>{task.title}</Text>
                                            <Flex gap="s" align="center" wrap>
                                                <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
                                                <Text size="xs" variant="weaker">{task.project}</Text>
                                                <Text size="xs" variant={task.due === "Overdue" && !task.done ? "danger" : "weaker"}>· {task.due}</Text>
                                            </Flex>
                                        </Flex>
                                        <Button variant="tertiary" aria-label="Delete “{task.title}”" onclick={() => remove(task.id)}>
                                            <X size={16} />
                                        </Button>
                                    </li>
                                {/each}
                            </ul>
                        </Card>
                    {:else}
                        <Card space="l">
                            <Flex direction="column" gap="s" align="center">
                                <CircleCheck size={24} color="var(--m-color-success)" />
                                <Text weight="bold" align="center">{which === "done" ? "Nothing completed yet" : "All caught up"}</Text>
                                <Text size="s" variant="weak" align="center">{which === "done" ? "Tick off a task and it'll show up here." : "Add a task above to get started."}</Text>
                            </Flex>
                        </Card>
                    {/if}
                </Tab>
            {/each}
        </Tabs>

        <Divider />
        <Text size="s" variant="weaker" align="center">Tip: press Enter to add a task.</Text>
    </Flex>
</Container>

<ToastGroup>
    {#each toasts as t (t.id)}
        <Toast id={t.id} onDismiss={() => (toasts = toasts.filter((x) => x.id !== t.id))}>{t.message}</Toast>
    {/each}
</ToastGroup>

<style>
    .add-form {
        display: flex;
        gap: var(--m-space-s);
        align-items: flex-start;
    }

    .add-form > :global(:first-child) {
        flex: 1;
    }

    @media (max-width: 40rem) {
        .add-form {
            flex-wrap: wrap;
        }

        .add-form > :global(:first-child) {
            flex-basis: 100%;
        }
    }

    .task-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .task {
        display: flex;
        align-items: center;
        gap: var(--m-space-m);
        padding: var(--m-space-m) var(--m-space-l);
    }

    /* Text takes a class, so the page can style it; :global because the element belongs to the Text component */
    :global(.task-title.is-done) {
        text-decoration: line-through;
        color: var(--m-color-text-weaker);
    }

    .task + .task {
        border-top: 1px solid var(--m-color-border);
    }
</style>
