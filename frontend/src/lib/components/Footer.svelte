<div class="footer-container">
	<span class="legal">© ComplAI - {new Date().getFullYear()}</span>
	<div class="menu">
		<a href="/imprint">Imprint</a>
	</div>
</div>

<style lang="scss">
	@import './src/lib/style/app.scss';

	.footer-container {
		border-top: 1px solid var(--color-primary);
		width: 100%;
		max-width: $max-page-width;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 0;
		margin-bottom: 1.5rem;
		padding-top: var(--size-10);
		margin-top: var(--size-10);

		@media (min-width: $breakpoint-small) {
			flex-direction: row;
			justify-content: space-between;
			padding: 2rem 0;
		}
	}

	.legal {
		opacity: 0.5;
	}

	.menu {
		padding-bottom: 1.5rem;

		@media (min-width: $breakpoint-small) {
			padding-bottom: 0;
		}

		a {
			padding-left: 1.5rem;
			&:first-child {
				padding-left: 0;
			}
		}
	}
</style>
