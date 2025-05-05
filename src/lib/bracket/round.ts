import { Contest } from './contest';

export class Round {
	contests: Contest[] = [];
	winners: string[] = [];

	constructor(fonts: string[]) {
		if (fonts.length < 2) {
			throw new Error('must have at least 2 fonts');
		}

		const contestants = [...fonts];

		if (contestants.length % 2 !== 0) {
			const bye = Math.floor(Math.random() * fonts.length);
			this.winners.push(...contestants.splice(bye, 1));
		}

		for (let i = 1; i < contestants.length; i += 2) {
			this.contests.push(new Contest([contestants[i - 1], contestants[i]]));
		}
	}

	*pairs() {
		if (!this.contests.length) {
			throw new Error("Can't run a tournament without any contestants");
		}

		for (const pair of this.contests) {
			yield pair;
			if (!pair.winner) {
				throw new Error('Must choose a winner before requesting next pair');
			}

			this.winners.push(pair.winner);
		}

		if (this.winners.length === 1) {
			return this.winners[0];
		}

		return new Round(this.winners);
	}
}
