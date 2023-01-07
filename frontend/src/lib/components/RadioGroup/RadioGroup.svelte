<script lang="ts">
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
	style="font-size:{fontSize}px; flex-direction:{flexDirection}"
	id={`group-${uniqueID}`}
>
	{#if legend}<div class="legend" id={`label-${uniqueID}`}>{legend}</div>{/if}
	{#each options as { value, label }}
		<span class="radio-wrap">
			<input class="sr-only" type="radio" id={slugify(label)} bind:group={userSelected} {value} />
			<label for={slugify(label)}> {label} </label>
		</span>
	{/each}
</div>

<style lang="scss">
	$dot-size: 1.5rem;
	:root {
		--color-primary: var(--color-primary);
		--gray: rgba(var(--color-foreground-raw), 0.5);
	}

	.radio-wrap {
		position: relative;
	}

	.group-container {
		border-radius: 2px;
		display: flex;
		flex-direction: row;
	}

	.legend {
		font-weight: bold;
	}
	label {
		cursor: pointer;
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		margin-bottom: var(--size-4);
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

		& + label::before {
			content: '';
			position: relative;
			display: inline-block;
			margin-right: 0.75rem;
			width: $dot-size;
			height: $dot-size;
			background: transparent;
			border: 3px solid var(--color-foreground);
			border-radius: 50%;
			top: 0.2em;
		}

		& + label::after {
			content: '';
			position: absolute;
			display: block;
			width: $dot-size * 0.6;
			height: $dot-size * 0.6;
			top: ($dot-size * 0.6);
			left: ($dot-size * 0.6)/2;
			background: var(--color-primary);
			border: 1px solid var(--color-primary);
			border-radius: 50%;
			transition: all 0.2s var(--easing-default);
			transform: scale(0);
		}

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

	input[type='radio'] input[type='radio']:checked + label::after {
		opacity: 1;
		transform: scale(1);
	}

	input[type='radio']:disabled + label {
		color: rgba(var(--color-foreground-raw), 0.2);
	}

	input[type='radio']:disabled + label::before {
		background: rgba(var(--color-foreground-raw), 0.2);
	}
</style>
