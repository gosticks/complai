<script lang="ts">
	import IconGithub from '$lib/icons/github.svg';
	import IconSun from '$lib/icons/sun.svg';
	import IconHash from '$lib/icons/hash.svg';
	import Button from './Button.svelte';
	import HeaderIcon from '$lib/icons/logo-header.svg';
	import Tag from './Tag.svelte';

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
		<nav class="left">
			<a class="logo" href="/">
				<HeaderIcon width="180" />
			</a>
		</nav>
		<div />
		<nav class="right">
			<Tag>BETA</Tag>
		</nav>
	</div>
</header>

<style lang="scss">
	@import '$lib/style/app.scss';

	header {
		z-index: 2;
		width: 100%;
		position: sticky;
		top: 0px;
		display: flex;
		justify-content: center;
		align-items: center;

		backdrop-filter: blur(12px);
		background-color: rgba(var(--color-background-raw), 0.85);
		border-bottom: 1px solid rgba(var(--color-foreground-raw), 0.1);
	}

	.left {
		justify-self: flex-start;
	}

	.right {
		justify-self: flex-end;
	}

	.inner-head {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: space-between;
		justify-items: center;
		align-items: center;
		padding: 1rem 0;

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
			transition: fill 0.2 var(--easing-default);

			height: 2.8rem;
			@media (min-width: $breakpoint-medium) {
				height: 3.2rem;
			}
		}
	}
</style>
