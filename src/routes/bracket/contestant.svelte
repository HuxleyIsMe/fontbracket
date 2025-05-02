<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock/CodeBlock.svelte';
	import type { CodeBlockProps } from '$lib/components/CodeBlock/types';

	interface Props {
		code: string;
		lang: CodeBlockProps['lang'];
		color: 'primary' | 'secondary';
	}

	const { code, lang, color }: Props = $props();
</script>

<article class="grid h-[512px] grid-rows-[1fr_auto] p-4 md:h-full">
	<CodeBlock {code} {lang} />
	<button class="btn preset-outlined-{color}-500 place-self-center">Choose</button>
</article>
