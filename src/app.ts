import "@/utils/touchManagerUtils";
import { Task, useColorMode, useColorPalette } from "@nativescript-use/vue";
import { createApp } from 'nativescript-vue';
import { PALETTES, THEMES } from "~/data";

import Home from './views/Home.vue';
/* Init Color mode and Palette */
useColorMode({
    modes: THEMES,
    initialValue: 'dark'
});
useColorPalette({ palettes: PALETTES });

Task.globalWorkerConfig({
    newWorkerIfGlobalIsUsed: true,
    stickyWorker: true,
    startGlobalWorker: true
});

createApp(Home).start();
