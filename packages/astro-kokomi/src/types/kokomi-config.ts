import { z } from "astro/zod";
import { zPath } from "../utils/zod";

/** Site information */
export const ThemeSiteSchema = z.object({
    /**
     * The title and the name for this site,
     * used in `<title>` tag and as a fallback for social cards
     */
    title: z.string().max(60).default("Kokomi"),

    /**
     * Language on HTML lang tag, following BCP47.
     * Notably, hyphen is used instead of underscore
     */
    lang: z.string().default("en-US"),
});

/** Global tweaks and toggles */
export const ThemeGlobalSchema = z.object({});

/** Color and palette settings */
export const ThemeColorSchema = z.object({});

/** Settings for HTML `<head>` section */
export const ThemeHeadSchema = z.object({

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

/** Settings for content collection */
export const ThemeContentSchema = z.object({});

/** Present user the ability to configure theme for the site */
export const KokomiThemeSchema = z.object({
    /** Site information */
    site: ThemeSiteSchema.default({}),

    /** Global tweaks and toggles */
    global: ThemeGlobalSchema.default({}),

    /** Color and palette settings */
    color: ThemeColorSchema.default({}),

    /** Settings for HTML `<head>` section */
    head: ThemeHeadSchema.default({}),

    /** Settings for Page Header component */
    header: ThemeHeaderSchema.default({}),

    /** Settings for Page Footer component */
    footer: ThemeFooterSchema.default({}),

    /** Settings for content collection */
    content: ThemeContentSchema.default({}),
});

/** User inputted type used in kokomi.config.ts */
export type KokomiThemeInputs = z.input<typeof KokomiThemeSchema>;

/** Fully loaded type returned by KokomiThemeSchema.parse() */
export type KokomiThemeConfig = z.output<typeof KokomiThemeSchema>;
