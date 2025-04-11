<template>
  <div class="flex justify-center">
    <button :id="props.id" type="button" :class="buttonClasses">
      <img :src="iconSrc" :alt="props.social + ' boton'" class="h-4 w-4" />
      {{ props.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { dSociales, styleDSociales, styleButtonDSociales } from '@/types/DSociales';
import type { IButton } from '@/types/IButton';
import { defineProps, withDefaults, computed } from 'vue';

interface PropsButtonSocials extends IButton {
  social: string;
  stylebuttonsocial?: 'complete' | 'outline' | 'icon';
}

const props = withDefaults(defineProps<PropsButtonSocials>(), {
  id: 'btn-social',
  stylebuttonsocial: 'complete',
  type: 'button',
});

const styleButton = computed(() => {
  return styleButtonDSociales[props.stylebuttonsocial] || styleButtonDSociales.complete;
});

const style = computed(() => {
  return styleDSociales[props.social] || undefined;
});

const iconSrc = computed(() => {
  return dSociales[props.social] || undefined;
});

const baseClasses = 'flex items-center justify-center border gap-2 font-bold py-2 px-4 rounded-xl transition duration-300 cursor-pointer';

const buttonClasses = computed(() => {
  if (props.stylebuttonsocial === 'outline') {
    return [baseClasses, styleButton.value];
  } else {
    return [baseClasses, style.value, styleButton.value];
  }
});

</script>
