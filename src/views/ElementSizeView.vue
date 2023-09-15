<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { ref } from "nativescript-vue";
import { useElementSize, useContentElementSize, unrefView } from "@nativescript-use/vue";
import { StackLayout } from "@nativescript/core";

const refView = ref()
const { width, height } = useElementSize(refView);
const { fullHeight } = useContentElementSize(refView);

function changeSize() {
  const view = unrefView(refView);
  if (view) {
    view.height = view.getActualSize().height === 400 ? 150 : 400;
  }
}

function changeContentSize() {
  const view = unrefView<StackLayout>(refView);
  if (view) {
    view.getChildAt(2).marginTop = view.getChildAt(2).marginTop === 50 ? 0 : 50;
  }
}
</script>

<template>
  <CustomPage>
    <StackLayout class="p-4">
      <Label class="text-center text-2xl">ElementSize example</Label>

      <StackLayout originY="0" ref="refView" class="bg-variant rounded-2xl p-3 mt-4 text-center">
        <Label :text="`Parent width: ${width.toFixed(2)}`" />
        <Label :text="`Parent height: ${height.toFixed(2)}`" />
        <Label :text="`Content height with margins (labels): ${fullHeight.toFixed(2)}`" />
      </StackLayout>

      <Button @tap="changeSize" text="Change parent size" class="mt-12 mx-1"></Button>
      <Button @tap="changeContentSize" text="Change content size" class="mt-6 mx-1"></Button>
    </StackLayout>
  </CustomPage>
</template>
