<template>
  <div class="clock-digit text-xl font-bold text-center text-gray-100 dark:text-gray-800">
    <transition mode="out-in" name="change">
      <div class="relative inline-block align-top" :key="props.value.charAt(0)">{{ props.value.charAt(0) }}</div>
    </transition>
    <transition mode="out-in" name="change">
      <div class="relative inline-block align-top;" :key="props.value.charAt(1)">{{ props.value.charAt(1) }}</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  value: {
    type: String,
    required: true
  }
})

</script>

<style>
.change-leave-active,
.change-enter-active {
  transition: all 200ms ease;
}

.change-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.change-leave-to {
  transform: translateY(12px);
  opacity: 0;
}
</style>
