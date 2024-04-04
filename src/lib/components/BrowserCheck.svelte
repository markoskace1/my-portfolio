<script lang="ts">
	export let supportsViewTransitions: boolean;

	let handleModalClose = () => {
		supportsViewTransitions = true;
		sessionStorage.setItem('modalShown', 'true');
	};
</script>

<div class="flex w-fit items-center mx-auto justify-center gap-6 bg-slate-700 px-4 py-1 shadow-xl">
	<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"
		><path
			fill="rgb(214 211 209)"
			d="M108 84a16 16 0 1 1 16 16a16 16 0 0 1-16-16m128 44A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84m-72 36.68V132a20 20 0 0 0-20-20a12 12 0 0 0-4 23.32V168a20 20 0 0 0 20 20a12 12 0 0 0 4-23.32"
		/></svg
	>

	<div class="flex prose prose-sm prose-p:text-stone-300 prose-p:m-0 prose-p:italic">
		<p>
			Your browser does not support ViewTransition API. For better user experience, please open this
			website in Chrome, Edge or Opera.
		</p>
	</div>

	<button
		on:click={handleModalClose}
		type="button"
		class="hover:bg-slate-500 rounded-full transition duration-200 ease-in-out"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"
			><path
				fill="rgb(214 211 209)"
				d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
			/></svg
		>
	</button>
</div>
