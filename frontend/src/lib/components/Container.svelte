<script lang="ts">
	import Liquid from './Liquid.svelte';

	let className: string | undefined = undefined;
	export { className as class };
	export let centered = false;
	export let loading = false;
</script>

<div>
	<div class={className ?? '' + ' container'} class:centered>
		<slot />
	</div>
	{#if loading}
		<div class="loading-overlay">
			<Liquid />
			<h3>LOADING</h3>
		</div>
	{/if}
</div>

<style lang="scss" global>
	@import '$lib/style/app.scss';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--size-10);
		padding: 0 var(--size-5);

		:global(> *) {
			width: 100%;
			max-width: $max-page-width;
		}

		&.centered {
			@media (min-width: $breakpoint-small) {
				height: 80vh;
				justify-content: center;
			}
		}
	}

	.loading-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: rgba(var(--color-background-raw), 0.8);
		backdrop-filter: blur(5px);
	}
</style>
