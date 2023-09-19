import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export async function fetchAllPhotos() {
    return axiosClient.get("photos").then((res) => res);
}
