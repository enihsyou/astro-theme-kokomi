import type { KokomiThemeInputs, KokomiThemeConfig } from "astro-kokomi/types/kokomi-config.ts";
import { KokomiThemeSchema } from "astro-kokomi/types/kokomi-config.ts";

/** User inputs */
const theme: KokomiThemeInputs = {
    site: {
        lang: "en-US",
    },
    head: {},
};

/** Coerce with defaults, actual used by scripts */
const config: KokomiThemeConfig = KokomiThemeSchema.parse(theme);
if (import.meta.env.DEV) {
    // In dev mode, print parsed result to console
    console.debug("Kokomi theme config:", config);
}
export default config;
