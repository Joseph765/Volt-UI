<script>
    // Example app UI for stress-testing the design system: account settings.
    // Not linked from the nav; visit /examples/settings.
    import {
        Badge,
        Button,
        Card,
        Checkbox,
        Container,
        Divider,
        Fieldset,
        Flex,
        Input,
        Radio,
        Select,
        Tab,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Tabs,
        Text,
        Textarea,
        Toast,
        ToastGroup,
        Toggle
    } from "$lib";
    import Seo from "../../Seo.svelte";

    const tabs = [
        { id: "profile", label: "Profile" },
        { id: "notifications", label: "Notifications" },
        { id: "billing", label: "Billing" }
    ];
    let selectedTab = $state("profile");

    // Profile
    let name = $state("Jordan Rivera");
    let email = $state("jordan@fernway.io");
    let username = $state("jordan");
    let bio = $state("Product designer at Fernway. I like typography, tidy spacing and strong coffee.");
    let timezone = $state("pst");
    const timezones = [
        { value: "pst", label: "Pacific Time (UTC−8)" },
        { value: "est", label: "Eastern Time (UTC−5)" },
        { value: "utc", label: "UTC" },
        { value: "cet", label: "Central European Time (UTC+1)" }
    ];
    let emailError = $derived(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "" : "Enter a valid email address.");

    // Billing
    const plans = [
        { id: "starter", name: "Starter", price: "$0", hint: "1 project, community support." },
        { id: "pro", name: "Pro", price: "$29", hint: "Unlimited projects, email support." },
        { id: "team", name: "Team", price: "$12 / seat", hint: "Shared workspaces, roles and SSO." }
    ];
    let selectedPlan = $state("pro");
    let currentPlan = $derived(plans.find((p) => p.id === selectedPlan) ?? plans[1]);
    const invoices = [
        { id: "INV-0042", date: "Nov 1, 2026", amount: "$29.00", status: "Paid" },
        { id: "INV-0041", date: "Oct 1, 2026", amount: "$29.00", status: "Paid" },
        { id: "INV-0040", date: "Sep 1, 2026", amount: "$29.00", status: "Paid" }
    ];

    // Toasts
    /** @type {{ id: string, message: string, variant: 'default' | 'danger' }[]} */
    let toasts = $state([]);
    let nextToastId = 1;

    /**
     * @param { string } message
     * @param { 'default' | 'danger' } [variant]
     */
    function toast(message, variant = "default") {
        const id = String(nextToastId++);
        toasts = [...toasts, { id, message, variant }];
        setTimeout(() => dismiss(id), 2500);
    }

    /** @param { string } id */
    function dismiss(id) {
        toasts = toasts.filter((t) => t.id !== id);
    }
</script>

<Seo title="Settings example · Moth UI" description="Example account settings page built with Moth UI." path="/examples/settings" noindex />

