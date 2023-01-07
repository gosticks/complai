<script lang="ts">
	export let background: boolean = true;
</script>

<div class="card" class:background><slot /></div>

<style lang="scss">
	.card {
		padding: var(--size-fluid-3);

		&.background {
			background-color: var(--color-background-light);
			border-radius: var(--radius-4);
			box-shadow: var(--shadow-5);

			&:hover {
				box-shadow: var(--shadow-6);
			}
		}

		@media (--motionOK) {
			animation: var(--animation-fade-in);
		}
	}
</style>
