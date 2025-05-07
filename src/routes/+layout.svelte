<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import RcScout from '$lib/components/RCScout.svelte';
	import SettingsDrawer from '$lib/components/SettingsDrawer/SettingsDrawer.svelte';
	import '../app.css';
	import { setFontStore } from '$lib/fonts.svelte';

	let { children } = $props();

	setFontStore();
</script>

<svelte:head>
	<script>
		const theme = localStorage.getItem('theme') || 'catppuccin';
		document.documentElement.setAttribute('data-theme', theme);
		let mode = localStorage.getItem('mode') || 'dark';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<AppBar base="sticky top-0 z-10 h-16" background="bg-surface-50-950/80 backdrop-blur-sm">
		{#snippet trail()}
			<SettingsDrawer />
		{/snippet}
		{#snippet lead()}
			<h1 class="h3">
				<AnimatedLink href="/" class="dark:heading-font-color-dark heading-font-color"
					>Font Bracket</AnimatedLink
				>
			</h1>
		{/snippet}
	</AppBar>
	<main class="bg-surface-50-950 space-y-4 p-4">
		{@render children()}
	</main>
	<footer class="bg-surface-50-950 h-16 p-4"><RcScout /></footer>
</div>
