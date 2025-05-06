<script lang="ts">
	import type { BracketStore } from '$lib/bracket/bracket';

	// Adapted from https://svelte.dev/playground/4941cafa6eee409d947716816190222f?version=5.28.2
	interface Props {
		bracket: BracketStore;
	}

	let { bracket }: Props = $props();
</script>

{#each bracket.rounds as round, index (index)}
	<ul>
		{#each round.contests as contest, index (index)}
			{#each contest.fonts as font, index (index)}
				<li
					style:font-family={font}
					class={font === contest.winner ? 'text-success-500' : 'text-error-500'}
				>
					{font}
				</li>
			{/each}
		{/each}
	</ul>
	{@const winner = round.winners.length === 1 && round.winners[0]}
	{#if winner}
		<h2 style:font-family={winner} class="text-success-500">{winner}</h2>
	{/if}
{/each}

<style>
	/* to align the names vertically, stretch the list items in a flex-column  */
	ul {
		display: flex;
		flex-direction: column;
		/* flex grow to have the lists stretch and cover the available width (same as the heading) */
		flex-grow: 1;
		list-style: none;
	}
	ul li,
	h2 {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem 0.5rem;
		text-align: center;
	}
	ul li {
		position: relative;
		font-size: 0.95rem;
	}
	/* with pseudo elements draw the following structure next to each couplet
	---
		|
		|
	---

	draw half the structure on the even items and the mirrored structure on the odd ones
	*/
	ul li:before,
	ul li:after {
		position: absolute;
		content: '';
		top: 50%;
		left: 100%;
		background: var(--color-tertiary-500);
	}
	ul li:before {
		width: 1rem;
		height: 2px;
		transform: translate(-100%, -50%);
	}
	ul li:after {
		width: 2px;
		height: 100%;
	}
	ul:nth-of-type(n) li:nth-of-type(odd):after {
		transform: translate(0%, 0%);
	}
	ul:nth-of-type(n) li:nth-of-type(even):after {
		transform: translate(0%, -100%);
	}
	h2 {
		font-size: 1.25rem;
	}
</style>
