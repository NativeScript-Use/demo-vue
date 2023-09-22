<script setup lang="ts">
import { PropType } from 'nativescript-vue';
import Icon from '~/components/Icon.vue';

const { feature } = defineProps({
    feature: {
        type: Object as PropType<{ title: string, icon: string }>,
        required: true
    }
})

function getRandomColor() {
  return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`;
}

</script>
<template>
    <FlexboxLayout class="p-2  py-4 rounded-lg flex-col" :style="{ background: getRandomColor() }">
        <Icon width="32" class="text-black" :icon="feature.icon"></Icon>
        <Label :text="feature.title" class="text-xl text-black font-bold mt-4" textWrap="true" style="line-height: 1;" />
    </FlexboxLayout>
</template>