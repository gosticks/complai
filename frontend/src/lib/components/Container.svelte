<script lang="ts">
	let className: string | undefined = undefined;
	export { className as class };
	export let centered = false;
</script>

<div class={className ?? '' + ' container'} class:centered><slot /></div>

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
</style>
