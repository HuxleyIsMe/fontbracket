const colorSchemes = [
	{ label: 'Andromeeda', value: 'andromeeda' },
	{ label: 'Aurora X', value: 'aurora-x' },
	{ label: 'Ayu Dark', value: 'ayu-dark' },
	{ label: 'Catppuccin Frappé', value: 'catppuccin-frappe' },
	{ label: 'Catppuccin Latte', value: 'catppuccin-latte' },
	{ label: 'Catppuccin Macchiato', value: 'catppuccin-macchiato' },
	{ label: 'Catppuccin Mocha', value: 'catppuccin-mocha' },
	{ label: 'Dark Plus', value: 'dark-plus' },
	{ label: 'Dracula Theme', value: 'dracula' },
	{ label: 'Dracula Theme Soft', value: 'dracula-soft' },
	{ label: 'Everforest Dark', value: 'everforest-dark' },
	{ label: 'Everforest Light', value: 'everforest-light' },
	{ label: 'GitHub Dark', value: 'github-dark' },
	{ label: 'GitHub Dark Default', value: 'github-dark-default' },
	{ label: 'GitHub Dark Dimmed', value: 'github-dark-dimmed' },
	{ label: 'GitHub Dark High Contrast', value: 'github-dark-high-contrast' },
	{ label: 'GitHub Light', value: 'github-light' },
	{ label: 'GitHub Light Default', value: 'github-light-default' },
	{ label: 'GitHub Light High Contrast', value: 'github-light-high-contrast' },
	{ label: 'Gruvbox Dark Hard', value: 'gruvbox-dark-hard' },
	{ label: 'Gruvbox Dark Medium', value: 'gruvbox-dark-medium' },
	{ label: 'Gruvbox Dark Soft', value: 'gruvbox-dark-soft' },
	{ label: 'Gruvbox Light Hard', value: 'gruvbox-light-hard' },
	{ label: 'Gruvbox Light Medium', value: 'gruvbox-light-medium' },
	{ label: 'Gruvbox Light Soft', value: 'gruvbox-light-soft' },
	{ label: 'Houston', value: 'houston' },
	{ label: 'Kanagawa Dragon', value: 'kanagawa-dragon' },
	{ label: 'Kanagawa Lotus', value: 'kanagawa-lotus' },
	{ label: 'Kanagawa Wave', value: 'kanagawa-wave' },
	{ label: 'LaserWave', value: 'laserwave' },
	{ label: 'Light Plus', value: 'light-plus' },
	{ label: 'Material Theme', value: 'material-theme' },
	{ label: 'Material Theme Darker', value: 'material-theme-darker' },
	{ label: 'Material Theme Lighter', value: 'material-theme-lighter' },
	{ label: 'Material Theme Ocean', value: 'material-theme-ocean' },
	{ label: 'Material Theme Palenight', value: 'material-theme-palenight' },
	{ label: 'Min Dark', value: 'min-dark' },
	{ label: 'Min Light', value: 'min-light' },
	{ label: 'Monokai', value: 'monokai' },
	{ label: 'Night Owl', value: 'night-owl' },
	{ label: 'Nord', value: 'nord' },
	{ label: 'One Dark Pro', value: 'one-dark-pro' },
	{ label: 'One Light', value: 'one-light' },
	{ label: 'Plastic', value: 'plastic' },
	{ label: 'Poimandres', value: 'poimandres' },
	{ label: 'Red', value: 'red' },
	{ label: 'Rosé Pine', value: 'rose-pine' },
	{ label: 'Rosé Pine Dawn', value: 'rose-pine-dawn' },
	{ label: 'Rosé Pine Moon', value: 'rose-pine-moon' },
	{ label: 'Slack Dark', value: 'slack-dark' },
	{ label: 'Slack Ochin', value: 'slack-ochin' },
	{ label: 'Snazzy Light', value: 'snazzy-light' },
	{ label: 'Solarized Dark', value: 'solarized-dark' },
	{ label: 'Solarized Light', value: 'solarized-light' },
	{ label: "Synthwave '84", value: 'synthwave-84' },
	{ label: 'Tokyo Night', value: 'tokyo-night' },
	{ label: 'Vesper', value: 'vesper' },
	{ label: 'Vitesse Black', value: 'vitesse-black' },
	{ label: 'Vitesse Dark', value: 'vitesse-dark' },
	{ label: 'Vitesse Light', value: 'vitesse-light' }
] as const;

export type ColorSchemeValue = (typeof colorSchemes)[number]['value'];
export type ColorScheme = (typeof colorSchemes)[number];

class ColorSchemeStore {
	#selected?: (typeof colorSchemes)[number] = $state();
	#options = colorSchemes;

	constructor() {
		this.#selected = this.#options[7]; // dark-plus
	}

	public get selected(): ColorScheme | undefined {
		return this.#selected;
	}

	public set selected(v: ColorScheme) {
		this.#selected = v;
	}

	public get options(): typeof colorSchemes {
		return this.#options;
	}
}

const colorSchemeStore = new ColorSchemeStore();

export { colorSchemeStore };
