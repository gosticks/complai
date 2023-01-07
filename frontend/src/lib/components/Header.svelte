<script lang="ts">
	import IconGithub from '$lib/icons/github.svg';
	import IconSun from '$lib/icons/sun.svg';
	import IconHash from '$lib/icons/hash.svg';
	import Button from './Button.svelte';

	const onToggleDarkMode = () => {
		const isDarkMode = document.body.classList.contains('dark-mode');
		if (isDarkMode) {
			document.body.classList.remove('dark-mode');
			document.body.classList.add('light-mode');
		} else {
			document.body.classList.remove('light-mode');
			document.body.classList.add('dark-mode');
		}
		sessionStorage.setItem('isDarkMode', !isDarkMode + '');
	};
</script>

<header>
	<div class="inner-head">
		<a class="logo" href="/">
			<img src="/logo.svg" width="150" />
		</a>
		<nav />
		<nav class="right" />
	</div>
</header>

<style lang="scss">
	@import '$lib/style/app.scss';

	header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		backdrop-filter: blur(12px);
		background-color: rgba(var(--color-background-raw), 0.85);
		border-bottom: 1px solid rgba(var(--color-foreground-raw), 0.1);
	}

	.right {
		align-items: flex-end;
	}

	.inner-head {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: space-between;
		justify-items: center;
		align-items: center;
		padding: 1.5rem var(--default-pd) 1rem;

		width: 100%;
		max-width: $max-page-width;

		> nav {
			display: flex;
			margin: 0;
			padding: 0;

			gap: 0.25rem;
			@media (min-width: $breakpoint-medium) {
				gap: var(--default-pd);
			}

			button {
				background: none;
				color: inherit;
				border: none;
				padding: 0;
				font: inherit;
				cursor: pointer;
				outline: inherit;
			}
		}

		> nav > * {
			display: inline-flex;
			flex-direction: column;
			align-items: center;

			font-weight: normal;
			padding: 0 $space-base * 4;
			text-transform: uppercase;
			color: var(--color-foreground);
			cursor: pointer;

			@media (max-width: $breakpoint-small) {
				:global(svg) {
					width: 24px;
					height: 24px;
				}
			}

			&:hover {
				:global(svg) {
					transition: all 0.2s var(--easing-default);
					stroke-width: 2px;
					stroke: var(--color-primary);
				}

				.label {
					color: var(--color-primary);
					opacity: 1;
				}
			}

			.label {
				margin-top: 0.175rem;
				font-size: 1rem;

				transition: all 0.2s var(--easing-default);
			}

			&:active {
				color: var(--color-foreground);
				border-radius: 3px;
			}
			&:last-child {
				margin-right: 0;
				padding-right: 0;
			}
		}
	}

	// Only make labels transparent in DarkMode due to supperior contrast
	:global(.dark-mode .label) {
		opacity: 0.7;
	}

	a.logo {
		:global(svg) {
			fill: currentColor;
			stroke: transparent;
			transition: fill 0.2 var(--easing-default);
			&:hover {
				fill: var(--color-primary);
			}

			height: 2.8rem;
			@media (min-width: $breakpoint-medium) {
				height: 3.2rem;
			}
		}
	}
</style>
