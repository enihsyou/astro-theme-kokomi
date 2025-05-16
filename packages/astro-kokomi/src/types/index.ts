import { z } from "astro/zod";
import { KokomiThemeSchema } from "astro-kokomi/schemas/kokomi-config.ts";

export type KokomiThemeConfig = z.infer<typeof KokomiThemeSchema>;
