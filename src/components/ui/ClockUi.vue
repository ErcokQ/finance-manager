<template>
  <div
    class="clock relative grid grid-cols-3 gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl border-2 border-gray-300 dark:border-gray-600">
    <div
      class="clock-col flex flex-col items-center justify-center bg-gray-700 dark:bg-gray-200 border border-gray-500 dark:border-gray-300 rounded-lg p-2">
      <DigitClock :value="getHours" />
      <div class="clock-unit text-gray-100 dark:text-gray-800 text-xs font-bold mt-2">
        Horas
      </div>
    </div>
    <div
      class="clock-col flex flex-col items-center justify-center bg-gray-700 dark:bg-gray-200 border border-gray-500 dark:border-gray-300 rounded-lg p-2">
      <DigitClock :value="getMinutes" />
      <div class="clock-unit text-gray-100 dark:text-gray-800 text-xs font-bold mt-2">
        Minutos
      </div>
    </div>
    <div
      class="clock-col flex flex-col items-center justify-center bg-gray-700 dark:bg-gray-200 border border-gray-500 dark:border-gray-300 rounded-lg p-2">
      <DigitClock :value="getSeconds" />
      <div class="clock-unit text-gray-100 dark:text-gray-800 text-xs font-bold mt-2">
        Segundos
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import DigitClock from './DigitClock.vue';

const time = ref(new Date());
setInterval(() => {
  time.value = new Date();
}, 1000)

const getSeconds = computed(() => {
  return time.value.getSeconds().toString().padStart(2, '0');
})

const getMinutes = computed(() => {
  return time.value.getMinutes().toString().padStart(2, '0');
})

const getHours = computed(() => {
  return time.value.getHours().toString().padStart(2, '0');
})

</script>
