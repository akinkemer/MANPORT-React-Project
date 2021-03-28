import axios from "axios";

const manportHostAddress = "http://localhost:8080";
const apiVersion = "api/v1";
const pathBody = `${manportHostAddress}/${apiVersion}`;

const axiosInstance = axios.create({ baseURL: pathBody });

export const applications = "/applications";
export const createAppViewModel = "/create-app-view-model";
export default axiosInstance;
