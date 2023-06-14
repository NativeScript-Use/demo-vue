<script setup lang="ts">

const { icon } = defineProps({
    icon: String
})
</script>
<template>
    <Label :text="icon" class="m-icon-round"></Label>
</template>