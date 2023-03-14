<script lang="ts">
	import sid1 from "$lib/assets/images/sid1.jpg";
	import Button from "$lib/components/button";
	import Container from "$lib/components/container";
	import Header from "$lib/components/header";
	import Image from "$lib/components/image";
	import Input from "$lib/components/input";
	import Select from "$lib/components/select";
	import { t } from "$lib/utils/translate";
	import documentTypes from "$onboarding/utils/documentTypes.json";
	import keys from "$onboarding/utils/translations";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { Country } = data.imports;
</script>

<Header>
	<span class="text-4xl">Closedbank</span>
</Header>

<div class="flex flex-1 flex-col items-center overflow-auto">
	<Header class="relative self-stretch">
		<div class="relative pb-3 text-center">
			<div class="text-2xl">{t(keys.subheader)}</div>
			<div class="text-2xl">{t(keys.subheader2)}</div>
		</div>
		<div
			class="absolute bottom-0 -z-10 w-full translate-y-full bg-neutral-900 pb-20"
		/>
	</Header>

	<Container class="flex flex-col">
		<Image class="self-center" src={sid1} />
		<Input class="mt-10" label={t(keys.nameLabel)} />
		<Country />
		<div class="mt-5 grid grid-cols-2 gap-5">
			<Select options={documentTypes} label={t(keys.documentTypeLabel)} />
			<Input label={t(keys.documentNumberLabel)} />
		</div>
		<Input class="mt-5" label={t(keys.phoneLabel)} />
		<Input class="mt-5" label={t(keys.emailLabel)} />
		<Button variant="contained" class="mt-10 self-center">
			{t(keys.start)}
		</Button>
	</Container>
</div>
