<script lang="ts">
	import { page } from "$app/stores";

	import Header from "$lib/components/header";
	import { t } from "$lib/utils/translate";
</script>

<Header>
	<span class="text-4xl">Closedbank</span>
</Header>

<div class="flex flex-1 flex-col items-center overflow-auto">
	<Header class="relative self-stretch">
		<div class="relative pb-3 text-center">
			{#each $page.data.subheaders as subheader}
				<div class="text-2xl">{t(subheader)}</div>
			{/each}
		</div>
		<div
			class="absolute bottom-0 -z-10 w-full translate-y-full bg-neutral-900 pb-20"
		/>
	</Header>

	<slot />
</div>
