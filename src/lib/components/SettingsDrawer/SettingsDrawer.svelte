<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { languageStore } from '$lib/examples/languages.svelte';

	let open = $state(false);
</script>

<Modal
	{open}
	onOpenChange={(e) => (open = e.open)}
	triggerBase="btn hover:preset-tonal-primary"
	contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[480px] h-screen"
	positionerJustify="justify-end"
	positionerAlign=""
	positionerPadding=""
	transitionsPositionerIn={{ x: 480, duration: 200 }}
	transitionsPositionerOut={{ x: 480, duration: 200 }}
>
	{#snippet trigger()}
		<Menu size={40} strokeWidth={1.5} />
	{/snippet}
	{#snippet content()}
		<header class="flex justify-between">
			<h2 class="h3">Settings</h2>
			<button type="button" class="btn hover:preset-tonal-primary" onclick={() => (open = false)}
				><X size={40} /></button
			>
		</header>
		<form class="mx-auto w-full max-w-md space-y-4">
			<label class="label">
				<span class="label-text">Language</span>
				<select class="select" id="lang" bind:value={languageStore.selected}>
					{#each languageStore.options as language (language)}
						<option value={language}>{language.label}</option>
					{/each}
				</select>
			</label>
		</form>
	{/snippet}
</Modal>
