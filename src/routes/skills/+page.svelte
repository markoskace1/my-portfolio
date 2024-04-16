<script lang="ts">
	import StarsRating from '$lib/components/StarsRating.svelte';
	import { Info } from 'lucide-svelte';
	import htmlLogo from '$lib/images/html-1.svg';
	import jsLogo from '$lib/images/javascript-1.svg';
	import reactLogo from '$lib/images/react-2.svg';
	import svelteLogo from '$lib/images/svelte-1.svg';
	import astroLogo from '$lib/images/astrojs.svg';
	import tailwindLogo from '$lib/images/tailwind-css-2.svg';
	import TechLogos from '$lib/components/TechLogos.svelte';

	type Skill = {
		name: string;
		rating: number;
		image: string;
		alt: string;
	};

	let skills: Skill[] = [
		{
			name: 'HTML + CSS',
			rating: 4.5,
			image: htmlLogo,
			alt: 'HTML logo'
		},
		{ name: 'JS/TS', rating: 3, image: jsLogo, alt: 'JavaScript logo' },
		{ name: 'TailwindCSS', rating: 4.5, image: tailwindLogo, alt: 'TailwindCSS logo' },
		{ name: 'ReactJS', rating: 4, image: reactLogo, alt: 'ReactJS logo' },
		{ name: 'Svelte/SvelteKit', rating: 4.5, image: svelteLogo, alt: 'Svelte logo' },
		{ name: 'AstroJS', rating: 4, image: astroLogo, alt: 'AstroJS logo' }
	];
</script>

<section class="flex flex-col items-center container mx-auto w-full md:max-w-5xl pb-24">
	<div class="flex flex-col items-center gap-5 mx-auto mb-6">
		{#each skills as skill}
			<div
				class="flex flex-col md:flex-row justify-between items-center space-x-2 md:space-x-10 prose prose-sm md:prose-base prose-headings:m-0 prose-headings:text-slate-300 prose-img:m-0"
			>
				<div class="flex justify-start md:justify-end items-center space-x-3 w-60">
					<h2>{skill.name}</h2>
					<!-- <img src={skill.image} alt={skill.alt} width="36px" height="36px" /> -->
				</div>

				<div class="flex w-60 gap-1">
					<StarsRating rating={skill.rating} />
				</div>
			</div>
		{/each}
		<div class="flex items-center space-x-2 text-slate-400 py-2">
			<Info size={16} />
			<p class="text-sm md:text-base">Accuracy is &#177 0.4 stars</p>
		</div>
	</div>

	<div class="mb-6 prose prose-sm md:prose-base max-w-none prose-p:text-slate-300">
		<p>
			You'll notice there are no 5 stars and no 1 star skill. Well, I can't know everything and I
			know enaugh to not know anything. &#129299
		</p>
	</div>

	<div
		class="flex flex-col max-w-none justify-center items-center py-12 prose prose-h2:text-slate-100 prose-h2:pt-12 prose-h2:pb-2"
	>
		<h2 class="border-b border-cyan-300">Other technologies I have experience with:</h2>
		<div class="container mt-6">
			<TechLogos />
		</div>
	</div>
</section>
