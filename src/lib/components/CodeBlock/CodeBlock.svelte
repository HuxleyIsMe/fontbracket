<script lang="ts" module>
	import { shiki } from './shiki';
</script>

<script lang="ts">
	import type { CodeBlockProps } from './types';

	let {
		code,
		lang,
		theme = 'dark-plus',
		// Base style props
		base = 'overflow-auto',
		rounded = 'rounded-container',
		shadow = '',
		classes = '',
		// Pre style props
		preBase = '',
		prePadding = '[&>pre]:p-4',
		preClasses = ''
	}: CodeBlockProps = $props();
</script>

<div class="{base} {rounded} {shadow} {classes} {preBase} {prePadding} {preClasses}">
	{#await shiki}
		<div>loading...</div>
	{:then highlighter}
		{@html highlighter.codeToHtml(code, { lang, theme })}
	{/await}
</div>

<style>
	:global(.shiki),
	:global(.shiki span) {
		font-family: var(--contestant-font) !important;
	}
</style>
