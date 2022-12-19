import axios from "axios";
import type { AxiosInstance } from "axios";

export const ApiClient: AxiosInstance = axios.create({ baseURL: "/api" });
