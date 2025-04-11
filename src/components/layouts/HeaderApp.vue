<template>
  <header
    class="flex justify-between items-center p-2 text-gray-800 bg-white shadow-md dark:bg-gray-800 dark:text-gray-100 relative z-10 w-full">
    <div>
      <picture>
        <img :src="currentLogo" alt="Logo m3r" class="w-22 h-auto" />
      </picture>
    </div>
    <SwitchDarkMode />
  </header>
</template>

<script setup lang="ts">
import SwitchDarkMode from '../ui/SwitchDarkMode.vue';
import { computed } from 'vue';
import { useDarkModeStore } from '@/stores/darkModeStore';
import Logo from '@/assets/img/logom3r.png'
import LogoBlanco from '@/assets/img/logom3rblanco.png';

const darkModeStore = useDarkModeStore();

const isDark = computed(() => darkModeStore.isDark);

const currentLogo = computed(() => {
  return isDark.value ? LogoBlanco : Logo;
})

</script>


<style scoped></style>
