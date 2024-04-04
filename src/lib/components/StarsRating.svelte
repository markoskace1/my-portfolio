<script lang="ts">
	import { Star, StarHalf } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { backOut } from 'svelte/easing';

	import { scale } from 'svelte/transition';

	export let rating: number;

	interface Star {
		visible: boolean;
		half: boolean;
	}

	let stars: Star[] = Array.from({ length: Math.floor(rating) }, (_, index) => ({
		visible: false,
		half: false
	}));

	if (rating % 1 !== 0) {
		stars.push({
			visible: false,
			half: true
		});
	}

	onMount(() => {
		stars.forEach((_, index) => {
			setTimeout(() => {
				stars[index] = { ...stars[index], visible: true };
			}, index * 100);
		});
	});
</script>

{#each Array.from({ length: 5 }) as _, index (index)}
	{#if stars && stars[index]?.visible}
		<div in:scale={{ duration: 500, easing: backOut }}>
			{#if stars[index]?.half}
				<StarHalf size={40} color="rgb(103 232 249)" />
			{:else}
				<Star size={40} color="rgb(103 232 249)" />
			{/if}
		</div>
	{/if}
{/each}
