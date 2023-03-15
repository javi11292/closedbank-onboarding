<script lang="ts">
	import Input from "$lib/components/input";
	import type { Option } from "$lib/components/select";
	import { t } from "$lib/utils/translate";
	import keys from "$onboarding/utils/translations";

	export let selected: Option | undefined = undefined;

	let value: string | undefined;

	$: selected = value !== undefined ? { value } : undefined;
</script>

<Input bind:value class="mt-5" label={t(keys.countryLabel)} />
