<script lang="ts">
    import Buttons from '$lib/components/Buttons.svelte';
    import { navLinks } from '$lib/components/Navbar';

    const discordInvite = navLinks.find(link => link.name === 'Discord')?.url || '#';
</script>

<main>
    <div class="title">
        <h2 class="font_web_h2">Támogatóink</h2>
        <p class="font_body_16px_regular subtitle">Akik lehetővé teszik a Folio működését</p>
    </div>
    <div class="cards">
        <div class="card card-empty">
            <div class="card-icon icon-empty">
                <span class="ri-heart-line"></span>
            </div>
            <div class="card-body">
                <div class="card-header">
                    <h2 class="font_web_h3">Ez a rész egyelőre üres...</h2>
                    <p class="font_body_16px_regular">Szeretnél hozzájárulni a Folio működéséhez vagy fejlesztéséhez? Vedd fel velünk a kapcsolatot!</p>
                </div>
                <Buttons label="Kapcsolatfelvétel" type="small_primary"
                    href={discordInvite} icon="ri:discord-fill"></Buttons>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        gap: 40px;
        display: flex;
        flex-direction: column;
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
        flex-direction: row;
        align-items: center;
        padding: 28px;
        gap: 24px;
        border-radius: var(--shape-xl, 28px);
        background: var(--md-surface-container, var(--card_card));
        box-shadow: var(--elevation-1);
        flex: 1;
        min-width: 280px;
        max-width: 640px;
        transition: box-shadow 0.2s ease, border-color 0.2s ease;
    }

    div.card:hover {
        box-shadow: var(--elevation-2);
    }

    div.card-empty {
        background: var(--md-surface-container-low, var(--card_translucent));
        box-shadow: none;
        border: 1.5px dashed var(--md-outline-variant, #BFC9C4);
    }

    div.card-empty:hover {
        border-color: var(--md-primary, var(--accent_accent));
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

    .icon-empty {
        background: var(--md-surface-container-highest, var(--button_secondaryfill));
        color: var(--text_teritary);
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
    }

    .card-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }

    .card-header h2 {
        color: var(--text_primary);
    }

    .card-header p {
        color: var(--text_secondary);
    }

    @media (max-width: 1540px) {
        main {
            align-items: center;
        }

        .title {
            text-align: center;
            align-items: center;
        }

        .cards {
            width: 90%;
        }
    }

    @media (max-width: 825px) {
        div.card {
            flex-direction: column;
        }
    }
</style>
