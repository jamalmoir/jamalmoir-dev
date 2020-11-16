<script>

import ExperienceList from "./ExperienceList.svelte";

</script>
<style>	
	header {
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1em;
	}

	h1 {
		color: #333;
		font-size: 1.5em;
	}

	h1:hover {
		color: var(--primary-colour);
		transition: color .2s;
	}
	
	ul {
		list-style-type: none;
    	overflow: hidden;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	li {
		color: #333;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	
	li:hover {
		background-color: var(--primary-colour);
		color: white;
		transition: background-color .3s, color .2s;
	}

	a {
		color: var(--text-color);
	}

	a:hover {
		text-decoration: none;
	}

</style>

<header>
	<h1>JAMAL MOIR</h1>
	
	<nav>
		<ul>
			<li><a href="#about">About Me</a></li>
			<li><a href="#experience">Experience</a></li>
			<li><a href="#projects">Projects</a></li>
		</ul>
	</nav>
</header>