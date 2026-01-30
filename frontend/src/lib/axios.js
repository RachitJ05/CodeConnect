import axios from 'axios';

console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // withCredentials: true,    // browser will send cookies to the server automatically on every single request
});


export default axiosInstance;