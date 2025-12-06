<template>
    <span class="space-x-1">
        <UBadge v-if="hasPicoyPlaca()" class="etiqueta-carro">sin pico y placa</UBadge>
        <UBadge v-for="tags in categoryTags[categoryCode]" class="etiqueta-carro" v-text="tags"></UBadge>
    </span>
</template>

<script setup lang="ts">

import type { CategoryType } from '#imports';

const props = defineProps<{
    category: ReturnType<typeof useCategory>;
}>();

const {
    categoryCode,
    hasPicoyPlaca
} = props.category;

type categoryTagsType = Partial<{
    [K in CategoryType]: string[];
}>

const categoryTags: categoryTagsType = {
    'C': ['mas rentado'],
}

</script>

