<script lang="ts">
	import AutocompleteItem from './AutocompleteItem.svelte';

	export let options: string[] = ['test-1', 'test-2', 'test-3'];
	export let placeholder: string | undefined = undefined;

	/* FILTERING countres DATA BASED ON INPUT */
	let filteredCountries: string[] = [];
	// $: console.log(filteredCountries)

	const filterCountries = () => {
		let storageArr: string[] = [];
		if (inputValue) {
			options.forEach((option) => {
				if (option.toLowerCase().startsWith(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(option)];
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

	const setInputVal = (categoryName) => {
		inputValue = removeBold(categoryName);
		filteredCountries = [];
		hiLiteIndex = null;
		document.querySelector('#country-input').focus();
	};

	const submitValue = () => {
		if (inputValue) {
			console.log(`${inputValue} is submitted!`);
			setTimeout(clearInput, 1000);
		} else {
			alert("You didn't type anything.");
		}
	};

	const makeMatchBold = (str: string) => {
		// replace part of (country name === inputValue) with strong tags
		let matched = str.substring(0, inputValue.length);
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

<form autocomplete="off" on:submit|preventDefault={submitValue}>
	<div class="autocomplete">
		<input
			id="country-input"
			type="text"
			{placeholder}
			bind:this={searchInput}
			bind:value={inputValue}
			on:input={filterCountries}
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
</form>

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
