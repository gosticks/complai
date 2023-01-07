<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Input from '$lib/components/Input.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
</script>

<div class="two-col">
	<Card>
		<form>
			<section>
				<h2>Register</h2>
				<input placeholder="E-Mail" />
				<input placeholder="Einladungs-Code" type="password" />
				<a href="/onboard"><Button>Registrieren</Button></a>
			</section>
		</form>
	</Card>
	<Card background={false}>
		<form>
			<section>
				<h2>Login</h2>
				<input placeholder="E-Mail" type="email" />
				<input placeholder="Password" type="password" />
				<Button>Login</Button>
			</section>
		</form>
	</Card>
</div>

<style lang="scss">
	.two-col {
		padding-top: var(--size-12);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-10);
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-5);
	}
</style>
