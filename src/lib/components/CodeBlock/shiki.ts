import { colorSchemeStore } from '$lib/examples/colorscheme.svelte';
import { languageStore } from '$lib/examples/languages.svelte';
import { createHighlighter } from 'shiki';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const shiki = createHighlighter({
	engine: createJavaScriptRegexEngine(),
	themes: colorSchemeStore.options.map((colorscheme) => colorscheme.value),
	langs: languageStore.options.map((lang) => lang.value)
});

export { shiki };
