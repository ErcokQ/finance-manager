<script setup lang="ts">
import { onMounted } from 'vue'
import { useDarkModeStore } from './stores/darkModeStore';

const darkModeStore = useDarkModeStore();

onMounted(() => {
  darkModeStore.initDarkMode();
})

</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
