<template>
    <GridLayout @tap="$emit('testEmit', { foo: 'bar' })" rows="auto, auto, auto" verticalAlignment="bottom" height="455"
        class="bg-variant rounded-t-xl p-6 text-black">
        <Label row="0" class="mt-8 text-2xl" text="Hello 👋!"></Label>
        <Label row="1" class="mt-8 text-lg" text="I am a BottomSheet built with RootLayout 💪" textWrap="true"></Label>
        <Label row="2" class="mt-6 text-lg" text="Tap and emit to parent 👂" textWrap="true"></Label>
    </GridLayout>
</template>