<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
	import { onMount } from 'svelte';

	const projects = [
		{
			icon: 'ri:terminal-box-line',
			title: 'Vonalzó+Desktop',
			author: 'CsPS',
			description: 'Windowsos gépekre telepíthető Napló program tanároknak.',
			url: 'https://github.com/e-krata/vdesktop',
			repo: 'e-krata/vdesktop'
		},
		{
			icon: 'ri:terminal-line',
			title: '--',
			author: '---',
			description: '---------------',
			url: '----',
			repo: '--------'
		},
		{
			icon: 'ri:quill-pen-line',
			title: 'eFirKRÁTA',
			author: 'eKráta',
			description: 'Az eFolio elődje.',
			url: 'https://github.com/e-krata/ellenorzo',
			repo: 'e-krata/ellenorzo'
		},
		{
			icon: 'ri:computer-line',
			title: 'e-llenőrző',
			author: 'eKráta',
			description:
				'Natív asztali KRÁTA kliens Windows rendszerre, jegyekkel, órarenddel és házi feladatokkal.',
			url: 'https://github.com/e-krata/e-llenorzo',
			repo: 'doomhyena/toll'
		}
	];

	let versions: Record<string, string> = {};

	onMount(() => {
		for (const project of projects) {
			const cacheKey = `latestVersion:${project.repo}`;

			try {
				const cached = localStorage.getItem(cacheKey);
				if (cached) versions = { ...versions, [project.repo]: cached };
			} catch {
				// localStorage unavailable, ignore
			}

			fetch(`/api/getversion?repo=${encodeURIComponent(project.repo)}`)
				.then((resp) => resp.json())
				.then((data) => {
					if (data.version && data.version !== 'unknown') {
						versions = { ...versions, [project.repo]: data.version };
						try {
							localStorage.setItem(cacheKey, data.version);
						} catch {
							// localStorage unavailable, ignore
						}
					}
				})
				.catch((err) => {
					console.error(`failed to fetch version for ${project.repo}:`, err);
				});
		}
	});
</script>

<div class="main">
	<div class="title">
		<h2 class="font_web_h2">Közösségi projektek</h2>
		<p class="font_body_16px_regular subtitle">
			A KRÁTA körül kialakult közösség további projektjei
		</p>
	</div>
	<div class="cards">
		{#each projects as project}
			<div class="card">
				<div class="card-icon">
					<span class={project.icon.replace(':', '-')}></span>
				</div>
				<div class="card-body">
					<div class="card-header">
						<div class="title-row">
							<h2 class="font_web_h3">{project.title}</h2>
							{#if versions[project.repo]}
								<span class="font_body_12px_semibold version-pill">{versions[project.repo]}</span>
							{/if}
						</div>
						<p class="font_body_14px_regular author">Készítette: {project.author}</p>
						<p class="font_body_16px_regular">{project.description}</p>
					</div>
					<Buttons label="GitHub" type="small_secondary" href={project.url} icon="ri:github-fill"
					></Buttons>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	div.main {
		gap: 40px;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 820px;
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.title h2 {
		color: var(--text_primary);
	}

	.subtitle {
		color: var(--text_secondary);
	}

	.cards {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		width: 100%;
	}

	/* M3 Filled Card */
	div.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 24px;
		gap: 20px;
		border-radius: var(--shape-xl, 28px);
		background: var(--md-surface-container, var(--card_card));
		box-shadow: var(--elevation-1);
		flex: 0 1 calc(50% - 10px);
		min-width: 280px;
		transition: box-shadow 0.2s ease;
	}

	div.card:hover {
		box-shadow: var(--elevation-2);
	}

	.card-icon {
		width: 48px;
		height: 48px;
		border-radius: var(--shape-md, 12px);
		background: var(--md-primary-container, var(--accent_15));
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--md-on-primary-container, var(--accent_secondary));
		font-size: 22px;
		flex-shrink: 0;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
		flex: 1;
		width: 100%;
	}

	.card-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.card-header h2 {
		color: var(--text_primary);
	}

	.card-header p {
		color: var(--text_secondary);
	}

	.author {
		color: var(--text_teritary);
	}

	.version-pill {
		padding: 2px 10px;
		border-radius: var(--shape-full, 100px);
		background: var(--md-secondary-container, #CEE9DE);
		color: var(--md-on-secondary-container, var(--text_primary));
	}

	@media (max-width: 1540px) {
		div.main {
			align-items: center;
		}

		.title {
			text-align: center;
			align-items: center;
		}

		.cards {
			width: 90%;
			justify-content: center;
		}
	}

	@media (max-width: 825px) {
		.cards {
			width: 100%;
		}

		div.card {
			flex: 1 1 100%;
			width: 100%;
		}
	}
</style>
