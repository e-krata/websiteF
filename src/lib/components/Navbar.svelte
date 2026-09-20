<script lang="ts">
	import {onMount} from 'svelte';
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	let brandingHover = false;

	import {navLinks, normalLogo} from '$lib/components/Navbar';
	let hoverLogo = '/logo.png';

	onMount(() => {});
</script>

<div class="nav-wrap">
	<nav>
		<div class="branding">
			<a
				href="/"
				on:mouseenter={() => (brandingHover = true)}
				on:mouseleave={() => (brandingHover = false)}
			>
				<img src={brandingHover ? hoverLogo : normalLogo} alt="logo" />
				<span class="font_header_16px brand-name">eFolio</span>
			</a>
		</div>
		<div class="links">
			{#each navLinks as link}
				<Buttons label={link.name} type={link.style} href={link.url} icon={link.icon}></Buttons>
			{/each}
		</div>
	</nav>
</div>

<style>
	.nav-wrap {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		display: flex;
		justify-content: center;
		padding: 16px 24px 0 24px;
		pointer-events: none;
	}

	nav {
		pointer-events: auto;
		width: 100%;
		max-width: 1240px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 0 12px 0 16px;
		border-radius: var(--shape-full, 100px);
		background: color-mix(in srgb, var(--md-surface-container-low, var(--card_card)) 72%, transparent);
		backdrop-filter: blur(20px) saturate(140%);
		-webkit-backdrop-filter: blur(20px) saturate(140%);
		border: 1px solid var(--md-outline-variant, #BFC9C4);
		box-shadow: var(--elevation-1);
		transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
	}

	div.branding a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: var(--text_primary);
		transition: opacity 0.2s ease;
	}

	div.branding a:hover {
		opacity: 0.8;
	}

	div.branding a img {
		width: 36px;
		height: 36px;
		border-radius: var(--shape-sm);
	}

	.brand-name {
		color: var(--text_primary);
	}

	div.links {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		flex-wrap: nowrap;
	}

	@media (max-width: 825px) {
		.nav-wrap {
			position: static;
			padding: 16px 16px 0 16px;
			pointer-events: auto;
		}

		nav {
			height: auto;
			max-width: none;
			flex-direction: column;
			align-items: stretch;
			gap: 16px;
			padding: 20px;
			border-radius: var(--shape-xl, 28px);
		}

		div.branding {
			align-self: center;
		}

		div.branding a {
			flex-direction: row;
			gap: 12px;
		}

		div.links {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
