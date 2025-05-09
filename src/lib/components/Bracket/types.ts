export type Data = {
	rounds: Round[];
	matches?: Match[];
	contestants?: Contestants;
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

export type Contestants = {
	[contestantId: string]: Contestant;
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
	navButtonsPosition?: 'gutters' | 'overMatches' | 'beforeTitles' | 'overTitles' | 'hidden';
	visibleRoundsCount?: number;
	leftNavButtonHTML?: string;
	rightNavButtonHTML?: string;
	roundTitlesFontSize?: number;
	roundTitlesVerticalPadding?: number;
	matchFontSize?: number;
	matchHorMargin?: number;
	distanceBetweenScorePairs?: number;
	disableHighlight?: boolean;
	verticalScrollMode?: 'native' | 'buttons' | 'mixed';
	scrollButtonPadding?: string;
	maxMatchWidth?: number;

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
