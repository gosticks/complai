<!--

Follow me on
Dribbble: https://dribbble.com/supahfunk
Twitter: https://twitter.com/supahfunk
Codepen: https://codepen.io/supah/

-->
<div>
	<div class="wrapper">
		<div class="ball" />
		<div class="ball" />
		<div class="ball" />
	</div>

	<svg>
		<defs>
			<filter id="filter">
				<feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
					result="filter"
				/>
				<feComposite in="SourceGraphic" in2="filter" operator="atop" />
			</filter>
		</defs>
	</svg>
</div>

<style lang="scss">
	@use 'sass:math';
	$radius: 80px;

	svg {
		display: none;
	}

	.wrapper {
		position: relative;
		top: 0;
		left: 0;
		width: 300px;
		height: 300px;
		filter: url('#filter');
	}

	.ball {
		width: $radius;
		height: $radius;
		position: absolute;
		top: calc(50% - math.div($radius, 2));
		left: calc(50% - math.div($radius, 2));

		&:before {
			background: var(--color-primary);
			border-radius: 100%;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			content: '';
		}

		&:nth-child(1) {
			transform: translate(-$radius * 1.1);
			animation: x-axis-lateral 2s infinite alternate ease-in-out;
			&:before {
				animation: y-axis-lateral 1s infinite 0.1s alternate ease-in-out;
			}
		}

		&:nth-child(2) {
			animation: x-axis 2s infinite alternate ease-in-out;
			&:before {
				animation: y-axis 1s infinite 0.5s alternate ease-in-out;
			}
		}

		&:nth-child(3) {
			transform: translate($radius * 1.1, $radius * 1.3);
			animation: x-axis-lateral 2s infinite alternate ease;
			&:before {
				animation: y-axis-lateral 1s infinite 0.4s alternate ease-in-out;
			}
		}
	}

	@keyframes x-axis {
		0% {
			transform: translate(-$radius * 1.6);
		}
		100% {
			transform: translate($radius * 1.6);
		}
	}

	@keyframes y-axis {
		0% {
			transform: translateY($radius * 0.7);
		}
		100% {
			transform: translateY(-$radius * 1.1) scale(0.8);
			background: var(--color-primary);
		}
	}

	@keyframes x-axis-lateral {
		0% {
			transform: translate(-$radius * 0.6);
		}
		100% {
			transform: translate($radius * 0.6);
		}
	}

	@keyframes y-axis-lateral {
		0% {
			transform: translateY(math.div($radius, 5));
		}
		100% {
			transform: translateY(-$radius);
			background: var(--color-primary);
		}
	}
</style>
