<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { ref } from "nativescript-vue";
import { useClipboard } from "@nativescript-use/vue";

const {
  text,
  copied,
  copy,
  read
} = useClipboard({ sync: true });

</script>

<template>
  <CustomPage>
    <StackLayout class="p-3">
      <Label class="text-center text-2xl">Clipboard example</Label>
      <FlexboxLayout class="justify-center items-center mt-10 flex-col">
        <Label v-if="!copied" class="text-center text-lg bg-variant rounded-2xl p-10">Reactive clipboard</Label>
        <Label v-else class="text-center text-lg bg-variant rounded-2xl p-10"> Copied {{ text }}! </Label>
      </FlexboxLayout>
      <Button @tap="copy('Example copy text')" class="mx-1 mt-8 w-1/2" text="Copy"></Button>
    </StackLayout>
  </CustomPage>
</template>
