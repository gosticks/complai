<script>
	export let itemLabel;
	export let highlighted;
</script>

<li class="autocomplete-items" class:autocomplete-active={highlighted} on:click>
	{@html itemLabel}
</li>

<style lang="scss">
	li.autocomplete-items {
		display: block;
		list-style: none;
		border-bottom: 1px solid rgba(var(--color-foreground-raw), 0.2);
		z-index: 99;
		/*position the autocomplete items to be the same width as the container:*/
		width: 100%;
		padding: var(--size-2) var(--size-4);
		cursor: pointer;
		background-color: transparent;

		max-inline-size: unset;

		&:last-child {
			border-bottom: 0;
		}
	}

	li.autocomplete-items:hover {
		/*when hovering an item:*/
		background-color: var(--color-primary);
		color: white;
	}

	li.autocomplete-items:active {
		/*when navigating through the items using the arrow keys:*/
		background-color: var(--color-primary) !important;
		color: #ffffff;
	}
	.autocomplete-active {
		/*when navigating through the items using the arrow keys:*/
		background-color: var(--color-primary) !important;
		color: #ffffff;
	}
</style>
