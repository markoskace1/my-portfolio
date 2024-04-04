<script>
	import linkedInLogo from '$lib/images/linkedin-icon-3.svg';
	import githubIcon from '$lib/images/github-icon-2.svg';
</script>

<section class="flex flex-col w-screen space-y-12 max-w-5xl">
	<div class="flex flex-col items-center gap-3">
		<p>Feel free to contact me here:</p>
		<a href="https://www.linkedin.com/in/bmitja/" target="_blank"
			><img src={linkedInLogo} alt="LinkedIn logo" height="32px" width="32px" /></a
		>
	</div>
	<div class="flex flex-col items-center gap-3">
		<p>...and my Github repo:</p>
		<a href="https://github.com/markoskace1" target="_blank"
			><img src={githubIcon} alt="GitHub logo" height="32px" width="32px" /></a
		>
	</div>
</section>
