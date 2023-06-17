<template>
  <Page>
    <ActionBar>
      <Label text="vue"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedVue } from '@demo/shared';
  import { } from '@nativescript-use/vue';

  export default Vue.extend({
    computed: {
      message() {
        return "Test vue";
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
