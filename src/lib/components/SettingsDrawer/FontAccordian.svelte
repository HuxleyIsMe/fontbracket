<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import Type from '@lucide/svelte/icons/type';
	import { getFontStore, saveFontStore, type Font } from '$lib/fonts.svelte';

	let fontStore = getFontStore();
	let fonts = $derived(
		fontStore
			.keys()
			.toArray()
			.toSorted()
			.map((font) => ({ value: font, checked: fontStore.get(font)! }))
	);

	let value: string[] = $state([]);

	const setFont = (font: Font, checked: boolean) => {
		fontStore.set(font, checked);
		saveFontStore(fontStore);
	};
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
	<Accordion.Item value="fonts" panelBase="max-h-[512px] overflow-scroll">
		{#snippet lead()}
			<Type size={24} />
		{/snippet}
		{#snippet control()}
			Fonts
		{/snippet}
		{#snippet panel()}
			{#each fonts as font (font.value)}
				<label class="flex items-center space-x-2">
					<input
						type="checkbox"
						class="checkbox"
						bind:checked={font.checked}
						onchange={(e: { currentTarget: HTMLInputElement }) =>
							setFont(font.value, e.currentTarget.checked)}
						name={font.value}
					/>
					<p style:font-family={font.value}>{font.value}</p>
				</label>
			{/each}
		{/snippet}
	</Accordion.Item>
</Accordion>
