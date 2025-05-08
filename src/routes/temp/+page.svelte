<script lang="ts">
	import { createBracket } from 'bracketry';
	import type { Action } from 'svelte/action';

	const bracket: Action<HTMLDivElement> = (node) => {
		createBracket(
			{
				rounds: [{ name: 'Round 1' }],
				matches: [
					{
						roundIndex: 0,
						order: 0,
						sides: [
							{
								title: 'Iosevka',
								isWinner: false
							},
							{
								title: 'Fira Code Variable',
								isWinner: true
							}
						]
					}
				]
			},
			node
		);
	};
</script>

<div use:bracket></div>
