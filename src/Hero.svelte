<style>
	section {
		background-color: var(--hero-bg-colour);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 2em;
		margin-bottom: var(--margin);
	}
	
	img {
		width: 100px;
		border-radius: 100px;
		border: 5px solid white;
		box-shadow: 0 0 5px 0 rgba(0,0,0,0.2),0 0 20px 0 rgba(0,0,0,0.15);
	}

	img:hover {
		border-color: var(--primary-colour);
		transition: border-color .2s;
	}
	
	h2 {
		font-size: 3em;
		line-height: 1.5;	
		color: var(--text-colour); 
	}

	h2:hover {
		color: var(--primary-colour);
		transition: color .2s;
	}
	
	h3 {
		color: var(--sub-text-colour);
		font-size: 1.5em;
	}
</style>

<section>
	<img src="https://i.imgur.com/kHc6kdG.jpeg" alt="Jamal Moir" />
	<h2>Jamal Moir</h2>
	<h3>Full-Stack Software Engineer @ <a href="https://makeleaps.jp">MakeLeaps</a></h3>
</section>