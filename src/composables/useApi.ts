import type { Ref } from "vue";
import { ApiClient } from "@/axios";
import { helpers } from "@/helpers";

export const useApi = (
  pendingRef: Ref<boolean>,
  errorRef: Ref<string | null>
) => {
  const makeRequest = async (
    method: string,
    url: string,
    body: object | null,
    params: object | null
  ) => {
    errorRef.value = null;
    try {
      pendingRef.value = true;
      await helpers(300);
      const { data: response } = await ApiClient.request({
        method,
        url,
        data: body,
        params,
      });

      return response;
    } catch (error: any) {
      console.log(error);
      errorRef.value = error.message;
    } finally {
      pendingRef.value = false;
    }
  };

  return { makeRequest };
};
