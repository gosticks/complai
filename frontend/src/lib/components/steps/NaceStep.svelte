<script lang="ts">
	import { onMount } from 'svelte';
	import AutocompleteInput from '../Autocomplete.svelte/AutocompleteInput.svelte';
	import type { NaceEntry } from './types';

	export let selectedNace: NaceEntry | undefined = undefined;

	let options: string[] = [];
	let naceOptions: NaceEntry[] = [];

	onMount(async () => {
		const naceEntries: NaceEntry[] = await fetch('/nace.json').then((r) => r.json());
		if (!naceEntries) {
			return;
		}
		naceOptions = naceEntries;

		options = naceEntries.map((entry) => `${entry.code} - ${entry.name}`);
	});

	const onNaceSelected = (evt: CustomEvent<string | undefined>) => {
		const nace = evt.detail;
		if (!nace) {
			selectedNace = undefined;
		}

		let code = nace!.split(' ')[0];

		// Find matching entry
		selectedNace = naceOptions.find((nace) => nace.code === code);
	};
</script>

<form>
	<section>
		<h2>Company Classification</h2>
		<label>
			<span>Select NACE code</span>
			<AutocompleteInput on:select={onNaceSelected} {options} placeholder="NACE Code" />
		</label>
		<slot />
		<br /><br />
		<br />
		<div>
			<h3>What are NACE codes?</h3>
			<p>
				NACE codes are used to classify economic activities in the European Union (EU). They are
				based on the NACE (Nomenclature of Economic Activities) classification system, which was
				developed by the EU to provide a common framework for the collection and analysis of
				statistical data related to economic activities. NACE codes are used to identify the type of
				business or industry in which a company operates, and are typically used for statistical and
				analytical purposes.
			</p>
		</div>
	</section>
</form>

<style lang="scss">
	label > span {
		padding-left: var(--size-3);
	}
</style>
