<div class="tag-list">
	<slot />
</div>

<style lang="scss">
	.tag-container {
		user-select: none;
		cursor: pointer;
	}

	.tag-list {
		display: flex;
		gap: var(--size-1);
	}
</style>
