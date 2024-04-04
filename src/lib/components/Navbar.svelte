<script lang="ts">
	import { page } from '$app/stores';
	import '@fontsource/covered-by-your-grace';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import BrowserCheck from './BrowserCheck.svelte';
</script>

<header class="flex items-center justify-center pt-12 pb-24">
	<nav>
		<ul
			class="flex flex-col text-lg font-medium sm:flex-row items-center justify-between space-x-2 md:space-x-8"
		>
			<li
				class="{$page.url.pathname === '/about'
					? 'bg-yellow-300 text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-sm after:border-transparent after:shadow-yellow-300 after:shadow-xl after:-z-10'
					: 'hover:bg-yellow-300 hover:text-slate-900 '} relative tracking-widest p-3 transition duration-500 ease-in-out"
			>
				<a href="/about" class="p-3">about</a>
			</li>
			<li
				class="{$page.url.pathname === '/skills'
					? 'bg-cyan-300 text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-md after:border-transparent after:shadow-cyan-300 after:shadow-xl after:-z-10'
					: 'hover:bg-cyan-300 hover:text-slate-900'} relative tracking-widest p-3 transition duration-500 ease-in-out"
			>
				<a href="/skills" class="p-3">skills</a>
			</li>

			<li
				class="font-logo font-normal px-6 text-slate-50 text-6xl md:text-8xl lg:text-9xl order-first md:order-none"
			>
				<a href="/">MB</a>
			</li>

			<li
				class="{$page.url.pathname == '/work'
					? 'bg-lime-300  text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-md after:border-transparent after:shadow-lime-300 after:shadow-xl after:-z-10'
					: 'hover:bg-lime-300 hover:text-slate-900'} relative tracking-widest p-3 transition duration-500 ease-in-out"
			>
				<a href="/work" class="p-3">work</a>
			</li>
			<li
				class="{$page.url.pathname == '/contact'
					? 'bg-violet-300  text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-md after:border-transparent after:shadow-violet-300 after:shadow-xl after:-z-10'
					: 'hover:bg-violet-300 hover:text-slate-900'} relative tracking-widest p-3 transition duration-500 ease-in-out"
			>
				<a href="/contact" class="p-3">contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		view-transition-name: navlinks;
	}
</style>
