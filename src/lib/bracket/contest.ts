export class Contest {
	fonts: [string, string];
	winner?: string;

	constructor(fonts: [string, string]) {
		this.fonts = fonts;
		if (this.fonts.includes('BYE')) {
			this.winner = this.fonts.find((font) => font !== 'BYE');
		}
	}

	choose = (font: string) => {
		this.winner = font;
	};
}
