<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '$lib/style/global.scss';

	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

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
</div>

<style lang="scss">
	@import './src/lib/style/app.scss';

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main {
		max-width: $max-page-width;
		width: 100%;
	}

	.transition-outer {
		/* display: grid;
		grid-template: 1fr 1fr; */
	}
	.transition-inner {
		/* grid-row: 1;
		grid-column: 1; */
	}
</style>
