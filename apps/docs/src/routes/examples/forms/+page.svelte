<script>
    import { Search } from "@lucide/svelte";
    // Scratch page for reviewing form design. Not linked from the nav; visit /examples/forms.
    import {
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
        Text,
        Textarea,
        Toggle
    } from "moth-ui-svelte";
    import Seo from "../../Seo.svelte";

    const countries = [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "gb", label: "United Kingdom" },
        { value: "de", label: "Germany" }
    ];

    const networks = [
        { value: "eth", label: "Ethereum" },
        { value: "arb", label: "Arbitrum" },
        { value: "base", label: "Base" }
    ];

    const roles = [
        { value: "viewer", label: "Viewer" },
        { value: "editor", label: "Editor" },
        { value: "admin", label: "Admin" }
    ];

    let country = $state("");
    let network = $state("eth");
    let role = $state("editor");

    const categories = [
        { value: "all", label: "All categories" },
        { value: "forms", label: "Forms" },
        { value: "layout", label: "Layout" },
        { value: "feedback", label: "Feedback" }
    ];

    const timezones = [
        { value: "pst", label: "Pacific Time (UTC−8)" },
        { value: "est", label: "Eastern Time (UTC−5)" },
        { value: "utc", label: "UTC" }
    ];

    let category = $state("all");
    let timezone = $state("pst");
</script>

<Seo title="Form preview · Moth UI" description="Internal page for reviewing form design." path="/examples/forms" noindex />

