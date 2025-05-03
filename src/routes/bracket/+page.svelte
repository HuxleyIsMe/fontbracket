<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import Contestant from './Contestant.svelte';
	import { getBracket } from '$lib/bracket/bracket';
	import type { Contest } from '$lib/bracket/contest';

	const atLeastMedium = new MediaQuery('width >= 48rem', true);

	const exampleJavascript = 'const foo = 0 >= 2 ? : "IMPOSSIBLE" : { key: ["testing"] }';

	const bracket = getBracket();
	const pairsIterator = bracket.pairs();

	let next = $state(pairsIterator.next());
	let pair = $derived(typeof next.value !== 'string' ? next.value : null);
	let winner = $derived(typeof next.value === 'string' ? next.value : null);

	const choose = (font: string, contest: Contest) => {
		contest.choose(font);
		next = pairsIterator.next();
	};
</script>

{#snippet contestant(font: string, side: 'left' | 'right', pair: Contest)}
	<Contestant code={exampleJavascript} lang="js" {side} {font} onclick={() => choose(font, pair)} />
{/snippet}

{#if winner}
	<p>You chose {winner}.</p>
{:else if pair}
	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
		{@render contestant(pair.fonts[0], 'left', pair)}
		{#if atLeastMedium.current}
			<span class="md:vr h-full"></span>
		{:else}
			<hr class="hr" />
		{/if}
		{@render contestant(pair.fonts[1], 'right', pair)}
	</div>
{:else}
	<p>Not sure how you got here, but there's no valid fonts.</p>
{/if}
