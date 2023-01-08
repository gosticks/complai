<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
</script>

<Container centered>
	<div>
		<h1>{$page.error?.message}</h1>
		<img src="/error.jpeg" />
	</div>
</Container>

<style lang="scss">
	div {
		padding-top: var(--size-9);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		max-width: 500px;
		width: 100%;
	}
</style>
