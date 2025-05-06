import type { LanguageValue } from '$lib/examples/languages.svelte';

export interface CodeBlockProps {
	code?: string;
	lang?: LanguageValue;
	theme?: 'dark-plus';
	// Base style props
	base?: string;
	rounded?: string;
	shadow?: string;
	classes?: string;
	// Pre style props
	preBase?: string;
	prePadding?: string;
	preClasses?: string;
}
