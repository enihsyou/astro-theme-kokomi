import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["**/.astro"], "ignore/astro-cache"),
    globalIgnores(["*.config.{js,cjs,mjs}"], "ignore/config"),
    {
        name: "javascript",
        files: ["**/*.{js,cjs,mjs}"],
        plugins: { js },
        rules: js.configs.recommended.rules,
        languageOptions: { globals: globals.browser },
    },
    {
        name: "typescript",
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        extends: tseslint.configs.strictTypeChecked,
    },
    {
        name: "astro",
        extends: astro.configs.recommended,
    },
]);
