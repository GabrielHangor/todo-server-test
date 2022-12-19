import { ref } from "vue";
import type { Ref } from "vue";
import type { ITask } from "@/types";
import { delay } from "@/delay";
import { ApiClient } from "@/axios";

export const useTasks = (taskName: Ref<string | null>) => {
  const tasks = ref<ITask[]>([]);
  const isLoading = ref<Boolean>;

  const addTask = async () => {
    await delay(300);
    const { data: addedTask } = await ApiClient.post<ITask>("/tasks", {
      name: taskName.value,
    });

    tasks.value.push(addedTask);

    taskName.value = null;
  };

  return { tasks, isLoading, addTask };
};
