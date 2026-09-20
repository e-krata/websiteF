<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import { privacyPolicyClient } from '$lib/downloadsClient';

	let markdown = '';
	let loading = true;

	onMount(async () => {
		markdown = await privacyPolicyClient();
		loading = false;
	});
</script>

<div class="privacy">
	<div class="title">
		<div class="title-icon">
			<span class="ri-shield-check-line"></span>
		</div>
		<h2 class="font_web_h2">Adatkezelés</h2>
		<p class="font_body_16px_regular subtitle">
			Átláthatóan arról, hogy a Folio milyen adatokat kezel, és hogyan vigyázunk rájuk
		</p>
	</div>
	<div class="card" id="privacy-markdown">
		{#if loading}
			<p class="loading font_body_16px_regular">Betöltés...</p>
		{:else}
			<SvelteMarkdown source={markdown} />
		{/if}
	</div>
</div>

<style>
	.privacy {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		width: 100%;
		max-width: 820px;
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 12px;
		width: 100%;
	}

	.title-icon {
		width: 48px;
		height: 48px;
		border-radius: var(--shape-md, 12px);
		background: var(--md-primary-container, var(--accent_15));
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--md-on-primary-container, var(--accent_secondary));
		font-size: 22px;
		margin-bottom: 4px;
	}

	.title h2 {
		color: var(--text_primary);
	}

	.subtitle {
		color: var(--text_secondary);
		max-width: 480px;
	}

	.loading {
		color: var(--text_teritary);
	}

	.card {
		width: 100%;
		border-radius: var(--shape-xl, 28px);
		background: var(--md-surface-container, var(--card_card));
		box-shadow: var(--elevation-1);
		padding: 48px;
	}

	:global(#privacy-markdown) {
		font-family: 'Figtree', sans-serif;
		color: var(--md-on-surface, var(--text_secondary));
	}

	:global(#privacy-markdown h1) {
		font-family: 'Montserrat', sans-serif;
		color: var(--text_primary);
		font-size: 32px;
		font-weight: 700;
		line-height: 1.2;
		margin-top: 0;
		margin-bottom: 24px;
	}

	:global(#privacy-markdown h2) {
		font-family: 'Montserrat', sans-serif;
		color: var(--text_primary);
		font-size: 22px;
		font-weight: 700;
		line-height: 1.25;
		margin-top: 2em;
		margin-bottom: 0.75em;
		padding-top: 1.5em;
		position: relative;
	}

	:global(#privacy-markdown h2)::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 160px;
		max-width: 100%;
		height: 14px;
		background-color: var(--md-primary, var(--accent_accent));
		-webkit-mask-image: url(/wave-divider.svg);
		mask-image: url(/wave-divider.svg);
		-webkit-mask-size: 80px 14px;
		mask-size: 80px 14px;
		-webkit-mask-repeat: repeat-x;
		mask-repeat: repeat-x;
		opacity: 0.5;
	}

	:global(#privacy-markdown h2:first-child) {
		margin-top: 0;
		padding-top: 0;
	}

	:global(#privacy-markdown h2:first-child)::before {
		content: none;
	}

	:global(#privacy-markdown p) {
		color: var(--text_secondary);
		margin-bottom: 0.75em;
		line-height: 1.6;
		font-size: 16px;
	}

	:global(#privacy-markdown li) {
		color: var(--text_secondary);
		margin-left: 1.5em;
		margin-bottom: 0.3em;
		line-height: 1.6;
		font-size: 16px;
	}

	:global(#privacy-markdown a) {
		color: var(--md-primary, var(--accent_accent));
		text-decoration: underline;
		text-underline-offset: 3px;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	:global(#privacy-markdown p),
	:global(#privacy-markdown li) {
		overflow-wrap: anywhere;
	}

	:global(#privacy-markdown strong) {
		color: var(--text_primary);
	}

	:global(#privacy-markdown hr) {
		border: none;
		width: 160px;
		height: 14px;
		margin: 4em auto 2em auto;
		background-color: var(--md-primary, var(--accent_accent));
		-webkit-mask-image: url(/wave-divider.svg);
		mask-image: url(/wave-divider.svg);
		-webkit-mask-size: 80px 14px;
		mask-size: 80px 14px;
		-webkit-mask-repeat: repeat-x;
		mask-repeat: repeat-x;
		-webkit-mask-position: center;
		mask-position: center;
		opacity: 0.5;
	}

	@media (max-width: 825px) {
		.card {
			padding: 28px;
			border-radius: var(--shape-lg, 20px);
		}
	}
</style>
