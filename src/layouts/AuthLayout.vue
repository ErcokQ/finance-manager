<template>
  <HeaderApp />
  <router-view />
  <footer
    class="flex justify-center items-center p-2 text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-100 gap-4 relative z-10 w-full shadow-[0_-4px_6px_-2px_rgba(0,0,0,0.1)]">
    <ClockUi />
    <p class="text-lg font-semibold">© {{ year }} m3rsync. All rights reserved.</p>
  </footer>
</template>


<script setup lang="ts">
import HeaderApp from '@/components/layouts/HeaderApp.vue';
import ClockUi from '@/components/ui/ClockUi.vue';

const year = new Date().getFullYear();
</script>

<style scoped></style>
