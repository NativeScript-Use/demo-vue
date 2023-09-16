<script setup lang="ts">
import { PropType } from 'nativescript-vue';
import Icon from '~/components/Icon.vue';

const { feature } = defineProps({
    feature: {
        type: Object as PropType<{ title: string, icon: string }>,
        required: true
    }
})

</script>
<template>
    <FlexboxLayout class="bg-variant p-2  py-4 rounded-lg flex-col">
        <Icon width="32" class="" :icon="feature.icon"></Icon>
        <Label :text="feature.title" class="text-xl font-bold mt-4" textWrap="true" style="line-height: 1;" />
    </FlexboxLayout>
</template>