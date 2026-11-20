<script>
    import { Plus, Search } from "@lucide/svelte";
    // Example app UI for stress-testing the design system: an analytics dashboard.
    // Not linked from the nav; visit /examples/dashboard.
    import {
        Badge,
        Banner,
        Button,
        Card,
        Container,
        Flex,
        Input,
        Link,
        Progress,
        Select,
        Tab,
        Table,
        TableBody,
        TableCell,
        TableHeader,
        TableHead,
        TableRow,
        Tabs,
        Text
    } from "moth-ui-svelte";
    import Seo from "../../Seo.svelte";

    const ranges = [
        { value: "7d", label: "Last 7 days" },
        { value: "30d", label: "Last 30 days" },
        { value: "90d", label: "Last 90 days" }
    ];
    let range = $state("30d");

    const stats = [
        { label: "Revenue", value: "$48,290", change: "+12.4%", up: true },
        { label: "New customers", value: "312", change: "+4.1%", up: true },
        { label: "Active subscriptions", value: "2,148", change: "+1.8%", up: true },
        { label: "Churn rate", value: "2.9%", change: "+0.4%", up: false }
    ];

    const weeks = [
        { label: "W1", value: 8200 },
        { label: "W2", value: 9400 },
        { label: "W3", value: 7600 },
        { label: "W4", value: 11200 },
        { label: "W5", value: 10100 },
        { label: "W6", value: 12900 },
        { label: "W7", value: 12300 },
        { label: "W8", value: 14600 }
    ];
    const maxWeek = Math.max(...weeks.map((w) => w.value));

    const tabs = [
        { id: "orders", label: "Recent orders" },
        { id: "products", label: "Top products" }
    ];
    let selectedTab = $state("orders");

    /** @type {{ id: string, customer: string, email: string, plan: string, amount: string, status: 'Paid' | 'Pending' | 'Refunded' | 'Failed' }[]} */
    const orders = [
        { id: "#3201", customer: "Ava Martinez", email: "ava@fernway.io", plan: "Team", amount: "$240.00", status: "Paid" },
        { id: "#3200", customer: "Liam Chen", email: "liam@northpeak.dev", plan: "Pro", amount: "$29.00", status: "Pending" },
        { id: "#3199", customer: "Noah Patel", email: "noah@brightloop.co", plan: "Team", amount: "$480.00", status: "Paid" },
        { id: "#3198", customer: "Mia Johnson", email: "mia@quillhouse.com", plan: "Pro", amount: "$29.00", status: "Refunded" },
        { id: "#3197", customer: "Ethan Okafor", email: "ethan@stackyard.app", plan: "Enterprise", amount: "$1,200.00", status: "Paid" },
        { id: "#3196", customer: "Sofia Rossi", email: "sofia@lumenlabs.io", plan: "Pro", amount: "$29.00", status: "Failed" }
    ];

    const statusVariant = /** @type { const } */ ({
        Paid: "success",
        Pending: "warning",
        Refunded: "neutral",
        Failed: "danger"
    });

    const products = [
        { name: "Pro plan (monthly)", sold: 1204, revenue: "$34,916" },
        { name: "Team plan (monthly)", sold: 186, revenue: "$22,320" },
        { name: "Enterprise (annual)", sold: 9, revenue: "$10,800" },
        { name: "Extra seats", sold: 412, revenue: "$4,120" }
    ];

    let search = $state("");
    let filteredOrders = $derived(
        orders.filter((o) =>
            `${o.customer} ${o.email} ${o.id}`.toLowerCase().includes(search.trim().toLowerCase())
        )
    );
</script>

<Seo title="Dashboard example · Moth UI" description="Example analytics dashboard built with Moth UI." path="/examples/dashboard" noindex />

