import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils.js";

type BadgeOwnProps = {
	variant?: "neutral" | "danger" | "warning" | "success" | "info";
	strong?: boolean;
	/** Rendered before the label. */
	icon?: ReactNode;
};

export type BadgeProps = BadgeOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof BadgeOwnProps>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
	{ variant = "neutral", strong = false, icon, className, children, ...rest },
	ref
) {
	return (
		<div ref={ref} className={cx("m-badge", `is-${variant}`, strong && "is-strong", className)} {...rest}>
			{icon}
			{children}
		</div>
	);
});
