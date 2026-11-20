import { useCallback, useEffect, useLayoutEffect, useState, type Ref } from "react";

/** Joins class names, skipping empty ones: cx("m-text", isMono && "is-mono", className). */
export function cx(...classes: Array<string | false | null | undefined>): string {
	return classes.filter(Boolean).join(" ");
}

/** useLayoutEffect in the browser, useEffect on the server (where layout effects warn and never run). */
export const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Points several refs (the caller's and the component's own) at the same element. */
export function useMergedRefs<T>(...refs: Array<Ref<T> | undefined>): (node: T | null) => void {
	return useCallback((node: T | null) => {
		for (const ref of refs) {
			if (typeof ref === "function") ref(node);
			else if (ref) (ref as { current: T | null }).current = node;
		}
	}, refs);
}

/**
 * A value that the caller can control (`value` + `onChange`) or leave to the component (`defaultValue`).
 * Returns the current value and a setter that only updates the internal state when uncontrolled.
 */
export function useControllable<T>(controlled: T | undefined, defaultValue: T): [T, (next: T) => void] {
	const [internal, setInternal] = useState(defaultValue);
	const isControlled = controlled !== undefined;
	const set = useCallback(
		(next: T) => {
			if (!isControlled) setInternal(next);
		},
		[isControlled]
	);
	return [isControlled ? controlled : internal, set];
}

/**
 * The element's clientWidth or clientHeight, kept up to date (Svelte's bind:clientWidth / bind:clientHeight). Pass
 * the returned callback as the element's ref. 0 until measured, and when the element isn't rendered.
 */
function useClientSize<T extends HTMLElement>(
	dimension: "clientWidth" | "clientHeight"
): [(node: T | null) => void, number] {
	const [element, setElement] = useState<T | null>(null);
	const [size, setSize] = useState(0);
	useIsomorphicLayoutEffect(() => {
		if (!element) {
			setSize(0);
			return;
		}
		const update = () => setSize(element[dimension]);
		update();
		const observer = new ResizeObserver(update);
		observer.observe(element);
		return () => observer.disconnect();
	}, [element, dimension]);
	return [setElement, size];
}

export function useClientWidth<T extends HTMLElement>() {
	return useClientSize<T>("clientWidth");
}

export function useClientHeight<T extends HTMLElement>() {
	return useClientSize<T>("clientHeight");
}

/** Whether the user asked for less motion. Read at call time (only call it in the browser). */
export function prefersReducedMotion(): boolean {
	return typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}
