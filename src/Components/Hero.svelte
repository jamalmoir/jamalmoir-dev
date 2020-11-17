<style>
	section {
		background-color: var(--primary-colour);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 2em;
		margin-bottom: var(--margin-double);
		background: linear-gradient(135deg, var(--primary-colour) 0%, var(--secondary-colour) 100%);
		text-align: center;
	}
	
	img {
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
		color: var(--text-2-colour); 
	}

	h2:hover {
		color: var(--primary-colour);
		transition: color .2s;
	}
	
	h3 {
		color: var(--text-2-colour); 
		opacity: .8;
		font-size: 1.2em;
	}

</style>

<section>
	<img src="./images/jamalmoir.jpeg" alt="Jamal Moir"  width="100" height="100" />
	<h2>Jamal Moir</h2>
	<h3>Full-Stack Software Engineer @ MakeLeaps</h3>
</section>