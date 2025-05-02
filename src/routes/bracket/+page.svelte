<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import Contestant from './contestant.svelte';

	const atLeastMedium = new MediaQuery('width >= 48rem', true);

	const exampleJavascript = "const foo = 'bar'";
</script>

<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
	<Contestant code={exampleJavascript} lang="js" color="primary" />
	{#if atLeastMedium.current}
		<span class="md:vr h-full"></span>
	{:else}
		<hr class="hr" />
	{/if}
	<Contestant code={exampleJavascript} lang="js" color="secondary" />
</div>
