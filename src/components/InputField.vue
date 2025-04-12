<script setup lang="ts">
interface Props {
  ariaLabel: string;
  id?: string;
  label?: string | boolean;
  max?: string;
  min?: string;
  modelValue: string | number;
  name: string;
  step?: number;
  type: 'text' | 'number';
}

interface Emits {
  (e: 'update:modelValue', value: string | number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const onValueChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <label
    v-if="props.label"
    :for="props.id"
    class="block text-sm font-medium text-gray-600"
  >
    {{ props.label }}
  </label>
  <input
    :type="props.type"
    :name="props.name"
    :value="props.modelValue"
    :id="props.id"
    autocomplete="given-name"
    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-800 sm:text-sm/6"
    :min="props.min"
    :step="props.type === 'number' ? props.step : undefined"
    v-bind="$attrs"
    :aria-label="props.ariaLabel"
    @input="onValueChange"
  />
</template>