<Container align="center" size="l">
    <Flex direction="column" gap="xl">
        <Flex direction="column" gap="xs">
            <Text size="3xl" weight="black" as="h1">Settings</Text>
            <Text variant="weak">Manage your profile, notifications and subscription.</Text>
        </Flex>

        <Tabs {tabs} selected={selectedTab} onClick={(/** @type { string } */ id) => (selectedTab = id)}>
            <Tab id="profile" selected={selectedTab}>
                <Flex direction="column" gap="l">
                    <Card space="l">
                        <Text size="l" weight="bold" as="h2" slot="header">Public profile</Text>
                        <Flex direction="column" gap="l">
                            <Flex gap="m" align="center">
                                <div class="avatar" aria-hidden="true">JR</div>
                                <Flex direction="column" gap="xs">
                                    <Flex gap="s">
                                        <Button variant="secondary">Upload photo</Button>
                                        <Button variant="tertiary">Remove</Button>
                                    </Flex>
                                    <Text size="xs" variant="weaker">PNG or JPG, at least 256 × 256px.</Text>
                                </Flex>
                            </Flex>
                            <div class="field-grid">
                                <Input label="Full name" name="name" bind:value={name} required expanded />
                                <Input label="Username" name="username" bind:value={username} hint="moth.app/{username || '…'}" expanded>
                                    <svelte:fragment slot="prefix">@</svelte:fragment>
                                </Input>
                            </div>
                            <Input label="Email" name="email" type="email" bind:value={email} error={emailError} required expanded />
                            <Textarea label="Bio" name="bio" bind:value={bio} hint="{bio.length}/160 characters" error={bio.length > 160 ? "Keep it under 160 characters." : ""} expanded />
                            <Select label="Time zone" name="timezone" options={timezones} bind:value={timezone} expanded />
                        </Flex>
                    </Card>
                    <Flex justify="end" gap="s">
                        <Button variant="secondary">Cancel</Button>
                        <Button variant="primary" disabled={!!emailError || bio.length > 160} on:click={() => toast("Profile saved")}>Save changes</Button>
                    </Flex>

                    <Card space="l">
                        <Text size="l" weight="bold" as="h2" slot="header">Danger zone</Text>
                        <Flex justify="between" align="center" gap="m" wrap>
                            <Flex direction="column" gap="xs">
                                <Text weight="bold">Delete account</Text>
                                <Text size="s" variant="weak">Permanently remove your account and all of its projects. This can't be undone.</Text>
                            </Flex>
                            <Button variant="danger" on:click={() => toast("Account deletion requested", "danger")}>Delete account</Button>
                        </Flex>
                    </Card>
                </Flex>
            </Tab>

            <Tab id="notifications" selected={selectedTab}>
                <Card space="l">
                    <Text size="l" weight="bold" as="h2" slot="header">Notifications</Text>
                    <Flex direction="column" gap="l">
                        <Flex direction="column" gap="m">
                            <Toggle name="mentions" label="Mentions" hint="When someone @mentions you in a comment." checked />
                            <Toggle name="assigned" label="Assigned to me" hint="When a task is assigned to you." checked />
                            <Toggle name="weekly" label="Weekly digest" hint="A summary of your workspace every Monday." />
                            <Toggle name="security" label="Security alerts" hint="Always on for account safety." checked disabled />
                        </Flex>
                        <Divider />
                        <Fieldset label="Deliver notifications by">
                            <Flex direction="column" gap="s">
                                <Checkbox name="channel-email" label="Email" checked />
                                <Checkbox name="channel-push" label="Push" hint="On devices where you're signed in." checked />
                                <Checkbox name="channel-sms" label="SMS" />
                            </Flex>
                        </Fieldset>
                        <Divider />
                        <Flex justify="end">
                            <Button variant="primary" on:click={() => toast("Notification preferences updated")}>Save preferences</Button>
                        </Flex>
                    </Flex>
                </Card>
            </Tab>

            <Tab id="billing" selected={selectedTab}>
                <Flex direction="column" gap="l">
                    <Card space="l">
                        <Text size="l" weight="bold" as="h2" slot="header">Plan</Text>
                        <Badge slot="header-end" variant="success">Active</Badge>
                        <Flex direction="column" gap="l">
                            <Fieldset label="Choose a plan">
                                <Flex direction="column" gap="s">
                                    {#each plans as plan}
                                        <Radio id="plan-{plan.id}" name="plan" value={plan.id} label="{plan.name} · {plan.price}" hint={plan.hint} bind:group={selectedPlan} />
                                    {/each}
                                </Flex>
                            </Fieldset>
                            <Divider />
                            <Flex justify="between" align="center" gap="m" wrap>
                                <Text size="s" variant="weak">{#if currentPlan.id === "starter"}Starter is free: no upcoming payments.{:else}Next payment of <strong>{currentPlan.price}</strong> on Dec 1, 2026 to Visa ending in 4242.{/if}</Text>
                                <Button variant="primary" on:click={() => toast(`Switched to ${currentPlan.name}`)}>Update plan</Button>
                            </Flex>
                        </Flex>
                    </Card>

                    <Flex direction="column" gap="m">
                        <Text size="l" weight="bold" as="h2">Invoices</Text>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>Invoice</TableHeader>
                                    <TableHeader>Date</TableHeader>
                                    <TableHeader>Status</TableHeader>
                                    <TableHeader align="end">Amount</TableHeader>
                                    <TableHeader align="end"><span class="visually-hidden">Actions</span></TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {#each invoices as invoice}
                                    <TableRow>
                                        <TableCell><Text size="s" mono>{invoice.id}</Text></TableCell>
                                        <TableCell>{invoice.date}</TableCell>
                                        <TableCell><Badge variant="success">{invoice.status}</Badge></TableCell>
                                        <TableCell align="end"><Text size="s" mono>{invoice.amount}</Text></TableCell>
                                        <TableCell align="end"><Button variant="tertiary">Download</Button></TableCell>
                                    </TableRow>
                                {/each}
                            </TableBody>
                        </Table>
                    </Flex>
                </Flex>
            </Tab>
        </Tabs>
    </Flex>
</Container>

<ToastGroup>
    {#each toasts as t (t.id)}
        <Toast id={t.id} variant={t.variant} onDismiss={() => dismiss(t.id)}>{t.message}</Toast>
    {/each}
</ToastGroup>

<style>
    .avatar {
        display: grid;
        place-items: center;
        flex-shrink: 0;
        width: 4rem;
        height: 4rem;
        border-radius: var(--m-radius-full);
        background: var(--m-gray-5);
        color: var(--m-color-text);
        font-family: var(--m-font);
        font-weight: var(--m-font-weight-bold);
        font-size: var(--m-font-size-l);
    }

    .field-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: var(--m-space-m);
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }
</style>
