<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource-variable/orbitron';
	import Navbar from '$lib/components/Navbar.svelte';

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<main
	class="{$page.url.pathname === '/' ? 'h-screen justify-center' : ''} flex flex-col items-center"
>
	{#if $page.url.pathname !== '/'}
		<Navbar />
	{/if}
	<slot />
</main>
