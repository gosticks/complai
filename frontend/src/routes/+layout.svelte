<script lang="ts">
	import 'open-props';
	import '$lib/style/global.scss';
	import Header from '$lib/components/Header.svelte';

	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import Footer from '$lib/components/Footer.svelte';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>ComplAI - comply with the furure</title>
</svelte:head>
<div>
	<Header />

	<div class="transition-outer">
		{#key data.url}
			<main
				class="transition-inner"
				in:fly={{ x: -50, duration: 300, delay: 300 }}
				out:fly={{ x: 50, duration: 300 }}
			>
				<slot />
			</main>
		{/key}
	</div>
	<Footer />
</div>

<style lang="scss">
	@import './src/lib/style/app.scss';

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main {
		width: 100%;
		min-height: 80vh;
	}

	.transition-outer {
		width: 100%;
		/* display: grid;
		grid-template: 1fr 1fr; */
	}
	.transition-inner {
		/* grid-row: 1;
		grid-column: 1; */
		width: 100%;
	}
</style>
