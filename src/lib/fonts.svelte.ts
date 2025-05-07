import { getContext, setContext } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

const defaultFonts = [
	'Iosevka',
	'Fira Code Variable',
	'Roboto Mono Variable',
	'IBM Plex Mono',
	'Monaspace Neon',
	'Monaspace Argon',
	'Monaspace Krypton',
	'Fira Mono',
	'Source Code Pro Variable',
	'JetBrains Mono Variable',
	'DM Mono',
	'Inconsolata Variable',
	'Ubuntu Mono',
	'PT Mono',
	'Space Mono',
	'Courier Prime',
	'Geist Mono Variable',
	'Overpass Mono Variable',
	'Red Hat Mono Variable',
	'Victor Mono Variable',
	'Azeret Mono Variable',
	'iA Writer Mono',
	'Noto Mono',
	'VT323',
	'Anonymous Pro',
	'iA Writer Duo',
	'Chivo Mono Variable',
	'Sometype Mono Variable',
	'Reddit Mono Variable',
	'Spline Sans Mono Variable',
	'Oxygen Mono',
	'B612 Mono',
	'Cousine',
	'Martian Mono Variable',
	'Nova Mono',
	'Xanh Mono',
	'Maple Mono',
	'M PLUS 1 Code Variable',
	'Ubuntu Sans Mono Variable',
	'Comic Mono',
	'Kode Mono Variable',
	'Cutive Mono',
	'Fragment Mono',
	'Mononoki',
	'Iosevka Etoile',
	'Iosevka Aile',
	'Syne Mono',
	'Commit Mono',
	'League Mono',
	'Pitagon Sans Mono',
	'Iosevka Curly',
	'LXGW WenKai Mono TC',
	'Iosevka Curly Slab',
	'UnifontEX',
	'Cascadia Code',
	'Cascadia Mono',
	'Atkinson Hyperlegible Mono',
	'Recursive'
] as const;

export type Font = (typeof defaultFonts)[number];

const DEFAULT_KEY = 'fonts';

export const setFontStore = (fonts: Font[] = [...defaultFonts], key = DEFAULT_KEY) => {
	setContext(key, new SvelteMap(fonts.map((font) => [font, true])));
};

export const getFontStore = (key = DEFAULT_KEY) => {
	return getContext<SvelteMap<Font, boolean>>(key);
};

const showFontNames = $state(false);

export const getShowFontNames = () => {
	return getContext<boolean>('showFontNames');
};

export const setShowFontNames = () => {
	setContext('showFontNames', showFontNames);
};
