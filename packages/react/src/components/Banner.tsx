// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils.js";

type BannerVariant = "info" | "warning" | "danger" | "success";

type BannerOwnProps = {
	variant?: BannerVariant;
};

export type BannerProps = BannerOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof BannerOwnProps>;

const iconProps = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 20,
	height: 20,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
} as const;

const icons: Record<BannerVariant, ReactNode> = {
	info: (
		<svg {...iconProps}>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 16v-4" />
			<path d="M12 8h.01" />
		</svg>
	),
	warning: (
		<svg {...iconProps}>
			<circle cx="12" cy="12" r="10" />
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
			<path d="M12 17h.01" />
		</svg>
	),
	danger: (
		<svg {...iconProps}>
			<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
			<path d="M12 9v4" />
			<path d="M12 17h.01" />
		</svg>
	),
	success: (
		<svg {...iconProps}>
			<circle cx="12" cy="12" r="10" />
			<path d="m9 12 2 2 4-4" />
		</svg>
	)
};

export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
	{ variant = "info", className, children, ...rest },
	ref
) {
	return (
		<div ref={ref} className={cx("m-banner", `is-${variant}`, className)} {...rest}>
			<div className="m-banner-icon">{icons[variant]}</div>
			<div className="m-banner-content">{children}</div>
		</div>
	);
});
