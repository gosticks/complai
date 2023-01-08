<script lang="ts">
	import Card from './Card.svelte';
	import IconWarn from '$lib/icons/alert-octagon.svg';

	export let outline = false;
</script>

<Card class={'notification-card' + (outline ? ' outline' : '')}>
	<div class="icon"><IconWarn width="60" height="60" /></div>
	<div class="text"><slot /></div>
</Card>

<style lang="scss" global>
	@import '$lib/style/app.scss';

	:global(.card.notification-card) {
		padding: var(--size-3) var(--size-5);
		display: flex;
		align-items: center;
		gap: var(--size-5);
		background-color: transparent !important;
		border: 3px solid #e67d22 !important;
		color: #fff;
		flex-direction: column;

		@media (min-width: $breakpoint-small) {
			flex-direction: row;
		}

		:global(p) {
			color: var(--color-foreground);
			font-size: 1.25rem;
			opacity: 0.7;
		}

		:global(h2),
		:global(h3),
		:global(h4) {
			margin-bottom: 0;
			color: var(--color-foreground);
			font-size: 1.75rem;
		}

		:global(svg) {
			stroke: #e67d22;
			stroke-width: 1.5px;
			fill: transparent;
		}
	}
</style>
