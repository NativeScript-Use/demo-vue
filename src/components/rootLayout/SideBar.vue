<template>
    <StackLayout @tap="$emit('testEmit', { foo: 'bar' })" height="100%" width="75%"
        class="rounded-r-2xl bg-variant pt-8 px-4 text-black" horizontalAlignment="left">
        <Label class="text-2xl" text="Hello 👋!"></Label>
        <Label class="mt-6 text-lg" text="I am a Sidebar built with RootLayout 💪" textWrap="true"></Label>
        <Label class="mt-6 text-lg" text="Tap and emit to parent 👂" textWrap="true"></Label>
    </StackLayout>
</template>
  