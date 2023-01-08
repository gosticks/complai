<script lang="ts">
	import Card from '../Card.svelte';
	import type { RadioOption } from './types';

	// based on suggestions from:
	// Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
	// and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

	export let options: RadioOption[] = [];
	export let legend: string | undefined = undefined;
	export let userSelected: string | undefined = undefined;
	export let fontSize = 16;
	export let flexDirection = 'column';

	const uniqueID = Math.floor(Math.random() * 100);

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

<div
	role="radiogroup"
	class="group-container"
	aria-labelledby={`label-${uniqueID}`}
	id={`group-${uniqueID}`}
>
	{#each options as { value, label, icon }}
		<label for={slugify(label)}>
			<Card class={'radio-wrap' + (value === userSelected ? ' selected' : '')}>
				<span class="icon">{icon}</span>
				<input class="sr-only" type="radio" id={slugify(label)} bind:group={userSelected} {value} />
				{label}
			</Card>
		</label>
	{/each}
</div>

<style lang="scss">
	@use 'sass:math';

	@import '$lib/style/app.scss';

	$dot-size: 1.5rem;

	:global(.radio-wrap) {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.5rem;
		border: 5px solid var(--color-background) !important;

		.icon {
			font-size: 4rem;
		}
	}

	:global(.card.selected) {
		border: 5px solid var(--color-primary) !important;
	}

	.group-container {
		border-radius: 2px;
		display: flex;

		flex-direction: column;
		@media (min-width: $breakpoint-small) {
			flex-direction: row;
		}
		align-items: center;
		justify-content: center;
		gap: var(--size-4);
	}

	.legend {
		font-weight: bold;
	}
	label {
		width: 100%;
		display: block;
		cursor: pointer;
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		margin-bottom: var(--size-4);

		:global(.card) {
			width: 100%;
		}
	}

	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	input[type='radio'] {
		position: relative;

		&:checked {
			& + label {
				font-weight: bold;
			}

			& + label::before {
				border-color: var(--color-primary);
			}

			& + label::after {
				transform: scale(1);
			}
		}
	}

	input[type='radio']:disabled + label {
		color: rgba(var(--color-foreground-raw), 0.2);
	}

	input[type='radio']:disabled + label::before {
		background: rgba(var(--color-foreground-raw), 0.2);
	}
</style>
