import axios from "axios";
const apiUrl = "http://localhost:8080";
const token = localStorage.getItem("token");

const axiosHelper = axios.create({
  baseURL: apiUrl,
  headers: {
    authorization: token,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

if (token) {
  axiosHelper.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      const statusCode = error?.response?.status;

      if (statusCode === 401) {
        localStorage.removeItem("token");
        window.location.replace("/");
      }
      return Promise.reject(error);
    }
  );
} else {
  localStorage.setItem("token", "null");
}

export default axiosHelper;
