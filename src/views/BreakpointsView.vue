<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { useBreakpoints } from "@nativescript-use/vue";

const breakpointsExample = {
  'xs': 0,
  'sm': 128,
  'md': 248,
  'lg': 376,
  'xl': 504,
  '2xl': 632,
  '4xl': 888,
};

const breakpoints = useBreakpoints(breakpointsExample);
const current = breakpoints.current();
const xs = breakpoints.smaller('xs');
const xsg = breakpoints.greater('xs');
const betweenlg4xl = breakpoints.between('lg', 'xl');
const largeScreen = breakpoints.isGreater('xl');
const lg = breakpoints['lg'];

</script>

<template>
  <CustomPage>
    <ScrollView>


      <GridLayout rows="*, 150">
        <StackLayout class="p-3" verticalAlingment="top">
          <Label class="text-center text-2xl">Breakpoints example</Label>
          <FlexboxLayout class="justify-center items-center mt-10  flex-wrap">
            <Label class="text-center text-lg bg-variant rounded-2xl p-6 m-1" textWrap="true"> Current breakpoints: {{
              current.join(", ") }} </Label>
            <Label class="text-center text-lg bg-variant rounded-2xl p-6 m-1"> xs {{ xs }} </Label>
            <Label class="text-center text-lg bg-variant rounded-2xl p-6 m-1"> xsg {{ xsg }} </Label>
            <Label class="text-center text-lg bg-variant rounded-2xl p-6 m-1"> betweenlg4xl {{ betweenlg4xl }} </Label>
            <Label class="text-center text-lg bg-variant rounded-2xl p-6 m-1"> largeScreen {{ largeScreen }} </Label>
          </FlexboxLayout>
        </StackLayout>
        <FlexboxLayout verticalAlingment="bottom" row="1" class="flex-col justify-end p-3">
          <Label class="text-center bg-variant rounded-full p-2 mb-4" textWrap="true">
            Rotate the screen to see the effect of reactive Breakpoints
          </Label>
        </FlexboxLayout>
      </GridLayout>
    </ScrollView>
  </CustomPage>
</template>
