<template>
    <div>
        <h1 class="text-white mx-auto" v-text="city"></h1>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const city = route.params.city;
</script>
