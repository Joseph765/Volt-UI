<script>
	/**
	 * Volt UI · logo (bolt + "Volt" + Svelte badge).
	 *
	 * <VoltLogo href="/" />               header logo, default size
	 * <VoltLogo size={32} />              scale everything (size = "Volt" font size in px)
	 * <VoltLogo theme="light" />          for light backgrounds
	 * <VoltLogo badge={false} />          bolt + "Volt" only
	 *
	 * Tip: once this works, swap the <span class="badge"> for your own
	 * Volt <Badge> component so the logo is literally built from Volt.
	 */
	let {
		size = 24,
		theme = 'dark',
		badge = true,
		href = undefined,
		label = 'Volt UI for Svelte'
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class="volt-logo {theme}"
	style:--volt-size="{size}px"
	aria-label={label}
>
	<svg class="bolt" viewBox="0 0 40 64" aria-hidden="true">
		<path
			d="M26 3 L4 36 H18 L14 61 L36 27 H22 Z"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="3"
			stroke-linejoin="round"
		/>
	</svg>
	<span class="word" aria-hidden="true">Volt</span>
	{#if badge}
		<span class="badge" aria-hidden="true">Svelte</span>
	{/if}
</svelte:element>

<style>
	.volt-logo {
		--bolt: #8e78ec;
		--text: #eeeef0;
		--badge-bg: #3c2e69;
		--badge-border: #6e56cf;
		--badge-text: #c9bff5;

		display: inline-flex;
		align-items: center;
		gap: calc(var(--volt-size) * 0.3);
		font-family: var(--v-font);
		line-height: 1;
		text-decoration: none;
	}

	.volt-logo.light {
		--bolt: #5a3ec2;
		--text: #17151c;
		--badge-bg: #5a3ec2;
		--badge-border: #5a3ec2;
		--badge-text: #ffffff;
	}

	.bolt {
		width: calc(var(--volt-size) * 0.74);
		height: calc(var(--volt-size) * 1.17);
		color: var(--bolt);
		flex-shrink: 0;
	}

	.word {
		font-size: var(--volt-size);
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--text);
	}

	.badge {
		margin-left: calc(var(--volt-size) * 0.12);
		font-size: calc(var(--volt-size) * 0.5);
		font-weight: var(--v-font-weight-regular);
		letter-spacing: var(--v-letter-spacing-m);
		color: var(--badge-text);
		background: var(--badge-bg);
		border: 1px solid var(--badge-border);
		border-radius: 999px;
		padding: calc(var(--volt-size) * 0.14) calc(var(--volt-size) * 0.38);
		text-transform: none;
	}
</style>
