import { loader } from "$lib/utils/loader";
import * as Country from "$onboarding/components/country";
import type { PageLoad } from "./$types";
import keys from "./translations.json";

export const load = (async ({ params }) => {
	const { language } = params;
	return {
		imports: {
			Country: (await loader(Country, language)).default,
		},
		subheaders: [keys.subheader, keys.subheader2],
	};
}) satisfies PageLoad;
