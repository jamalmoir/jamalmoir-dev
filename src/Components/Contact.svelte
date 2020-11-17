<style>
	aside {
		margin-left: var(--margin-double);
	}
	
	.contact ul {
		list-style-type: none;
		overflow: hidden;
        font-size: 1.2em;
	}
	
	.contact li {
		text-decoration: none;
        margin-bottom: var(--margin-half);
	}

	.contact a {
		color: var(--text-colour);
	}

	.contact a:hover {
		color: var(--primary-colour);
		transition: color 0.2s;
        text-decoration: none;
	}

    i {
        margin-right: var(--margin-half);
    }

	@media only screen and (max-width: 600px) {
		aside {
			margin-left: 0;
		}

		ul {
			display: flex;
			flex-wrap: wrap;
		}

		li {
			margin-right: var(--margin-double);
		}
	}
</style>

<aside class="contact">
    <h4>Contact</h4>
    <ul>
        <li><a href="https://datadependence.com"><i class="fas fa-blog"></i>Blog</a></li>
        <li><a href="https://github.com/jamalmoir"><i class="fab fa-github-square"></i>Github</a></li>
        <li><a href="https://www.linkedin.com/in/jamal-moir-5295b28a/"><i class="fab fa-linkedin"></i>Linkedin</a></li>
        <li><a href="mailto:jamal.moir@gmail.com"><i class="fas fa-envelope-square"></i>Email</a></li>
    </ul>
</aside>