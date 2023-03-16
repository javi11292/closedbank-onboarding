<script lang="ts">
	import sid1 from "$lib/assets/images/sid1.jpg";
	import Button from "$lib/components/button";
	import Container from "$lib/components/container";
	import Image from "$lib/components/image";
	import Input from "$lib/components/input";
	import Select from "$lib/components/select";
	import { t } from "$lib/utils/translate";
	import type { PageData } from "./$types";
	import documentTypes from "./documentTypes.json";
	import keys from "./translations.json";

	export let data: PageData;

	const { Country } = data.imports;

	let disabled = false;
	let form = {
		name: undefined,
		country: undefined,
		documentType: undefined,
		documentNumber: undefined,
		phone: undefined,
		email: undefined,
	};

	$: disabled = Object.values(form).some((value) => !value);
</script>

<Container class="flex flex-col">
	<Image class="self-center" src={sid1} />
	<Input bind:value={form.name} class="mt-10" label={t(keys.nameLabel)} />
	<Country bind:selected={form.country} />
	<div class="mt-5 grid grid-cols-2 gap-5">
		<Select
			bind:selected={form.documentType}
			options={documentTypes}
			label={t(keys.documentTypeLabel)}
		/>
		<Input
			bind:value={form.documentNumber}
			label={t(keys.documentNumberLabel)}
		/>
	</div>
	<Input bind:value={form.phone} class="mt-5" label={t(keys.phoneLabel)} />
	<Input bind:value={form.email} class="mt-5" label={t(keys.emailLabel)} />
	<Button
		href="access-key"
		variant="contained"
		class="mt-10 self-center"
		{disabled}
	>
		{t(keys.start)}
	</Button>
</Container>
