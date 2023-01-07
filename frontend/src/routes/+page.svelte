<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
</script>

<div class="bg" />
<div class="hero">
	<div>
		<h1>COMPLIANCE<br /> REVOLUTION</h1>
		<a href="/register"><Button>Jetzt Loslegen</Button></a>
	</div>
	<Liquid />
</div>

<style lang="scss">
	.bg {
		height: 100vh;
		width: 100vw;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		/* background-image: var(--gradient-10);

		@media (--OSdark) {
			background-image: var(--gradient-15);
		} */
	}

	.hero {
		padding-top: var(--size-12);
		display: flex;
		gap: var(--size-10);
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.image-container {
		max-width: 500px;

		img {
			width: 100%;
		}
	}

	h1 {
		font-size: 4rem;
	}
</style>
