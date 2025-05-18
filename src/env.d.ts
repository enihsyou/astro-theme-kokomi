// Provides type definition for `import.meta.env`. for more information:
// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript

interface ImportMetaEnv {
    readonly DB_PASSWORD: string;
    readonly PUBLIC_POKEAPI: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
