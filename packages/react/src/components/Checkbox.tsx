"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import { forwardRef, useEffect, useRef, useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import { cx, useControllable, useMergedRefs, useIsomorphicLayoutEffect } from "../utils.js";

type CheckboxOwnProps = {
	/** Pair it with `onChange` to control it, or use `defaultChecked` for a starting value. */
	checked?: boolean;
	defaultChecked?: boolean;
	/** Shows a dash instead of a check (e.g. "some selected"). Clears when the user clicks the box. */
	indeterminate?: boolean;
	label?: string;
	error?: string;
	hint?: string;
};

/** Any other attribute (onChange, value, aria-describedby, …) goes on the `<input>`. `style` goes on the label. */
export type CheckboxProps = CheckboxOwnProps &
	Omit<InputHTMLAttributes<HTMLInputElement>, keyof CheckboxOwnProps | "type">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
	{
		name,
		checked,
		defaultChecked = false,
		disabled = false,
		indeterminate = false,
		label = "",
		error = "",
		hint = "",
		style,
		onChange,
		className,
		...rest
	},
	ref
) {
	const [isChecked, setChecked] = useControllable(checked, defaultChecked);
	// Like the native property: set from the prop, cleared by the browser when the box is clicked
	const [isIndeterminate, setIndeterminate] = useState(indeterminate);
	useEffect(() => setIndeterminate(indeterminate), [indeterminate]);

	const inputRef = useRef<HTMLInputElement>(null);
	const mergedRef = useMergedRefs(ref, inputRef);
	useIsomorphicLayoutEffect(() => {
		if (inputRef.current) inputRef.current.indeterminate = isIndeterminate;
	}, [isIndeterminate]);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setChecked(event.target.checked);
		setIndeterminate(false);
		onChange?.(event);
	}

	return (
		<label className={cx("m-checkbox-wrapper", error && "is-danger", hint && "has-hint")} style={style}>
			<input
				ref={mergedRef}
				type="checkbox"
				name={name}
				disabled={disabled}
				checked={isChecked}
				onChange={handleChange}
				{...rest}
				tabIndex={0}
				className={cx("m-checkbox-input", className)}
			/>

			<span className={cx("m-checkbox-box", error && "is-danger")}>
				{isChecked && (
					// Check mark
					<svg
						className="m-checkbox-check"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M20 6 9 17l-5-5" />
					</svg>
				)}

				{isIndeterminate && (
					// Indeterminate dash
					<svg
						className="m-checkbox-indeterminate"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M5 12h14" />
					</svg>
				)}
			</span>

			{label && (
				<span className="m-checkbox-label">
					{label}
					{error && <span className="m-text is-danger is-size-s">{error}</span>}
					{hint && <span className="m-text is-weak is-size-s">{hint}</span>}
				</span>
			)}
		</label>
	);
});
