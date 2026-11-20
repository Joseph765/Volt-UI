/** Joins class names, skipping empty ones: cx("m-text", isMono && "is-mono", className). */
export function cx(...classes: Array<string | false | null | undefined>): string {
	return classes.filter(Boolean).join(" ");
}
