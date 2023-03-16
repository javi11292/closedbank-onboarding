import type { PageLoad } from "./$types";
import keys from "./translations.json";

export const load = (() => {
	return {
		subheaders: [keys.subheader],
	};
}) satisfies PageLoad;
