"use client";

// Icons: Lucide (ISC License), see THIRD_PARTY_NOTICES.md
import {
	forwardRef,
	useEffect,
	useRef,
	type CSSProperties,
	type HTMLAttributes,
	type ButtonHTMLAttributes,
	type ReactNode
} from "react";
import { cx, useClientHeight, useMergedRefs } from "../utils.js";

type LayoutOwnProps = {
	/** Shown above the sidebar on desktop. */
	logo?: ReactNode;
};

export type LayoutProps = LayoutOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof LayoutOwnProps>;

/** An app shell: a sidebar nav on desktop, a header with a menu button and a drawer below 66rem. */
export const Layout = forwardRef<HTMLDivElement, LayoutProps>(function Layout(
	{ logo, className, style, children, ...rest },
	ref
) {
	/** Height of the logo area, so the sticky sidebar nav can sit directly below it (desktop only) */
	const [logoRef, logoHeight] = useClientHeight<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={cx("m-layout", className)}
			style={logoHeight ? ({ ...style, "--m-layout-logo-height": `${logoHeight}px` } as CSSProperties) : style}
			{...rest}
		>
			<div className="m-layout-logo" ref={logoRef}>
				{logo}
			</div>
			{children}
		</div>
	);
});

export type LayoutContentProps = HTMLAttributes<HTMLElement>;

/** The page content, beside the sidebar. Renders `<main>`. */
export const LayoutContent = forwardRef<HTMLElement, LayoutContentProps>(function LayoutContent(
	{ className, children, ...rest },
	ref
) {
	return (
		<main ref={ref} className={cx("m-layout-content", className)} {...rest}>
			<div className="m-layout-content-inner">{children}</div>
		</main>
	);
});

type LayoutHeaderOwnProps = {
	/** The logo in the header below 66rem, when the sidebar is hidden. */
	mobileLogo?: ReactNode;
};

export type LayoutHeaderProps = LayoutHeaderOwnProps & Omit<HTMLAttributes<HTMLElement>, keyof LayoutHeaderOwnProps>;

/** The header shown below 66rem: put the `LayoutMenuButton` in it. Renders `<header>`. */
export const LayoutHeader = forwardRef<HTMLElement, LayoutHeaderProps>(function LayoutHeader(
	{ mobileLogo, className, children, ...rest },
	ref
) {
	return (
		<header ref={ref} className={cx("m-layout-header", className)} {...rest}>
			{children}
			<div className="m-layout-mobile-logo">{mobileLogo}</div>
		</header>
	);
});

type LayoutMenuButtonOwnProps = {
	/** Whether the nav is open (sets `aria-expanded`). */
	open?: boolean;
};

export type LayoutMenuButtonProps = LayoutMenuButtonOwnProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof LayoutMenuButtonOwnProps>;

/** Opens and closes the nav below 66rem. Toggle `open` in `onClick`. */
export const LayoutMenuButton = forwardRef<HTMLButtonElement, LayoutMenuButtonProps>(function LayoutMenuButton(
	{ open = false, className, ...rest },
	ref
) {
	return (
		<button
			ref={ref}
			className={cx("m-layout-menu-button", className)}
			aria-label="Toggle navigation menu"
			aria-expanded={open}
			{...rest}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-menu-icon lucide-menu"
				aria-hidden="true"
			>
				<path d="M4 5h16" />
				<path d="M4 12h16" />
				<path d="M4 19h16" />
			</svg>
		</button>
	);
});

type LayoutNavOwnProps = {
	/** Whether the drawer is open (below 66rem). */
	open?: boolean;
	/** The nav's accessible name. */
	label?: string;
	/**
	 * Called when the user presses Esc, clicks the blurred page outside the open nav, or clicks a link in the
	 * header (e.g. the logo). Set `open` to false in response.
	 */
	onClose?: () => void;
	/**
	 * Pinned to the bottom of the nav while the items above it scroll: global actions like the signed-in user,
	 * settings or a theme switcher.
	 */
	footer?: ReactNode;
};

export type LayoutNavProps = LayoutNavOwnProps & Omit<HTMLAttributes<HTMLElement>, keyof LayoutNavOwnProps>;

/** The sidebar on desktop and the drawer below 66rem. Renders `<nav>`. */
export const LayoutNav = forwardRef<HTMLElement, LayoutNavProps>(function LayoutNav(
	{ open = false, label = "Main", onClose, footer, className, children, ...rest },
	ref
) {
	const navRef = useRef<HTMLElement>(null);
	const mergedRef = useMergedRefs(ref, navRef);

	// The listeners read the latest props without being re-added on every render
	const latest = useRef({ open, onClose });
	latest.current = { open, onClose };

	useEffect(() => {
		function handleKeydown(event: KeyboardEvent) {
			const nav = navRef.current;
			if (!nav || !latest.current.open || event.key !== "Escape" || event.defaultPrevented) return;
			// The nav is about to be hidden; if focus was inside it, hand focus back to the menu button
			const hadFocus = nav.contains(document.activeElement);
			latest.current.onClose?.();
			if (hadFocus) {
				const menuButton = nav.closest(".m-layout")?.querySelector<HTMLElement>(".m-layout-menu-button");
				menuButton?.focus();
			}
		}

		// Clicking outside the open nav (on the blurred page) closes it, and so does a link in the header (e.g. the
		// logo), since it leaves the page. Other header clicks don't: the menu button toggles the nav itself.
		// The blurred content ignores pointer events, so the click lands on the layout itself rather than on a link.
		function handleClick(event: MouseEvent) {
			const nav = navRef.current;
			if (!nav || !latest.current.open || !(event.target instanceof Element)) return;
			const layout = nav.closest(".m-layout");
			if (!layout?.contains(event.target)) return;
			if (nav.contains(event.target)) return;
			const header = layout.querySelector(".m-layout-header");
			if (header?.contains(event.target)) {
				const link = event.target.closest("a[href]");
				if (!link || !header.contains(link)) return;
			}
			latest.current.onClose?.();
		}

		window.addEventListener("keydown", handleKeydown);
		window.addEventListener("click", handleClick);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
			window.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<nav ref={mergedRef} className={cx("m-layout-nav", open && "is-open", className)} aria-label={label} {...rest}>
			<div className="m-layout-nav-items">{children}</div>
			{footer != null && footer !== false && <div className="m-layout-nav-footer">{footer}</div>}
		</nav>
	);
});
