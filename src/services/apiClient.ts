import axios from "axios";

const endpoint1 = import.meta.env.EC2_BACKEND_URL || "https://storifybe.hopto.org/api";
const endpoint2 = import.meta.env.RENDER_BACKEND_URL || "https://storify-be.onrender.com/api";

const apiClient = axios.create({
  baseURL: endpoint1, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach auth token 
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token;
  return config;
});

// Response Interceptor to handle the 502 error and change the baseURL
apiClient.interceptors.response.use(
  response => response,  // If response is successful, return it as is
  error => {
    
    if ((error.response && error.response.status === 502)) {
      
      // Prevent retrying the same request more than once
      if (error.config._retry) {
        return Promise.reject(error);  
      }


      error.config._retry = true;

      // Switch to the second endpoint
      if (apiClient.defaults.baseURL === endpoint1) {
        apiClient.defaults.baseURL = endpoint2;

        // Retry the failed request with the new baseURL
        return apiClient(error.config);
      }
    }
    
    // If it's not a 502 or network error or if we've already tried the second URL, reject the error
    return Promise.reject(error);
  }
);

export default apiClient;





// import axios from "axios";

// const apiClient = axios.create({
//   // baseURL: import.meta.env.BACKEND_URL || "https://storify-be.onrender.com/api",
//   // baseURL: import.meta.env.BACKEND_URL || "https://storifybe.hopto.org/api",
//   baseURL: import.meta.env.BACKEND_URL || "http://localhost:5050/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Attach auth token if available
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = token;
//   return config;
// });

// export default apiClient;
