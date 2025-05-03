import { getContext, setContext } from 'svelte';
import { Round } from './round';

class Bracket {
	fonts: string[] = [];
	rounds: Round[] = [];

	constructor(fonts: string[]) {
		// if (!isPowerOf2(this.fonts.length)) {
		// 	// TEMPORARY
		// 	throw new Error('fonts length must be power of 2 for now');
		// }
		this.fonts = shuffle(fonts);
	}

	*pairs() {
		let round = new Round(this.fonts);
		while (true) {
			this.rounds.push(round);
			const result = yield* round.pairs();
			if (typeof result === 'string') {
				return result;
			}

			round = result;
		}
	}

	winner() {}
}

const shuffle = (fonts: string[]) => {
	for (let i = fonts.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[fonts[i], fonts[j]] = [fonts[j], fonts[i]];
	}
	return fonts;
};

const isPowerOf2 = (v: number) => {
	return v && !(v & (v - 1));
};

const DEFAULT_KEY = 'BRACKET';

export const setBracket = (fonts: string[], key = DEFAULT_KEY) => {
	const bracket = new Bracket(fonts);
	setContext(key, bracket);
};

export const getBracket = (key = DEFAULT_KEY) => {
	return getContext<Bracket>(key);
};
