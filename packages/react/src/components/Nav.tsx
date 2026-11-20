"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import {
	forwardRef,
	useEffect,
	useState,
	type AnchorHTMLAttributes,
	type FocusEvent,
	type HTMLAttributes,
	type MouseEvent,
	type ReactNode
} from "react";
import { cx } from "../utils.js";

/** An icon, or a function that receives `animate` (true while hovered or keyboard-focused) for animated icons. */
export type NavIcon = ReactNode | ((animate: boolean) => ReactNode);

function renderIcon(icon: NavIcon, animate: boolean): ReactNode {
	return typeof icon === "function" ? icon(animate) : icon;
}

/** Hover and keyboard focus (not mouse focus) turn `animate` on, for animated icons. */
function useAnimateOnInteraction<T extends HTMLElement>(handlers: {
	onMouseEnter?: (event: MouseEvent<T>) => void;
	onMouseLeave?: (event: MouseEvent<T>) => void;
	onFocus?: (event: FocusEvent<T>) => void;
	onBlur?: (event: FocusEvent<T>) => void;
}) {
	const [animate, setAnimate] = useState(false);
	return {
		animate,
		handlers: {
			onMouseEnter: (event: MouseEvent<T>) => {
				setAnimate(true);
				handlers.onMouseEnter?.(event);
			},
			onMouseLeave: (event: MouseEvent<T>) => {
				setAnimate(false);
				handlers.onMouseLeave?.(event);
			},
			onFocus: (event: FocusEvent<T>) => {
				setAnimate(event.currentTarget.matches(":focus-visible"));
				handlers.onFocus?.(event);
			},
			onBlur: (event: FocusEvent<T>) => {
				setAnimate(false);
				handlers.onBlur?.(event);
			}
		}
	};
}

type NavLinkOwnProps = {
	href: string;
	/** Marks the current page. */
	active?: boolean;
	/** Rendered before the label. */
	icon?: NavIcon;
};

export type NavItemProps = NavLinkOwnProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NavLinkOwnProps>;

function createNavLink(displayName: string, baseClass: string) {
	const NavLink = forwardRef<HTMLAnchorElement, NavItemProps>(function NavLink(
		{ href, active = false, icon, className, children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest },
		ref
	) {
		const { animate, handlers } = useAnimateOnInteraction<HTMLAnchorElement>({
			onMouseEnter,
			onMouseLeave,
			onFocus,
			onBlur
		});
		return (
			<a ref={ref} href={href} className={cx(baseClass, className)} aria-current={active} {...rest} {...handlers}>
				{renderIcon(icon, animate)}
				{children}
			</a>
		);
	});
	NavLink.displayName = displayName;
	return NavLink;
}

/** A top-level link in the Layout sidebar. */
export const NavItem = createNavLink("NavItem", "m-nav-item");

export type NavGroupItemProps = NavItemProps;

/** A link inside a `NavGroup`. */
export const NavGroupItem = createNavLink("NavGroupItem", "m-nav-group-item");

type NavGroupOwnProps = {
	title: string;
	/** Whether the group starts expanded. */
	open?: boolean;
	/** Rendered before the title. */
	icon?: NavIcon;
};

export type NavGroupProps = NavGroupOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof NavGroupOwnProps>;

/** A collapsible group of `NavGroupItem`s under a heading. */
export const NavGroup = forwardRef<HTMLDivElement, NavGroupProps>(function NavGroup(
	{ title, open = true, icon, className, children, ...rest },
	ref
) {
	const [isExpanded, setExpanded] = useState(open);
	useEffect(() => setExpanded(open), [open]);
	const { animate, handlers } = useAnimateOnInteraction<HTMLButtonElement>({});

	const chevron = {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": true
	} as const;

	return (
		<div ref={ref} className={cx("m-nav-group", isExpanded && "is-expanded", className)} {...rest}>
			<button
				className="m-nav-group-expander"
				aria-expanded={isExpanded}
				onClick={() => setExpanded((expanded) => !expanded)}
				{...handlers}
			>
				{renderIcon(icon, animate)}
				<span className="m-nav-group-heading">{title}</span>
				{isExpanded ? (
					<svg {...chevron} className="lucide lucide-chevron-up-icon lucide-chevron-up">
						<path d="m18 15-6-6-6 6" />
					</svg>
				) : (
					<svg {...chevron} className="lucide lucide-chevron-down-icon lucide-chevron-down">
						<path d="m6 9 6 6 6-6" />
					</svg>
				)}
			</button>
			<div className="m-nav-group-items">{children}</div>
		</div>
	);
});
