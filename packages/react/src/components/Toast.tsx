"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import { forwardRef, useRef, type HTMLAttributes, type ReactNode } from "react";
import { cx, prefersReducedMotion, useIsomorphicLayoutEffect, useMergedRefs } from "../utils.js";

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

/** A short message. Flies in from the right when it appears (put toasts in a `ToastGroup`). */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
	{ id, dismissable = true, variant = "default", onDismiss, className, children, ...rest },
	ref
) {
	const toastRef = useRef<HTMLDivElement>(null);
	const mergedRef = useMergedRefs(ref, toastRef);

	// Svelte's fly transition: 200px from the right, fading in, 250ms with a cubic ease-out
	useIsomorphicLayoutEffect(() => {
		if (prefersReducedMotion()) return;
		toastRef.current?.animate(
			[
				{ transform: "translateX(200px)", opacity: 0 },
				{ transform: "none", opacity: 1 }
			],
			{ duration: 250, easing: "cubic-bezier(0.33, 1, 0.68, 1)" }
		);
	}, []);

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

/** Stacks toasts in the bottom-right corner, and has screen readers announce each one as it's added. */
export const ToastGroup = forwardRef<HTMLDivElement, ToastGroupProps>(function ToastGroup({ className, ...rest }, ref) {
	return (
		// A live region: screen readers announce each toast as it's added, without interrupting the user
		<div ref={ref} className={cx("m-toast-group", className)} role="status" aria-live="polite" {...rest} />
	);
});
