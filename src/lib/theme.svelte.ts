import { browser } from '$app/environment';

const themes = [
	{
		label: 'Catppuccin',
		value: 'catppuccin'
	},
	{
		label: 'Cerberus',
		value: 'cerberus'
	},
	{
		label: 'Concord',
		value: 'concord'
	},
	{
		label: 'Crimson',
		value: 'crimson'
	},
	{
		label: 'Fennec',
		value: 'fennec'
	},
	{
		label: 'Hamlindigo',
		value: 'hamlindigo'
	},
	{
		label: 'Legacy',
		value: 'legacy'
	},
	{
		label: 'Mint',
		value: 'mint'
	},
	{
		label: 'Modern',
		value: 'modern'
	},
	{
		label: 'Mona',
		value: 'mona'
	},
	{
		label: 'Nosh',
		value: 'nosh'
	},
	{
		label: 'Nouveau',
		value: 'nouveau'
	},
	{
		label: 'Pine',
		value: 'pine'
	},
	{
		label: 'Reign',
		value: 'reign'
	},
	{
		label: 'Rocket',
		value: 'rocket'
	},
	{
		label: 'Rose',
		value: 'rose'
	},
	{
		label: 'Sahara',
		value: 'sahara'
	},
	{
		label: 'Seafoam',
		value: 'seafoam'
	},
	{
		label: 'Terminus',
		value: 'terminus'
	},
	{
		label: 'Vintage',
		value: 'vintage'
	},
	{
		label: 'Vox',
		value: 'vox'
	},
	{
		label: 'Wintry',
		value: 'wintry'
	}
] as const;

export type Theme = (typeof themes)[number];
export type ThemeValue = (typeof themes)[number]['value'];

class ThemeStore {
	#selected? = $state<(typeof themes)[number]>();
	#darkMode? = $state<boolean>();
	#options = themes;

	constructor(darkMode: boolean) {
		if (browser && localStorage.getItem('theme')) {
			this.#selected = this.#options.find((theme) => theme.value === localStorage.getItem('theme'));
		} else {
			this.#selected = this.#options[0];
		}
		this.#darkMode = darkMode;
	}

	public get selected(): Theme | undefined {
		return this.#selected;
	}

	public set selected(v: Theme) {
		if (browser) {
			localStorage.setItem('theme', v.value);
			document.documentElement.setAttribute('data-theme', v.value);
		}
		this.#selected = v;
	}

	public get options(): typeof themes {
		return this.#options;
	}

	public get darkMode() {
		return !!this.#darkMode;
	}

	public set darkMode(val: boolean) {
		const mode = val ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		this.#darkMode = val;
	}
}

const themeStore = new ThemeStore(false);

export { themeStore };
