<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import Contestant from '$lib/components/Contestant.svelte';
	import Bracket from '$lib/components/Bracket/Bracket.svelte';
	import { BracketStore } from '$lib/bracket/bracket';
	import { getFontStore, type Font } from '$lib/fonts.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	const atLeastMedium = new MediaQuery('width >= 48rem', true);

	let fontStore = getFontStore();
	let fonts: Font[] = $derived(
		fontStore
			.keys()
			.filter((font) => fontStore.get(font))
			.toArray()
	);

	let bracket = $derived(new BracketStore(fonts));
	let pairsIterator = $derived(bracket.pairs());

	let next = $derived(pairsIterator.next());
	let pair = $derived(typeof next.value !== 'string' ? next.value : null);
	let winner = $derived(typeof next.value === 'string' ? next.value : null);

	const choose = (font: string) => {
		pair?.choose(font);
		next = pairsIterator.next();
	};

	const reset = () => {
		bracket = new BracketStore(fonts);
	};

	let showFontName = $state(false);
</script>

{#snippet contestant(font: string, side: 'left' | 'right')}
	<Contestant {side} {showFontName} {font} onclick={() => choose(font)} />
{/snippet}

<div class="flex w-full flex-col justify-center gap-4">
	{#if winner}
		<Bracket {bracket} />
	{:else if pair}
		<label class="label flex items-center space-x-2">
			<Switch
				checked={showFontName}
				onCheckedChange={(e: { checked: boolean }) => (showFontName = e.checked)}
			></Switch>
			<span class="label-text">Show Font Names</span>
		</label>
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
