import { createApp } from 'nativescript-vue';
import { useColorMode, useColorPalette } from "@nativescript-use/vue";
import Home from './views/Home.vue';
import { PALETTES, THEMES } from "~/data";

/* Init Color mode and Palette */
useColorMode({
    modes: THEMES,
    initialValue: 'dim'
});
useColorPalette({ palettes: PALETTES });

createApp(Home).start();
