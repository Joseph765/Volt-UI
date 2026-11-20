import { forwardRef, type InputHTMLAttributes } from "react";
import { cx } from "../utils.js";

type RadioOwnProps = {
	id: string;
	label: string;
	name: string;
	value: string;
	hint?: string;
	error?: string;
};

/**
 * A group is controlled with `checked={plan === "pro"}` and `onChange` on each Radio, or uncontrolled with
 * `defaultChecked`. Any other attribute goes on the `<input>`.
 */
export type RadioProps = RadioOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof RadioOwnProps | "type">;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
	{ id, label, name, value, disabled = false, hint = "", error = "", className, ...rest },
	ref
) {
	return (
		<div className={cx("m-radio-wrapper", disabled && "is-disabled", error && "is-danger", hint && "has-hint")}>
			<input
				ref={ref}
				className={cx("m-radio", className)}
				type="radio"
				id={id}
				name={name}
				value={value}
				disabled={disabled}
				tabIndex={0}
				{...rest}
			/>
			<label className="m-radio-label" htmlFor={id}>
				{label}
				{error && <div className="m-text is-danger is-size-s">{error}</div>}
				{hint && <div className="m-text is-weak is-size-s">{hint}</div>}
			</label>
		</div>
	);
});
