import { browser } from '$app/environment';
import { go, js, python, rust } from './fizzbuzz';

export type LanguageValue = 'go' | 'js' | 'python' | 'rust' | 'console';

export interface Language {
	value: LanguageValue;
	label: string;
	code: string;
}

class LanguageStore {
	#selected?: Language = $state();
	#options: Language[] = $state([
		{
			value: 'js',
			label: 'JavaScript',
			code: js
		},
		{
			value: 'go',
			label: 'Go',
			code: go
		},
		{
			value: 'rust',
			label: 'Rust',
			code: rust
		},
		{
			value: 'python',
			label: 'Python',
			code: python
		}
	]);

	constructor() {
		if (browser && localStorage.getItem('lang')) {
			this.#selected = this.#options.find((lang) => lang.value === localStorage.getItem('lang'));
		} else {
			this.#selected = this.#options[0];
		}
	}

	public get selected(): Language | undefined {
		return this.#selected;
	}

	public set selected(v: Language) {
		if (browser) {
			localStorage.setItem('lang', v.value);
		}
		this.#selected = v;
	}

	public get options(): Language[] {
		return this.#options;
	}
}

const languageStore = new LanguageStore();

export { languageStore };
