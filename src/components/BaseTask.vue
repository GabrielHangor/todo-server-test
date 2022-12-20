<template>
  <div class="todo-form__task-wrapper" @click="toggleStatus">
    <div class="todo-form__task-status">
      <div class="tick-mark" v-if="task.is_finished"></div>
    </div>
    <div :class="{ finished: task.is_finished }">{{ task.name }}</div>
    <span class="delete-mark" @click.stop="deleteTask">X</span>
  </div>
</template>

<script setup lang="ts">
import type { ITask } from "@/types";

interface Props {
  task: ITask;
  pending: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "toggle-status", id: string): void;
  (e: "delete-task", id: string): void;
}>();

const toggleStatus = () => {
  if (props.pending) return;
  emit("toggle-status", props.task.id);
};

const deleteTask = () => {
  if (props.pending) return;
  emit("delete-task", props.task.id);
};
</script>

<style scoped lang="scss">
.finished {
  text-decoration: line-through;
}

.tick-mark {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 15px;

  &:before {
    position: absolute;
    left: -5px;
    top: 20%;
    height: 50%;
    width: 3px;
    background-color: #336699;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }

  &:after {
    position: absolute;
    left: -3px;
    bottom: 3px;
    height: 3px;
    width: 100%;
    background-color: #336699;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
}

.delete-mark {
  padding: 10px;
  background-color: #6da0f833;
}
</style>
