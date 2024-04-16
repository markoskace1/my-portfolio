<script lang="ts">
	import alpineLogo from '$lib/images/alpinejs-2.svg';
	import bootstrapLogo from '$lib/images/bootstrap-5-1.svg';
	import drizzleLogo from '$lib/images/drizzle.png';
	import githubLogo from '$lib/images/github-2.svg';
	import inkscapeLogo from '$lib/images/inkscape-logo-1.svg';
	import luciaLogo from '$lib/images/lucia.png';
	import netlifyLogo from '$lib/images/netlify.svg';
	import prismaLogo from '$lib/images/prisma-3.svg';
	import sanityLogo from '$lib/images/sanity.svg';
	import sendgridLogo from '$lib/images/sendgrid-2.svg';
	import storyblokLogo from '$lib/images/storyblok-logo.svg';
	import supabaseLogo from '$lib/images/supabase-logo-icon.svg';
	import tursoLogo from '$lib/images/turso.svg';
	import vercelLogo from '$lib/images/vercel.svg';
	import wordpressLogo from '$lib/images/wordpress-icon-1.svg';
	import gsapLogo from '$lib/images/gsap-greensock.svg';
	import framerMotionLogo from '$lib/images/framer-motion.svg';
	import motionOneLogo from '$lib/images/motion-one.svg';
	import { onMount } from 'svelte';

	type Logo = {
		name: string;
		imgUrl: string;
		alt: string;
	};

	let logos: Logo[] = [
		{
			name: 'Lucia Auth',
			imgUrl: luciaLogo,
			alt: 'Lucia logo'
		},
		{
			name: 'Drizzle',
			imgUrl: drizzleLogo,
			alt: 'Drizzle logo'
		},
		{
			name: 'AplineJS',
			imgUrl: alpineLogo,
			alt: 'AlpineJS logo'
		},
		{
			name: 'Bootstrap',
			imgUrl: bootstrapLogo,
			alt: 'Bootstrap logo'
		},
		{
			name: 'GitHub',
			imgUrl: githubLogo,
			alt: 'GitHub logo'
		},
		{
			name: 'Netlify',
			imgUrl: netlifyLogo,
			alt: 'Netlify logo'
		},
		{
			name: 'Vercel',
			imgUrl: vercelLogo,
			alt: 'Vercel logo'
		},
		{
			name: 'Supabase',
			imgUrl: supabaseLogo,
			alt: 'Supabase logo'
		},
		{
			name: 'Turso',
			imgUrl: tursoLogo,
			alt: 'Turso logo'
		},
		{
			name: 'Prisma',
			imgUrl: prismaLogo,
			alt: 'Prisma logo'
		},
		{
			name: 'GSAP',
			imgUrl: gsapLogo,
			alt: 'GSAP logo'
		},
		{
			name: 'Framer Motion',
			imgUrl: framerMotionLogo,
			alt: 'Framer Motion logo'
		},
		{
			name: 'Motion One',
			imgUrl: motionOneLogo,
			alt: 'Motion One logo'
		},
		{
			name: 'Storyblok',
			imgUrl: storyblokLogo,
			alt: 'Storyblok logo'
		},
		{
			name: 'Sanity',
			imgUrl: sanityLogo,
			alt: 'Sanity logo'
		},
		{
			name: 'SendGrid',
			imgUrl: sendgridLogo,
			alt: 'SendGrid logo'
		},
		{
			name: 'Inkscape',
			imgUrl: inkscapeLogo,
			alt: 'Inkscape logo'
		},
		{
			name: 'Wordpress',
			imgUrl: wordpressLogo,
			alt: 'Wordpress logo'
		}
	];

	let index = 0;

	onMount(() => {
		const interval = setInterval(() => {
			index = (index + 1) % logos.length;
		}, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-wrap gap-12 justify-center">
	{#each logos as logo}
		<div
			class="relative group flex items-center justify-center w-20 h-20 prose prose-img:m-0 tranisition duration-300 ease-in-out"
		>
			<img
				src={logo.imgUrl}
				alt={logo.alt}
				width="96px"
				height="96px"
				class="group-hover:scale-110 grayscale group-hover:grayscale-0 transition duration-300 ease-in-out aspect-square"
			/>
			<span
				class="absolute -bottom-8 opacity-0 text-center group-hover:opacity-100 uppercase text-slate-300 tracking-widest font-semibold text-lg transition-all duration-300 ease-in-out"
				>{logo.name}</span
			>
		</div>
	{/each}
</div>
