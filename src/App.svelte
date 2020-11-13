<script lang="ts">
	import Header from "./Header.svelte";
	import Hero from "./Hero.svelte";
	import Contact from "./Contact.svelte";
	import Project from "./Project.svelte";

	let projects = [
		{
			title: "This Site!",
			description: "Yep! This site was written from scratch using Svelte.",
			imageURI: "https://imgur.com/CKuPBsk.png",
			technologies: ["TypeScript", "Svelte", "HTML5", "CSS3", "Vercel"],
		},
		{
			title: "Stroply",
			description: "An online trading tool that allows you to create journals and record trades inside of them.",
			imageURI: "https://miro.medium.com/max/1400/1*NKCkiVxCba5jAzeJFlWkhQ.jpeg",
			technologies: ["TypeScript", "React", "Redux", "JSX", "CSS3", "Firestore"],
		},
	]
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Raleway:wght@400;500;600;900&display=swap');

	:global(:root) {
		--margin: 1em;
		--margin-half: calc(var(--margin) / 2);
		--margin-double: calc(var(--margin) * 2);

		--content-width-desktop: 50em;
		--content-width-mobile: 100%;
		
		--primary-colour: #24a0ed;
		--primary-2-colour: #0072BA;
		--secondary-colour: #651FFF;
		--secondary-2-colour: #0100CA;
		--text-colour: #333;
		--text-2-colour: #fff;
		--background-colour: #f5f5f5;
	}

	:global(*, body) {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background-color: var(--background-colour);
	}
	
	:global(h1, h2, h4) {
		font-family: 'Raleway', sans-serif;
	}

	:global(h1, h2) {
		font-weight: 900;
	}

	:global(h4) {
		font-weight: 500;
		font-size: 1.5em;
	}
	
	:global(h3, p) {	
		font-family: 'Merriweather', serif;
	}

	:global(p) {
		line-height: 1.7em;
	}

	:global(.container) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	:global(.content) {
		width: var(--content-width-desktop);
		display: flex;
		justify-content: space-between;
	}

	@media only screen and (max-width: 600px) {
		:global(main) {
			width: var(--content-width-mobile);
			flex-direction: column;
		}

		:global(.container) {
			padding-left: var(--margin);
			padding-right: var(--margin);
		}

		:global(.content) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: var(--content-width-mobile);
		}
	}

	.about-container {
		margin-bottom: var(--margin-double);
	}

	.about {
		width: 40em;
	}

    h4 {
		margin-bottom: var(--margin);
   	}

	.heading-anchor {
		color: var(--text-colour);
	}
	.heading-anchor:hover {
		text-decoration: none;
	}

    .projects {
	   width: 100%;
    }

    .project-grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
    }

	@media only screen and (max-width: 600px) {
		.about {
			width: var(--content-width-mobile);
			margin-bottom: var(--margin);
		}

		p {
			margin-bottom: var(--margin);
		}

		.project-grid {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}

		.project {
			margin-bottom: var(--margin);
		}
	}
	
</style>

<main>
	<Header />
	<Hero />
	<section class="container about-container">
		<div class="content">
			<div class="about">
				<a name="about" class="heading-anchor"><h4>About Me</h4></a>
				<p>
					Jamal loves working on hard problems and creating software products that solve real-world issues and help real-world people. He is a full-stack software engineer at <a href="https://makeleaps.jp">MakeLeaps</a>, a fintech startup located in the heart of Tokyo. In his personal time he likes to persue a variety of hobbies such as leather crafting, weight lifting, and Brazillian Jiu Jitsu. Jamal has found writing this paragraph in the third-person to be very strange indeed.
				</p>
			</div>
			<Contact />
		</div>
	</section>
	<section class="container projects-container">
		<div class="content">
			<div class="projects">
				<a name="projects" class="heading-anchor"><h4>Projects</h4></a>
				<div class="project-grid">
					{#each projects as project}
						<div class="project">
							<Project
								title={project.title}
								description={project.description}
								imageURI={project.imageURI}
								technologies={project.technologies}
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>