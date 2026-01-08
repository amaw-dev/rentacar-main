<template>
    <UCarousel 
      v-slot="{ item }" 
      :items="vehicleModels" 
      dots
      prev-icon="lucide:chevron-left"
      next-icon="lucide:chevron-right"
      arrows
      :ui="{
        viewport: 'rounded-t-lg',
        dots: 'bottom-5', 
        arrows: 'hidden lg:block',
        prev: 'translate-x-[200%] cursor-pointer rounded-xl h-12 border-0', 
        next: '-translate-x-[200%] cursor-pointer rounded-xl h-12 border-0' 
      }"
    >
      <div class="relative">
        <div class="nombre-modelo">
          <span>{{ item.nombre }}</span>
        </div>
        <picture>
          <source 
            :srcset="item.imagenes.avif"
            type="image/avif"
          >
          <source 
            :srcset="item.imagenes.webp"
            type="image/webp"
          >
          <img 
            :src="item.imagenes.jpg"
            :alt="item.nombre" 
            width="800" 
            height="480" 
            loading="lazy" 
            decoding="async"
            class="w-full"
          >
        </picture>
      </div>
    </UCarousel>
</template>

<script setup lang="ts">
import { defineImage } from "#imports";
import type { CategoryModelData, CategoryType, VehicleCategoryModel } from "#imports";

interface CarruselProps {
  category: CategoryType;
  models?: CategoryModelData[];
  vehicleModels?: VehicleCategoryModel[]
}

const props = defineProps<CarruselProps>();

props.vehicleModels?.forEach((model: VehicleCategoryModel, i) => {
  if(model?.imagenes?.jpg){
    defineImage({
      url: model.imagenes.jpg,
    });
  }
});
</script>

