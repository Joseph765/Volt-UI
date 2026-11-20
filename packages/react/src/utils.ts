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
 * The element's clientWidth, kept up to date (Svelte's bind:clientWidth). Pass the returned callback as the
 * element's ref. 0 until measured, and when the element isn't rendered.
 */
export function useClientWidth<T extends HTMLElement>(): [(node: T | null) => void, number] {
	const [element, setElement] = useState<T | null>(null);
	const [width, setWidth] = useState(0);
	useIsomorphicLayoutEffect(() => {
		if (!element) {
			setWidth(0);
			return;
		}
		const update = () => setWidth(element.clientWidth);
		update();
		const observer = new ResizeObserver(update);
		observer.observe(element);
		return () => observer.disconnect();
	}, [element]);
	return [setElement, width];
}
