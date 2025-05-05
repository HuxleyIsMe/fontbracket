<script lang="ts">
	import { setBracket } from '$lib/bracket/bracket';
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import RcScout from '$lib/components/RCScout.svelte';
	import '../app.css';

	const fonts = ['Iosevka', 'Fira Code Variable', 'Roboto Mono Variable', 'IBM Plex Mono'];

	setBracket(fonts);

	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="bg-surface-50-950/80 sticky top-0 z-10 p-4 backdrop-blur-sm">
		<h1 class="h3"><AnimatedLink href="/">Font Bracket</AnimatedLink></h1>
	</header>
	<main class="bg-surface-50-950 space-y-4 p-4">
		{@render children()}
	</main>
	<footer class="bg-surface-50-950 p-4"><RcScout /></footer>
</div>
