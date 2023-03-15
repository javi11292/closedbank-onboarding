<script lang="ts">
	import type { Option } from "$lib/components/select";
	import Select from "$lib/components/select";
	import { t } from "$lib/utils/translate";
	import countries from "$onboarding/utils/countries.json";
	import keys from "$onboarding/utils/translations";

	export let selected: Option | undefined = undefined;
</script>

<Select
	bind:selected
	class="mt-5"
	options={countries}
	label={t(keys.countryLabel)}
/>
