<template>
  <RouterLink :to="to" :class="computedClass">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to: RouteLocationRaw;
  type?: 'primary' | 'secondary' | 'danger';
}>();

const computedClass = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'rounded-md bg-orange-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
    case 'secondary':
      return 'text-gray-500 hover:text-gray-700';
    case 'danger':
      return 'text-red-500 hover:text-red-700';
    default:
      return 'text-black hover:text-gray-700';
  }
});
</script>

<style scoped></style>
