import { createApp } from 'nativescript-vue';
import { useColorMode } from "@vallemar/nativescript-vueuse";
import Home from './components/Home.vue';
import { THEMES } from "~/data";

useColorMode({
    modes: THEMES
})

createApp(Home).start();
