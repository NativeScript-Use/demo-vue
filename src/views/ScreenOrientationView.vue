<script lang="ts" setup>
import CustomPage from "@/components/CustomPage.vue";
import { FlexboxLayout } from "@nativescript/core";
import { useScreenOrientation } from '@nativescript-use/vue';

const {
  orientation,
  setOrientation,
  enableRotation,
  disableRotation
} = useScreenOrientation({
  onChange: (orientation) => {
    console.log("useScreenOrientation onChange " + orientation);
  }
})

</script>

<template>
  <CustomPage>
    <ScrollView>
      <StackLayout class="p-3">
        <Label class="text-center text-2xl">ScreenOrientation example</Label>
        <FlexboxLayout class=" justify-center mt-8">
          <Label class="text-center text-xl bg-variant rounded-xl p-6">{{ orientation }}</Label>
        </FlexboxLayout>

        <Button @tap="setOrientation('portrait')" class="mx-1 mt-8" text="Set portrait"></Button>
        <Button @tap="setOrientation('landscape')" class="mx-1 mt-8" text="Set landscape"></Button>
        <Button @tap="setOrientation('landscapeleft')" class="mx-1 mt-8" text="Set landscapeleft"></Button>
        <Button @tap="setOrientation('landscaperight')" class="mx-1 mt-8" text="Set landscaperight"></Button>
        <Button @tap="enableRotation" class="mx-1 mt-8" text="Enable rotation"></Button>
        <Button @tap="disableRotation" class="mx-1 mt-8" text="Disable rotation"></Button>
      </StackLayout>
    </ScrollView>
  </CustomPage>
</template>
