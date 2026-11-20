import {
	forwardRef,
	type HTMLAttributes,
	type TableHTMLAttributes,
	type TdHTMLAttributes,
	type ThHTMLAttributes
} from "react";
import { cx } from "../utils.js";

type TableOwnProps = {
	/** Tints every other row. */
	striped?: boolean;
	/** Tints the row under the pointer. */
	interactive?: boolean;
};

/** Any other attribute goes on the `<table>`. */
export type TableProps = TableOwnProps & Omit<TableHTMLAttributes<HTMLTableElement>, keyof TableOwnProps>;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
	{ striped = false, interactive = false, className, ...rest },
	ref
) {
	return (
		<div className="m-table-wrapper">
			<table
				ref={ref}
				className={cx("m-table", striped && "is-striped", interactive && "is-interactive", className)}
				{...rest}
			/>
		</div>
	);
});

/** Renders `<thead>`. */
export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(function TableHead(
	{ className, ...rest },
	ref
) {
	return <thead ref={ref} className={cx("m-table-head", className)} {...rest} />;
});

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody(
	{ className, ...rest },
	ref
) {
	return <tbody ref={ref} className={cx("m-table-body", className)} {...rest} />;
});

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow({ className, ...rest }, ref) {
	return <tr ref={ref} className={cx("m-table-row", className)} {...rest} />;
});

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(function TableCaption(
	{ className, ...rest },
	ref
) {
	return <caption ref={ref} className={cx("m-table-caption", className)} {...rest} />;
});

type Align = "start" | "center" | "end";

type TableHeaderOwnProps = { align?: Align };

/** A header cell: renders `<th>`. */
export type TableHeaderProps = TableHeaderOwnProps &
	Omit<ThHTMLAttributes<HTMLTableHeaderCellElement>, keyof TableHeaderOwnProps>;

export const TableHeader = forwardRef<HTMLTableHeaderCellElement, TableHeaderProps>(function TableHeader(
	{ align = "start", className, ...rest },
	ref
) {
	return <th ref={ref} className={cx("m-table-header", `is-align-${align}`, className)} {...rest} />;
});

type TableCellOwnProps = {
	align?: Align;
	/** Keeps the content on one line, cut off with an ellipsis. */
	truncate?: boolean;
};

/** Any other attribute (colSpan, …) goes on the `<td>`. */
export type TableCellProps = TableCellOwnProps & Omit<TdHTMLAttributes<HTMLTableDataCellElement>, keyof TableCellOwnProps>;

export const TableCell = forwardRef<HTMLTableDataCellElement, TableCellProps>(function TableCell(
	{ align = "start", truncate = false, className, ...rest },
	ref
) {
	return (
		<td
			ref={ref}
			className={cx("m-table-cell", `is-align-${align}`, truncate && "is-truncated", className)}
			{...rest}
		/>
	);
});
