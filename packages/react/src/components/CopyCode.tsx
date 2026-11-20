import { Fragment, forwardRef, type HTMLAttributes } from "react";
import { cx } from "../utils.js";
import { CopyButton } from "./CopyButton.js";

type CopyCodeOwnProps = {
	/** A one-line command, e.g. "npm install moth-ui-react". It's what gets copied. */
	code: string;
};

export type CopyCodeProps = CopyCodeOwnProps & Omit<HTMLAttributes<HTMLDivElement>, keyof CopyCodeOwnProps | "children">;

type Token = { text: string; kind: "command" | "subcommand" | "argument" | "flag" };

/**
 * Light highlighting for a one-line command, in the same colors as Moth's code blocks:
 * the command (e.g. npm), then its subcommand (install), arguments (package names) and flags (--save-dev).
 */
function tokenize(code: string): Token[] {
	let seenSubcommand = false;
	return code
		.trim()
		.split(/\s+/)
		.map((text, index): Token => {
			if (index === 0) return { text, kind: "command" };
			if (text.startsWith("-")) return { text, kind: "flag" };
			if (!seenSubcommand) {
				seenSubcommand = true;
				return { text, kind: "subcommand" };
			}
			return { text, kind: "argument" };
		});
}

/** A one-line command with a copy button. */
export const CopyCode = forwardRef<HTMLDivElement, CopyCodeProps>(function CopyCode({ code, className, ...rest }, ref) {
	const tokens = tokenize(code);
	return (
		<div ref={ref} className={cx("m-copy-code", className)} {...rest}>
			<code className="m-copy-code-text">
				{tokens.map((token, index) => (
					<Fragment key={index}>
						{index > 0 ? " " : null}
						<span className={`m-copy-code-${token.kind}`}>{token.text}</span>
					</Fragment>
				))}
			</code>
			<CopyButton copyText={code} />
		</div>
	);
});
