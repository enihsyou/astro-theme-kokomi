import { z } from "astro/zod";

/** Path like string */
export function zPath() {
    return z.string().startsWith("/");
}
