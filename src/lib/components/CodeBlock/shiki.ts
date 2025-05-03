import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

export const shiki = createHighlighterCore({
	engine: createJavaScriptRegexEngine(),
	themes: [import('shiki/themes/dark-plus.mjs')],
	langs: [
		import('shiki/langs/console.mjs'),
		import('shiki/langs/html.mjs'),
		import('shiki/langs/css.mjs'),
		import('shiki/langs/javascript.mjs')
	]
});
