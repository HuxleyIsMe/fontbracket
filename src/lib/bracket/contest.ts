export class Contest {
	fonts: [string, string];
	winner?: string;

	constructor(fonts: [string, string]) {
		this.fonts = fonts;
	}

	choose = (font: string) => {
		this.winner = font;
	};
}
