import { forwardRef, type FieldsetHTMLAttributes } from "react";
import { cx } from "../utils.js";

type FieldsetOwnProps = {
	label: string;
	required?: boolean;
};

export type FieldsetProps = FieldsetOwnProps & Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, keyof FieldsetOwnProps>;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
	{ label, required = false, className, children, ...rest },
	ref
) {
	return (
		<fieldset ref={ref} className={cx("m-fieldset", className)} {...rest}>
			<legend className="m-fieldset-legend">
				<div className="m-fieldset-label">{label}</div>
				{required && <span className="m-required">*</span>}
			</legend>
			{children}
		</fieldset>
	);
});
