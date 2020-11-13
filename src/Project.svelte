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
    }

    img {
        width: 24em;
    }

    .body {
        margin: var(--margin);
    }

    h4 {
        margin-bottom: var(--margin-half);
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
</style>

<section>
    <img src={imageURI} alt={title} />
    <div class="body">
        <h4>{title}</h4>
        <p>{description}</p>
        <div class="technology-pills">
            {#each technologies as technology}
                <TechnologyPill name={technology} />
            {/each}
        </div>
    </div>
</section>