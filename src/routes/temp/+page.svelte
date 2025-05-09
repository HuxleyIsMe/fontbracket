<script lang="ts">
	import { onMount } from 'svelte';
	import type { Data, Options } from './types';

	let node: HTMLDivElement;

	const data: Data = {
		rounds: [{ name: 'Round 1' }, { name: 'Round 2' }],
		contestants: {
			Iosevka: { players: [{ title: 'Iosevka' }] },
			'Fira Code Variable': {
				players: [{ title: 'Fira Code Variable' }]
			},
			'Roboto Mono Variable': {
				players: [{ title: 'Roboto Mono Variable' }]
			},
			'IBM Plex Mono': {
				players: [{ title: 'IBM Plex Mono' }]
			}
		},
		matches: [
			{
				roundIndex: 0,
				order: 0,
				sides: [
					{
						contestantId: 'Iosevka',
						isWinner: false
					},
					{
						contestantId: 'Fira Code Variable',
						isWinner: true
					}
				]
			},
			{
				roundIndex: 0,
				order: 1,
				sides: [
					{
						contestantId: 'Roboto Mono Variable',
						isWinner: false
					},
					{
						contestantId: 'IBM Plex Mono',
						isWinner: true
					}
				]
			},
			{
				roundIndex: 1,
				order: 0,
				sides: [
					{
						contestantId: 'Fira Code Variable',
						isWinner: false
					},
					{
						contestantId: 'IBM Plex Mono',
						isWinner: true
					}
				]
			}
		]
	};

	const opts = $derived<Options>({
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

	onMount(async () => {
		const { createBracket } = await import('bracketry/dist/esm/index.js');
		createBracket(data, node, opts);
	});
</script>

<div bind:this={node}></div>
