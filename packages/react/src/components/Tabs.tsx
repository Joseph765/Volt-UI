"use client";

import {
	forwardRef,
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type HTMLAttributes,
	type KeyboardEvent,
	type ReactNode
} from "react";
import { cx, useIsomorphicLayoutEffect } from "../utils.js";

export type TabItem = {
	/** Matches the `id` of its `Tab` panel. */
	id: string;
	label: string;
};

export type TabsProps = {
	tabs: TabItem[];
	/** The selected tab's id. */
	selected: string;
	/** Called with a tab's id when it's clicked or chosen with the arrow keys, Home or End. */
	onClick: (id: string) => void;
	/** The `Tab` panels. */
	children?: ReactNode;
};

/** A row of tabs with a sliding indicator under the selected one. Put each panel in a `Tab`. */
export function Tabs({ tabs, selected, onClick, children }: TabsProps) {
	const activeTabIndex = tabs.findIndex((tab) => tab.id === selected);

	const tablistRef = useRef<HTMLDivElement>(null);
	const tabButtons = useRef<Array<HTMLButtonElement | null>>([]);

	/** Position and width of the sliding indicator under the selected tab */
	const [indicator, setIndicator] = useState({ x: 0, width: 0 });
	/** True once the indicator has been placed; until then the selected tab shows a plain underline */
	const [measured, setMeasured] = useState(false);
	/** Turned on after the first placement so the indicator doesn't slide in from the left on load */
	const [animate, setAnimate] = useState(false);

	const activeIndexRef = useRef(activeTabIndex);
	activeIndexRef.current = activeTabIndex;

	function measure() {
		const button = tabButtons.current[activeIndexRef.current];
		if (!button) return;
		setIndicator((current) =>
			current.x === button.offsetLeft && current.width === button.offsetWidth
				? current
				: { x: button.offsetLeft, width: button.offsetWidth }
		);
		setMeasured(true);
	}

	// Follow the selection, and re-observe the buttons when the list of tabs changes. Labels also change width
	// when fonts load or the layout reflows.
	useIsomorphicLayoutEffect(() => {
		const observer = new ResizeObserver(measure);
		[tablistRef.current, ...tabButtons.current].forEach((element) => element && observer.observe(element));
		measure();
		return () => observer.disconnect();
	}, [activeTabIndex, tabs]);

	useEffect(() => {
		let second = 0;
		const first = requestAnimationFrame(() => {
			second = requestAnimationFrame(() => setAnimate(true));
		});
		return () => {
			cancelAnimationFrame(first);
			cancelAnimationFrame(second);
		};
	}, []);

	function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
		let newIndex = activeTabIndex;

		switch (event.key) {
			case "ArrowRight":
				event.preventDefault();
				newIndex = (activeTabIndex + 1) % tabs.length;
				break;
			case "ArrowLeft":
				event.preventDefault();
				newIndex = (activeTabIndex - 1 + tabs.length) % tabs.length;
				break;
			case "Home":
				event.preventDefault();
				newIndex = 0;
				break;
			case "End":
				event.preventDefault();
				newIndex = tabs.length - 1;
				break;
			default:
				return;
		}

		onClick(tabs[newIndex].id);
		tabButtons.current[newIndex]?.focus();
	}

	tabButtons.current.length = tabs.length;

	return (
		<>
			<div
				ref={tablistRef}
				className={cx("m-tabs", measured && "has-indicator")}
				role="tablist"
				tabIndex={0}
				onKeyDown={handleKeyDown}
			>
				{tabs.map((tab, index) => (
					<button
						key={tab.id}
						ref={(element) => {
							tabButtons.current[index] = element;
						}}
						className="m-tab"
						role="tab"
						id={`tab-${tab.id}`}
						aria-selected={selected === tab.id}
						aria-controls={`panel-${tab.id}`}
						tabIndex={selected === tab.id ? 0 : -1}
						onClick={() => onClick(tab.id)}
					>
						{tab.label}
					</button>
				))}
				{measured && (
					<span
						className={cx("m-tabs-indicator", animate && "is-animated")}
						style={
							{
								"--m-tabs-indicator-x": `${indicator.x}px`,
								"--m-tabs-indicator-width": `${indicator.width}px`
							} as CSSProperties
						}
						aria-hidden="true"
					/>
				)}
			</div>

			{children}
		</>
	);
}

type TabOwnProps = {
	/** The id of its tab in `Tabs`. The panel itself gets `panel-{id}`, which the tab points at. */
	id: string;
	/** The selected tab's id; the panel is hidden unless it matches. */
	selected: string;
};

export type TabProps = TabOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TabOwnProps>;

/** One tab's panel. */
export const Tab = forwardRef<HTMLDivElement, TabProps>(function Tab({ id, selected, className, ...rest }, ref) {
	const isSelected = selected === id;
	return (
		<div
			ref={ref}
			className={cx("m-tab-panel", className)}
			id={`panel-${id}`}
			role="tabpanel"
			tabIndex={isSelected ? 0 : -1}
			aria-labelledby={`tab-${id}`}
			hidden={!isSelected}
			{...rest}
		/>
	);
});
