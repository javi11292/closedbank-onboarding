<script lang="ts">
	import sid1 from "$lib/assets/images/sid1.jpg";
	import Container from "$lib/components/container";
	import Header from "$lib/components/header";
	import Image from "$lib/components/image";
	import Input from "$lib/components/input";
	import { t } from "$lib/utils/translate";
	import keys from "./translations";
</script>

<Header>
	<span class="text-4xl">Closedbank</span>
</Header>

<div class="flex flex-col items-center overflow-auto">
	<Header class="relative self-stretch">
		<div class="relative pb-3 text-center">
			<div class="text-2xl">{$t(keys.subheader)}</div>
			<div class="text-2xl">{$t(keys.subheader2)}</div>
		</div>
		<div
			class="absolute bottom-0 -z-10 w-full translate-y-full bg-neutral-900 pb-20"
		/>
	</Header>

	<Container>
		<Image src={sid1} />
		<Input class="mt-10" label={$t(keys.nameLabel)} />
	</Container>
</div>
