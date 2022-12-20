import type { ITask } from "@/types";

export const delay = async (delay: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), delay);
  });
};

export const findTaskIndexById = (arr: ITask[] = [], id: string) => {
  return arr.findIndex((task: ITask) => task.id === id);
};
