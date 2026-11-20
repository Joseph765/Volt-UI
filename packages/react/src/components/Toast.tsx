"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import {
	Children,
	createContext,
	forwardRef,
	isValidElement,
	useContext,
	useEffect,
	useRef,
	useState,
	type HTMLAttributes,
	type Key,
	type ReactElement,
	type ReactNode
} from "react";
import { cx, prefersReducedMotion, useIsomorphicLayoutEffect, useMergedRefs } from "../utils.js";

/** Svelte's fly transition: 200px to the right, faded out, 250ms with a cubic ease-out */
const FLY_DURATION = 250;
const FLY_FRAMES: Keyframe[] = [
	{ transform: "translateX(200px)", opacity: 0 },
	{ transform: "none", opacity: 1 }
];
const FLY_EASING = "cubic-bezier(0.33, 1, 0.68, 1)";

/** Set by ToastGroup on a toast that was removed and is flying out. */
const LeavingContext = createContext(false);

type ToastOwnProps = {
	id: string;
	/** Shows a close button. */
	dismissable?: boolean;
	variant?: "default" | "danger";
	/** Called when the close button is clicked. Remove the toast in response. */
	onDismiss?: () => void;
	children?: ReactNode;
};

export type ToastProps = ToastOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ToastOwnProps>;

/**
 * A short message. Flies in from the right when it appears, and out again when it's removed (inside a
 * `ToastGroup`, which keeps it on screen for the exit).
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
	{ id, dismissable = true, variant = "default", onDismiss, className, children, ...rest },
	ref
) {
	const toastRef = useRef<HTMLDivElement>(null);
	const mergedRef = useMergedRefs(ref, toastRef);

	const leaving = useContext(LeavingContext);

	// Fly in on mount, and back out when the group says it's leaving
	useIsomorphicLayoutEffect(() => {
		if (prefersReducedMotion() || !toastRef.current) return;
		const animation = toastRef.current.animate(leaving ? [...FLY_FRAMES].reverse() : FLY_FRAMES, {
			duration: FLY_DURATION,
			easing: FLY_EASING,
			fill: leaving ? "forwards" : "none"
		});
		return () => animation.cancel();
	}, [leaving]);

	return (
		<div ref={mergedRef} className={cx("m-toast", variant === "danger" && "is-danger", className)} id={id} {...rest}>
			<span className="m-toast-message">{children}</span>
			{dismissable && (
				<button className="m-toast-dismiss" aria-label="close" onClick={onDismiss}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			)}
		</div>
	);
});

export type ToastGroupProps = HTMLAttributes<HTMLDivElement>;

type Entry = { key: Key; element: ReactElement; leaving: boolean };

/** The keyed toast elements among the children (React.Children.toArray gives each one a key). */
function toEntries(children: ReactNode): Entry[] {
	return Children.toArray(children)
		.filter(isValidElement)
		.map((element) => ({ key: element.key ?? "", element, leaving: false }));
}

/**
 * The current toasts, plus removed ones kept in their old place while they fly out. Removed toasts are dropped
 * after the exit; a toast that comes back before then is kept.
 */
function useToastPresence(children: ReactNode): Entry[] {
	const [entries, setEntries] = useState<Entry[]>(() => toEntries(children));
	const timers = useRef(new Map<Key, ReturnType<typeof setTimeout>>());

	useIsomorphicLayoutEffect(() => {
		const next = toEntries(children);
		setEntries((previous) => {
			const nextKeys = new Set(next.map((entry) => entry.key));
			const merged: Entry[] = [];
			let index = 0;
			for (const entry of previous) {
				if (nextKeys.has(entry.key)) {
					// Add the current toasts up to and including this one, in their new order
					while (index < next.length) {
						const current = next[index++];
						merged.push(current);
						if (current.key === entry.key) break;
					}
				} else {
					merged.push({ ...entry, leaving: true });
				}
			}
			merged.push(...next.slice(index));
			return merged.filter((entry, i) => merged.findIndex((other) => other.key === entry.key) === i);
		});
	}, [children]);

	// Drop each leaving toast once its exit has played (cancelled if it comes back)
	useEffect(() => {
		const exitTime = prefersReducedMotion() ? 0 : FLY_DURATION;
		for (const entry of entries) {
			if (entry.leaving && !timers.current.has(entry.key)) {
				timers.current.set(
					entry.key,
					setTimeout(() => {
						timers.current.delete(entry.key);
						setEntries((current) => current.filter((other) => !(other.key === entry.key && other.leaving)));
					}, exitTime)
				);
			} else if (!entry.leaving && timers.current.has(entry.key)) {
				clearTimeout(timers.current.get(entry.key));
				timers.current.delete(entry.key);
			}
		}
	}, [entries]);

	useEffect(() => {
		const pending = timers.current;
		return () => pending.forEach((timer) => clearTimeout(timer));
	}, []);

	return entries;
}

/**
 * Stacks toasts in the bottom-right corner, and has screen readers announce each one as it's added. Give each
 * toast a `key` (e.g. its id) so a removed one can fly out.
 */
export const ToastGroup = forwardRef<HTMLDivElement, ToastGroupProps>(function ToastGroup(
	{ className, children, ...rest },
	ref
) {
	const entries = useToastPresence(children);
	return (
		// A live region: screen readers announce each toast as it's added, without interrupting the user
		<div ref={ref} className={cx("m-toast-group", className)} role="status" aria-live="polite" {...rest}>
			{entries.map((entry) => (
				<LeavingContext.Provider key={entry.key} value={entry.leaving}>
					{entry.element}
				</LeavingContext.Provider>
			))}
		</div>
	);
});
