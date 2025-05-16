import { z } from "astro/zod";

export const ThemeLocaleSchema = z.object({
    /** language on HTML lang tag */
    lang: z.string(),
});

/** Present user the ability to configure theme for the site */
export const KokomiThemeSchema = z.object({
    /** Designate locale settings for the site */
    locale: ThemeLocaleSchema,
});
