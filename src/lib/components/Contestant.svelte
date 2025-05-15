<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import { colorSchemeStore } from '$lib/examples/colorscheme.svelte';
	import { languageStore } from '$lib/examples/languages.svelte';

	interface Props {
		font: string;
		side: 'left' | 'right';
		onclick: () => void;
		showFontName: boolean;
	}

	const { side, font, onclick, fonts, showFontName }: Props = $props();
	const lang = $derived(languageStore.selected);
	const theme = $derived(colorSchemeStore.selected);
	const keyToListenFor = $derived(side === 'left' ? 'ArrowLeft' : 'ArrowRight');

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === keyToListenFor) {
			onclick();
		}
	};

	let selectedFont = $state();
</script>

<svelte:window onkeydown={handleKeydown} />

<article class="grid h-[512px] grid-rows-[1fr_auto] gap-4 md:h-[768px]">
	{#if showFontName}
		<p style:font-family={font}>{font}</p>
	{/if}

	<select
		bind:value={selectedFont}
		onchange={() => {
			console.log('meow');
		}}
	>
		{#each fonts as fontStyle}
			<option value={fontStyle}>{fontStyle}</option>
		{/each}
	</select>
	<CodeBlock code={lang?.code} lang={lang?.value} theme={theme?.value} --contestant-font={font} />
</article>
