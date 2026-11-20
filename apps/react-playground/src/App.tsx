import { useEffect, useState, type ReactNode } from 'react';
import {
	ArrowRight,
	Blocks,
	LayoutGrid,
	MessageSquare,
	Plus,
	Search,
	SquarePen
} from 'lucide-react';
import {
	Avatar,
	Badge,
	Banner,
	Button,
	Card,
	Checkbox,
	Code,
	Container,
	CopyCode,
	Divider,
	Fieldset,
	Flex,
	Input,
	Layout,
	LayoutContent,
	LayoutHeader,
	LayoutMenuButton,
	LayoutNav,
	Link,
	NavGroup,
	NavGroupItem,
	NavItem,
	Progress,
	Radio,
	Select,
	Tab,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Tabs,
	Text,
	Textarea,
	ThemeSwitcher,
	Toast,
	ToastGroup,
	Toggle
} from 'moth-ui-react';

// A small drawn "photo", so the playground needs no network
const samplePhoto =
	'data:image/svg+xml,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#8e7cc3"/><circle cx="32" cy="26" r="12" fill="#f3e8ff"/><rect x="12" y="42" width="40" height="30" rx="15" fill="#f3e8ff"/></svg>'
	);

const regions = [
	{ value: 'eu', label: 'Europe' },
	{ value: 'us', label: 'United States' },
	{ value: 'ap', label: 'Asia Pacific' }
];

const slug = (title: string) => title.toLowerCase().replace(/[^a-z]+/g, '-');

// The sidebar: one link per section, grouped
const navGroups = [
	{
		title: 'Basics',
		icon: <Blocks size={20} />,
		sections: ['Button', 'Badge', 'Card', 'Text', 'Link']
	},
	{
		title: 'Forms',
		icon: <SquarePen size={20} />,
		sections: ['Input', 'Textarea', 'Select', 'Checkbox', 'Radio and Fieldset', 'Toggle']
	},
	{
		title: 'Feedback',
		icon: <MessageSquare size={20} />,
		sections: ['Banner', 'Progress', 'Toast']
	},
	{
		title: 'Data',
		icon: <LayoutGrid size={20} />,
		sections: ['Tabs', 'Table', 'Avatar and Code', 'CopyCode']
	}
];

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<section id={slug(title)}>
			<Flex direction="column" gap="m">
				<Text as="h2" size="xl" weight="bold">
					{title}
				</Text>
				{children}
			</Flex>
		</section>
	);
}

const orders = [
	{ id: '1042', customer: 'Ada Lovelace', status: 'Paid', total: '$120.00' },
	{ id: '1043', customer: 'Grace Hopper', status: 'Pending', total: '$64.50' },
	{
		id: '1044',
		customer: 'Katherine Johnson with a name long enough to be truncated',
		status: 'Paid',
		total: '$980.00'
	}
];

type ToastItem = { id: string; message: string; variant: 'default' | 'danger' };

