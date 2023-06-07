<script lang="ts" setup>
import {
  $navigateTo,
} from 'nativescript-vue';
import ElementSizeView from "~/components/ElementSizeView.vue";
import ColorModeView from "~/components/ColorModeView.vue";

function onUseElementSize() {
  $navigateTo(ElementSizeView)
}
function onUseColorMode() {
  $navigateTo(ColorModeView)
}

</script>

<template>
  <Frame backgroundColor="transparent" >
    <Page actionBarHidden="true">
      <StackLayout class="px-4">
        <Label text="NativeScript-VueUse APP" class="text-2xl font-bold mt-3" />

        <Button @tap="onUseElementSize" text="UseElementSize" class="mt-12 m-1"></Button>
        <Button @tap="onUseColorMode" text="UseColorMode" class="mt-8 m-1"></Button>
      </StackLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
