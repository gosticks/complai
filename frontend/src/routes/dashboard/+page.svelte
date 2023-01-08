<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import type { NaceEntry } from '$lib/components/steps/types';
	import { onMount } from 'svelte';

	type Company = {
		name: string;
		nace: NaceEntry;
	};

	let registeredCompanies: Company[] = [];
	let updateFinished = true;

	const updateCompanyData = async () => {
		if (!updateFinished) {
			return;
		}
		const payload = {};
		// TODO: adjust URL
		const resp = await fetch('/api/interpretLaw');

		updateFinished = true;
	};

	onMount(() => {
		updateCompanyData().finally(() => {
			updateFinished = true;
		});
		const interval = setInterval(updateCompanyData, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<Container>
	<section>
		<br />
		<h1>Dashboard</h1>
		{#if registeredCompanies.length === 0}
			<Card
				><h3>Create your first company</h3>
				<p>Add a new company in 4 simple steps.</p></Card
			>
		{/if}
		{#each registeredCompanies as { nace, name }}{/each}
		<a href="/create"><Button>Add Company</Button></a>
	</section>
</Container>
