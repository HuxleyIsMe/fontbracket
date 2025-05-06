<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import { languageStore } from '$lib/examples/languages.svelte';

	interface Props {
		font: string;
		side: 'left' | 'right';
		onclick: () => void;
	}

	const { side, font, onclick }: Props = $props();
	const lang = $derived(languageStore.selected);
</script>

<article class="grid h-[512px] grid-rows-[1fr_auto] p-4 md:h-[768px]">
	<CodeBlock code={lang?.code} lang={lang?.value} --contestant-font={font} />
	<button
		{onclick}
		class="btn {side === 'left'
			? 'preset-outlined-primary-500'
			: 'preset-outlined-secondary-500'} place-self-center">Choose</button
	>
</article>
