import { z } from "astro/zod";
import { ThemeLocaleSchema } from "../schemas/locale";

/** Present user the ability to configure theme for the site */
export const KokomiThemeSchema = z.object({
    /** Designate locale settings for the site */
    locale: ThemeLocaleSchema,
});

export type KokomiThemeConfig = z.infer<typeof KokomiThemeSchema>;
