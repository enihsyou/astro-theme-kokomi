import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWebFonts,
    presetWind3,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";
import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
    shortcuts: [],
    theme: {
        colors: {},
    },
    presets: [presetWind4()],
    transformers: [transformerDirectives(), transformerVariantGroup()],
});
