import axios from "axios";

// Set up Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000", // Adjust the base URL as needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include JWT token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Include token in Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
