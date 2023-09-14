
<template>
  <GridLayout @tap="$emit('testEmit', { foo: 'bar' })" rows="auto, auto, auto"
    class="bg-variant rounded-b-2xl p-6 text-black" verticalAlignment="top">
    <Label row="0" class="text-2xl" text="Hello 👋!"></Label>
    <Label row="1" class="mt-6 text-lg" text="I am a Snackbar built with RootLayout 💪" textWrap="true"></Label>
    <Label row="2" class="mt-6 text-lg" text="Tap and emit to parent 👂" textWrap="true"></Label>
  </GridLayout>
</template>