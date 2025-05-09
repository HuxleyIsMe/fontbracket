<script lang="ts">
	import { themeStore } from '$lib/theme.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'dark';
		themeStore.darkMode = mode === 'dark';
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		themeStore.darkMode = event.checked;
	};
</script>

<Switch checked={themeStore.darkMode} {onCheckedChange}></Switch>
