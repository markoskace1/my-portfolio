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
</script>

<div class="grid grid-cols-5">
	{#each logos as logo}
		<div
			class="relative group flex flex-col items-center justify-evenly hover:bg-cyan-300/10 w-52 h-52 prose prose-img:m-0 tranisition duration-300 ease-in-out"
		>
			<img
				src={logo.imgUrl}
				alt={logo.alt}
				width="96px"
				height="96px"
				class="group-hover:scale-125 opacity-10 group-hover:opacity-100 transition duration-300 ease-in-out aspect-square"
			/>
			<span
				class="absolute group-hover:translate-y-20 uppercase text-slate-300 group-hover:tracking-widest font-semibold text-lg group-hover:block transition-all duration-300 ease-in-out"
				>{logo.name}</span
			>
		</div>
	{/each}
</div>
