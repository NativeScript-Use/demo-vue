<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-clipboard"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptClipboard } from '@demo/shared';
  import { } from '@nativescript-use/nativescript-clipboard';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-clipboard";
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
