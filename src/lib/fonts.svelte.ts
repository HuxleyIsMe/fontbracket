import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

const defaultFonts = [
	'Iosevka',
	'Fira Code Variable',
	'Roboto Mono Variable',
	'IBM Plex Mono'
] as const;

export type Font = (typeof defaultFonts)[number];

const DEFAULT_KEY = 'fonts';

export const setFontStore = (fonts?: Font[], key = DEFAULT_KEY) => {
	if (!fonts && browser && localStorage.getItem('fonts')) {
		const storedFonts = Object.entries(JSON.parse(localStorage.getItem('fonts')!)) as [
			Font,
			boolean
		][];
		setContext(key, new SvelteMap(storedFonts));
	}
	if (!fonts) {
		fonts = [...defaultFonts];
	}

	setContext(key, new SvelteMap(fonts.map((font) => [font, true])));
};

export const getFontStore = (key = DEFAULT_KEY) => {
	return getContext<SvelteMap<Font, boolean>>(key);
};

export const saveFontStore = (store: SvelteMap<Font, boolean>, key = DEFAULT_KEY) => {
	localStorage.setItem(key, JSON.stringify(Object.fromEntries(store)));
};
