<script lang="ts">
	let className: string | undefined = undefined;

	export { className as class };
	export let small: boolean = false;
	export let fullWidth: boolean = false;
	export let secondary: boolean = false;
	export let disabled: boolean = false;
</script>

<button class={className} {disabled} class:fullWidth class:secondary class:small on:click
	><slot /></button
>

<style lang="scss">
	button {
		position: relative;
		cursor: pointer;
		display: inline-flex;
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

		&:disabled {
			opacity: 0.3;
			cursor: not-allowed;
		}

		&:hover  {
			background-color: rgba(var(--color-primary-raw), 0.5);
			color: var(--color-light);
		}

		&:before {
			content: '';
			display: block;
			position: absolute;
			left: calc(var(--size-2) * -1);
			top: calc(var(--size-2) * -1);
			right: calc(var(--size-2) * -1);
			bottom: calc(var(--size-2) * -1);
			background-color: rgba(var(--color-primary-raw), 0.5);
			border-radius: var(--size-4);
			z-index: -1;
			transition: transform 0.2s var(--easing-default);
			transform: scale(0.8);
		}

		&:active:before {
			transform: scale(1);
		}

		&.small {
			font-size: 0.8rem;
			padding: 0.5rem 0.75rem;
		}

		&.secondary {
			background-color: rgba(var(--color-foreground-raw), 0.8);
		}

		&.fullWidth {
			width: 100%;
		}
		:global(svg) {
			stroke: rgba(var(--color-background-raw), 0.8);
			stroke-width: 2px;
			margin-right: 0.5rem;
			margin-left: -0.5rem;
		}
	}
</style>
