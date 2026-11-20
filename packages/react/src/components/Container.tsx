import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";

type ContainerOwnProps = {
	space?: "default" | "none";
	size?: "s" | "m" | "l" | "xl" | "2xl";
	align?: "start" | "center" | "end";
	debug?: boolean;
};

export type ContainerProps = ContainerOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ContainerOwnProps>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
	{ space = "default", size = "2xl", align = "start", debug = false, className, ...rest },
	ref
) {
	return (
		<div
			ref={ref}
			className={cx(
				"m-container",
				debug && "is-debug",
				`is-size-${size}`,
				`is-align-${align}`,
				`has-space-${space}`,
				className
			)}
			{...rest}
		/>
	);
});
