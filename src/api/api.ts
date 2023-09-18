import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
});

// Declare apiFunctions for use with useApi
export type ApiFunction = (data: any[]) => Promise<AxiosResponse<any, any>>;

export const getPhotos: ApiFunction = (data: any[]) => {
  return api.get("photos");
};
