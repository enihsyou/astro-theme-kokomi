import { z } from "astro/zod";
import { zPath } from "../utils/zod";

/** Settings for locale */
export const ThemeLocaleSchema = z.object({
    /**
     * Language on HTML lang tag, following BCP47.
     * Notably, hyphen is used instead of underscore
     */
    lang: z.string().default("en-US"),
});

/** Settings for HTML `<head>` section */
export const ThemeHeadSchema = z.object({
    /** The path inside `/public` to a favicon image for the site */
    favicon: zPath().default("/favicon/favicon.ico"),

    /**
     * The path inside `/public` to a social card image for the site.
     * Will be used as a fallback when no specific image is provided.
     */
    socialImage: zPath().default("/images/social-card.png"),
});

/** Settings for Page Header component */
export const ThemeHeaderSchema = z.object({});

/** Settings for Page Footer component */
export const ThemeFooterSchema = z.object({});

/** Present user the ability to configure theme for the site */
export const KokomiThemeSchema = z.object({
    /** Designate locale settings for the site */
    locale: ThemeLocaleSchema.default({}),

    /** Settings for HTML `<head>` section */
    head: ThemeHeadSchema.default({}),

    /** Settings for Page Header component */
    header: ThemeHeaderSchema.default({}),

    /** Settings for Page Footer component */
    footer: ThemeFooterSchema.default({}),
});

/** Main type used in kokomi.config.ts */
export type KokomiThemeInputs = z.input<typeof KokomiThemeSchema>;
export type KokomiThemeConfig = z.output<typeof KokomiThemeSchema>;