export default function App() {
	const [open, setOpen] = useState(false);
	const [hash, setHash] = useState(() => location.hash);
	const [tab, setTab] = useState('overview');
	const [toasts, setToasts] = useState<ToastItem[]>([]);
	const [toastCount, setToastCount] = useState(0);
	const [clicks, setClicks] = useState(0);
	const [email, setEmail] = useState('');
	const [region, setRegion] = useState('');
	const [plan, setPlan] = useState('pro');
	const [terms, setTerms] = useState(false);
	const [notify, setNotify] = useState(true);
	const [progress, setProgress] = useState(40);

	useEffect(() => {
		const update = () => setHash(location.hash);
		window.addEventListener('hashchange', update);
		return () => window.removeEventListener('hashchange', update);
	}, []);

	function addToast(variant: ToastItem['variant']) {
		const next = toastCount + 1;
		setToastCount(next);
		setToasts((current) => [
			...current,
			{
				id: `toast-${next}`,
				message: variant === 'danger' ? `Toast ${next} failed.` : `Toast ${next} saved.`,
				variant
			}
		]);
	}

	const close = () => setOpen(false);
	const logo = (
		<Text weight="black" size="l">
			Moth React
		</Text>
	);

	return (
		<Layout logo={logo}>
			<LayoutHeader mobileLogo={logo}>
				<LayoutMenuButton open={open} onClick={() => setOpen((isOpen) => !isOpen)} />
			</LayoutHeader>
			<LayoutNav open={open} onClose={close} footer={<ThemeSwitcher />}>
				<NavItem href="#" active={hash === '' || hash === '#'} onClick={close}>
					Overview
				</NavItem>
				{navGroups.map((group) => (
					<NavGroup key={group.title} title={group.title} icon={group.icon}>
						{group.sections.map((title) => (
							<NavGroupItem
								key={title}
								href={`#${slug(title)}`}
								active={hash === `#${slug(title)}`}
								onClick={close}
							>
								{title}
							</NavGroupItem>
						))}
					</NavGroup>
				))}
			</LayoutNav>
			<LayoutContent>
				<Container align="center">
					<Flex direction="column" gap="2xl">
						<Flex direction="column" gap="xs">
							<Text as="h1" size="3xl" weight="black">
								React playground
							</Text>
							<Text variant="weak">
								The moth-ui-react components, live from packages/react/src.
							</Text>
						</Flex>

						<Section title="Button">
							<Flex gap="s" wrap align="center">
								<Button variant="primary" onClick={() => setClicks((count) => count + 1)}>
									Clicks: {clicks}
								</Button>
								<Button variant="secondary">Secondary</Button>
								<Button variant="tertiary">Tertiary</Button>
								<Button variant="danger">Danger</Button>
								<Button variant="primary" disabled>
									Disabled
								</Button>
							</Flex>
							<Flex gap="s" wrap align="center">
								<Button variant="primary" size="l" start={<Plus size={20} />}>
									Large with icon
								</Button>
								<Button
									variant="secondary"
									href="https://moth-ui.com"
									end={<ArrowRight size={16} />}
								>
									Link button
								</Button>
								<Button variant="tertiary" aria-label="Add" start={<Plus size={16} />} />
							</Flex>
							<Button variant="primary" expanded>
								Full width
							</Button>
						</Section>

						<Section title="Badge">
							<Flex gap="s" wrap>
								<Badge>Neutral</Badge>
								<Badge variant="info">Info</Badge>
								<Badge variant="success">Success</Badge>
								<Badge variant="warning">Warning</Badge>
								<Badge variant="danger">Danger</Badge>
							</Flex>
							<Flex gap="s" wrap>
								<Badge strong>Neutral</Badge>
								<Badge variant="info" strong>
									Info
								</Badge>
								<Badge variant="success" strong>
									Success
								</Badge>
								<Badge variant="warning" strong>
									Warning
								</Badge>
								<Badge variant="danger" strong>
									Danger
								</Badge>
							</Flex>
						</Section>

						<Section title="Card">
							<Card
								header={
									<Text as="h3" weight="bold">
										Project
									</Text>
								}
								headerEnd={<Button variant="secondary">Edit</Button>}
							>
								<Flex direction="column" gap="l">
									<Text>A card with a header and an action at the end of it.</Text>
									<Divider />
									<Text variant="weak" size="s">
										Content below a divider.
									</Text>
								</Flex>
							</Card>
						</Section>

						<Section title="Text">
							<Flex direction="column" gap="s">
								<Text size="2xl" weight="black">
									2xl black
								</Text>
								<Text size="l" weight="bold">
									l bold
								</Text>
								<Text>m regular (default)</Text>
								<Text variant="weak">Weak</Text>
								<Text variant="weaker">Weaker</Text>
								<Text variant="danger">Danger</Text>
								<Text mono size="s">
									Mono s
								</Text>
							</Flex>
						</Section>

						<Section title="Link">
							<Flex gap="l" wrap>
								<Link href="#">Default link</Link>
								<Link href="https://moth-ui.com" target="_blank" size="s">
									External (new tab)
								</Link>
							</Flex>
						</Section>

						<Section title="Input">
							<Flex direction="column" gap="l">
								<Input
									name="email"
									label="Email (controlled)"
									type="email"
									placeholder="you@example.com"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
									hint={email ? `Value: ${email}` : 'Type to see the value update'}
									required
								/>
								<Input
									name="search"
									label="With prefix"
									placeholder="Search"
									prefix={<Search size={16} />}
								/>
								<Input
									name="price"
									label="Prefix and suffix"
									defaultValue="42"
									align="end"
									prefix="$"
									suffix="USD"
								/>
								<Input
									name="username"
									label="Error"
									defaultValue="taken"
									error="That username is taken."
								/>
								<Input name="disabled" label="Disabled" placeholder="Disabled" disabled />
							</Flex>
						</Section>

						<Section title="Textarea">
							<Textarea
								name="bio"
								label="Bio"
								placeholder="A few words about you"
								rows={3}
								hint="Uncontrolled"
								expanded
							/>
						</Section>

						<Section title="Select">
							<Flex direction="column" gap="l">
								<Select
									name="region"
									label="Region (controlled)"
									options={regions}
									value={region}
									onChange={(event) => setRegion(event.target.value)}
									hint={region ? `Value: ${region}` : 'The placeholder is dimmed until you choose'}
								/>
								<Select
									name="region-default"
									label="Uncontrolled with a default"
									options={regions}
									defaultValue="us"
								/>
								<Select
									name="region-search"
									label="With prefix"
									options={regions}
									prefix={<Search size={16} />}
								/>
								<Select
									name="region-error"
									label="Error"
									options={regions}
									error="Choose a region."
								/>
								<Select name="region-disabled" label="Disabled" options={regions} disabled />
							</Flex>
						</Section>

						<Section title="Checkbox">
							<Flex direction="column" gap="m">
								<Checkbox
									name="terms"
									label={terms ? 'Accepted (controlled)' : 'Accept the terms (controlled)'}
									checked={terms}
									onChange={(event) => setTerms(event.target.checked)}
								/>
								<Checkbox name="news" label="Uncontrolled, checked by default" defaultChecked />
								<Checkbox name="some" label="Indeterminate (click to clear)" indeterminate />
								<Checkbox
									name="hinted"
									label="With hint"
									hint="We'll only email you about your account."
								/>
								<Checkbox name="error" label="With error" error="You must accept to continue." />
								<Checkbox name="off" label="Disabled" disabled />
							</Flex>
						</Section>

						<Section title="Radio and Fieldset">
							<Fieldset label={`Plan (controlled): ${plan}`} required>
								<Flex direction="column" gap="m">
									{['free', 'pro', 'team'].map((option) => (
										<Radio
											key={option}
											id={`plan-${option}`}
											name="plan"
											value={option}
											label={option[0].toUpperCase() + option.slice(1)}
											checked={plan === option}
											onChange={(event) => setPlan(event.target.value)}
											hint={option === 'team' ? 'For five people or more' : undefined}
										/>
									))}
									<Radio id="plan-legacy" name="plan" value="legacy" label="Legacy" disabled />
								</Flex>
							</Fieldset>
						</Section>

						<Section title="Toggle">
							<Flex direction="column" gap="m">
								<Toggle
									name="notify"
									label={`Notifications (controlled): ${notify ? 'on' : 'off'}`}
									checked={notify}
									onChange={(event) => setNotify(event.target.checked)}
								/>
								<Toggle name="beta" label="Uncontrolled" hint="Try the new features early." />
								<Toggle name="locked" label="Disabled" disabled defaultChecked />
							</Flex>
						</Section>

						<Section title="Banner">
							<Flex direction="column" gap="s">
								<Banner>An update is available.</Banner>
								<Banner variant="success">Your changes were saved.</Banner>
								<Banner variant="warning">Your trial ends in three days.</Banner>
								<Banner variant="danger">The payment failed.</Banner>
							</Flex>
						</Section>

						<Section title="Progress">
							<Progress label="Upload" value={progress} />
							<Flex gap="s">
								<Button
									variant="secondary"
									onClick={() => setProgress((value) => Math.max(0, value - 20))}
								>
									−20
								</Button>
								<Button
									variant="secondary"
									onClick={() => setProgress((value) => Math.min(100, value + 20))}
								>
									+20
								</Button>
							</Flex>
						</Section>

						<Section title="Avatar and Code">
							<Flex gap="s" align="center">
								<Avatar name="Ada Lovelace" />
								<Avatar name="Grace Hopper" src={samplePhoto} />
								<Avatar name="Broken" src="/does-not-exist.png" />
								<Text>
									Run <Code>npm install moth-ui-react</Code> to get started.
								</Text>
							</Flex>
						</Section>

						<Section title="Toast">
							<Flex gap="s">
								<Button variant="secondary" onClick={() => addToast('default')}>
									Show a toast
								</Button>
								<Button variant="secondary" onClick={() => addToast('danger')}>
									Show an error
								</Button>
							</Flex>
							<ToastGroup>
								{toasts.map((toast) => (
									<Toast
										key={toast.id}
										id={toast.id}
										variant={toast.variant}
										onDismiss={() =>
											setToasts((current) => current.filter((item) => item.id !== toast.id))
										}
									>
										{toast.message}
									</Toast>
								))}
							</ToastGroup>
						</Section>

						<Section title="Tabs">
							<Tabs
								tabs={[
									{ id: 'overview', label: 'Overview' },
									{ id: 'activity', label: 'Recent activity' },
									{ id: 'settings', label: 'Settings' }
								]}
								selected={tab}
								onClick={setTab}
							>
								<Tab id="overview" selected={tab}>
									<Text>The overview panel. Use the arrow keys, Home and End on the tabs.</Text>
								</Tab>
								<Tab id="activity" selected={tab}>
									<Text>Recent activity goes here.</Text>
								</Tab>
								<Tab id="settings" selected={tab}>
									<Text>Settings go here.</Text>
								</Tab>
							</Tabs>
						</Section>

						<Section title="Table">
							<Table striped interactive>
								<TableCaption>Recent orders</TableCaption>
								<TableHead>
									<TableRow>
										<TableHeader>Order</TableHeader>
										<TableHeader>Customer</TableHeader>
										<TableHeader>Status</TableHeader>
										<TableHeader align="end">Total</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{orders.map((order) => (
										<TableRow key={order.id}>
											<TableCell>#{order.id}</TableCell>
											<TableCell truncate style={{ maxWidth: 200 }}>
												{order.customer}
											</TableCell>
											<TableCell>
												<Badge variant={order.status === 'Paid' ? 'success' : 'warning'}>
													{order.status}
												</Badge>
											</TableCell>
											<TableCell align="end">{order.total}</TableCell>
										</TableRow>
									))}
									<TableRow>
										<TableCell colSpan={4} align="center">
											<Text variant="weak" size="s">
												End of the list
											</Text>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Section>

						<Section title="CopyCode">
							<CopyCode code="npm install moth-ui-react" />
						</Section>
					</Flex>
				</Container>
			</LayoutContent>
		</Layout>
	);
}
