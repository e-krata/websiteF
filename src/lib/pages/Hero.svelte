<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
	import { navLinks, normalLogo } from '$lib/components/Navbar';

	const discordInvite = navLinks.find((link) => link.name === 'Discord')?.url || '#';
</script>

<header class="hero">
	<img src={normalLogo} alt="Folio logó" class="hero-logo" />
	<p class="font_header_12px eyebrow">Nyílt forráskódú · Hivatalos projekt</p>
	<h1 class="font_web_h1 title">eFolio - a KRÁTA megkönnyebbítsése</h1>
	<p class="font_body_16px_regular subtitle">
		Egy helyen az órarended, a jegyeid és a számonkéréseid. Az eFolio mobilappként és böngésző-bővítményként
		is elérhető, teljesen ingyenesen és nyílt forráskóddal.
	</p>
	<div class="actions">
		<Buttons label="Letöltés" type="small_primary" icon="ri:download-line" href="/#anchor-downloads"
		></Buttons>
		<Buttons label="Csatlakozz a közösséghez" type="small_secondary" icon="ri:discord-fill" href={discordInvite}
		></Buttons>
	</div>
</header>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 20px;
		max-width: 720px;
	}

	.hero-logo {
		width: 64px;
		height: 64px;
		border-radius: var(--shape-lg, 16px);
		box-shadow: var(--elevation-2);
		margin-bottom: 8px;
	}

	.eyebrow {
		color: var(--md-primary, var(--accent_accent));
		text-transform: uppercase;
	}

	.title {
		color: var(--text_primary);
	}

	.subtitle {
		color: var(--text_secondary);
		max-width: 560px;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		flex-wrap: wrap;
		margin-top: 8px;
	}

	@media (max-width: 825px) {
		.title {
			font-size: 36px;
		}
	}
</style>
