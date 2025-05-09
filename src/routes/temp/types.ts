export type Data = {
	rounds: Round[];
	matches?: Match[];
	contestants?: {
		[contestantId: string]: Contestant;
	};
};

export type Round = {
	name?: string;
};

export type Match = {
	roundIndex: number; // 0-based
	order: number; // 0-based
	sides?: Side[];
	matchStatus?: string;
};

export type Contestant = {
	players: Player[];
};

export type Side = {
	title?: string;
	contestantId?: string;
	isWinner?: boolean;
};

export type Player = {
	title: string;
};

export type Options = {
	connectionLinesColor: string;
	highlightedConnectionLinesColor: string;
	scrollButtonSvgColor: string;
	matchStatusBgColor: string;
	navButtonSvgColor: string;

	rootBorderColor: string;

	matchTextColor: string;
	roundTitleColor: string;

	highlightedPlayerTitleColor: string;
	getPlayerTitleHTML: (
		player: Player,
		context: { roundIndex: number; matchOrder: number; contestantId: string; playerIndex: number }
	) => string;
};
