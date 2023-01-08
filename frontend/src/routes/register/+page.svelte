<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import Input from '$lib/components/Input.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
	import Notification from '$lib/components/Notification.svelte';

	let email: string | undefined = undefined;
	let code: string | undefined = undefined;

	const onRegister = (evt: MouseEvent) => {
		if (!email || !code) {
			evt.preventDefault();
			evt.stopPropagation();

			return;
		}
		localStorage.setItem('email', email ?? '');
	};
</script>

<Container centered>
	<Notification outline>
		<h3>There is currently no public access</h3>
		<p>While we are still in BETA you need an Invitation Code to register</p>
	</Notification>
	<div class="two-col">
		<Card>
			<form>
				<section>
					<h2>Register</h2>
					<input placeholder="E-Mail" bind:value={email} />
					<input placeholder="Einladungs-Code" type="password" bind:value={code} />
					<a href="/dashboard" on:click={onRegister}><Button>Register</Button></a>
				</section>
			</form>
		</Card>
		<Card background={false}>
			<form>
				<section>
					<h2>Login</h2>
					<input placeholder="E-Mail" type="email" />
					<input placeholder="Password" type="password" />
					<Button secondary>Login</Button>
				</section>
			</form>
		</Card>
	</div>
</Container>

<style lang="scss">
	@import '$lib/style/app.scss';

	.two-col {
		display: grid;

		gap: var(--size-5);
		grid-template-columns: 1fr;

		@media (min-width: $breakpoint-small) {
			gap: var(--size-10);
			grid-template-columns: 1fr 1fr;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-5);
	}
</style>
