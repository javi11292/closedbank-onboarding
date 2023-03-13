<script lang="ts">
	import sid1 from "$lib/assets/images/sid1.jpg";
	import Container from "$lib/components/container";
	import Header from "$lib/components/header";
	import Image from "$lib/components/image";
	import Input from "$lib/components/input";
	import Select from "$lib/components/select";
	import { t } from "$lib/utils/translate";
	import keys from "./translations";

	const options = [
		{ label: "España", value: "es" },
		{ label: "Francia", value: "fr" },
	];
</script>

<Header>
	<span class="text-4xl">Closedbank</span>
</Header>

<div class="flex flex-1 flex-col items-center overflow-auto">
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
		<Select class="mt-5" {options} label={$t(keys.countryLabel)} />
		<div>
			<Select class="mt-5" {options} label={$t(keys.countryLabel)} />
		</div>
	</Container>
</div>
