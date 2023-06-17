<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { ListItem } from "nativescript-vue";
import { useColorMode, useColorPalette } from "@nativescript-use/vue";
import { Patelle, THEMES } from "~/data";

const { schema } = useColorMode({
  onChanged: (mode) => {
    console.log("onChanged: " + mode);
  }
})

const { palette } = useColorPalette<string, Patelle>()

function changeTheme(newTheme: any) {
  schema.value = newTheme
}

</script>

<template>
  <CustomPage>
    <StackLayout class="py-4 pl-3">
      <Label :text="`Current Theme: ${schema}`" class="text-2xl" />

      <ListView :items="THEMES" height="300">
        <template #default="{ item, index }: ListItem<string>">
          <FlexboxLayout class="pl-2 py-4" @tap="changeTheme(item)">
            <Label class="h-[16] w-[16] bg-green-400 rounded-full"
              :class=" [item === schema ? 'opacity-1' : 'opacity-0'] " />
            <Label class="text-lg rounded-2xl ml-2 py-1" :text=" item " />
          </FlexboxLayout>
        </template>
      </ListView>

      <FlexboxLayout>
        <Label text="Reactive Palette" width="auto" class="mt-8 text-lg px-2 rounded-lg" :backgroundColor=" palette?.colors.bgVariant " />
      </FlexboxLayout>

      <FlexboxLayout class="justify-around mt-4">
        <StackLayout :backgroundColor=" palette?.colors.bgVariant " class="px-3 py-2 rounded-full  text-center">
          <Label text="bg"></Label>
          <Label :text=" palette?.colors.bg "></Label>
        </StackLayout>
        <StackLayout :backgroundColor=" palette?.colors.bgVariant " class="px-3 py-2 rounded-full  text-center">
          <Label text="bgVariant"></Label>
          <Label :text=" palette?.colors.bg "></Label>
        </StackLayout>
        <StackLayout :backgroundColor=" palette?.colors.textColor " class="px-3 py-2 rounded-full  text-center">
          <Label text="textColor" :color=" palette?.colors.bg "></Label>
          <Label :text=" palette?.colors.bg " :color=" palette?.colors.bg "></Label>
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </CustomPage>
</template>
