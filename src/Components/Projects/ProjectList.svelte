<script lang="typescript">
    import ProjectCard from "./ProjectCard.svelte";
    import type { Project } from "../../types";
    
    export let projects: Project[];
</script>

<style>
    section {
        padding-top: var(--margin-double);
        padding-bottom: var(--margin-double);
        background: var(--primary-2-colour);
    }

    h4, a {
        color: var(--text-2-colour);
    }

    .projects {
	   width: 100%;
    }

    .project-grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
    }

	.project {
		margin-bottom: var(--margin-double);
	}

	@media only screen and (max-width: 600px) {
		.project-grid {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
    }
</style>

<section class="container">
    <div class="content">
        <div class="projects">
            <a name="projects" class="heading-anchor"><h4>Projects</h4></a>
            <div class="project-grid">
                {#each projects as project}
                    <div class="project">
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageURI={project.imageURI}
                            liveURL={project.liveURL}
                            gitHubURL={project.gitHubURL}
                            technologies={project.technologies}
                        />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>