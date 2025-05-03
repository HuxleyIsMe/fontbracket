import { Contest } from './contest';

export class Round {
	contests: Contest[] = [];

	constructor(fonts: string[]) {
		for (let i = 1; i < fonts.length; i += 2) {
			this.contests.push(new Contest([fonts[i - 1], fonts[i]]));
		}
	}

	*pairs() {
		if (!this.contests.length) {
			throw new Error("Can't run a tournament without any contestants");
		}

		const winners: string[] = [];
		for (const pair of this.contests) {
			yield pair;
			if (!pair.winner) {
				throw new Error('Must choose a winner before requesting next pair');
			}

			winners.push(pair.winner);
		}

		if (winners.length > 1) {
			return new Round(winners);
		}

		return winners[0];
	}
}
