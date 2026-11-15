<script>
	/**
	 * Moth UI · logo (M-wing mark + "Moth UI" wordmark).
	 *
	 * <MothLogo href="/" />          header logo, default size
	 * <MothLogo size={32} />         scale everything (size = mark height in px)
	 * <MothLogo theme="light" />     for light backgrounds
	 * <MothLogo wordmark={false} />  mark only
	 */
	let {
		size = 36,
		theme = 'dark',
		wordmark = true,
		href = undefined,
		label = 'Moth UI'
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class="moth-logo {theme}"
	style:--moth-size="{size}px"
	aria-label={label}
>
	<svg class="mark" viewBox="0 0 64 64" aria-hidden="true">
		<g stroke-linejoin="round" stroke-width="3">
			<path class="up" d="M30 23 L7 11 Q5 10 6 13 L11 33 Q12 35 14 34 L30 31 Z" />
			<path class="up" d="M34 23 L57 11 Q59 10 58 13 L53 33 Q52 35 50 34 L34 31 Z" />
			<path class="low" d="M30 34 L16 38 Q13 39 15 42 L22 51 Q24 53 25 51 L30 42 Z" />
			<path class="low" d="M34 34 L48 38 Q51 39 49 42 L42 51 Q40 53 39 51 L34 42 Z" />
		</g>
		<rect class="body" x="29" y="19" width="6" height="30" rx="3" />
		<path
			class="ant"
			d="M31 20 Q28 12 23 8 M33 20 Q36 12 41 8"
			fill="none"
			stroke-width="2.2"
			stroke-linecap="round"
		/>
	</svg>

	{#if wordmark}
		<span class="word" aria-hidden="true">Moth<span class="ui">UI</span></span>
	{/if}
</svelte:element>

<style>
	.moth-logo {
		--up: #8e78ec;
		--low: #5a46a8;
		--body: #eeeef0;
		--ant: #c9bff5;
		--text: #eeeef0;
		--ui: #a99beb;

		display: inline-flex;
		align-items: center;
		gap: calc(var(--moth-size) * 0.26);
		font-family: Outfit, system-ui, sans-serif;
		line-height: 1;
		text-decoration: none;
	}

	.moth-logo.light {
		--up: #6e56cf;
		--low: #3c2e69;
		--body: #17151c;
		--ant: #3c2e69;
		--text: #17151c;
		--ui: #5a3ec2;
	}

	.mark {
		width: var(--moth-size);
		height: var(--moth-size);
		flex-shrink: 0;
	}

	.up { fill: var(--up); stroke: var(--up); }
	.low { fill: var(--low); stroke: var(--low); }
	.body { fill: var(--body); }
	.ant { stroke: var(--ant); }

	.word {
		font-size: calc(var(--moth-size) * 0.68);
		font-weight: 700;
		letter-spacing: -0.03em;
		color: var(--text);
		white-space: nowrap;
	}

	.ui {
		/* Real spacing instead of a space character: Svelte 5 trims
		   whitespace at the start of an element, which glued "MothUI". */
		margin-left: 0.24em;
		font-weight: 300;
		color: var(--ui);
	}
</style>
