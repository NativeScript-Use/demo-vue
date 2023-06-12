<script lang="ts" setup>
import {
  $navigateTo
} from 'nativescript-vue';
import ElementSizeView from "./ElementSizeView.vue";
import ColorModeView from "./ColorModeView.vue";
import EventListenerView from "./EventListenerView.vue";
import RootLayoutView from './RootLayoutView.vue';
import ScreenOrientationView from './ScreenOrientationView.vue';
import CustomPage from '@/components/CustomPage.vue';
import KeyboardView from './KeyboardView.vue';
import { useColorPalette } from '@vallemar/nativescript-vueuse';
import { Patelle } from '~/data';


const { palette } = useColorPalette<string, Patelle>()

function onUseElementSize() {
  $navigateTo(ElementSizeView)
}
function onUseColorMode() {
  $navigateTo(ColorModeView)
}

function onUseEventListener() {
  $navigateTo(EventListenerView)
}

function onUseRootLayout() {
  $navigateTo(RootLayoutView)
}

function onUseScreenOrientation() {
  $navigateTo(ScreenOrientationView)
}

function onUseKeyboard() {
  $navigateTo(KeyboardView)
}
</script>

<template>
  <Frame :backgroundColor="palette?.colors.bg">
    <CustomPage>
      <ScrollView>
        <StackLayout ref="test" class="px-4">
          <Label text="NativeScript-VueUse APP" class="text-2xl font-bold mt-3" />
          <Button @tap="onUseElementSize" text="Use Element Size" class="mt-12 m-1"></Button>
          <Button @tap="onUseColorMode" text="Use Color Mode" class="mt-8 m-1"></Button>
          <Button @tap="onUseEventListener" text="Use Event Listener" class="mt-8 m-1"></Button>
          <Button @tap="onUseKeyboard" text="Use Keyboard" class="mt-8 m-1"></Button>
          <Button @tap="onUseRootLayout" text="Use Root Layout" class="mt-8 m-1"></Button>
          <Button @tap="onUseScreenOrientation" text="Use Screen Orientation" class="mt-8 m-1"></Button>
        </StackLayout>
      </ScrollView>
    </CustomPage>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
