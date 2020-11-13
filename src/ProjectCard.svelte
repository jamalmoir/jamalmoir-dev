<script lang='typescript'>
    import TechnologyPill from "./TechnologyPill.svelte";
    export let title: string;
    export let description: string;
    export let imageURI: string;
    export let technologies: string[];
</script>

<style>
    section {
        width: 24em;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2),0 3px 3px 0 rgba(0,0,0,0.15);
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
    </div>
</section>