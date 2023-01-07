<script>
	import Card from '$lib/components/Card.svelte';
</script>

<div>
	<Card>
		<p>Test</p>
		<img src="/logo.svg" width="400" />
	</Card>
</div>

<style global>
	div,
	body,
	html {
		width: 100%;
		height: 100%;
	}

	div {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
