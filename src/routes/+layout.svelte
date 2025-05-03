<script lang="ts">
	import { setBracket } from '$lib/bracket/bracket';
	import '../app.css';

	const fonts = ['Iosevka', 'Fira Code Variable', 'Roboto Mono Variable', 'IBM Plex Mono'];

	setBracket(fonts);

	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header class="bg-surface-950/80 sticky top-0 z-10 p-4 backdrop-blur-sm">
		<a href="/" class="anchor"><h1 class="h3">Font Bracket</h1></a>
	</header>
	<main class="bg-surface-950 space-y-4 p-4">
		{@render children()}
	</main>
	<footer class="bg-surface-950 p-4">(footer)</footer>
</div>
