<template>
  <div class="todo-form__task-wrapper">
    {{ task.name }}
  </div>
</template>

<script setup lang="ts">
import type { ITask } from "@/types";

interface Props {
  task: ITask;
}

const props = defineProps<Props>();
</script>
