<template>
  <input
    required
    class="todo-form__input"
    placeholder="dummy text"
    type="text"
    :value="modelValue"
    @input="updateValue($event.target.value)"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: String | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const updateValue = (value: string) => emit("update:modelValue", value);
</script>
