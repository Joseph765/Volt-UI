import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";

type ProgressOwnProps = {
	/** From 0 to `max`; values outside that range are clamped. */
	value: number;
	max?: number;
	/** Shown above the bar and read out by screen readers. */
	label: string;
};

export type ProgressProps = ProgressOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ProgressOwnProps>;

/** A bar that shows how far along something is, with its label and percentage above it. */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
	{ value, max = 100, label, className, ...rest },
	ref
) {
	const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
	const rounded = `${Math.round(percent)}%`;

	return (
		<div ref={ref} className={cx("m-progress", className)} {...rest}>
			{/* Visual only: the bar below carries the same label and value for screen readers */}
			<div className="m-progress-header" aria-hidden="true">
				<span className="m-progress-label">{label}</span>
				<span className="m-progress-value">{rounded}</span>
			</div>
			<div
				className="m-progress-track"
				role="progressbar"
				aria-label={label}
				aria-valuemin={0}
				aria-valuemax={max}
				aria-valuenow={Math.min(max, Math.max(0, value))}
				aria-valuetext={rounded}
			>
				<div className="m-progress-fill" style={{ width: `${percent}%` }} />
			</div>
		</div>
	);
});
