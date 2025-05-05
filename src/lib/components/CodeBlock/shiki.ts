import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

export const shiki = createHighlighterCore({
	engine: createJavaScriptRegexEngine(),
	themes: [import('shiki/themes/dark-plus.mjs')],
	langs: [
		import('shiki/langs/javascript.mjs'),
		import('shiki/langs/go.mjs'),
		import('shiki/langs/python.mjs'),
		import('shiki/langs/rust.mjs')
	]
});
