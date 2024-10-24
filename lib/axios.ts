// lib/axios.ts
import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default axiosApi;
