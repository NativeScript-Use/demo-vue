<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { ref } from "nativescript-vue";
import { useKeyboard } from "@vallemar/nativescript-vueuse";

const el = ref()

const { isOpen, open, close } = useKeyboard({
  onChange: (isOpenKeyboard: boolean) => {
    console.log("Keyboard onChange " + isOpenKeyboard);
  },
  defaultTarget: el
});

const openKeyboard = () => open()
</script>

<template>
  <CustomPage>
    <StackLayout class="p-3">
      <Label class="text-center text-2xl">Keyboard example</Label>

      <FlexboxLayout class=" justify-center items-center mt-10">
        <Label class="text-center text-lg bg-variant rounded-2xl p-10">Reactive status {{ isOpen }}</Label>
      </FlexboxLayout>
      <TextField ref="el" class="bg-variant rounded-full mt-8 pl-3 ios:py-2" hint="Write on me ✍️" />
      <Button @tap="openKeyboard()" class="mx-1 mt-8 w-1/2" text="Open keyboard"></Button>
      <Button @tap="close" class="mx-1 mt-8 w-1/2" text="Close keyboard"></Button>
    </StackLayout>
  </CustomPage>
</template>
