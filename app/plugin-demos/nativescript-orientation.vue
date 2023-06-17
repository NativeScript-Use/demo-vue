<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-orientation"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptOrientation } from '@demo/shared';
  import { } from '@nativescript-use/nativescript-orientation';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-orientation";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
