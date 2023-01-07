<script lang="ts">
	import AutocompleteInput from '$lib/components/Autocomplete.svelte/AutocompleteInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import RadioGroup from '$lib/components/RadioGroup/RadioGroup.svelte';
	import type { RadioOption } from '$lib/components/RadioGroup/types';
	import Slider from '$lib/components/Slider.svelte';
	import Stepper from '$lib/components/Stepper.svelte';
	import { fly } from 'svelte/transition';

	let currentStep: number = 1;

	let regionOptions: RadioOption[] = [
		{
			value: 'national',
			label: 'National'
		},
		{
			value: 'international',
			label: 'International'
		}
	];

	const completeStep = () => {
		currentStep++;
	};
</script>

<br />
<div class="container">
	<Stepper bind:currentStep />
	{#if currentStep === 1}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<form>
				<section>
					<h2>Firmen Informationen</h2>
					<label>
						<span>NACE Name</span>
						<AutocompleteInput placeholder="NACE durchsuchen" />
					</label>
					<br />
					<Button on:click={completeStep}>Weiter</Button>
				</section>
			</form>
		</div>
	{:else if currentStep === 2}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<h2>Region auswählen</h2>
			<RadioGroup options={regionOptions} />
			<Button on:click={completeStep}>Weiter</Button>
		</div>
	{:else if currentStep === 3}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<h2>Mitarbeiter Anzahl</h2>
			<Slider />
			<br />
			<Button on:click={completeStep}>Weiter</Button>
		</div>
	{/if}
</div>

<style lang="scss">
	.spacer {
		padding-top: var(--size-12);
	}

	.container > {
		width: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-5);
	}
</style>
