<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, class: cls, ...rest }: HTMLAnchorAttributes = $props();
</script>

<a
	class={[
		cls,
		'dark:anchor-font-color-dark anchor-font-color relative font-bold transition-all duration-700 ease-in-out before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:origin-center before:bg-(--anchor-font-color) before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-1/2 after:bottom-0 after:h-px after:w-0 after:origin-center after:bg-(--anchor-font-color) after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-1/2 hover:after:w-1/2 before:dark:bg-(--anchor-font-color-dark) after:dark:bg-(--anchor-font-color-dark)'
	]}
	href={rest.href}
	{...rest}
>
	{@render children?.()}
</a>
