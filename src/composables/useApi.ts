import { ref } from "vue";
import type { AxiosError, AxiosResponse } from "axios";
import { ApiClient } from "@/axios";

export const useApi = () => {
  const data = ref(null);
  const pending = ref<Boolean>(false);
  const error = ref<string | null>(null);

  const makeRequest = async (method: string, url: string) => {
    try {
      pending.value = true;
      const { data: response } = await ApiClient.request({ method, url });
      data.value = response;
    } catch (e: any) {
      console.log(e);
      error.value = e;
    } finally {
      pending.value = false;
    }
  };

  return { data, pending, error, makeRequest };
};
