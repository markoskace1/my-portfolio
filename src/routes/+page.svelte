<script lang="ts">
	import BrowserCheck from '$lib/components/BrowserCheck.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let firstLoad: boolean = false;
	let supportsViewTransitions: boolean = false;
	let showBrowserCheck: boolean = false;

	onMount(() => {
		firstLoad = true;

		// @ts-ignore
		if (document && 'startViewTransition' in document) {
			supportsViewTransitions = true;
		} else {
			setTimeout(() => {
				supportsViewTransitions = false;
				showBrowserCheck = true;
			}, 1000);
			setTimeout(() => {
				showBrowserCheck = false;
				// Add this line to store the value in session storage after 10s after modal was shown instead
				// of storing a session after clicking to close the modal
				//
				// if (!sessionStorage.getItem("modalShown")) {
				//   sessionStorage.setItem("modalShown", "true");
				// }
			}, 10000);
		}
	});
</script>

<Navbar />

{#if showBrowserCheck && !supportsViewTransitions && !sessionStorage.getItem('modalShown')}
	<div
		in:slide={{ axis: 'y', duration: 500 }}
		out:slide={{ axis: 'y', duration: 500 }}
		id="modalShown"
		class="absolute block bottom-4 right-4"
	>
		<BrowserCheck bind:supportsViewTransitions />
	</div>
{/if}
