export interface CodeBlockProps {
	code?: string;
	lang?: 'console' | 'html' | 'css' | 'js';
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
