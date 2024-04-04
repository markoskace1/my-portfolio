<script lang="ts">
	import fotnepWebsite from '$lib/images/fotonep-site.webp';
	import investWebsite from '$lib/images/bm-invest-website.webp';
	import klikrWebsite from '$lib/images/klikr-website.webp';
	import carsWebsite from '$lib/images/carsbytes-website.webp';
	import presentationWebsite from '$lib/images/presentation-website.webp';
	import moleculesWebsite from '$lib/images/molecules-website.webp';
	import moviesWebsite from '$lib/images/movies-website.webp';
	import doughnutWebsite from '$lib/images/doughnut-website.webp';
</script>

<section
	class="flex flex-col space-y-24 max-w-5xl pb-24 prose prose-sm md:prose-base prose-h2:text-slate-200 prose-h2:mt-0 lg:prose-h2:mt-12 prose-h2:tracking-wide prose-p:text-slate-300 prose-a:text-slate-400 prose-a:w-fit"
>
	<!-- REAL ESTATE WEBSITE -->

	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 left-12 lg:left-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={fotnepWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-center aspect-video rounded-xl"
		/>
		<div class="flex flex-col px-3">
			<h2>Real estate photography website</h2>
			<p>
				I've build this website for my photography business, but I'm planning to shut it down as
				there's low demand for these kind of services in my country. It's a single page website
				build in Svelte and TailwindCSS.
			</p>
			<a href="https://fotonepremicnine.si" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- BM INVEST WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 right-12 lg:right-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={investWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-center aspect-video rounded-xl lg:order-2"
		/>
		<div class="flex flex-col px-3">
			<h2>Authentication app</h2>
			<p>
				I'm still building this portal for my friends and family to check their portfolios. The
				authentication is working. Try it. <i class="text-slate-400"
					>(username: marko, password: testing123)</i
				>. This website is build in Sveltekit and TailwindCSS with Lucia Auth and Turso.
			</p>
			<a href="https://bm-investments.netlify.app/" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- KLIKR WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 left-12 lg:left-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={klikrWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-center aspect-video rounded-xl"
		/>
		<div class="flex flex-col px-3">
			<h2>Web development business</h2>
			<p>
				Another project in the making. I'm still working on it. It's a website for my business
				someday, selling web development services in my country. Again, build in Sveltekit and
				TailwindCSS.
			</p>
			<a href="https://klikpanet.netlify.app" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- CAR&BYTES WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 right-12 lg:right-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={carsWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-center aspect-video rounded-xl lg:order-2"
		/>
		<div class="flex flex-col px-3">
			<h2>Cars exhibition website</h2>
			<p>
				This was made for my client from Upwork. I had to build 4 pages for desktop screens only, so
				don't open them on mobile, please. Pages are build in AstroJS.
			</p>
			<a href="https://cars-messe-project.vercel.app/" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- PRESENTATION WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 left-12 lg:left-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={presentationWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-center aspect-video rounded-xl"
		/>
		<div class="flex flex-col px-3">
			<h2>Presentation website</h2>
			<p>
				A presentation made for a client from Upwork. It's made only for desktop screens and not for
				smaller mobile screens. It's made in ReactJS and TailwindCSS.
			</p>
			<a href="https://slides-react.vercel.app/" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- MOLECULES WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 right-12 lg:right-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={moleculesWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-left aspect-video rounded-xl lg:order-2"
		/>
		<div class="flex flex-col px-3">
			<h2>Molecules database</h2>
			<p>
				An Upwork project I turned it down, because I didn't know if I could build it. But I build
				it anyway. This is an app that fetches data from a large database of molecules and displays
				its information. It's made in ReactJS and TailwindCSS.
			</p>
			<a href="https://drug-molecules.vercel.app" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- MOVIES WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 left-12 lg:left-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={moviesWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-center aspect-video rounded-xl border"
		/>
		<div class="flex flex-col px-3">
			<h2>Movies database</h2>
			<p>
				Web app I made a while ago that fetches the movies from a database. Made in Svelte and
				TailwindCSS.
			</p>
			<a href="https://movies-app-markoskace1.vercel.app" target="_blank">Visit the site</a>
		</div>
	</div>

	<!-- DOUGHNUTS WEBSITE -->
	<div
		class="relative flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 lg:gap-3 rounded-r-xl"
	>
		<div
			class="absolute w-2/3 lg:w-full h-1/2 lg:h-full top-0 lg:-bottom-4 right-12 lg:right-24 rounded-xl border-4 border-lime-300 -z-10"
		></div>
		<img
			src={doughnutWebsite}
			alt="fotonepremicnine.si website"
			width="480px"
			height="235px"
			class="object-cover object-left aspect-video rounded-xl lg:order-2"
		/>
		<div class="flex flex-col px-3">
			<h2>Doughnuts website</h2>
			<p>
				I've found the design on Figma and really liked it. It' made in ReactJS and TailwindCSS.
			</p>
			<a href="https://markoskace1.github.io/doughnuts-react" target="_blank">Visit the site</a>
		</div>
	</div>
</section>
