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
				<a href="/register"><Button>Try Now</Button></a>
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
		<a href="/ComplAI.pdf" rel="_blank"><Button>Download our presentation</Button></a>
	</section>
	<section>
		<h2>Who we are</h2>

		<div class="team-list">
			<div class="team-member">
				<div class="avatar">
					<img src="/nicholas.jpeg" />
				</div>
				<span>
					<h3 class="name">Nicholas Trofin</h3>
					<span>Flutter Dev</span>
				</span>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/rayan.jpeg" style="margin-top: -15%;" />
				</div>
				<span>
					<h3 class="name">Rayan Siala</h3>
					<span>Database</span>
				</span>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/tobias.jpeg" />
				</div>
				<span>
					<h3 class="name">Tobias Wasner</h3>
					<span>OpenAI API</span>
				</span>
			</div>
			<div class="team-member">
				<div class="avatar">
					<img src="/oliver.jpeg" />
				</div>
				<span>
					<h3 class="name">Oliver Großkloß</h3>
					<span>Web Scraping</span>
				</span>
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

	<section>
		<Card>
			<h2>Try the ALPHA</h2>
			<p>If you have an invitation token for the ALPHA phase, you can try ComplAI today</p>
			<br />
			<a href="/register"><Button>Get Started</Button></a>
		</Card>
	</section>
</Container>

<style lang="scss">
	@import '$lib/style/app.scss';

	.spacer-m {
		margin-bottom: var(--spacing-large);
	}

	.team-list {
		display: grid;
		justify-content: space-between;
		gap: var(--size-9);
		grid-template-columns: 1fr;

		@media (min-width: 400px) {
			grid-template-columns: 1fr 1fr;
		}
		@media (min-width: $breakpoint-small) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.team-member {
		.avatar {
			display: inline-block;
			text-align: center;
			aspect-ratio: var(--ratio-square);
			overflow: hidden;
			border-radius: var(--radius-round);
			margin-bottom: var(--size-4);
			max-width: 250px;
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
		margin-top: -5rem;
		padding-top: var(--size-5) 0;
		background-color: rgba(var(--color-primary-raw), 0.2);

		h1 {
			font-size: 2rem;

			@media (min-width: $breakpoint-small) {
				font-size: 5rem;
			}
		}

		:global(.container) {
			min-height: 80vh;
			justify-content: center;
		}

		.content {
			display: flex;
			margin-top: var(--size-10);

			flex-direction: column-reverse;
			align-items: center;
			justify-content: center;
			text-align: center;
			@media (min-width: $breakpoint-small) {
				text-align: left;
				justify-content: flex-start;
				gap: var(--size-12);
				flex-direction: row;
			}
		}
	}
</style>
