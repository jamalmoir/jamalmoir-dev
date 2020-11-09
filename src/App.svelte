<script>
	import Header from "./Header.svelte";
	import Hero from "./Hero.svelte";
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Raleway&display=swap');
	
	:global(:root) {
		--margin: 1em;
		--margin-half: calc(var(--margin) / 2);
		--margin-double: calc(var(--margin) * 2);

		--content-width: 40em;
		
		--hero-bg-colour: #f5f8fa;
		--text-colour: #333;
		--sub-text-colour: #aaa;
		--accent-colour: #24a0ed;
	}
	
	:global(*, body) {
		margin: 0;
		padding: 0;
	}
	
	:global(h1, h2) {
		font-family: 'Raleway', sans-serif;
	}
	
	:global(h3, p) {	
		font-family: 'Merriweather', serif;
	}

	:global(p) {
		line-height: 1.7em;
	}
	
	:global(header, section) {
		border-bottom: 1px solid rgba(0,0,0,.125);
	}

	:global(.container) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	:global(.content) {
		width: var(--content-width);
		display: flex;
		justify-content: space-between;
	}

	@media only screen and (max-width: 600px) {
		:global(.content) {
			width: 100%;
			flex-direction: column;
		}
	}

	h4 {
		margin-bottom: var(--margin);
	}
	
	section {
		margin: var(--margin-double);
		padding-bottom: 2em;
	}

	.about {
		width: 30em;
	}
	
	aside {
		margin-left: var(--margin-double);
	}
	
	.contact ul {
		list-style-type: none;
		overflow: hidden;
	}
	
	.contact li {
		text-decoration: none;
		padding-bottom: .5em;
	}
</style>

<main>
	<Header />
	<Hero />
	<section class="container">
		<div class="content">
			<div class="about">
				<h4>About Me</h4>
				<p>
					Jamal loves working on hard problems and creating software products that solve real-world issues and help real-world people. He is a full-stack software engineer at <a href="https://makeleaps.jp">MakeLeaps</a>, a fintech startup located in the heart of Tokyo. In his personal time he likes to persue a variety of hobbies such as leather crafting, weight lifting, and Brazillian Jiu Jitsu. Jamal has found writing this paragraph in the third-person to be very strange indeed.
				</p>
			</div>
			<aside class="contact">
				<h4>Contact</h4>
				<ul>
					<li><a href="https://datadependence.com"><i class="fas fa-blog"></i>Blog</a></li>
					<li><a href="https://github.com/jamalmoir"><i class="fab fa-github-square"></i>Github</a></li>
					<li><a href="https://www.linkedin.com/in/jamal-moir-5295b28a/"><i class="fab fa-linkedin"></i>Linkedin</a></li>
					<li><a href="mailto:jamal.moir@gmail.com"><i class="fas fa-envelope-square"></i>Email</a></li>
				</ul>
			</aside>
		</div>
	</section>
</main>