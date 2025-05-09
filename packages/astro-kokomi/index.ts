import type { AstroIntegration } from "astro";

type SiteConfig = {
    site: string;
    description?: string;
    version: string;
};

export default function AstroKokomiIntegratin(opts: SiteConfig): AstroIntegration {
    const { site } = opts;
    if (site) {
    }
    return {
        name: "astro-kokomi",
        hooks: {
            "astro:server:setup": async ({}) => {
                console.log("astro:server:setup");
                console.log("site", site);
                await Promise.resolve();
            },
            "astro:build:done": async ({}) => {
                console.log("astro:build:done");
                await Promise.resolve();
            },
        },
    };
}
