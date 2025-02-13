import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "http://localhost:5050/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach auth token if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token;
  return config;
});

export default apiClient;
