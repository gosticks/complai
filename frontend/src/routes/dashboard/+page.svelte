<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import IconPlus from '$lib/icons/plus.svg';
	import Container from '$lib/components/Container.svelte';
	import type { NaceEntry } from '$lib/components/steps/types';
	import { onMount } from 'svelte';
	import ButtonGroup from '$lib/components/ButtonGroup.svelte';

	type Company = {
		name: string;
		nace: NaceEntry;
	};

	let email: string = '';

	let registeredCompanies: Company[] = [];
	let updateFinished = true;

	const updateCompanyData = async () => {
		if (!updateFinished) {
			return;
		}
		const payload = {};
		notifyMe();
		// TODO: adjust URL
		const resp = await fetch('/api/interpretLaw');

		updateFinished = true;
	};

	const notifyMe = () => {
		if (!('Notification' in window)) {
			// Check if the browser supports notifications
			alert('This browser does not support desktop notification');
		} else if (Notification.permission === 'granted') {
			// Check whether notification permissions have already been granted;
			// if so, create a notification
			const notification = new Notification('Hi there!');
			// …
		} else if (Notification.permission !== 'denied') {
			// We need to ask the user for permission
			Notification.requestPermission().then((permission) => {
				// If the user accepts, let's create a notification
				if (permission === 'granted') {
					const notification = new Notification('Hi there!');
				}
			});
		}

		// At last, if the user has denied notifications, and you
		// want to be respectful there is no need to bother them anymore.
	};

	onMount(() => {
		email = localStorage.getItem('email') ?? '';
		console.log(email);
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
		{#if email}<p>Welcomde <b>{email}</b></p>{/if}
		<br />
		<br />
		{#if registeredCompanies.length === 0}
			<Card
				><h3>Create your first company</h3>
				<p>Add a new company in 4 simple steps.</p></Card
			>
		{/if}
		{#each registeredCompanies as { nace, name }}{/each}
		<br />
		<ButtonGroup>
			<a href="/create"><Button><IconPlus /> Add Company</Button></a>
		</ButtonGroup>
	</section>
</Container>
