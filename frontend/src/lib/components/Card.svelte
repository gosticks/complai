<script lang="ts"></script>

<div class="card"><slot /></div>

<style lang="scss">
	.card {
		border-radius: var(--radius-2);
		padding: var(--size-fluid-3);
		box-shadow: var(--shadow-3);

		&:hover {
			box-shadow: var(--shadow-6);
		}

		@media (--motionOK) {
			animation: var(--animation-fade-in);
		}
	}
</style>
