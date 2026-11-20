"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import { forwardRef, type ChangeEvent, type ReactNode, type SelectHTMLAttributes } from "react";
import { cx, useClientWidth, useControllable } from "../utils.js";
import { FieldLabel, FieldMessages } from "./FieldMessages.js";

export type SelectOption = { value: string; label: string };

type SelectOwnProps = {
	label?: string;
	name: string;
	/** The field's id, which its label points at. Defaults to `name`. */
	id?: string;
	/** Fills the width of its container. */
	expanded?: boolean;
	/** The selected option's value. Pair it with `onChange` to control it, or use `defaultValue`. */
	value?: string;
	defaultValue?: string;
	options?: SelectOption[];
	/** Shown until an option is chosen. Pass "" for none. */
	placeholder?: string;
	error?: string;
	hint?: string;
	/** Rendered inside the field, before the text. */
	prefix?: ReactNode;
	/** Rendered inside the field, before the arrow. */
	suffix?: ReactNode;
};

/** Any other attribute (onChange, aria-describedby, …) goes on the `<select>`. `style` goes on its wrapper. */
export type SelectProps = SelectOwnProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof SelectOwnProps>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
	{
		label = "",
		name,
		id,
		expanded = false,
		required = false,
		value,
		defaultValue = "",
		options = [],
		placeholder = "Select an option...",
		error = "",
		hint = "",
		disabled = false,
		autoComplete = "off",
		style,
		prefix,
		suffix,
		onChange,
		className,
		...rest
	},
	ref
) {
	const [current, setCurrent] = useControllable(value, defaultValue);
	const [prefixRef, prefixWidth] = useClientWidth<HTMLSpanElement>();
	const hasPrefix = prefix != null && prefix !== false;
	const hasSuffix = suffix != null && suffix !== false;

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		setCurrent(event.target.value);
		onChange?.(event);
	}

	return (
		<div className="m-label-wrapper">
			<FieldLabel label={label} htmlFor={id || name} required={required} />

			<div className={cx("m-select-wrapper", expanded && "is-expanded", error && "is-danger")} style={style}>
				{hasPrefix && (
					<span className="m-select-prefix" ref={prefixRef}>
						{prefix}
					</span>
				)}

				<select
					ref={ref}
					value={current}
					onChange={handleChange}
					id={id || name}
					name={name}
					disabled={disabled}
					required={required}
					autoComplete={autoComplete}
					{...rest}
					className={cx("m-select", current === "" && "has-placeholder", className)}
					style={prefixWidth ? { paddingInlineStart: `${prefixWidth}px` } : undefined}
				>
					{placeholder ? (
						<option value="" disabled hidden>
							{placeholder}
						</option>
					) : null}

					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>

				{hasSuffix && <span className="m-select-suffix">{suffix}</span>}

				{/* Dropdown arrow */}
				<span className="m-select-arrow">
					<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</span>
			</div>

			<FieldMessages error={error} hint={hint} />
		</div>
	);
});
