/**
 * Join multiple URL segments into a single URL.
 * @see https://github.com/saicaca/fuwari/blob/9de7aa10e49efd0575b2d58dd638fa348ec16605/src/utils/url-utils.ts
 */
function joinUrl(...parts: string[]): string {
    const joined = parts.join("/");
    return joined.replace(/\/+/g, "/");
}

/**
 * Construct a URL for resources in /public directory.
 */
export function publicResource(path: string): string {
    return joinUrl(import.meta.env.BASE_URL, path);
}
