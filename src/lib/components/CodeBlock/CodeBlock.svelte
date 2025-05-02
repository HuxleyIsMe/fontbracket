<script lang="ts" module>
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

	// Themes
	// https://shiki.style/themes
	import themeDarkPlus from 'shiki/themes/dark-plus.mjs';

	// Languages
	// https://shiki.style/languages
	import console from 'shiki/langs/console.mjs';
	import html from 'shiki/langs/html.mjs';
	import css from 'shiki/langs/css.mjs';
	import js from 'shiki/langs/javascript.mjs';

	// https://shiki.style/guide/sync-usage
	const shiki = createHighlighterCoreSync({
		engine: createJavaScriptRegexEngine(),
		themes: [themeDarkPlus],
		langs: [console, html, css, js]
	});
</script>

<script lang="ts">
	import type { CodeBlockProps } from './types';

	let {
		code = '',
		lang = 'console',
		theme = 'dark-plus',
		// Base style props
		base = 'overflow-hidden',
		rounded = 'rounded-container',
		shadow = '',
		classes = '',
		// Pre style props
		preBase = '',
		prePadding = '[&>pre]:p-4',
		preClasses = ''
	}: CodeBlockProps = $props();

	const generatedHtml = shiki.codeToHtml(code, { lang, theme });
</script>

<div class="{base} {rounded} {shadow} {classes} {preBase} {prePadding} {preClasses}">
	{@html generatedHtml}
</div>
