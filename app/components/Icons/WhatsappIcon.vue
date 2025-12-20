<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="cls" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 11.5A9 9 0 1 1 11.5 3A9 9 0 1 1 21 11.5z" />
    <path d="M17 14.5c-.5 1-1 3-3 4-2 1-4-1-5-2s-1-3-1.2-3.5c-.2-.5.2-1 1.2-1.3 1-.3 1.5 0 2 .4s1.1 1.1 1.7 1.2c.6.1 1-.2 1.6-.6.6-.4 1.2-1 1.6-.7s.7 1.2.2 2z" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ cls?: string }>()
const cls = props.cls ?? ''
</script>

<style scoped></style>
