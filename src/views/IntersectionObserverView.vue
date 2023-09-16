<script lang="ts" setup>
import { ref, watch } from 'nativescript-vue';
import CustomPage from '@/components/CustomPage.vue';
import { useIntersectionObserver } from '@nativescript-use/vue';

const scrollRef = ref();
const viewRef = ref();
const { isVisible, stopTrack } = useIntersectionObserver(viewRef, scrollRef, {
  onChange: (isVisible: boolean) => {
    console.log("onChange isVisible " + isVisible);
  }
})

watch(isVisible , () => {
  console.log("watch isVisible " + isVisible);
})
</script>

<template>
  <CustomPage>
    <GridLayout class="px-2">
      <ScrollView ref="scrollRef">
        <StackLayout class="px-2">
          <FlexboxLayout class="flex-wrap mt-8 flex-col">
            <Label text="Foo item" class="py-4 my-2 mt-16 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label ref="viewRef" text="Track this view 👀"
              class="py-4 my-2 px-2 bg-blue-300 text-black rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
            <Label text="Foo item" class="py-4 my-2 px-2 bg-variant rounded-2xl"></Label>
          </FlexboxLayout>
        </StackLayout>
      </ScrollView>
      <Label verticalAlignment="top" :text="isVisible ? 'Element inside the viewport' : 'Element outside the viewport'"
        class="h-[80] py-4 text-xl text-center rounded-full"
        :class="[isVisible ? 'bg-blue-300 text-black' : 'bg-variant']"></Label>
    </GridLayout>
  </CustomPage>
</template>
