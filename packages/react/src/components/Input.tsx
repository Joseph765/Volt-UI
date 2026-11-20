"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx, useClientWidth } from "../utils.js";
import { FieldLabel, FieldMessages } from "./FieldMessages.js";

type InputOwnProps = {
	label?: string;
	name: string;
	/** The field's id, which its label points at. Defaults to `name`. */
	id?: string;
	/** Fills the width of its container. */
	expanded?: boolean;
	error?: string;
	hint?: string;
	align?: "start" | "end";
	/** Rendered inside the field, before the text (e.g. an icon or "$"). */
	prefix?: ReactNode;
	/** Rendered inside the field, after the text. */
	suffix?: ReactNode;
};

/**
 * Any other attribute (value + onChange, defaultValue, placeholder, onKeyDown, …) goes on the `<input>`.
 */
export type InputProps = InputOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{
		label = "",
		type = "text",
		name,
		id,
		expanded = false,
		required = false,
		error = "",
		hint = "",
		align = "start",
		autoComplete = "off",
		style,
		prefix,
		suffix,
		className,
		...rest
	},
	ref
) {
	const [prefixRef, prefixWidth] = useClientWidth<HTMLSpanElement>();
	const [suffixRef, suffixWidth] = useClientWidth<HTMLSpanElement>();
	const hasPrefix = prefix != null && prefix !== false;
	const hasSuffix = suffix != null && suffix !== false;

	return (
		<div className="m-label-wrapper">
			<FieldLabel label={label} htmlFor={id || name} required={required} />

			<div className={cx("m-input-wrapper", expanded && "is-expanded")}>
				{hasPrefix && (
					<span className="m-input-prefix" ref={prefixRef}>
						{prefix}
					</span>
				)}

				<input
					ref={ref}
					type={type}
					id={id || name}
					name={name}
					required={required}
					autoComplete={autoComplete}
					{...rest}
					className={cx(
						"m-input",
						expanded && "is-expanded",
						error && "is-danger",
						`is-align-${align}`,
						className
					)}
					style={{
						...style,
						...(prefixWidth ? { paddingInlineStart: `${prefixWidth}px` } : null),
						...(suffixWidth ? { paddingInlineEnd: `${suffixWidth}px` } : null)
					}}
				/>

				{hasSuffix && (
					<span className="m-input-suffix" ref={suffixRef}>
						{suffix}
					</span>
				)}
			</div>

			<FieldMessages error={error} hint={hint} />
		</div>
	);
});
