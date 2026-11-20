import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";

type FlexOwnProps = {
	direction?: "row" | "column" | "row-reverse" | "column-reverse";
	gap?: "none" | "xs" | "s" | "m" | "l" | "xl" | "2xl";
	wrap?: boolean;
	justify?: "start" | "end" | "flex-start" | "flex-end" | "center" | "between" | "around" | "evenly";
	align?:
		| "initial"
		| "stretch"
		| "flex-start"
		| "flex-end"
		| "center"
		| "baseline"
		| "start"
		| "end"
		| "self-start"
		| "self-end";
};

export type FlexProps = FlexOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof FlexOwnProps>;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
	{ direction = "row", gap = "m", wrap = false, justify = "start", align = "initial", className, ...rest },
	ref
) {
	return (
		<div
			ref={ref}
			className={cx(
				"m-flex",
				`has-direction-${direction}`,
				`is-align-${align}`,
				`has-gap-${gap}`,
				wrap ? "has-flex-wrap" : "has-flex-nowrap",
				`has-justify-${justify}`,
				className
			)}
			{...rest}
		/>
	);
});
