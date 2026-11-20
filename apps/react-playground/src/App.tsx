import { useState, type ReactNode } from "react";
import { ArrowRight, Moon, Plus, Sun } from "lucide-react";
import { Badge, Button, Card, Container, Divider, Flex, Link, Text } from "moth-ui-react";

type Theme = "dark" | "light";

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<Flex direction="column" gap="m">
			<Text as="h2" size="xl" weight="bold">
				{title}
			</Text>
			{children}
		</Flex>
	);
}

export default function App() {
	const [theme, setTheme] = useState<Theme>(() =>
		document.documentElement.dataset.theme === "light" ? "light" : "dark"
	);
	const [clicks, setClicks] = useState(0);

	function toggleTheme() {
		const next = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("moth-playground-theme", next);
		} catch {
			// Storage can be unavailable (private mode); the theme still switches for this visit.
		}
		setTheme(next);
	}

	return (
		<Container align="center">
			<Flex direction="column" gap="2xl">
				<Flex justify="between" align="center">
					<Flex direction="column" gap="xs">
						<Text as="h1" size="3xl" weight="black">
							React playground
						</Text>
						<Text variant="weak">The moth-ui-react components, live from packages/react/src.</Text>
					</Flex>
					<Button
						variant="secondary"
						onClick={toggleTheme}
						start={theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
					>
						{theme === "dark" ? "Light" : "Dark"}
					</Button>
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
						<Button variant="secondary" href="https://moth-ui.com" end={<ArrowRight size={16} />}>
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
			</Flex>
		</Container>
	);
}
