<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { ref } from "nativescript-vue";
import { alert, StackLayout } from "@nativescript/core";
import { useEventListener } from "@vallemar/nativescript-vueuse";

const el = ref()

const { cleanup } = useEventListener<StackLayout>(el, {
  loaded: (eventData) => {
    const stackLayout = eventData.object
    console.log("loaded event " + stackLayout)

  },
  tap: (eventData) => {
    console.log("tap event")
    alert("tap event")
  }
})
</script>

<template>
  <CustomPage>
    <StackLayout class="p-4">
      <Label class="text-center text-2xl">EventListener example</Label>

      <FlexboxLayout ref="el" class="bg-variant rounded-2xl p-3 mt-4 text-center h-[200] items-center justify-center">
        <Label class="text-2xl">Tap Me!</Label>
      </FlexboxLayout>
    </StackLayout>
  </CustomPage>
</template>
