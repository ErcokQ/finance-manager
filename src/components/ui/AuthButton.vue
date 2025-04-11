<template>
  <div class="flex justify-center">
    <button :type="props.type"
      :class="'flex w-full items-center justify-center gap-2 border text-gray-100 dark:bg-green-300/20 dark:hover:bg-green-300/30 bg-gray-800/60 hover:bg-gray-800/70 font-bold py-2 px-4 rounded-md transition duration-300 ' + props.customstyle">
      {{ props.text }}
      <ArrowRightCircleIcon class="h-6 w-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline';
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset' | undefined,
    default: 'button',
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  customstyle: {
    type: String,
    default: ''
  }
});

</script>
