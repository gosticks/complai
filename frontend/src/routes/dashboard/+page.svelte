<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import IconPlus from '$lib/icons/plus.svg';
	import IconBell from '$lib/icons/bell.svg';
	import Container from '$lib/components/Container.svelte';
	import type { NaceEntry } from '$lib/components/steps/types';
	import { onMount } from 'svelte';
	import ButtonGroup from '$lib/components/ButtonGroup.svelte';
	import Tag from '$lib/components/Tag.svelte';

	type LegalNotification = {
		level: number;
		category: string;
		message: string;
	};

	type Company = {
		name: string;
		nace: NaceEntry;
		region: string;
		size: string;

		notifications: LegalNotification[];
	};

	let email: string = '';

	let registeredCompanies: Company[] = [];
	let updateFinished = true;

	let delayCounter = 2;
	let demoNotificationSend = false;

	const updateCompanyData = async () => {
		if (!updateFinished) {
			return;
		}

		// Reload temporal local storage entries
		const rawEntries = localStorage.getItem('companies');
		if (rawEntries) {
			registeredCompanies = ((JSON.parse(rawEntries) ?? []) as Company[]).map((entry) => ({
				...entry,
				notifications: []
			}));
		}

		const mockupNotification = {
			level: 1,
			category: 'Finanzierung',
			message:
				'Unternehmen, die Finanzierungsdienstleistungen anbieten, sollten sich über die Änderungen in der Postbankleistungsentgeltverordnung vom 20. Dezember 2022 informieren und sicherstellen, dass sie diese Änderungen in ihre Geschäftspraktiken und -prozesse einbeziehen, um sicherzustellen, dass sie in Übereinstimmung mit diesem Gesetz handeln. Sie sollten auch sicherstellen, dass ihre Kunden über die Änderungen informiert sind und dass sie ihnen bei Fragen oder Bedenken zur Verfügung stehen.'
		};

		if (delayCounter <= 0) {
			const demoIndex = registeredCompanies.findIndex(
				(c) => c.name.trim().toLocaleLowerCase() === 'complai'
			);
			if (demoIndex !== -1) {
				registeredCompanies[demoIndex].notifications = [mockupNotification];
				if (!demoNotificationSend) {
					notifyMe('ComplAI - there are legal news for you');
					demoNotificationSend = true;
				}
			}
		} else {
			delayCounter--;
		}
		// TODO: adjust URL

		try {
			const resp = await fetch('/api/interpretLaw');
		} catch {
			// FIXME: for now fallback to local storage if no remote server response is present
			// This is only done as a initial mockup
		}

		updateFinished = true;
	};

	const notifyMe = (text: string) => {
		const options = {
			icon: 'https://complai.de/favicon.png'
		};

		if (!('Notification' in window)) {
			// Check if the browser supports notifications
			console.log('This browser does not support desktop notification');
		} else if (Notification.permission === 'granted') {
			// Check whether notification permissions have already been granted;
			// if so, create a notification
			const notification = new Notification(text, options);
			// …
		} else if (Notification.permission !== 'denied') {
			// We need to ask the user for permission
			Notification.requestPermission().then((permission) => {
				// If the user accepts, let's create a notification
				if (permission === 'granted') {
					const notification = new Notification(text, options);
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
		const interval = setInterval(updateCompanyData, 2000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<Container>
	<section>
		<br />
		<h1>Dashboard</h1>
		{#if email}<p>Welcome <b>{email}</b></p>{/if}
		<br />
		<br />
		<section class="companies">
			{#if registeredCompanies.length === 0}
				<Card
					><h3>Create your first company</h3>
					<p>Add a new company in 4 simple steps.</p></Card
				>
			{:else}
				{#each registeredCompanies as { nace, name, notifications }}
					<div class="company">
						<h2>{name}</h2>
						<div class="company-item">
							<span class="nace">{nace.code} - {nace.name}</span>
						</div>
						<br />
						<div class="notification-headline">
							<IconBell />
							<h3>Notifications</h3>
							<Tag kind="disabled">{notifications.length}</Tag>
						</div>
						{#if notifications.length === 0}
							<h5>Nothing new</h5>
							<br />
						{:else}
							<div class="notification-list">
								{#each notifications as { level, message, category }}
									<Card>
										<h4>{category}</h4>
										<h5>{message}</h5>
										<br />
										<ButtonGroup>
											<Button secondary small>Dismiss</Button>
											<Button small>Read more</Button>
										</ButtonGroup>
									</Card>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</section>
		<br />
		<ButtonGroup>
			<a href="/create"><Button><IconPlus /> Add Company</Button></a>
		</ButtonGroup>
	</section>
</Container>

<style lang="scss">
	.company-item {
		.nace {
			font-weight: normal;
			font-size: 1rem;
			display: inline-block;
			max-width: 350px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	.companies {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);

		> .company:not(:last-child) {
			border-bottom: 1px solid rgba(var(--color-foreground-raw), 0.2);
			padding-bottom: var(--size-8);
		}

		.notification-headline {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: var(--size-3);
			margin-bottom: var(--size-3);

			h3 {
				margin: 0;
			}

			:global(svg) {
				width: 40px;
				stroke: #e67d22;
				stroke-width: 1.5px;
				fill: transparent;
			}

			:global(span) {
				border-radius: var(--radius-round);
			}
		}
	}

	.notification-list {
		h5 {
			max-width: 100%;
			max-inline-size: 100%;
		}
	}
</style>
