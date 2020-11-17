<script lang='typescript'>
    import TechnologyPill from "../TechnologyPill.svelte";
    export let title: string;
    export let description: string;
    export let imageURI: string;
    export let liveURL: string | null;
    export let gitHubURL: string | null;
    export let technologies: string[];
</script>

<style>
    section {
        width: 24em;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 6px 6px 0 rgba(0,0,0,0.2), 0 12px 12px 0 rgba(0,0,0,0.15);
        background: white;
        padding-bottom: .01em;
    }

    img {
        width: 24em;
        border-bottom: solid 1px rgba(0, 0, 0, .1);
    }

    .body {
        margin: var(--margin);
    }

    p {
        margin-bottom: var(--margin);
    }

    .links {
        margin-top: var(--margin);
    }

    span:not(:last-child) {
        margin-right: var(--margin);
    }

    a {
        opacity: .6;
    }

    i {
        margin-right: .3em;
    }

    .technology-pills {
        display: flex;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
    }

	@media only screen and (max-width: 600px) {
        section {
            width: 100%;
        }

        img {
            width: 100%;
        }
    }
</style>

<section>
    <img src={imageURI} alt={title} />
    <div class="body">
        <h5>{title}</h5>
        <p>{description}</p>
        <div class="technology-pills">
            {#each technologies as technology}
                <TechnologyPill name={technology} />
            {/each}
        </div>
        <div class="links">
            {#if liveURL }
                <span><a href={liveURL}><i class="fas fa-broadcast-tower"></i>Live Site</a></span>
            {/if}
            {#if gitHubURL }
                <span><a href={gitHubURL}><i class="fab fa-github-square"></i>GitHub</a></span>
            {/if}
        </div>
    </div>
</section>