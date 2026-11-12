<script module>
	let count = 0;
</script>

<script>
	/**
	 * Volt UI · Charge HUD logo.
	 *
	 * <VoltLogo />                     mark + wordmark, nav size
	 * <VoltLogo size={48} />           bigger
	 * <VoltLogo wordmark={false} />    mark only
	 * <VoltLogo charge />              ring charges up on mount (respects reduced motion)
	 * <VoltLogo href="/" />            renders as a home link
	 */
	let {
		size = 36,
		wordmark = true,
		charge = false,
		href = undefined,
		label = 'Volt UI'
	} = $props();

	const id = `volt-logo-${++count}`;
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class="volt-logo"
	class:charge
	style:--volt-size="{size}px"
	aria-label={label}
>
	<svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
		<defs>
			<mask id="{id}-mask">
				<path
					class="charge-path"
					d="M32 6 A26 26 0 1 1 7.57 40.89"
					fill="none"
					stroke="#fff"
					stroke-width="10"
					pathLength="100"
				/>
			</mask>
		</defs>
		<circle cx="32" cy="32" r="26" fill="none" stroke="#A190F0" stroke-opacity="0.25" stroke-width="6" stroke-dasharray="2.2 1.6" />
		<circle cx="32" cy="32" r="26" fill="none" stroke="#DCD5FF" stroke-width="6" stroke-dasharray="2.2 1.6" mask="url(#{id}-mask)" />
		<circle cx="32" cy="32" r="16" fill="#8E78EC" fill-opacity="0.3" stroke="#C9BFF5" stroke-width="1.5" />
		<path d="M34.5 22 L26 34 H31.5 L30 42.5 L38.5 30.5 H33 Z" fill="#F4F1FF" />
	</svg>

	{#if wordmark}
		<span class="word" aria-hidden="true">
			<span class="volt">VOLT</span>
			<span class="ui"><span class="bracket"></span>UI<span class="bracket"></span></span>
		</span>
	{/if}
</svelte:element>

<style>
	.volt-logo {
		display: inline-flex;
		align-items: center;
		gap: calc(var(--volt-size) * 0.28);
		text-decoration: none;
		font-family: Outfit, system-ui, sans-serif;
		line-height: 1;
	}

	.word {
		display: inline-flex;
		align-items: center;
		gap: calc(var(--volt-size) * 0.25);
		font-size: calc(var(--volt-size) * 0.62);
	}

	.volt {
		font-weight: 700;
		letter-spacing: 0.04em;
		color: #ece8ff;
		text-shadow: 0 0 12px rgba(142, 120, 236, 0.65);
	}

	.ui {
		font-weight: 400;
		letter-spacing: 0.06em;
		color: #dcd5ff;
	}

	.bracket {
		font-weight: 200;
		color: #a190f0;
	}

	.charge .charge-path {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
		animation: volt-charge 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
	}

	@keyframes volt-charge {
		to {
			stroke-dashoffset: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.charge .charge-path {
			animation: none;
			stroke-dashoffset: 0;
		}
	}
</style>
