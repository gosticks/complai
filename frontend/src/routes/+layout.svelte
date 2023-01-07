<script lang="ts">
	import '$lib/style/global.scss';
</script>

<div>
	<header>HEADER</header>
	<main><slot /></main>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main {
		max-width: 900px;
		width: 100%;
	}
</style>
