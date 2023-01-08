<script lang="ts">
	import Liquid from './Liquid.svelte';

	let className: string | undefined = undefined;
	export { className as class };
	export let centered = false;
	export let loading = false;
</script>

<div class={className ?? '' + ' container'} class:centered>
	<slot />
	{#if loading}
		<div class="loading-overlay">
			<Liquid />
			<h3>LOADING</h3>
		</div>
	{/if}
</div>

<style lang="scss" global>
	@import './src/lib/style/app.scss';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-10);

		:global(> *) {
			width: 100%;
			max-width: $max-page-width;
		}

		&.centered {
			height: 80vh;
			justify-content: center;
		}
	}

	.loading-overlay {
		position: absolute;
		top: 0;
		left: 25%;
		bottom: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: rgba(var(--color-background-raw), 0.8);
	}
</style>
