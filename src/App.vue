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
      <BaseTask v-for="task in tasks" :key="task.id" :task="task" />
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseTask from "@/components/BaseTask.vue";
import { useTasks } from "@/composables/useTasks";

const taskName = ref<string | null>(null);

const { tasks, pending, addTask } = useTasks(taskName);
</script>
