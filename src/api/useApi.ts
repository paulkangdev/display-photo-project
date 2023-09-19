import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export async function fetchAllPhotos() {
    const sleep = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms));
    await sleep(5000);
    return axiosClient.get("photos").then((res) => res);
}
