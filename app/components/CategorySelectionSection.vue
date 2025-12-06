<template>
    <template v-if="!pendingSearch">
        <u-page-grid>
            <template v-for="category in filteredCategories">
                <template v-if="category.estimatedTotalAmount == 999999999 && vehicleCategories[category.categoryCode]">
                    <placeholders-unable-category-card
                        :category
                        :vehicleCategory="vehicleCategories[category.categoryCode]"
                    />
                </template>
                <template v-else-if="vehicleCategories[category.categoryCode]">
                    <category-card 
                        :category
                        :vehicle-category="vehicleCategories[category.categoryCode]"
                        :key="`category-${category.categoryCode}`"
                        :stepper
                        @selected-category="setSelectedCategory"
                    />
                </template>
            </template>
        </u-page-grid>
    </template>
    <template v-else>
        <u-page-grid>
            <placeholders-category-card />
            <placeholders-category-card class="hidden md:block" />
            <placeholders-category-card class="hidden lg:block" />
        </u-page-grid>
    </template>
</template>

<script setup lang="ts">
/** components */
import {
  PlaceholdersCategoryCard,
  PlaceholdersUnableCategoryCard,
  CategoryCard,
//   MessageDisplay
} from "#components";

/** imports */
import { 
    useStoreSearchData, 
    useStoreReservationForm, 
    useCategory, 
    useVehicleCategories 
} from "#imports";

/** stores */
const storeSearch = useStoreSearchData();
const storeForm = useStoreReservationForm();

/** refs */
const { pending: pendingSearch, selectedCategory, filteredCategories } = storeToRefs(storeSearch);
const { vehiculo  } = storeToRefs(storeForm);
const { vehicleCategories } = useVehicleCategories();

/** functions */
function setSelectedCategory(category: ReturnType<typeof useCategory>) {
  vehiculo.value = category.categoryCode.value;
  selectedCategory.value = category;
  document.getElementById("seleccion-categorias")?.scrollIntoView({
    behavior: 'smooth'
  });
}

/** props */
const props = defineProps<{
    stepper: HTMLElement
}>()

</script>
