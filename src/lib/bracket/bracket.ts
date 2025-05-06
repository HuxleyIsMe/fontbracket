import { Round } from './round';

const defaultFonts = ['Iosevka', 'Fira Code Variable', 'Roboto Mono Variable', 'IBM Plex Mono'];

export class BracketStore {
	fonts: string[] = [];
	rounds: Round[] = [];

	constructor(fonts = defaultFonts) {
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

const shuffle = (fonts: string[]) => {
	for (let i = fonts.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[fonts[i], fonts[j]] = [fonts[j], fonts[i]];
	}
	return fonts;
};
