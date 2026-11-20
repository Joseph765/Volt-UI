/** The error and hint lines under a form field (shared by Input, Textarea and Select). */
export function FieldMessages({ error, hint }: { error?: string; hint?: string }) {
	return (
		<>
			{error ? <span className="m-text is-danger is-size-s">{error}</span> : null}
			{hint ? <span className="m-text is-size-s is-weak">{hint}</span> : null}
		</>
	);
}

/** A field's label, with the required star. Renders nothing without a label. */
export function FieldLabel({ label, htmlFor, required }: { label?: string; htmlFor?: string; required?: boolean }) {
	if (!label) return null;
	return (
		<label className="m-label" htmlFor={htmlFor}>
			{label}
			{required ? <span className="m-required">*</span> : null}
		</label>
	);
}
