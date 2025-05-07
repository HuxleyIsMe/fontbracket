import type { Font } from '$lib/fonts.svelte';
import { Round } from './round';

export class BracketStore {
	fonts: Font[] = [];
	rounds: Round[] = [];

	constructor(fonts: Font[] = []) {
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
}

const shuffle = (fonts: Font[]) => {
	for (let i = fonts.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[fonts[i], fonts[j]] = [fonts[j], fonts[i]];
	}
	return fonts;
};
