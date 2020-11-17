<script lang="typescript">
    export let name: string;
</script>

<style>
    span {
        font-size: .7em;;
        padding: var(--margin-half);
        border-radius: .2em;
        margin-right: var(--margin-half);
        margin-bottom: var(--margin-half);
        color: var(--text-2-colour);
        background-color: #000000;
    }

    .typescript {
        color: var(--text-2-colour);
        background-color: #3178c6;
    }

    .svelte {
        color: var(--text-2-colour);
        background-color: #ff3e00;
    }

    .html5 {
        color: var(--text-2-colour);
        background-color: #f06529;
    }

    .css3 {
        color: var(--text-2-colour);
        background-color: dodgerblue;
    }

    .vercel {
        color: var(--text-2-colour);
        background-color: #000000;
    }

    .react {
        color: var(--text-colour);
        background-color: #61dafb;
    }

    .redux {
        color: var(--text-2-colour);
        background-color: #764abc;
    }

    .jsx {
        color: var(--text-colour);
        background-color: #61dafb;
    }

    .firestore {
        color: var(--text-colour);
        background-color: #ffca28;
    }

    .python {
        color: var(--text-2-colour);
        background-color: #2b5b84;
    }

    .numpy {
        color: var(--text-2-colour);
        background-color: #013243;
    }

    .pandas {
        color: var(--text-2-colour);
        background-color: #130654;
    }

    .kivy {
        color: var(--text-2-colour);
        background-color: #333333;
    }

    .scala {
        color: var(--text-2-colour);
        background-color: #DC322F;
    }

    .django {
        color: var(--text-2-colour);
        background-color: #0C4B33;
    }

    .angularjs {
        color: var(--text-2-colour);
        background-color: #b52e31;
    }

    .saltstack {
        color: var(--text-2-colour);
        background-color: #00eace;
    }

    .amazons3 {
        color: var(--text-2-colour);
        background-color: #FF9900;
    }

</style>

<span class={name.replaceAll(" ", "").toLowerCase()}>
    {name}
</span>
