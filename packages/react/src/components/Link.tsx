import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cx } from "../utils.js";

type LinkOwnProps = {
	size?: "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl";
};

export type LinkProps = LinkOwnProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkOwnProps>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
	{ size = "m", href = "#", target, rel, className, ...rest },
	ref
) {
	return (
		<a
			ref={ref}
			href={href}
			target={target || undefined}
			rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
			className={cx("m-link", `is-size-${size}`, className)}
			{...rest}
		/>
	);
});
