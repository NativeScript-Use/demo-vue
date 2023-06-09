<script lang="ts" setup>
import { ref } from "nativescript-vue";
import { useElementSize, unrefView } from "@vallemar/nativescript-vueuse";

const refView = ref()
const { width, height } = useElementSize(refView);

function changeSize() {
  const view = unrefView(refView);
  if(view){
    view.height = view.getActualSize().height === 400 ? 150 : 400;
  }
}
</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="p-4">
      <StackLayout originY="0" ref="refView" class="bg-variant rounded-2xl p-3 text-center">
        <Label :text="`Width: ${width}`" />
        <Label :text="`Height: ${height}`" />
      </StackLayout>

      <Button @tap="changeSize" text="Change size" class="mt-12 mx-1"></Button>
    </StackLayout>
  </Page>
</template>
