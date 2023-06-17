<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-keyboard"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptKeyboard } from '@demo/shared';
  import { } from '@nativescript-use/nativescript-keyboard';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-keyboard";
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
