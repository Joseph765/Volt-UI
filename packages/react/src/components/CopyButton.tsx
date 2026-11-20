"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import { useEffect, useRef, useState, type CSSProperties } from "react";

/** The round copy button used by CopyCode. Not exported (as in moth-ui-svelte). */
export function CopyButton({ copyText, style }: { copyText: string; style?: CSSProperties }) {
	const [showCheckmark, setShowCheckmark] = useState(false);
	const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	useEffect(() => () => clearTimeout(timer.current), []);

	function copy() {
		navigator.clipboard.writeText(copyText);
		setShowCheckmark(true);
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setShowCheckmark(false), 1000);
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

	return (
		<button className="m-copy-button" onClick={copy} aria-label="copy" style={style} tabIndex={0}>
			{showCheckmark ? (
				<svg {...iconProps}>
					<path d="M20 6 9 17l-5-5" />
				</svg>
			) : (
				<svg {...iconProps}>
					<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
					<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
				</svg>
			)}
		</button>
	);
}
