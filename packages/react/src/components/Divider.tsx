import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";

export type DividerProps = HTMLAttributes<HTMLDivElement>;

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider({ className, ...rest }, ref) {
	return <div ref={ref} className={cx("m-divider", className)} {...rest} />;
});
