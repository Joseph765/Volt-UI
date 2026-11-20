import { createElement, forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";

type TextOwnProps = {
	size?: "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "4xl";
	variant?: "default" | "weak" | "weaker" | "weakest" | "warning" | "danger" | "success";
	weight?: "regular" | "bold" | "black";
	as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	measure?: "none" | "s" | "m" | "l";
	mono?: boolean;
	/** When omitted, the text follows its container's alignment (e.g. a TableCell's align). */
	align?: "start" | "center" | "end";
};

export type TextProps = TextOwnProps & Omit<HTMLAttributes<HTMLElement>, keyof TextOwnProps>;

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
	{ size = "m", variant = "default", weight = "regular", as = "p", measure = "m", mono = false, align, className, ...rest },
	ref
) {
	return createElement(as, {
		ref,
		className: cx(
			"m-text",
			`is-size-${size}`,
			`is-${variant}`,
			`has-weight-${weight}`,
			`has-measure-${measure}`,
			align && `is-align-${align}`,
			mono && "is-mono",
			className
		),
		...rest
	});
});
