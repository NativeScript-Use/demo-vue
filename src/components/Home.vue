<script lang="ts" setup>
import {
  $navigateTo
} from 'nativescript-vue';
import { StackLayout } from "@nativescript/core";
import ElementSizeView from "~/components/ElementSizeView.vue";
import ColorModeView from "~/components/ColorModeView.vue";
import EventListenerComponent from "~/components/EventListenerComponent.vue";
import RootLayoutView from './rootLayout/RootLayoutView.vue';
import ScreenOrientationComponent from './ScreenOrientationComponent.vue';
import { useColorPalette } from '@vallemar/nativescript-vueuse';
import { Patelle } from '~/data';
import CustomPage from './CustomPage.vue';

const { palette } = useColorPalette<string, Patelle>()

function onUseElementSize() {
  $navigateTo(ElementSizeView)
}
function onUseColorMode() {
  $navigateTo(ColorModeView)
}

function onUseEventListener() {
  $navigateTo(EventListenerComponent)
}

function onUseRootLayout() {
  $navigateTo(RootLayoutView)
}

function onUseScreenOrientation() {
  $navigateTo(ScreenOrientationComponent)
}

</script>

<template>
  <Frame :backgroundColor="palette?.colors.bg">
    <CustomPage>
      <StackLayout ref="test" class="px-4">
        <Label text="NativeScript-VueUse APP" class="text-2xl font-bold mt-3" />
        <Button @tap="onUseElementSize" text="Use Element Size" class="mt-12 m-1"></Button>
        <Button @tap="onUseColorMode" text="Use Color Mode" class="mt-8 m-1"></Button>
        <Button @tap="onUseEventListener" text="Use Event Listener" class="mt-8 m-1"></Button>
        <Button @tap="onUseRootLayout" text="Use Root Layout" class="mt-8 m-1"></Button>
        <Button @tap="onUseScreenOrientation" text="Use Screen Orientation" class="mt-8 m-1"></Button>
      </StackLayout>
    </CustomPage>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
