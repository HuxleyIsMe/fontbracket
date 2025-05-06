<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { languageStore } from '$lib/examples/languages.svelte';
	import { colorSchemeStore } from '$lib/examples/colorscheme.svelte';
	import { themeStore } from '$lib/theme.svelte';
	import LightSwitch from './LightSwitch.svelte';

	let open = $state(false);
	$inspect(colorSchemeStore.selected);
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
				<span class="label-text">Dark Mode</span>
				<LightSwitch />
			</label>
			<label class="label">
				<span class="label-text">Language</span>
				<select class="select" bind:value={languageStore.selected}>
					{#each languageStore.options as language (language)}
						<option value={language}>{language.label}</option>
					{/each}
				</select>
			</label>
			<label class="label">
				<span class="label-text">Code Color Scheme</span>
				<select class="select" bind:value={colorSchemeStore.selected}>
					{#each colorSchemeStore.options as colorscheme (colorscheme)}
						<option value={colorscheme}>{colorscheme.label}</option>
					{/each}
				</select>
			</label>
			<label class="label">
				<span class="label-text">Site Color Scheme</span>
				<select class="select" bind:value={themeStore.selected}>
					{#each themeStore.options as theme (theme)}
						<option value={theme}>{theme.label}</option>
					{/each}
				</select>
			</label>
		</form>
	{/snippet}
</Modal>
