import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils.js";

type CardOwnProps = {
	space?: "none" | "m" | "l";
	/** The header row; the card has no header without it. */
	header?: ReactNode;
	/** Rendered at the end of the header row (e.g. actions). Needs `header`. */
	headerEnd?: ReactNode;
};

export type CardProps = CardOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof CardOwnProps>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
	{ space = "m", header, headerEnd, className, children, ...rest },
	ref
) {
	return (
		<div ref={ref} className={cx("m-card", `has-space-${space}`, className)} {...rest}>
			{header != null && header !== false && (
				<div className="m-card-header">
					{header}
					{headerEnd}
				</div>
			)}
			<div className="m-card-content">{children}</div>
		</div>
	);
});
