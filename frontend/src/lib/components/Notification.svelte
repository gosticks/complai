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
	:global(.card.notification-card) {
		display: flex;
		align-items: center;
		gap: var(--size-5);
		background-color: #e67d22b6 !important;
		color: #fff;

		:global(p) {
			color: #fff;
			font-size: 1.5rem;
			opacity: 0.7;
		}

		:global(h2),
		:global(h3),
		:global(h4) {
			margin-bottom: 0;
		}

		:global(svg) {
			stroke: #fff;
			stroke-width: 1.5px;
			fill: transparent;
		}
	}
</style>
