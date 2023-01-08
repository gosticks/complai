<script lang="ts">
	let className: string | undefined = undefined;
	export { className as class };

	type TagType = 'primary' | 'secondary' | 'disabled';

	export let kind: TagType = 'primary';

	const colorForCategory = (type: TagType) => {
		switch (type) {
			case 'primary':
				return 'var(--color-primary)';
			case 'secondary':
				return 'var(--color-secondary)';
			case 'disabled':
				return 'rgba(var(--color-primary-raw), 0.2)';
			default:
				return '';
		}
	};

	const fontColorForCategory = (category: string) => {
		switch (category) {
			case 'primary':
				return 'var(--color-background)';
			case 'secondary':
				return 'var(--color-secondary)';
			case 'disabled':
				return 'var(--color-foreground-light)';
			default:
				return '';
		}
	};
</script>

<span
	class={className}
	style={`background-color:${colorForCategory(kind)}; color: ${fontColorForCategory(kind)}`}
>
	<slot />
</span>

<style lang="scss">
	span {
		white-space: nowrap;
		padding: 0.3rem 0.75rem;
		padding: 0.3rem 0.75rem;
		border-radius: var(--size-2);
		font-weight: bold;
		color: rgba(255, 255, 255, 0.6);

		&:not(:last-child) {
			margin-right: 0.75rem;
		}
	}
</style>
