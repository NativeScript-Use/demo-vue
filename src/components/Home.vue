<script lang="ts" setup>
import {
  $navigateTo
} from 'nativescript-vue';
import { StackLayout } from "@nativescript/core";
import ElementSizeView from "~/components/ElementSizeView.vue";
import ColorModeView from "~/components/ColorModeView.vue";
import EventListenerComponent from "~/components/EventListenerComponent.vue";
import RootLayoutView from './rootLayout/RootLayoutView.vue';

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

</script>

<template>
  <Frame backgroundColor="transparent">
    <Page actionBarHidden="true">
      <StackLayout ref="test" class="px-4">
        <Label text="NativeScript-VueUse APP" class="text-2xl font-bold mt-3" />

        <Button @tap="onUseElementSize" text="Use Element Size" class="mt-12 m-1"></Button>
        <Button @tap="onUseColorMode" text="Use Color Mode" class="mt-8 m-1"></Button>
        <Button @tap="onUseEventListener" text="Use Event Listener" class="mt-8 m-1"></Button>
        <Button @tap="onUseRootLayout" text="Use Root Layout" class="mt-8 m-1"></Button>
      </StackLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