<Container size="xl" align="center">
    <Flex direction="column" gap="xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Form preview</Text>
            <Text size="l" variant="weak">Realistic forms built only from Moth components, for checking spacing, hierarchy and states.</Text>
        </Flex>

        <div class="grid">
            <!-- 1. Sign in: the simplest, most common form -->
            <Card space="l">
                <Flex direction="column" gap="l">
                    <Flex direction="column" gap="xs">
                        <Text size="xl" weight="bold" as="h2">Sign in</Text>
                        <Text variant="weak">Welcome back. Enter your details to continue.</Text>
                    </Flex>
                    <Flex direction="column" gap="m">
                        <Input label="Email" name="email" type="email" expanded required />
                        <Input label="Password" name="password" type="password" expanded required />
                    </Flex>
                    <Flex justify="between" align="center" wrap>
                        <Checkbox name="remember" label="Remember me" />
                        <div class="flush-end"><Button variant="tertiary">Forgot password?</Button></div>
                    </Flex>
                    <Button expanded>Sign in</Button>
                </Flex>
            </Card>

            <!-- 2. Profile: card header, prefix, textarea, select, two actions -->
            <Card space="l">
                {#snippet header()}<Text size="xl" weight="bold" as="h2">Profile</Text>{/snippet}
                <Flex direction="column" gap="m">
                    <Input label="Full name" name="fullName" value="Ada Lovelace" expanded />
                    <Input label="Username" name="username" value="ada" hint="Your public handle. Letters and numbers only." expanded>
                        {#snippet prefix()}@{/snippet}
                    </Input>
                    <Textarea label="Bio" name="bio" hint="Up to 160 characters." expanded />
                    <Select label="Country" name="country" options={countries} bind:value={country} expanded />
                    <Flex justify="end" gap="s">
                        <Button variant="secondary">Cancel</Button>
                        <Button>Save changes</Button>
                    </Flex>
                </Flex>
            </Card>

            <!-- 3. Preferences: toggles, radios in a fieldset -->
            <Card space="l">
                {#snippet header()}<Text size="xl" weight="bold" as="h2">Notifications</Text>{/snippet}
                <Flex direction="column" gap="l">
                    <Flex direction="column" gap="m">
                        <Toggle name="emailAlerts" label="Email alerts" hint="Get an email when a transaction settles." checked />
                        <Toggle name="pushAlerts" label="Push notifications" hint="Instant alerts on this device." />
                        <Toggle name="marketing" label="Product updates" disabled hint="Managed by your organization." />
                    </Flex>
                    <Divider />
                    <Fieldset label="Summary frequency">
                        <Flex direction="column" gap="s">
                            <Radio id="freq-daily" name="frequency" value="daily" label="Daily" checked />
                            <Radio id="freq-weekly" name="frequency" value="weekly" label="Weekly" hint="Sent every Monday." />
                            <Radio id="freq-never" name="frequency" value="never" label="Never" />
                        </Flex>
                    </Fieldset>
                </Flex>
            </Card>

            <!-- 4. Transaction: suffix, end-aligned numbers, icon prefix, summary -->
            <Card space="l">
                {#snippet header()}<Text size="xl" weight="bold" as="h2">Send funds</Text>{/snippet}
                <Flex direction="column" gap="m">
                    <Select label="Network" name="network" options={networks} bind:value={network} expanded />
                    <Input label="Recipient" name="recipient" placeholder="0x…" expanded>
                        {#snippet prefix()}<Search size={16} />{/snippet}
                    </Input>
                    <Input label="Amount" name="amount" value="0.25" align="end" hint="Balance: 1.4021 ETH" expanded>
                        {#snippet suffix()}ETH{/snippet}
                    </Input>
                    <Divider />
                    <Flex justify="between">
                        <Text variant="weak">Network fee</Text>
                        <Text mono>0.0004 ETH</Text>
                    </Flex>
                    <Checkbox name="confirm" label="I've checked the recipient address" />
                    <Button expanded>Review transfer</Button>
                </Flex>
            </Card>

            <!-- 5. Validation: every component in its error state -->
            <Card space="l">
                {#snippet header()}<Text size="xl" weight="bold" as="h2">Errors</Text>{/snippet}
                <Flex direction="column" gap="m">
                    <Input label="Email" name="badEmail" value="adalol@" error="Enter a valid email address." expanded required />
                    <Textarea label="Message" name="badMessage" error="A message is required." expanded required />
                    <Select label="Role" name="badRole" options={roles} error="Choose a role." expanded required />
                    <Checkbox name="terms" label="I accept the terms" error="You must accept the terms to continue." />
                    <Fieldset label="Plan" required>
                        <Flex direction="column" gap="s">
                            <Radio id="plan-free" name="plan" value="free" label="Free" error="Select a plan." />
                            <Radio id="plan-pro" name="plan" value="pro" label="Pro" />
                        </Flex>
                    </Fieldset>
                </Flex>
            </Card>

            <!-- 6. Disabled and read-only-ish states -->
            <Card space="l">
                {#snippet header()}<Text size="xl" weight="bold" as="h2">Team member</Text>{/snippet}
                <Flex direction="column" gap="m">
                    <Input label="Email" name="memberEmail" value="grace@example.com" hint="Email can't be changed after invite." expanded />
                    <Select label="Role" name="memberRole" options={roles} bind:value={role} disabled hint="Only owners can change roles." expanded />
                    <Checkbox name="billing" label="Can manage billing" disabled />
                    <Checkbox name="mixed" label="Repository access (some)" indeterminate />
                    <Flex justify="between" wrap>
                        <Button variant="danger">Remove member</Button>
                        <Button disabled>Save</Button>
                    </Flex>
                </Flex>
            </Card>
        </div>

        <!-- Forms placed directly on the page background, no cards -->
        <Flex direction="column" gap="xs">
            <Text size="2xl" weight="bold" as="h2">Directly on the page</Text>
            <Text variant="weak">The same components with no card behind them.</Text>
        </Flex>

        <!-- A. Toolbar: search + filter above a list, like the components page -->
        <section class="bare">
            <Text size="s" variant="weaker" as="h3">TOOLBAR</Text>
            <div class="toolbar">
                <div class="toolbar-search">
                    <Input type="search" name="pageSearch" placeholder="Search components" expanded>
                        {#snippet prefix()}<Search size={16} />{/snippet}
                    </Input>
                </div>
                <Select name="category" options={categories} bind:value={category} />
                <Button variant="secondary">Reset</Button>
            </div>
        </section>

        <!-- B. Settings page: sections with a description column, separated by dividers -->
        <section class="bare">
            <Text size="s" variant="weaker" as="h3">SETTINGS PAGE</Text>
            <div class="settings-row">
                <Flex direction="column" gap="xs">
                    <Text weight="bold">Workspace</Text>
                    <Text size="s" variant="weak">How your workspace appears to teammates.</Text>
                </Flex>
                <Flex direction="column" gap="m">
                    <Input label="Workspace name" name="wsName" value="Moth Labs" expanded />
                    <Input label="URL" name="wsUrl" value="moth-labs" hint="Changing this breaks existing links." expanded>
                        {#snippet prefix()}moth.app/{/snippet}
                    </Input>
                </Flex>
            </div>
            <Divider />
            <div class="settings-row">
                <Flex direction="column" gap="xs">
                    <Text weight="bold">Regional</Text>
                    <Text size="s" variant="weak">Used for dates and scheduled reports.</Text>
                </Flex>
                <Flex direction="column" gap="m">
                    <Select label="Time zone" name="timezone" options={timezones} bind:value={timezone} expanded />
                    <Toggle name="weekStart" label="Start week on Monday" checked />
                </Flex>
            </div>
            <Divider />
            <Flex justify="end" gap="s">
                <Button variant="secondary">Discard</Button>
                <Button>Save settings</Button>
            </Flex>
        </section>

        <!-- C. Inline signup: one field and a button on a row -->
        <section class="bare">
            <Text size="s" variant="weaker" as="h3">INLINE SIGNUP</Text>
            <Flex direction="column" gap="xs">
                <Text size="xl" weight="bold">Get release notes</Text>
                <Text variant="weak">One email per release. No spam.</Text>
            </Flex>
            <div class="inline-signup">
                <Input type="email" name="newsletter" placeholder="you@example.com" expanded />
                <Button>Subscribe</Button>
            </div>
        </section>
    </Flex>
</Container>

<style>
    /* A tertiary button's padding is invisible at rest; pull it out so its text aligns with the fields */
    .flush-end {
        margin-inline-end: calc(var(--m-space-m) * -1);
    }

    .grid {
        display: grid;
        gap: var(--m-space-l);
        align-items: start;
    }

    @media (min-width: 56rem) {
        .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    .bare {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-l);
    }

    .toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--m-space-s);
    }

    .toolbar-search {
        flex: 1 1 16rem;
    }

    .settings-row {
        display: grid;
        gap: var(--m-space-m);
    }

    @media (min-width: 48rem) {
        .settings-row {
            grid-template-columns: 16rem minmax(0, 1fr);
            gap: var(--m-space-xl);
        }
    }

    .inline-signup {
        display: flex;
        gap: var(--m-space-s);
        max-width: 28rem;
    }

    .inline-signup :global(.m-label-wrapper) {
        flex: 1;
    }
</style>
