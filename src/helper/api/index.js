import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Cache-Control": "no-store",
  },
  baseURL: "http://localhost:4000/api/",
});
api.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error(error?.response?.data?.message  || error?.response?.data?.error || "Application was busy", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return Promise.reject(error);
  }
);

export default api;
