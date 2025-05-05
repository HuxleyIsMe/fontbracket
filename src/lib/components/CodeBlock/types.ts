import type { Language } from '$lib/examples';

export interface CodeBlockProps {
	code: string;
	lang: Language;
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
