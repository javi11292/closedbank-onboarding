<script lang="ts">
	import Select from "$lib/components/select";
	import { t } from "$lib/utils/translate";
	import countries from "$onboarding/utils/countries.json";
	import keys from "$onboarding/utils/translations";
</script>

<Select class="mt-5" options={countries} label={t(keys.countryLabel)} />
