<script lang="ts" setup>
import {ListItem} from "nativescript-vue";
import {useColorMode} from "@vallemar/nativescript-vueuse";
import {THEMES} from "~/data";


const {store} = useColorMode({
  modes: THEMES, onChanged: (mode) => {
    console.log("onChanged: " + mode);
  }
})

function changeTheme(newTheme: string) {
  store.value = newTheme
}

</script>

<template>
  <Page actionBarHidden="true">
    <StackLayout class="py-4 pl-3">
      <Label :text="`Current Theme: ${store}`"/>

      <ListView :items="THEMES" height="800">
        <template #default="{ item, index }: ListItem<string>">
          <FlexboxLayout
              class="pl-2 py-4"
              @tap="changeTheme(item)"
          >
            <Label class="h-[16] w-[16] bg-green-400 rounded-full" :class="[item === store ? 'opacity-1' : 'opacity-0']"/>
            <Label class="text-lg rounded-2xl ml-2 py-1" :text="item"/>
          </FlexboxLayout>
        </template>
      </ListView>
    </StackLayout>
  </Page>
</template>
