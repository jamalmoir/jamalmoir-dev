<script lang="ts">
	import Header from "./Header.svelte";
	import Hero from "./Hero.svelte";
	import Contact from "./Contact.svelte";
	import ProjectList from "./ProjectList.svelte";
	import ExperienceList from "./ExperienceList.svelte";

	import type { Project } from "./types";
	import type { Experience } from "./types";

	let projects: Project[] = [
		{
			title: "This Site!",
			description: "Yep! This site was written from scratch using Svelte.",
			imageURI: "https://imgur.com/CKuPBsk.png",
			technologies: ["TypeScript", "Svelte", "HTML5", "CSS3", "Vercel"],
		},
		{
			title: "Stroply",
			description: "An online trading tool that allows you to create journals and record trades inside of them.",
			imageURI: "https://i.imgur.com/dPy2xp8.jpg",
			technologies: ["TypeScript", "React", "Redux", "JSX", "CSS3", "Firestore"],
		},
		{
			title: "Reusable Machine Learning Components",
			description: "A collection of Machine Learning algorithms impemented in Python and a companion GUI to visualise generated models.",
			imageURI: "https://i.imgur.com/zMv2l2c.png",
			technologies: ["Python", "Numpy", "Pandas", "Kivy"],
		},
	]

	let experiences: Experience[] = [
		{
			company: "MakeLeaps",
			jobTitle: "Full-Stack Software Engineer (Part-Time)",
			website: "https://makeleaps.jp",
			description: "",
			responsibilities: [
				"Built star schema analytics database and ETL process loading data from production.",
				"Improved autid trails of user actions within app.",
				"Worked on various features and improvements in core app."
			],
			skills: ["Python", "Scala", "Django" , "Numpy", "Pandas", "TypeScript", "AngularJS", "SaltStack", "Amazon S3"],
		},
		{
			company: "MakeLeaps",
			jobTitle: "Full-Stack Software Engineer",
			website: "https://makeleaps.jp",
			description: "",
			responsibilities: [
				"Lead dev for Bookkeeping app.",
				"Pricing analysis and simulation.",
				"Managing Trello board for development tasks and building reports for management.",
				"Overhauld JavaScript codebase converting it to TypeScript and improving structure.",
				"Created user-facing reporting functions, API, and frontend.",
				"Worked on various features and improvements in core app."
			],
			skills: ["Python", "Django" , "Numpy", "Pandas", "TypeScript", "AngularJS", "React"],
		}
	]
	</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Raleway:wght@400;500;600;900&display=swap');

	:global(:root) {
		--margin: 1.5em;
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
		--background-colour: #f8f8ff;
	}

	:global(*, body) {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background-color: var(--background-colour);
	}
	
	:global(h1, h2, h4, h5) {
        color: var(--text-colour);
		font-family: 'Raleway', sans-serif;
	}

	:global(h1, h2) {
		font-weight: 900;
	}

	:global(h4) {
		margin-bottom: var(--margin);
		font-weight: 500;
		font-size: 1.5em;
	}

    :global(h5) {
        margin-bottom: var(--margin-half);
        font-size: 1.2em;
		font-weight: 500;
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

	:global(.container:not(:last-child)) {
		margin-bottom: var(--margin-double);
	}

	:global(.content) {
		width: var(--content-width-desktop);
		display: flex;
		justify-content: space-between;
	}

	:global(.heading-anchor) {
		color: var(--text-colour);
	}

	:global(.heading-anchor:hover) {
		text-decoration: none;
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

	@media only screen and (max-width: 600px) {
		.about {
			width: var(--content-width-mobile);
			margin-bottom: var(--margin);
		}

		p {
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
					Jamal loves working on hard problems and creating software products that solve real-world issues and help real-world people. He is a full-stack software engineer at <a href="https://makeleaps.jp">MakeLeaps</a>, a fintech startup located in the heart of Tokyo. In his personal time he likes to persue a variety of hobbies such as leathercraft, weight lifting, and Brazillian Jiu Jitsu. Jamal has found writing this paragraph in the third-person to be very strange indeed.
				</p>
			</div>
			<Contact />
		</div>
	</section>
	<ExperienceList experiences={experiences} />
	<ProjectList projects={projects} />
</main>