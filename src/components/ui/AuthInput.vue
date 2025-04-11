<template>
  <div class="relative mb-4 w-full">
    <span class="absolute inset-y-0 flex items-center pl-2">
      <EnvelopeIcon v-if="props.type === 'email'" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
    </span>
    <span v-if="props.type === 'password'" class="absolute inset-y-0 flex items-center pl-2">
      <LockClosedIcon class="h-5 w-5 text-gray-500 dark:text-gray-400" />
    </span>
    <span v-if="props.type === 'date'" class="absolute inset-y-0 flex items-center pl-2">
      <CalendarIcon class="h-5 w-5 text-gray-500 dark:text-gray-400"></CalendarIcon>
    </span>
    <input :type="props.type" :placeholder="props.placeholder"
      :class="'border border-gray-800 dark:border-gray-100 rounded-md p-2 w-full pl-9  text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 focus:outline-none ' + props.customstyle" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { EnvelopeIcon, LockClosedIcon, CalendarIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  customstyle: {
    type: String,
    default: ''
  }
});

</script>
