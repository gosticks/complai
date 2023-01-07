<script lang="ts">
	export let stepCount: number = 4;
	export let currentStep: number = 4;
	export let enabledStep: number = 4;

	const onStepClick = (idx: number) => {
		if (idx >= enabledStep) {
			return;
		}
		currentStep = idx;
	};
</script>

<div class="stepper">
	{#each Array(stepCount) as _, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => onStepClick(i + 1)}
			class="step"
			class:completed={i < currentStep}
			class:active={currentStep === i + 1}
		>
			{i + 1}
		</div>
		{#if i < stepCount - 1}
			<div class="dash" class:completed={i < currentStep} />
		{/if}
	{/each}
</div>

<style lang="scss">
	.stepper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--size-4);
		user-select: none;
	}

	.step {
		cursor: pointer;
		display: flex;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		border: 2px solid rgba(var(--color-foreground-raw), 0.2);
		color: rgba(var(--color-foreground-raw), 0.2);
		transition: all 0.2s var(--easing-default);

		&.completed {
			border: 2px solid var(--color-primary);
			color: var(--color-primary);
		}

		&.active {
			background-color: var(--color-primary);
			color: #fff;
		}

		&:hover {
			transform: scale(1.1);
		}
	}

	.dash {
		display: block;
		width: 50px;
		height: 6px;
		content: '';
		border-radius: 3px;
		background-color: rgba(var(--color-foreground-raw), 0.1);

		&.completed {
			background-color: rgba(var(--color-primary-raw), 0.4);
		}
	}
</style>
