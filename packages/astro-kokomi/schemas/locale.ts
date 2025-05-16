import { z } from "zod";

export const ThemeLocaleSchema = z.object({
    /** language on HTML lang tag */
    lang: z.string(),
});
