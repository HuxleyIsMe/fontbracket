<script lang="ts">
	import type { BracketStore } from '$lib/bracket/bracket';
	import { onMount } from 'svelte';
	import type { Data, Contestants, Options } from './types';

	interface Props {
		bracket: BracketStore;
		atLeastMedium: boolean;
	}

	const { bracket, atLeastMedium }: Props = $props();

	const data: Data = $derived({
		rounds: bracket.rounds.map((_val, index) => ({ name: `Round ${index + 1}` })),
		contestants: bracket.fonts.reduce((acc, curr) => {
			acc[curr] = { players: [{ title: curr }] };
			return acc;
		}, {} as Contestants),
		matches: bracket.rounds.flatMap((round, roundIndex) => {
			return round.contests.map((contest, contestIndex) => {
				return {
					roundIndex,
					order: contestIndex,
					sides: contest.fonts.map((font) => ({
						contestantId: font === 'BYE' ? undefined : font,
						title: font === 'BYE' ? font : undefined,
						isWinner: font === contest.winner
					}))
				};
			});
		})
	});

	const baseOpts = $derived<Options>({
		connectionLinesColor: 'var(--color-surface-500)',
		highlightedConnectionLinesColor: 'var(--color-tertiary-500)',
		scrollButtonSvgColor: 'var(--color-surface-500)',
		matchStatusBgColor: 'var(--color-error-500)',
		navButtonSvgColor: 'var(--color-surface-500)',

		rootBorderColor: 'var(--color-surface-500)',

		matchTextColor: 'light-dark(var(--base-font-color), var(--base-font-color-dark))',
		roundTitleColor: 'light-dark(var(--heading-font-color), var(--heading-font-color-dark))',

		highlightedPlayerTitleColor:
			'light-dark(var(--anchor-font-color), var(--anchor-font-color-dark))',
		getPlayerTitleHTML: (player) => {
			return `<span style="font-family: ${player.title}">${player.title}</span>`;
		}
	});

	const mobileOpts: Options = $derived({
		...baseOpts,
		navButtonsPosition: 'beforeTitles',
		visibleRoundsCount: 1,
		leftNavButtonHTML: '<span>« PREV ROUND</span>',
		rightNavButtonHTML: '<span>NEXT ROUND »</span>',
		roundTitlesFontSize: 26,
		roundTitlesVerticalPadding: 4,
		matchHorMargin: 14,
		distanceBetweenScorePairs: 10,
		verticalScrollMode: 'mixed',
		scrollButtonPadding: '0px',
		matchMaxWidth: 360
	});

	let node: HTMLDivElement;

	onMount(async () => {
		const { createBracket } = await import('bracketry/dist/esm/index.js');
		if (atLeastMedium) {
			createBracket(data, node, baseOpts);
		} else {
			createBracket(data, node, mobileOpts);
		}
	});
</script>

<div bind:this={node} class="h-[720px] max-w-xs md:container"></div>
