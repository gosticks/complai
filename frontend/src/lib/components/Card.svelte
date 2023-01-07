<script lang="ts">
	export let background: boolean = true;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class={(className ?? '') + ' card'} class:background><slot /></div>

<style lang="scss">
	.card {
		padding: var(--size-fluid-3);

		&.background {
			background-color: var(--color-background-light);
			border: 3px solid var(--color-background);
			border-radius: var(--radius-4);
			box-shadow: var(--shadow-5);
			transition: box-shadow 0.2s var(--easing-default);

			&:hover {
				box-shadow: var(--shadow-6);
			}
		}

		@media (--motionOK) {
			animation: var(--animation-fade-in);
		}
	}
</style>
