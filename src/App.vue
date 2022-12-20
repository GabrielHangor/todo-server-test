<template>
  <main>
    <form @submit.prevent="addTask" class="todo-form">
      <h1 class="todo-form__heading">To Do App</h1>
      <div class="todo-form__input-wrapper">
        <BaseInput v-model="taskName" />
        <button class="todo-form__add-todo-btn" :disabled="pending">
          <img src="/plus-icon.svg" alt="plus-icon" />
        </button>
      </div>
      <hr class="dotted" />
      <div class="todo-form__tasks-wrapper">
        <BaseTask
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          :pending="pending"
          @toggle-status="toggleTaskStatus"
          @delete-task="deleteTask"
        />
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseTask from "@/components/BaseTask.vue";
import { useTasks } from "@/composables/useTasks";

const taskName = ref<string | null>(null);

const { tasks, error, pending, addTask, toggleTaskStatus, deleteTask } =
  useTasks(taskName);
</script>
