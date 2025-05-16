// @ts-check
import { defineConfig } from "astro/config";
import kokomi from "astro-kokomi";

// https://astro.build/config
export default defineConfig({
    site: "https://enihsyou.github.io",
    base: "/astro-theme-kokomi",
    integrations: [
        kokomi({
            site: "https://enihsyou.github.io/astro-theme-kokomi", // Add your site URL here
        }),
    ],
});
