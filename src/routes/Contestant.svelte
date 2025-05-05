<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import type { Language } from '$lib/examples';

	interface Props {
		font: string;
		code: string;
		lang: Language;
		side: 'left' | 'right';
		onclick: () => void;
	}

	const { code, lang, side, font, onclick }: Props = $props();
</script>

<article class="grid h-[512px] grid-rows-[1fr_auto] p-4 md:h-[768px]">
	<CodeBlock {code} {lang} --contestant-font={font} />
	<button
		{onclick}
		class="btn {side === 'left'
			? 'preset-outlined-primary-500'
			: 'preset-outlined-secondary-500'} place-self-center">Choose</button
	>
</article>
