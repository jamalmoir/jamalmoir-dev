<script lang="typescript">
    import TechnologyPill from "./TechnologyPill.svelte";
    import type { Experience } from "./types";
    export let experiences: Experience[];
</script>

<style>
    .experiences {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start ;
        flex-wrap: wrap;
    }

    .experience:not(:last-child) {
        margin-bottom: var(--margin-double);
    }

    ul {
        text-indent: 2em;
        line-height: 1.5em;
        margin: var(--margin) 0;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
    }
</style>

<section class="container">
    <div class="content">
        <div class="experiences">
            <a name="experience" class="heading-anchor"><h4>Experience</h4></a>
            <div class="experience-list">
                {#each experiences as experience}
                    <div class="experience">
                        <h5><a href={experience.website}>{experience.company}</a> | {experience.jobTitle}</h5>
                        <p>{experience.description}</p>
                        <ul>
                            {#each experience.responsibilities as responsibility}
                                <li>{responsibility}</li>
                            {/each}
                        </ul>
                        <div class="technologies">
                            {#each experience.skills as skill}
                                <TechnologyPill name={skill} />
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>