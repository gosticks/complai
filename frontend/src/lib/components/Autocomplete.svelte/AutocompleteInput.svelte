<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import AutocompleteItem from './AutocompleteItem.svelte';

	export let options: string[] = ['test-1', 'test-2', 'test-3'];
	export let placeholder: string | undefined = undefined;

	const dispatch = createEventDispatcher<{ select: string | undefined }>();

	/* FILTERING countres DATA BASED ON INPUT */
	let filteredCountries: string[] = [];
	// $: console.log(filteredCountries)

	const filterNace = () => {
		let storageArr: string[] = [];
		if (inputValue) {
			options.forEach((option) => {
				const matchIndex = option.toLowerCase().indexOf(inputValue.toLowerCase());
				if (matchIndex !== -1) {
					storageArr = [...storageArr, makeMatchBold(option, matchIndex)];
				}
			});
		}
		filteredCountries = storageArr;
	};

	/* HANDLING THE INPUT */
	let searchInput: HTMLInputElement; // use with bind:this to focus element
	let inputValue = '';

	$: if (!inputValue) {
		filteredCountries = [];
		hiLiteIndex = null;
	}

	const clearInput = () => {
		inputValue = '';
		searchInput.focus();
	};

	const setInputVal = (categoryName: string) => {
		inputValue = removeBold(categoryName);
		filteredCountries = [];
		hiLiteIndex = null;
		document.querySelector('#nace-input').focus();

		dispatch('select', inputValue);
	};

	const makeMatchBold = (str: string, start: number) => {
		// replace part of (country name === inputValue) with strong tags
		let matched = str.substring(start, start + inputValue.length);
		let makeBold = `<strong>${matched}</strong>`;
		let boldedMatch = str.replace(matched, makeBold);
		return boldedMatch;
	};

	const removeBold = (str: string) => {
		//replace < and > all characters between
		return str.replace(/<(.)*?>/g, '');
		// return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
	};

	/* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */
	let hiLiteIndex: null | number = null;
	//$: console.log(hiLiteIndex);
	$: hiLitedCountry = filteredCountries[hiLiteIndex];

	const navigateList = (e) => {
		if (e.key === 'ArrowDown' && hiLiteIndex <= filteredCountries.length - 1) {
			hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
		} else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
			hiLiteIndex === 0 ? (hiLiteIndex = filteredCountries.length - 1) : (hiLiteIndex -= 1);
		} else if (e.key === 'Enter') {
			setInputVal(filteredCountries[hiLiteIndex]);
		} else {
			return;
		}
	};
</script>

<svelte:window on:keydown={navigateList} />

<div class="autocomplete">
	<input
		id="nace-input"
		type="text"
		autocomplete=""
		{placeholder}
		bind:this={searchInput}
		bind:value={inputValue}
		on:input={filterNace}
	/>
</div>

<!-- FILTERED LIST OF COUNTRIES -->
{#if filteredCountries.length > 0}
	<ul id="autocomplete-items-list">
		{#each filteredCountries as country, i}
			<AutocompleteItem
				itemLabel={country}
				highlighted={i === hiLiteIndex}
				on:click={() => setInputVal(country)}
			/>
		{/each}
	</ul>
{/if}

<style>
	div.autocomplete {
		display: block;
		width: 100%;
	}

	#autocomplete-items-list {
		position: relative;
		margin: 0;
		padding: 0;
		top: -11px;
		border: 2px solid rgba(var(--color-foreground-light-raw), 0.2);
		background-color: var(--color-background);
		border-bottom-left-radius: var(--size-3);
		border-bottom-right-radius: var(--size-3);
		overflow: hidden;
		box-shadow: var(--shadow-5);
	}
</style>
