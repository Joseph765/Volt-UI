import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cx } from "../utils.js";
import { FieldLabel, FieldMessages } from "./FieldMessages.js";

type TextareaOwnProps = {
	label?: string;
	name: string;
	/** The field's id, which its label points at. Defaults to `name`. */
	id?: string;
	/** Fills the width of its container. */
	expanded?: boolean;
	error?: string;
	hint?: string;
	align?: "start" | "end";
};

/** Any other attribute (value + onChange, defaultValue, placeholder, rows, …) goes on the `<textarea>`. */
export type TextareaProps = TextareaOwnProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof TextareaOwnProps>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
	{
		label = "",
		name,
		id,
		expanded = false,
		required = false,
		error = "",
		hint = "",
		align = "start",
		autoComplete = "off",
		className,
		...rest
	},
	ref
) {
	return (
		<div className="m-label-wrapper">
			<FieldLabel label={label} htmlFor={id || name} required={required} />

			<div className={cx("m-textarea-wrapper", expanded && "is-expanded")}>
				<textarea
					ref={ref}
					id={id || name}
					name={name}
					required={required}
					autoComplete={autoComplete}
					{...rest}
					className={cx(
						"m-textarea",
						expanded && "is-expanded",
						error && "is-danger",
						`is-align-${align}`,
						className
					)}
				/>
			</div>

			<FieldMessages error={error} hint={hint} />
		</div>
	);
});
