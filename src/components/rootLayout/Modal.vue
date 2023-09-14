<template>
    <StackLayout @tap="$emit('testEmit', { foo: 'bar' })" verticalAlignment="center" horizontalAlignment="center"
        height="250" class="p-4">
        <GridLayout rows="auto, auto, auto" class="bg-variant rounded-xl p-8  text-black">
            <Label row="0" class="text-2xl" text="Hello 👋!"></Label>
            <Label row="1" class="mt-8 text-lg" text="I am a Modal built with RootLayout 💪" textWrap="true"></Label>
            <Label row="2" class="mt-6 text-lg" text="Tap and emit to parent 👂" textWrap="true"></Label>
        </GridLayout>
    </StackLayout>
</template>