<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Container from '$lib/components/Container.svelte';
	import Liquid from '$lib/components/Liquid.svelte';
</script>

<section class="hero">
	<Container>
		<div class="content">
			<div>
				<h1>LEGAL<br />COMPLIANCE<br /> REVOLUTION</h1>
				<a href="/register"><Button>Jetzt Loslegen</Button></a>
			</div>
			<Liquid />
		</div>
	</Container>
</section>

<div class="spacer-m" />
<Container>
	<section>
		<h2>What we offer?</h2>
		<p>
			Introducing ComplAI, the innovative <b>AI-powered notification system</b> that helps
			<b>your company stay up-to-date on legal changes</b> relevant to your business. With ComplAI, you'll
			never miss an important update again, saving you time and ensuring compliance with the latest regulations.
		</p>
	</section>
	<section>
		<h2>How it works</h2>
		<p>
			ComplAI works by continuously ingesting the latest legal reforms and rulings into our advanced
			AI model. Our system then uses this information to filter out updates that are specifically
			relevant to your company, ensuring that you only receive notifications on the legal changes
			that matter most to your business. This saves you time and effort by eliminating the need to
			manually track and interpret legal updates, and helps ensure compliance with the latest
			regulations. With ComplAI, you can trust that your company is always up-to-date and fully
			informed on the legal landscape.
		</p>
		<br />
		<Button>Download our presentation</Button>
	</section>
	<section>
		<h2>Who we are</h2>

		<div class="team-list">
			<div class="team-member">
				<div class="avatar">
					<img src="/wlad.jpeg" />
				</div>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/wlad.jpeg" />
				</div>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/wlad.jpeg" />
				</div>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/wlad.jpeg" />
				</div>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/wlad.jpeg" />
				</div>
				<span>
					<h3 class="name">Wlad Meixner</h3>
					<span>Web Dev</span>
				</span>
			</div>
		</div>
		<br />
		<p>
			Our team at ComplAI is passionate about using technology to solve real-world problems, and
			that's how we came together at the <a class="styled" href="https://legallovestech.de/"
				><b>LegalLovesTech</b></a
			> hackathon. We recognized the need for a more efficient and effective way for companies to stay
			informed on legal changes, and we were determined to create a solution.
		</p>
	</section>
</Container>

<style lang="scss">
	.spacer-m {
		margin-bottom: var(--spacing-large);
	}

	.team-list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-content: space-between;
		gap: var(--size-9);
	}

	.team-member {
		.avatar {
			aspect-ratio: var(--ratio-square);
			overflow: hidden;
			border-radius: var(--radius-round);
			margin-bottom: var(--size-4);
		}

		.name {
			color: var(--color-primary);
		}

		text-align: center;

		img {
			width: 100%;
		}
	}

	.hero {
		width: 100%;
		padding-top: var(--size-5) 0;
		background-color: rgba(var(--color-primary-raw), 0.2);

		h1 {
			font-size: 5rem;
		}

		:global(.container) {
			min-height: 80vh;
			justify-content: center;
		}

		.content {
			margin-top: var(--size-10);
			display: flex;
			gap: var(--size-12);
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}
	}
</style>
