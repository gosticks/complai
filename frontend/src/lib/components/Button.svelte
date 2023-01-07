<script lang="ts">
	let className: string | undefined = undefined;

	export { className as class };
	export let small: boolean = false;
</script>

<button class={className} class:small on:click><slot /></button>

<style lang="scss">
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.25rem;
		font-weight: bold;
		color: rgba(var(--color-background-raw), 0.8);
		outline: none;
		border: none;
		text-transform: uppercase;
		border-radius: var(--size-3);
		padding: var(--size-3) var(--size-5);
		background-color: var(--color-primary);
		transition: all 0.2s var(--easing-default);

		text-shadow: none !important;

		&:hover  {
			background-color: rgba(var(--color-primary-raw), 0.5);
			color: var(--color-light);
		}

		&.small {
			font-size: 0.8rem;
			padding: 0.5rem 0.75rem;
		}
		:global(svg) {
			margin-right: 0.5rem;
		}
	}
</style>
