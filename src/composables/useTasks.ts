import { ref } from "vue";
import type { Ref } from "vue";
import type { ITask } from "@/types";
import { delay } from "@/delay";
import { ApiClient } from "@/axios";

export const useTasks = (taskName: Ref<string | null>) => {
  const tasks = ref<ITask[]>([]);
  const pending = ref<Boolean>(false);
  const error = ref(null);

  const addTask = async () => {
    try {
      pending.value = true;
      await delay(300);
      const { data: addedTask } = await ApiClient.post<ITask>("/tasks", {
        name: taskName.value,
      });

      tasks.value.push(addedTask);

      taskName.value = null;
    } catch (e) {
      console.log(e);
    } finally {
      pending.value = false;
    }
  };

  return { tasks, error, pending, addTask };
};
