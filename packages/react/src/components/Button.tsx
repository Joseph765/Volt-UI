import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type Ref } from "react";
import { cx } from "../utils.js";

type ButtonOwnProps = {
	variant?: "default" | "primary" | "secondary" | "tertiary" | "danger";
	/** Fills the width of its container. */
	expanded?: boolean;
	size?: "m" | "l";
	disabled?: boolean;
	/** Renders an `<a>` instead of a `<button>`. */
	href?: string;
	/** Rendered before the label (e.g. an icon). */
	start?: ReactNode;
	/** Rendered after the label. */
	end?: ReactNode;
};

/** Any other attribute (onClick, type, aria-label, …) goes on the `<button>` (or `<a>` when `href` is set). */
export type ButtonProps = ButtonOwnProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> &
	Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel" | "download" | "hrefLang">;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
	{ variant = "default", expanded = false, size = "m", disabled = false, href, start, end, className, children, ...rest },
	ref
) {
	const content = (
		<>
			{start}
			{children}
			{end}
		</>
	);

	return (
		<div className={cx("m-button-wrapper", expanded && "is-expanded")}>
			{href ? (
				<a
					ref={ref as Ref<HTMLAnchorElement>}
					href={href}
					className={cx("m-button", "is-link", `is-${variant}`, `is-size-${size}`, expanded && "is-expanded", className)}
					{...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
				>
					{content}
				</a>
			) : (
				<button
					ref={ref as Ref<HTMLButtonElement>}
					className={cx("m-button", `is-${variant}`, `is-size-${size}`, expanded && "is-expanded", className)}
					disabled={disabled}
					{...rest}
				>
					{content}
				</button>
			)}
		</div>
	);
});