<Container align="center">
    <Flex direction="column" gap="xl">
        <Flex justify="between" align="end" wrap gap="m">
            <Flex direction="column" gap="xs">
                <Text size="3xl" weight="black" as="h1">Dashboard</Text>
                <Text variant="weak">Welcome back, Jordan. Here's how Fernway is doing.</Text>
            </Flex>
            <Flex gap="s" align="end" wrap>
                <Select name="range" options={ranges} bind:value={range} />
                <Button variant="secondary">Export</Button>
                <Button variant="primary">
                    {#snippet start()}<Plus size={16} />{/snippet}
                    New invoice
                </Button>
            </Flex>
        </Flex>

        <Banner variant="warning">Your card ending in 4242 expires next month. <Link href="#">Update payment method.</Link></Banner>

        <div class="stats">
            {#each stats as stat}
                <Card space="l">
                    <Flex direction="column" gap="s">
                        <Text size="s" variant="weak">{stat.label}</Text>
                        <Text size="2xl" weight="bold">{stat.value}</Text>
                        <Flex gap="xs" align="center">
                            <!-- Churn going up is bad, so "up" isn't always green -->
                            <Badge variant={stat.up ? "success" : "danger"}>{stat.change}</Badge>
                            <Text size="s" variant="weaker">vs. previous period</Text>
                        </Flex>
                    </Flex>
                </Card>
            {/each}
        </div>

        <div class="split">
            <Card space="l">
                {#snippet header()}<Text size="l" weight="bold" as="h2">Revenue by week</Text>{/snippet}
                {#snippet headerEnd()}<Badge>8 weeks</Badge>{/snippet}
                <div class="chart" role="img" aria-label="Weekly revenue, rising from $8,200 to $14,600 over 8 weeks">
                    {#each weeks as week, i}
                        <div class="bar-column">
                            <div
                                class="bar"
                                class:is-current={i === weeks.length - 1}
                                style:height="{(week.value / maxWeek) * 100}%"
                            ></div>
                            <Text size="xs" variant="weaker" align="center">{week.label}</Text>
                        </div>
                    {/each}
                </div>
            </Card>

            <Card space="l">
                {#snippet header()}<Text size="l" weight="bold" as="h2">Goals</Text>{/snippet}
                <Flex direction="column" gap="l">
                    {#each [{ label: "Monthly revenue", value: 48290, goal: 60000 }, { label: "New customers", value: 312, goal: 400 }, { label: "NPS responses", value: 188, goal: 200 }] as goal}
                        <Progress label={goal.label} value={goal.value} max={goal.goal} />
                    {/each}
                </Flex>
            </Card>
        </div>

        <Tabs {tabs} selected={selectedTab} onClick={(/** @type { string } */ id) => (selectedTab = id)}>
            <Tab id="orders" selected={selectedTab}>
                <Flex direction="column" gap="m">
                    <Input name="order-search" placeholder="Search by customer, email or order" bind:value={search} expanded>
                        {#snippet prefix()}<Search size={16} />{/snippet}
                    </Input>
                    <Table interactive>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Order</TableHeader>
                                <TableHeader>Customer</TableHeader>
                                <TableHeader>Plan</TableHeader>
                                <TableHeader>Status</TableHeader>
                                <TableHeader align="end">Amount</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {#each filteredOrders as order (order.id)}
                                <TableRow>
                                    <TableCell><Text size="s" mono>{order.id}</Text></TableCell>
                                    <TableCell>
                                        <Text size="s">{order.customer}</Text>
                                        <Text size="xs" variant="weaker">{order.email}</Text>
                                    </TableCell>
                                    <TableCell>{order.plan}</TableCell>
                                    <TableCell><Badge variant={statusVariant[order.status]}>{order.status}</Badge></TableCell>
                                    <TableCell align="end"><Text size="s" mono>{order.amount}</Text></TableCell>
                                </TableRow>
                            {:else}
                                <!-- No matches: one full-width row keeps the table's header in place -->
                                <TableRow>
                                    <TableCell colspan={5}>
                                        <Flex direction="column" gap="s" align="center" style="padding-block: var(--m-space-l);">
                                            <Text weight="bold" align="center">No orders found</Text>
                                            <Text size="s" variant="weak" align="center">Nothing matches “{search}”. Try a different name or order number.</Text>
                                            <Button variant="secondary" onclick={() => (search = "")}>Clear search</Button>
                                        </Flex>
                                    </TableCell>
                                </TableRow>
                            {/each}
                        </TableBody>
                    </Table>
                </Flex>
            </Tab>
            <Tab id="products" selected={selectedTab}>
                <Table striped>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Product</TableHeader>
                            <TableHeader align="end">Sold</TableHeader>
                            <TableHeader align="end">Revenue</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {#each products as product}
                            <TableRow>
                                <TableCell>{product.name}</TableCell>
                                <TableCell align="end"><Text size="s" mono>{product.sold.toLocaleString()}</Text></TableCell>
                                <TableCell align="end"><Text size="s" mono>{product.revenue}</Text></TableCell>
                            </TableRow>
                        {/each}
                    </TableBody>
                </Table>
            </Tab>
        </Tabs>
    </Flex>
</Container>

<style>
    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: var(--m-space-m);
    }

    .split {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--m-space-m);
    }

    @media (max-width: 60rem) {
        .split {
            grid-template-columns: 1fr;
        }
    }

    .chart {
        display: flex;
        align-items: stretch;
        gap: var(--m-space-s);
        height: 12rem;
    }

    .bar-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: var(--m-space-xs);
    }

    /* Gray bars; only the current week uses the accent (it's the "selected" period) */
    .bar {
        border-radius: var(--m-radius-sharp) var(--m-radius-sharp) 0 0;
        background: var(--m-gray-6);
    }

    .bar.is-current {
        background: var(--m-color-accent);
    }
</style>
