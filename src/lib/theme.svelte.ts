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
	#selected?: (typeof themes)[number] = $state();
	#options = themes;

	constructor() {
		this.#selected = this.#options[0];
	}

	public get selected(): Theme | undefined {
		return this.#selected;
	}

	public set selected(v: Theme) {
		this.#selected = v;
		document.documentElement.setAttribute('data-theme', v.value);
	}

	public get options(): typeof themes {
		return this.#options;
	}
}

const themeStore = new ThemeStore();

export { themeStore };
