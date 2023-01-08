<div>
	<slot />
</div>

<style lang="scss">
	@import '$lib/style/app.scss';

	div {
		display: flex;
		justify-content: flex-end;
		gap: var(--size-3);
	}
</style>
