<style>	
	header {
		background-color: white;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	h1 {
		margin-left: 1em;
		color: #333;
		font-size: 1.5em;
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
		background-color: var(--accent-colour);
		color: white;
		transition: background-color .3s, color .2s;
	}

</style>

<header class="container">
	<div class="content">
		<h1>Jamal Moir</h1>
		
		<nav>
			<ul>
				<li>About Me</li>
				<li>Projects</li>
			</ul>
		</nav>
	</div>
</header>