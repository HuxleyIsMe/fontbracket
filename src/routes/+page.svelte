<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import Contestant from '$lib/components/Contestant.svelte';
	import Bracket from '$lib/components/Bracket.svelte';
	import { BracketStore } from '$lib/bracket/bracket';

	const atLeastMedium = new MediaQuery('width >= 48rem', true);

	let bracket = $state(new BracketStore());
	let pairsIterator = $derived(bracket.pairs());

	let next = $derived(pairsIterator.next());
	let pair = $derived(typeof next.value !== 'string' ? next.value : null);
	let winner = $derived(typeof next.value === 'string' ? next.value : null);

	const choose = (font: string) => {
		pair?.choose(font);
		next = pairsIterator.next();
	};

	const reset = () => {
		bracket = new BracketStore();
	};
</script>

{#snippet contestant(font: string, side: 'left' | 'right')}
	<Contestant {side} {font} onclick={() => choose(font)} />
{/snippet}

<div class="flex flex-col justify-center gap-4">
	{#if winner}
		<div class="flex w-full">
			<Bracket {bracket} />
		</div>
	{:else if pair}
		<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
			{@render contestant(pair.fonts[0], 'left')}
			{#if atLeastMedium.current}
				<span class="md:vr h-full"></span>
			{:else}
				<hr class="hr" />
			{/if}
			{@render contestant(pair.fonts[1], 'right')}
		</div>
	{:else}
		<p>Not sure how you got here, but there's no valid fonts.</p>
	{/if}
	<button
		type="button"
		class="btn preset-outlined-error-500 hover:preset-tonal-error self-center"
		onclick={reset}>Reset</button
	>
</div>
