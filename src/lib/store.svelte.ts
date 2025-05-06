export class Store<const T> {
	#selected?: V = $state();
	#options: T;

	constructor(options: T, indexOfSelected: number) {
		this.#options = options;
		this.#selected = this.#options[indexOfSelected];
	}

	public get selected(): V | undefined {
		return this.#selected;
	}

	public set selected(v: V) {
		this.#selected = v;
	}

	public get options(): T {
		return this.#options;
	}
}
