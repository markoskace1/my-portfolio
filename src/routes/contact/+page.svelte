<script>
	import linkedInLogo from '$lib/images/linkedin-icon-3.svg';
	import upWorkIcon from '$lib/images/upwork-1.svg';
	import githubIcon from '$lib/images/github-icon-2.svg';
</script>

<section class="flex flex-col justify-center items-center space-y-12 max-w-5xl">
	<div
		class="prose prose-h3:text-slate-100 border-b border-violet-300 flex flex-col items-center gap-3"
	>
		<h3>Feel free to contact me here:</h3>
	</div>
	<div class="flex flex-row items-center gap-5">
		<a
			href="https://www.linkedin.com/in/bmitja/"
			target="_blank"
			class="hover:-translate-y-2 tranisition duration-300 ease-in-out hover:scale-110"
			><img src={linkedInLogo} alt="LinkedIn logo" height="40px" width="40px" /></a
		>

		<a
			href="https://github.com/markoskace1"
			target="_blank"
			class="hover:-translate-y-2 tranisition duration-300 ease-in-out hover:scale-110"
			><img src={githubIcon} alt="GitHub logo" height="40px" width="40px" /></a
		>
	</div>
</section>
