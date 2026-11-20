"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";

export type ThemeChoice = "system" | "light" | "dark";

// Shared by every ThemeSwitcher on the page (e.g. one in a mobile header and one on desktop), so they agree
let currentChoice: ThemeChoice = "system";
const listeners = new Set<() => void>();

function setChoice(choice: ThemeChoice) {
	currentChoice = choice;
	listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}

const getChoice = () => currentChoice;
const getServerChoice = (): ThemeChoice => "system";

function apply(value: ThemeChoice) {
	const light = value === "light" || (value === "system" && matchMedia("(prefers-color-scheme: light)").matches);
	document.documentElement.dataset.theme = light ? "light" : "dark";
}

const iconProps = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	"aria-hidden": true
} as const;

const options: { value: ThemeChoice; label: string; icon: ReactNode }[] = [
	{
		value: "system",
		label: "System theme",
		icon: (
			<svg {...iconProps}>
				<rect width="20" height="14" x="2" y="3" rx="2" />
				<line x1="8" x2="16" y1="21" y2="21" />
				<line x1="12" x2="12" y1="17" y2="21" />
			</svg>
		)
	},
	{
		value: "light",
		label: "Light theme",
		icon: (
			<svg {...iconProps}>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>
		)
	},
	{
		value: "dark",
		label: "Dark theme",
		icon: (
			<svg {...iconProps}>
				<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
			</svg>
		)
	}
];

export type ThemeSwitcherProps = {
	/** Where the choice is saved in localStorage. "" turns saving off. */
	storageKey?: string;
	/** The radio group's accessible name. */
	label?: string;
	/** Called with the new choice. */
	onChange?: (choice: ThemeChoice) => void;
};

/**
 * Lets people pick System, Light or Dark. It sets `data-theme` on <html>; System follows the OS setting, live.
 */
export function ThemeSwitcher({ storageKey = "moth-theme", label = "Theme", onChange }: ThemeSwitcherProps) {
	const choice = useSyncExternalStore(subscribe, getChoice, getServerChoice);
	const buttons = useRef<Array<HTMLButtonElement | null>>([]);

	function choose(value: ThemeChoice) {
		setChoice(value);
		apply(value);
		if (storageKey) {
			try {
				if (value === "system") localStorage.removeItem(storageKey);
				else localStorage.setItem(storageKey, value);
			} catch {
				// Storage can be blocked (e.g. private browsing); the choice still applies for this visit
			}
		}
		onChange?.(value);
	}

	// Arrow keys move the choice, like any radio group
	function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
		const step =
			event.key === "ArrowRight" || event.key === "ArrowDown"
				? 1
				: event.key === "ArrowLeft" || event.key === "ArrowUp"
					? -1
					: 0;
		if (!step) return;
		event.preventDefault();
		const next = (index + step + options.length) % options.length;
		choose(options[next].value);
		buttons.current[next]?.focus();
	}

	useEffect(() => {
		let saved: ThemeChoice = currentChoice;
		if (storageKey) {
			try {
				const stored = localStorage.getItem(storageKey);
				saved = stored === "light" || stored === "dark" ? stored : "system";
			} catch {
				// Storage can be blocked; keep the current choice
			}
		}
		setChoice(saved);
		apply(saved);

		// While on System, follow the OS when it switches (e.g. at sunset)
		const query = matchMedia("(prefers-color-scheme: light)");
		const handleQueryChange = () => {
			if (currentChoice === "system") apply("system");
		};
		query.addEventListener("change", handleQueryChange);
		return () => query.removeEventListener("change", handleQueryChange);
	}, [storageKey]);

	return (
		<div className="m-theme-switcher" role="radiogroup" aria-label={label}>
			{options.map((option, index) => (
				<button
					key={option.value}
					ref={(element) => {
						buttons.current[index] = element;
					}}
					type="button"
					role="radio"
					className="m-theme-switcher-option"
					aria-checked={choice === option.value}
					aria-label={option.label}
					title={option.label}
					tabIndex={choice === option.value ? 0 : -1}
					onClick={() => choose(option.value)}
					onKeyDown={(event) => handleKeyDown(event, index)}
				>
					{option.icon}
				</button>
			))}
		</div>
	);
}
