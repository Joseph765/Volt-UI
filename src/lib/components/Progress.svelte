<script>
    /**
     * A bar that shows how far along something is, with its label and percentage above it.
     * `value` runs from 0 to `max` (default 100); values outside that range are clamped.
     * @type {{
     *   value: number,
     *   max?: number,
     *   label: string
     * }}
     */
    let { value, max = 100, label } = $props();

    const percent = $derived(max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0);
</script>

<div class="m-progress">
    <!-- Visual only: the bar below carries the same label and value for screen readers -->
    <div class="m-progress-header" aria-hidden="true">
        <span class="m-progress-label">{label}</span>
        <span class="m-progress-value">{Math.round(percent)}%</span>
    </div>
    <div
        class="m-progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={Math.min(max, Math.max(0, value))}
        aria-valuetext="{Math.round(percent)}%"
    >
        <div class="m-progress-fill" style:width="{percent}%"></div>
    </div>
</div>
