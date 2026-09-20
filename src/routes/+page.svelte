<svelte:head>
	<title>eFolio</title>
</svelte:head>

<script lang="ts">
    import Hero from '$lib/pages/Hero.svelte';
    import Downloads from '$lib/pages/Downloads.svelte';
    import Roadmap from '$lib/pages/Roadmap.svelte';
	import Supporters from '$lib/pages/Supporters.svelte';
	import CommunityProjects from '$lib/pages/CommunityProjects.svelte';
	import Wave from '$lib/components/Wave.svelte';
</script>

<main>
<Hero />
<Wave />
<Downloads />
<Wave />
<Supporters />
<Wave />
<Roadmap />
<Wave />
<CommunityProjects />
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 56px;
    }

    @media (max-width: 825px) {
        main {
            gap: 36px;
        }
    }
</style>