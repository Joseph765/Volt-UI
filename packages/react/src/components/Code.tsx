import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLElement, CodeProps>(function Code({ className, ...rest }, ref) {
	return <code ref={ref} className={cx("m-code", className)} {...rest} />;
});
