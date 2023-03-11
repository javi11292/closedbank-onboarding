<script lang="ts">
	import sid1 from "$lib/assets/images/sid1.jpg";
	import Header from "$lib/components/header";
	import Image from "$lib/components/image";
	import { t } from "$lib/utils/translate";
	import { keys } from "./translations";
</script>

<Header>
	<span class="text-4xl">Closedbank</span>
</Header>

<div class="overflow-auto">
	<Header>
		<span class="text-3xl">{$t(keys.subheader)}</span>
	</Header>

	<Image src={sid1} />
</div>
