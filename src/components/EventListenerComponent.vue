<script lang="ts" setup>
import { ref } from "nativescript-vue";
import {alert, StackLayout} from "@nativescript/core";
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
  <Page actionBarHidden="true">
    <StackLayout class="p-4">
      <FlexboxLayout ref="el" class="bg-variant rounded-2xl p-3 text-center h-[200] items-center justify-center">
        <Label class="text-2xl">Tap Me!</Label>
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>
