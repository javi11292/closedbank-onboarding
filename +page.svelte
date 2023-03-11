<script lang="ts">
	import sid1 from "$lib/assets/images/sid1.jpg";
	import Header from "$lib/components/header";
	import Image from "$lib/components/image";
	import { t } from "$lib/utils/translate";
	import keys from "./translations.json";
</script>

<Header>
	<span class="text-4xl">Closedbank</span>
</Header>

<div class="overflow-auto">
	<Header class="relative">
		<div class="relative pb-3 text-center">
			<div class="text-2xl">{$t(keys.subheader)}</div>
			<div class="text-2xl">{$t(keys.subheader2)}</div>
		</div>
		<div
			class="absolute bottom-0 -z-10 w-full translate-y-full bg-neutral-900 pb-20"
		/>
	</Header>

	<Image src={sid1} />
</div>
