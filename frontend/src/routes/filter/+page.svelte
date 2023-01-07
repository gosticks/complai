<script lang="ts">
	import AutocompleteInput from '$lib/components/Autocomplete.svelte/AutocompleteInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Input from '$lib/components/Input.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import TagContainer from '$lib/components/TagContainer.svelte';

	type CategoryOption = { name: string; active: boolean };

	export let commonCategories: CategoryOption[] = [
		{
			name: 'test-1',
			active: false
		},
		{
			name: 'test-2',
			active: false
		}
	];

	const onTagSelected = (tag: CategoryOption) => {
		const index = commonCategories.findIndex((c) => c.name === tag.name);
		if (index === -1) {
			return;
		}

		commonCategories[index].active = !tag.active;
	};
</script>

<form>
	<section>
		<h1>Relevante WZs suchen</h1>
		<AutocompleteInput placeholder="WZ durchsuchen" />
		<div>
			<h4>Häufig gesuchte WZs</h4>
			<TagContainer>
				{#each commonCategories as category}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span class="tag-container" on:click={() => onTagSelected(category)}
						><Tag kind={!category.active ? 'disabled' : 'primary'}>{category.name}</Tag></span
					>
				{/each}
			</TagContainer>
		</div>
		<a href="/filter"><Button>Filter hinzufügen</Button></a>
	</section>
</form>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-8);
	}

	.image-container {
		max-width: 500px;

		img {
			width: 100%;
		}
	}
</style>
