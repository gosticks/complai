<div class="container"><slot /></div>

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
	}
</style>
