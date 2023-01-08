<script lang="ts">
	import AutocompleteInput from '$lib/components/Autocomplete.svelte/AutocompleteInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import Notification from '$lib/components/Notification.svelte';
	import RadioGroup from '$lib/components/RadioGroup/RadioGroup.svelte';
	import type { RadioOption } from '$lib/components/RadioGroup/types';
	import Slider from '$lib/components/Slider.svelte';
	import Stepper from '$lib/components/Stepper.svelte';
	import NaceStep from '$lib/components/steps/NaceStep.svelte';
	import type { NaceEntry } from '$lib/components/steps/types';
	import { fly } from 'svelte/transition';

	let loading = false;

	// Collect data in theser values
	let nace: NaceEntry | undefined = undefined;
	let region: string | undefined = undefined;
	let size: string | undefined = undefined;
	let companyName: string | undefined = undefined;

	let currentStep: number = 1;

	let regionOptions: RadioOption[] = [
		{
			value: 'national',
			label: 'National',
			icon: '🇩🇪'
		},
		{
			value: 'international',
			label: 'International',
			icon: '🌍'
		}
	];

	let employeeOptions: RadioOption[] = [
		{
			value: 's',
			label: '1 - 25',
			icon: 'Small'
		},
		{
			value: 'm',
			label: '26 - 500',
			icon: 'Medium'
		},
		{
			value: 'l',
			label: '500+',
			icon: 'Large'
		}
	];

	const transmitCompanyInfo = async () => {
		const payload = {
			nace,
			region,
			size,
			companyName
		};

		// TODO: add correct api response here
		const response = await fetch('/api/company/register', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'error',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(payload) // body data type must match "Content-Type" header
		});
		return response.json(); // parses JSON response into native JavaScript objects
	};

	const completeStep = () => {
		if (currentStep === 4) {
			loading = true;
			transmitCompanyInfo()
				.then(() => {})
				.finally(() => {
					//loading = false;
				});
			return;
		}

		// Continue to next step
		// FIXME: perform validation here
		currentStep++;
	};
</script>

<br />
<Container {loading}>
	<Stepper bind:currentStep />
	{#if currentStep === 1}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<NaceStep bind:selectedNace={nace}>
				<br />
				<Button disabled={!nace} on:click={completeStep}>Continue</Button>
			</NaceStep>
		</div>
	{:else if currentStep === 2}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<h2>Select Region of operation</h2>
			<RadioGroup flexDirection="row" bind:userSelected={region} options={regionOptions} />
			<Button disabled={!region} on:click={completeStep}>Continue</Button>
		</div>
	{:else if currentStep === 3}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<h2>Number of Employees</h2>
			<RadioGroup flexDirection="row" bind:userSelected={size} options={employeeOptions} />
			<Button disabled={!region} on:click={completeStep}>Continue</Button>
		</div>
	{:else if currentStep === 4}
		<div in:fly={{ x: -50, duration: 300, delay: 300 }} out:fly={{ x: 50, duration: 300 }}>
			<h2>Further company Information</h2>
			<label>
				<span>Company Name</span>
				<input type="text" placeholder="Company Name" bind:value={companyName} />
			</label>
			<br />
			<br />
			<Notification>
				<h3>This step is still Work in Progress</h3>
				<p>We will be gathering further location and company information to improve our results.</p>
			</Notification>
			<br />
			<Button on:click={completeStep}>Continue</Button>
		</div>
	{/if}
</Container>

<style lang="scss">
	.spacer {
		padding-top: var(--size-12);
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-5);
	}
</style>
