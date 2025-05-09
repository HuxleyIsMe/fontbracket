<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import type { BracketStore } from '$lib/bracket/bracket';
	import type { MediaQuery } from 'svelte/reactivity';
	import FancyBracket from './FancyBracket.svelte';
	import SimpleBracket from './SimpleBracket.svelte';

	interface Props {
		bracket: BracketStore;
		atLeastMedium: MediaQuery;
	}

	const { bracket, atLeastMedium }: Props = $props();

	let group = $state('fancy');
</script>

<Tabs value={group} onValueChange={(e) => (group = e.value)} fluid>
	{#snippet list()}
		<Tabs.Control value="fancy">Fancy Bracket - Click Font Name to Highlight Path</Tabs.Control>
		<Tabs.Control value="simple">Simple Bracket - Useful for Full Bracket Screenshots</Tabs.Control>
	{/snippet}
	{#snippet content()}
		<Tabs.Panel value="fancy" base="flex w-full items-center justify-center">
			{#key atLeastMedium.current}
				<FancyBracket {bracket} atLeastMedium={atLeastMedium.current} />
			{/key}
		</Tabs.Panel>
		<Tabs.Panel value="simple" base="flex w-full">
			<SimpleBracket {bracket} />
		</Tabs.Panel>
	{/snippet}
</Tabs>
