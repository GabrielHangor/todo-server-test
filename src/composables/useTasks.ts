import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import type { ITask } from "@/types";
import { useApi } from "@/composables/useApi";
import { findTaskIndexById } from "@/helpers";

export const useTasks = (taskName: Ref<string | null>) => {
  const tasks = ref<ITask[]>([]);
  const pending = ref<boolean>(false);
  const error = ref<string | null>(null);

  const { makeRequest } = useApi(pending, error);

  const addTask = async () => {
    const response: ITask = await makeRequest(
      "post",
      "/tasks",
      {
        name: taskName.value,
      },
      null
    );

    taskName.value = null;

    if (response) tasks.value.push(response);
  };

  const toggleTaskStatus = async (id: string) => {
    const response: ITask = await makeRequest("patch", `/tasks/${id}`, null, {
      id,
    });

    if (response) {
      tasks.value[findTaskIndexById(tasks.value, id)]["is_finished"] = response["is_finished"];
    }
  };

  const deleteTask = async (id: string) => {
    await makeRequest("delete", `/tasks/${id}`, null, { id });

    if (!error.value) tasks.value.splice(findTaskIndexById(tasks.value, id), 1);
  };

  const getAllTasks = async () => {
    const response: ITask[] = await makeRequest("get", "/tasks", null, null);

    if (response) tasks.value = response;
  };

  onMounted(() => getAllTasks());

  return { tasks, error, pending, addTask, toggleTaskStatus, deleteTask };
};
