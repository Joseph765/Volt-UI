import { forwardRef, type InputHTMLAttributes } from "react";
import { cx } from "../utils.js";

type ToggleOwnProps = {
	label?: string;
	name: string;
	error?: string;
	hint?: string;
};

/**
 * Pair `checked` with `onChange` to control it, or use `defaultChecked` for a starting value.
 * Any other attribute goes on the `<input>`.
 */
export type ToggleProps = ToggleOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof ToggleOwnProps | "type">;

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
	{ label = "", name, disabled = false, error = "", hint = "", className, ...rest },
	ref
) {
	return (
		<div className={cx("m-toggle-wrapper", error && "is-danger", disabled && "is-disabled", hint && "has-hint")}>
			{/* id matches the label's htmlFor, so clicking the label toggles */}
			<input
				ref={ref}
				className={cx("m-toggle", className)}
				type="checkbox"
				id={name}
				name={name}
				disabled={disabled}
				tabIndex={0}
				{...rest}
			/>
			<div className="m-flex has-direction-column has-gap-xs">
				<label className="m-toggle-label" htmlFor={name}>
					{label}
				</label>
				{error && <span className="m-text is-size-s is-danger">{error}</span>}
				{hint && <span className="m-text is-size-s is-weak">{hint}</span>}
			</div>
		</div>
	);
});
